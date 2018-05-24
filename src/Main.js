import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import firebase from './firebase.js'

class Main extends React.Component{

    constructor(){
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: []
            
        }

        //window.addEventListener("beforrunload", this.saveToLocalStorage)
    }

    /*saveToLocalStorage = () => {
        window.localStorage.setItem("state", JSON.stringify(this.state))
    }*/

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    blankNote = (note) => {
        return {
            id: null,
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
        this.setState({ notes })
        this.setCurrentNote(note)
    }

    handleDelete = (note) => {
      const notes = [...this.state.notes]
      const i = notes.findIndex((currentNote) => currentNote.id === note.id)
      notes.splice(i, 1)  
      this.setState({ notes })
      this.setCurrentNote(this.blankNote())

      firebase.database().ref('notes/' + note.id).remove({
        body: note.body,
        title: note.title,
      })

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