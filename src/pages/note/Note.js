import React from "react";
import "./note.css";
import { Link,useNavigate } from "react-router-dom";
import Button from "../../component/button/Button";
import { useNotes } from "../../context/notesContext";
export default function Note() {
  const { notes } = useNotes();
  console.log(notes);
  const navigate = useNavigate();
  const navigateToWriteNote = () => {
    navigate("/notes/new");
  };

  return (
    <div className="container">
      <div className="Wrapper">
        <div className="head">
          <div className="title">Note Wall</div>
          <Button handleClick={navigateToWriteNote} title={"write note"} />
        </div>
        <div className="LeaveNote">
          <h4>Leave a note</h4>
          <Button title={"Sort by Oldest"} />
          <Button title={"Sort by Newest"} />
        </div>
      </div>
      <div className="line" />
      <div className="Wrapper">
        {notes?.map((item, index) => (
          <div key={index} className="note">
            <div className="Notetitle">{item.title}</div>
            <div className="bodyContainer">
              <div className="bodyTitle">{item.body}</div>
              <Link to={`/notes/${item.id}`}>edit</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="randomButton">
        <Button title={"Random Note"} />
      </div>
    </div>
  );
}
