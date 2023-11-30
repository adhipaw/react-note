import NoteCard from "./__components/NoteCard";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { NotesContext } from "../../App";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { getNotes } from "../../../network";

export const dummyNotes = [
  {
    id: 1,
    title: "My first note",
    body: "This is my first note!",
    createdAt: "2023-11-11T17:50:10.466Z",
  },
  {
    id: 2,
    title: "My second note",
    body: "This is my second note!",
    createdAt: "2023-11-11T17:50:10.466Z",
  },
  {
    id: 3,
    title: "My third note",
    body: "This is my third note!",
    createdAt: "2023-11-11T17:50:10.466Z",
  },
  {
    id: 4,
    title: "My fourth note",
    body: "This is my fourth note!",
    createdAt: "2023-11-11T17:50:10.466Z",
  },
  {
    id: 5,
    title: "My fifth note",
    body: "This is my fifth note!",
    createdAt: "2023-11-11T17:50:10.466Z",
  },
  {
    id: 6,
    title: "My sixth note",
    body: "This is my sixth note! and very long text to test the overflow if it works or not so we can see if it works or not ",
    createdAt: "2023-11-11T17:50:10.466Z",
  },
  {
    id: 7,
    title: "My seventh note",
    body: "This is my seventh note!",
    createdAt: "2023-11-11T17:50:10.466Z",
  },
];

const NoteGrid = () => {
  const navigate = useNavigate();
  const { notes, setNotes } = useContext(NotesContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) navigate("/login", { replace: true });

    const fetchNotes = async () => {
      try {
        const res = await getNotes();
        setNotes(res.data);
      } catch (error) {
        setNotes(dummyNotes);
      }
    };
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, user]);

  const updateNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const fileterNotes = (e) => {
    if (e.target.value === "") return setNotes(notes);
    setNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="w-full flex justify-center items-center p-6">
        <div className="w-9/12 backdrop-blur-sm bg-white/40 p-6 rounded-lg shadow-sm border-violet-200 border">
          <div className="w-full flex justify-between items-center p-3">
            <h2 className="text-xl font-semibold">My Notes</h2>
            <button
              id="openModalBtn"
              className="flex items-center bg-gradient-to-r from-violet-300 to-indigo-300  border border-fuchsia-00 hover:border-violet-100 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <Link to="/create">Create Note</Link>
            </button>
          </div>
          <div className="w-full flex justify-center p-1 mb-4">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300"
                placeholder="Search..."
                onChange={fileterNotes}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 w-full h-full p-2">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={{ ...note, createdAt: new Date(note.createdAt) }}
                updateNote={updateNote}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteGrid;
