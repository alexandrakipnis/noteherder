import React from "react";

import quill from "./quill.svg";
import newIcon from "./new.png";
import newHover from "./new-hover.png";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseHover: true 
    };
  }

  toggleButton(value) {
    this.setState({
      mouseHover: value
    });
  }

  render() {
    let button;
    if (this.state.mouseHover) {
      button = (
        <img
          src={newIcon}
          alt="New note"
          style={styles.aImage}
          onMouseEnter={() => this.toggleButton(false)}
        />
      );
    } else {
      button = (
        <img
          src={newHover}
          alt="New note"
          style={styles.aImage}
          onMouseLeave={() => this.toggleButton(true)}
        />
      );
    }

    return (
      <div className="Sidebar" style={styles.sidebar}>
        <div className="logo" style={styles.logo}>
          <img src={quill} alt="Noteherder" style={styles.logoImg} />
        </div>

        <a>{button}</a>

        <div className="SignOut" style={styles.SignOut}>
          <button
            style={styles.SignOutButton}
          >
            <i className="fa fa-sign-out" style={styles.i} />
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
    sidebar: {
      width: "6rem",
      backgroundColor: "#f3f3f3",
      padding: "0.5rem 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    logo: {
      fontFamily: "Fauna One",
      color: "#666",
      fontSize: "3rem"
    },
    logoImg: {
      width: "3rem",
      paddingLeft: "0.5rem"
    },
    newNote: {
      marginTop: "2rem",
      position: "relative",
      width: "4rem"
    },
    button: {
      backgroundColor: "transparent",
      border: "0",
      color: "#008bf8",
      cursor: "pointer"
    },
    aImage: {
      position: "absolute",
      left: "1rem",
      width: "4rem",
      transition: "opacity 0.25s ease-in-out"
    },
    SignOut: {
      position: "absolute",
      bottom: "1rem"
    },
    SignOutButton: {
      outline: "none"
    },
    i: {
      fontSize: "2rem"
    }
  };

export default Sidebar;