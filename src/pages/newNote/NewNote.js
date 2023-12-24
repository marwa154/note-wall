import React from "react";
import "./newNote.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../component/button/Button";
import { useNotes } from "../../context/notesContext";
export default function NewNote() {
  const navigate = useNavigate();
  const { addNote } = useNotes();
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [titleError, setTitleError] = React.useState(false);
  const [bodyError, setBodyError] = React.useState(false);
  const generateRandomId = () => {
    const randomId = Math.floor(Math.random() * 1000000) + 1;
    return randomId;
  };
  const randomId = generateRandomId();
  const addNewNote = () => {
    const isValid = validateInputs();

    if (isValid) {
      addNote(randomId, title, body);
      navigate("/");
    }
  };
  const validateInputs = () => {
    let isValid = true;
    if (title.length < 2) {
      setTitleError(true);
      isValid = false;
    } else {
      setTitleError(false);
    }

    // Body validation
    if (body.length > 255) {
      setBodyError(true);
      isValid = false;
    } else {
      setBodyError(false);
    }

    return isValid;
  };

  return (
    <div className="container">
      <div className="Wrapper">
        <div className="head">
          <div className="title">Write Note</div>
          <Link to="/">go back home</Link>
        </div>
        <h4> Write a new note</h4>
      </div>
      <div className="form">
        <div className="formContainer">
          <div className="titleInputContainer">
            <label className="label" htmlFor="noteTitle">
              Note Title
              {titleError ? (
                <div className="errorMessage">
                  {" "}
                  Title must be unique and contain 2 characters
                </div>
              ) : null}
            </label>
            <input
              className="input"
              type="text"
              id="noteTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="titleInputContainer">
            <label className="label" htmlFor="noteBody">
              Note Body
              {bodyError ? (
                <div className="errorMessage">
                  {" "}
                  Body must contain max of 255 characters
                </div>
              ) : null}
              {/* */}
            </label>
            <textarea
              className="textArea"
              id="noteBody"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="buttonContainer">
            <Button title={"Write this note "} handleClick={()=> addNewNote(title,body)} />
          </div>
        </div>
      </div>
    </div>
  );
}
