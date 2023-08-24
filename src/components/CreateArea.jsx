import { Fab, Snackbar } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [showPopup, setShowPopup] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    if (note.title.trim() === "" && note.content.trim() === "") {
      setShowPopup(true);
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
  }

  function handleClosePopup() {
    setShowPopup(false);
  }

  return (
    <div className="flex flex-col h-fit items-center justify-center ">
      <form className="create-note rounded-lg w-4/5 max-w-md p-4 mb-4">
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          value={note.title}
          onChange={handleChange}
          className="border-2 bg-purple-100 border-yellow-900 rounded-t-lg text-center w-full py-2 px-4"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="TAKE A NOTE>>>>>"
          rows="3"
          className="border-2 bg-yellow-100 border-yellow-900 rounded-b-lg text-center w-full py-2 px-4 mt-2"
        />
      </form>

      <div>
        <Fab
          onClick={submitNote}
          className="bg-gradient-to-r from-lime-400 to-purple-500 hover:from-pink-500 hover:to-yellow-500"
        >
          <AddIcon />
        </Fab>
      </div>

      <Snackbar
        open={showPopup}
        autoHideDuration={3000}
        onClose={handleClosePopup}
        message="Please input data for the to-do-list."
      />
    </div>
  );
}

export default CreateArea;
