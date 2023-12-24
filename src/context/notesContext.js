import React, { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const useNotes = () => {
  return useContext(NotesContext);
};

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Hello", body: "This is a note" },
    {
      id: 2,
      title: "Why did the chicken cross the road?",
      body: "To get to the other side",
    },
    { id: 3, title: "Lorem", body: "Ipsum!" },
  ]);


  const addNote = (newId, newTitle, newBody) => {
    const newNote = { id: newId, title: newTitle, body: newBody };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }
  const deleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  const updateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? { ...note, ...updatedNote } : note
      )
    );
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, updateNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};
