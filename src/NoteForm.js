import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote(),
    }
  }

  componentDidUpdate = () => {
    const newId = this.props.match.params.id || ''
    const oldId = this.state.note.id || ''

    if(newId !== oldId.toString()){
      const i = this.props.notes.findIndex(currentNote => currentNote.id.toString() === newId)
      const note = this.props.notes[i] || this.blankNote()
      
      if(note.id !== this.state.note.id){
        this.setState( { note })
      }
    }

  }

  blankNote = () => {
    let date = new Date()
    date = date.toUTCString()
    return {
      id: null,
      title: '',
      body: '',
      updateAt: null,
      timeStamp: date,
    }
  }

  handleChanges = (ev) => {
    const note = { ...this.state.note }
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => (this.props.saveNote(note))
    )
  }

  render() {
    const { deleteNote } = this.props
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button
            type="button"
            onClick={() => deleteNote(this.state.note)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value={this.state.note.title}
              onChange={this.handleChanges}
            />
          </p>

          <textarea
            name="body"
            value={this.state.note.body}
            onChange={this.handleChanges}
          ></textarea>
        </form>
      </div>
    )
  }
}

export default NoteForm