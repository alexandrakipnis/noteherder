import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
  const notes = [
    {
        id: 1,
        title: 'Why I <3 JS',
        body: 'Because I love code, and JS is code',

    },

    {
        id: 2,
        title: 'Thoughts on breakfast',
        body: 'I love it',

    },

    {
        id: 3,
        title: 'Watching uncomfy Netflix scenes with your parents',
        body: 'Do not do it!!',

    },


  ]

  return (
    <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <a className="active">
                {notes.map(note => <Note key={note.id} note={note}/>)}
            </a>
          </ul>
    </div>
  )
}

export default NoteList