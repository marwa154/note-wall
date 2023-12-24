import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Note from "./pages/note/Note";
import NewNote from "./pages/newNote/NewNote";
import UpdateNote from "./pages/updateNote/UpdateNote";
import { NotesProvider } from "./context/notesContext";
function App() {
  return (
    <Router>
      <NotesProvider>
        <Routes>
          <Route path="/" element={<Note />} />
          <Route path="/notes/:id" element={<UpdateNote />} />
          <Route path="/notes/new" element={<NewNote />} />
        </Routes>
      </NotesProvider>
    </Router>
  );
}

export default App;
