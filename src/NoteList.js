import React from 'react'

import './NoteList.css'

const NoteList = () => {
  return (
    <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <a className="active">
              <li>
                <div className="note">
                  <div className="note-title">
                    First Note
                  </div>
                  <div className="note-body">
                    <p>
                        Blah Blah Blah Blah
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>
  )
}

export default NoteList