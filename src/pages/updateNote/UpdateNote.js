import React from "react";
import "./updateNote.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "../../component/button/Button";
import { useNotes } from "../../context/notesContext";
export default function UpdateNote() {
  const { notes, deleteNote, updateNote } = useNotes();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const note = notes.find((note) => note.id === parseInt(id));
  const [title, setTitle] = React.useState(note ? note.title : "");
  const [body, setBody] = React.useState(note ? note.body : "");
  const [titleError, setTitleError] = React.useState(false);
  const [bodyError, setBodyError] = React.useState(false);
  const handleDelete = (id) => {
    deleteNote(id);
    navigate("/");
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
  const handleUpdate = () => {
    const isValid = validateInputs();
    if (isValid) {
      updateNote({
        id: note.id,
        title: title,
        body: body,
      });
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="Wrapper">
        <div className="head">
          <div className="title">Note</div>
          <Link to="/">go back home</Link>
        </div>
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
            </label>
            <textarea
              className="textArea"
              id="noteBody"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        </div>
        <div className="buttonContainer">
          <Button title={"Edit Note"} handleClick={handleUpdate} />
          <Button
            title={"Delete Note"}
            handleClick={() => handleDelete(note?.id)}
          />
        </div>
      </div>
    </div>
  );
}
