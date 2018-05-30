import React from 'react'

import './NoteForm.css'

class NoteForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      note: this.blankNote,
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: ' ',
      body: ' ',
    }
  }

  handleChanges = (ev) => {
      const note = {...this.state.note}
      note[ev.target.name] = ev.target.value
      this.setState(
        {note},
        () => this.props.saveNote(note)
      )
  }

  render(){
    const {currentNote, handleDelete} = this.props
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button 
            type="button"
            onClick={() => handleDelete(currentNote)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note..."
              value={this.state.note.title}
              onChange={this.handleChanges}
            />
          </p>

          <textarea 
            name="body"
            placeholder="Start typing your note..."
            value={this.state.note.body}
            onChange={this.handleChanges}
          >
            
          </textarea>
        </form>
      </div>
    )
}
}

export default NoteForm