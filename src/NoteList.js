import React from 'react'
import Note from './Note'

import './NoteList.css'

const NoteList = ({notes, setCurrentNote}) =>{
    
    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                    {notes.map(currentItem => 
                    <Note key={currentItem.id} 
                    note={currentItem} 
                    />)}
            </ul>
        </div>
    )
}



export default NoteList