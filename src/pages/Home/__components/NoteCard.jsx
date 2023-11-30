// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import { useRef } from "react";
import { useContext } from "react";
import { NotesContext } from "../../../App";
import { deleteNote } from "../../../../network";

const CardNote = ({ note, updateNote }) => {
  const notesContext = useContext(NotesContext);

  const ref = useRef(null);

  const deleteNoteHandler = async () => {
    try {
      await deleteNote(note.id);
      notesContext.setNotes(notesContext.notes.filter((n) => n.id !== note.id));
    } catch (error) {
      alert(error.code);
    }
  };

  return (
    <div className="w-full h-64 flex flex-col justify-between items-start rounded-lg border border-violet-200   py-5 px-4">
      <div>
        <h4
          className="text-gray-800 font-bold mb-3"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => updateNote({ ...note, title: e.target.textContent })}
        >
          {note.title}
        </h4>
        <p
          contentEditable
          suppressContentEditableWarning
          ref={ref}
          className="text-gray-800 text-sm"
          onInput={(e) => updateNote({ ...note, body: e.target.textContent })}
        >
          {note.body}
        </p>
      </div>
      <div className="w-full flex flex-col items-start">
        <div className="flex items-center justify-between text-gray-800 w-full">
          <p className="text-sm"> {note.createdAt.toLocaleString()}</p>
          <div className="flex gap-2">
            <button
              className="bg-gradient-to-r from-violet-300 to-indigo-300  border border-fuchsia-00 hover:border-violet-100 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
              aria-label="edit note"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pencil "
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => ref.current?.focus()}
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
              </svg>
            </button>
            <button
              className=" w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
              aria-label="edit note"
              role="button"
              onClick={deleteNoteHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />{" "}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardNote.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  updateNote: PropTypes.func.isRequired,
};

export default CardNote;
