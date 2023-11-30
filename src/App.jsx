import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import CreateNotePage from "./pages/Create/index.jsx";
import { dummyNotes } from "./pages/Home/index.jsx";
import { createContext } from "react";
import { useState } from "react";
import RegisterPage from "./pages/Register.jsx";
import LoginPage from "./pages/Login.jsx";

export const NotesContext = createContext();
export const UserContext = createContext({ user: null, setUser: () => {} });

function App() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState(dummyNotes);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NotesContext.Provider value={{ notes, setNotes }}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateNotePage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </NotesContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
