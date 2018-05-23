import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component{

    constructor(){
        super()
        this.state = {
            notes: [
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
            
        }
    }
    render(){
        return (
            <div 
                className="Main" 
                style={style}
            >
                <Sidebar />
                <NoteList notes={this.state.notes}/>
                <NoteForm />
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