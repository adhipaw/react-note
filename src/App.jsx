import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import CreateNotePage from "./pages/Create/index.jsx";
import { dummyNotes } from "./pages/Home/index.jsx";
import { createContext } from "react";
import { useState } from "react";

export const NotesContext = createContext();

function App() {
  const [notes, setNotes] = useState(dummyNotes);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <Routes>
        <Route path="/" element={<Home defaultNotes={notes} />} />
        <Route path="/create" element={<CreateNotePage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </NotesContext.Provider>
  );
}

export default App;
