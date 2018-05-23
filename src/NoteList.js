import React from 'react'

class NoteList extends React.Component {

  render() {
    return (
      <div className="NoteList" style={styles.NoteList}>
        <h3 style={styles.h3}>Notes</h3>
        <ul id="notes" style={styles.notes}>
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
    }
  };
  
  export default NoteList;