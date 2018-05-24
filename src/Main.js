import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import firebase from './firebase'

class Main extends React.Component{

    constructor(){
        super()

        this.state = {
            currentNote: this.blankNote(),
            notes: []
            
        }

    }

    componentWillMount() {
        firebase.syncState('notes', {
            context: this, 
            state: 'notes',
            asArray: true,
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
        if(!note.id){
            //new note
            note.id = Date.now()
            notes.push(note)
        }else{
            //existing note
            const i = notes.findIndex((currentNote) => currentNote.id === note.id)
            notes[i] = note
        }

        this.setState({ notes })
        this.setCurrentNote(note)
    }

    handleDelete = (note) => {
      const notes = [...this.state.notes]
      const i = notes.findIndex((currentNote) => currentNote.id === note.id)
      if(i > -1){
        notes.splice(i, 1) 
      } 
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
                    signOut={this.props.signOut}
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