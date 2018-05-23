import React from 'react'

class NoteList extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            mouseHover: true,
            noteTitle: ['Title One', 'Title Two'],
            noteBody: ['These are words for the first note', 'These are words for the second note']
        };
  }

  toggleButton(value) {
    this.setState({
      mouseHover: value
    });
  }

  render() {
    return (
      <div 
        className="NoteList" 
        style={styles.NoteList}
      >
        <h3 style={styles.h3}>Notes</h3>
        <ul 
            id="notes" 
            style={styles.notes}
        >
            <a className='active'>
                {Object.keys(this.state.noteTitle).map(((value) => {
                    return (
                        <li style={styles.listOfNotes}>
                            <div 
                                className='note'
                                onMouseEnter={() => this.toggleButton(false)}
                                onMouseLeave={() => this.toggleButton(true)}
                            >
                                <div 
                                    className='note-title' 
                                    style={styles.noteTitle}
                                >
                                    {this.state.noteTitle[value]}
                                </div>
                                <div 
                                    className='note-body' 
                                    style={styles.noteBody}
                                >
                                    {this.state.noteBody[value]}
                                </div>                                
                            </div>
                        </li>
                    )
                }))}
            </a>
        </ul>
      </div>
    );
  }
}

const styles = {
    NoteList: {
      borderLeft: "1px solid #eee",
      borderRight: "1px solid #eee",
      width: "30rem"
    },
    h3: {
      color: "#999",
      textTransform: "uppercase",
      fontSize: "2rem",
      fontFamily: "Oxygen",
      fontWeight: "300",
      letterSpacing: "3px",
      margin: "20px 2rem"
    },
    notes: {
      borderTop: "1px solid #eee",
      overflowY: "scroll",
      height: "calc(100vh - 72px)",
      listStyle: "none",
      marginTop: "1em",
      padding: "0",
      width: "100%",
      color: "#999"
    },

    listOfNotes: {
        borderTop: '1px solid #eee',
        margin: '0 2rem',
        padding: '1rem 4px',
    },

    noteTitle: {
        color: '#4a4a4a',
        fontFamily: '"Fauna One"',
        fontSize: '120%',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        oTextOverflow: 'ellipsis',
        textOverflow: 'ellipsis',
    },

    noteBody: {
        height: '54px',
        overflow: 'hidden',
        marginTop: '.5rem',
    },

    hover: {
        backgroundColor: '#008bf8',
    },
  };
  
  export default NoteList;