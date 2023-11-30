import { useEffect, useState } from "react";
import { useContext } from "react";
import { NotesContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { addNote } from "../../../network";

const CreateNotePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  const notesContext = useContext(NotesContext);

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) navigate("/login", { replace: true });
  }, [navigate, user]);

  useEffect(() => {
    setDescriptionLength(description.length);
  }, [description]);

  useEffect(() => {
    if (
      title.length > 0 &&
      description.length > 0 &&
      descriptionLength <= 300
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [title, description, descriptionLength]);

  const createNote = async (e) => {
    e.preventDefault();

    try {
      const newNote = {
        id: notesContext.notes.length + 1,
        title,
        body: description,
        createdAt: new Date(),
      };
      await addNote({ title, body: description });
      notesContext.setNotes([...notesContext.notes, newNote]);
      navigate("/home");
    } catch (error) {
      alert(error.code);
    }
  };

  return (
    <form onSubmit={createNote}>
      <div className="bg-white shadow p-4 py-8">
        <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">
          New Note
        </div>
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
          />
          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            spellCheck="false"
            onChange={(e) =>
              descriptionLength < 300 ? setDescription(e.target.value) : null
            }
            value={description}
            placeholder="Describe everything about this note here"
          ></textarea>

          <div className="icons flex text-gray-500 m-2">
            <div className="count ml-auto text-gray-400 text-xs font-semibold">
              {descriptionLength}/300
            </div>
          </div>

          <div className="buttons flex justify-end">
            <button
              disabled={!isFormValid}
              type="submit"
              className={
                "btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2" +
                (isFormValid
                  ? " bg-indigo-500"
                  : " bg-gray-800 opacity-50 cursor-not-allowed")
              }
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateNotePage;
