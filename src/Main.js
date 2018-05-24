import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import firebase from './firebase.js'

class Main extends React.Component{

    constructor(){
        super()

        //const storage = JSON.parse(localStorage.getItem('notes'))

        this.state = {
            currentNote: this.blankNote(),
            notes: []//storage
            
        }

        this.getNotesInData()

    }

    getNotesInData() {
        const notesRef = firebase.database().ref('notes');
        notesRef.on('value', (snapshot) => {
            const notes = [...this.state.notes]

                snapshot.forEach(function (childSnapshot) {
                    let item = childSnapshot.val()

                    let itemToPush = {
                        id: childSnapshot.key,
                        title: item.title,
                        body: item.body,
                    }

                    notes.push(itemToPush)    
                })

                this.setState({ notes })
        })
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    blankNote = (note) => {
        return {
            id: '',
            title: '',
            body: '',
        }
    }

    resetCurrentNote = (note) => {
        this.setCurrentNote(this.blankNote())
    }

    saveNote = (note) => {
        const notes = [...this.state.notes]
        const noteKey = firebase.database().ref().child('notes').push().key
        if(!note.id){
            //new note
            note.id = noteKey
            notes.push(note)
        }else{
            //existing note
            const i = notes.findIndex((currentNote) => currentNote.id === note.id)
            notes[i] = note
            firebase.database().ref('notes/' + note.id).set({
                body: note.body,
                title: note.title,
            })
        }

        /*localStorage.setItem('notes', JSON.stringify(notes))
        const storage = JSON.parse(localStorage.getItem('notes'))*/
        //this.setState({ notes: storage })
        this.setState({ notes })
        this.setCurrentNote(note)
    }

    handleDelete = (note) => {
      const notes = [...this.state.notes]
      const i = notes.findIndex((currentNote) => currentNote.id === note.id)
      notes.splice(i, 1)  
      
      firebase.database().ref('notes/' + note.id).remove();
      //localStorage.setItem('notes', JSON.stringify(notes))
      this.setState({ notes })
      this.setCurrentNote(this.blankNote())

    }



    render(){
        return (
            <div 
                className="Main" 
                style={style}
            >
                <Sidebar 
                    resetCurrentNote={this.resetCurrentNote}
                />
                <NoteList 
                    notes={this.state.notes}
                    setCurrentNote={this.setCurrentNote}
                />
                <NoteForm 
                    currentNote={this.state.currentNote}
                    saveNote={this.saveNote}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
    
}

export default Main