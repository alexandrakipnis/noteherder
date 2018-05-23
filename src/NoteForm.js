import React from "react";

const NoteForm = (props) => {
  return (
    <div 
        className="NoteForm" 
        style={styles.NoteForm}
    >
      <div 
        className="form-actions" 
        style={styles.formActions}
    >
        <button 
            type="button" 
            style={styles.button}
        >
          <i 
            className="fas fa-trash-alt" 
            style={styles.i} 
        />
        </button>
      </div>
      <form style={styles.form}>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
            value={props.name ? props.name : ""}
            style={styles.input}
          />
        </p>
        <textarea 
            name="body" 
            style={styles.textarea} 
            value={props.body ? props.body : ""}
        />
      </form>
    </div>
  );
};

const styles = {
    NoteForm: {
      flexGrow: "1",
      padding: "0 3rem"
    },
    formActions: {
      paddingTop: "1rem",
      marginLeft: "-2rem",
      display: "flex",
      alignContent: "center"
    },
    button: {
      border: "none",
      background: "none",
      padding: "0"
    },
    buttonSubmit: {
      backgroundColor: "#008bf8",
      borderRadius: "4px",
      color: "#fff",
      fontSize: "1.4rem",
      padding: "1rem"
    },
    i: {
      color: "#999",
      fontSize: "2rem",
      margin: "0"
    },
    form: {
      margin: "0 auto",
      maxWidth: "80rem"
    },
    input: {
      border: "none",
      fontSize: "200%",
      fontFamily: "Fauna One",
      color: "#008bf8",
      fontWeight: "400",
      width: "100%",
      outline: "none"
    },
    textarea: {
      borderColor: "#eee",
      width: "100%",
      height: "calc(100vh - 140px)",
      fontSize: "1.3em"
    }
  };

export default NoteForm