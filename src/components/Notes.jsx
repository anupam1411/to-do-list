import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Notes(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="notes-container mx-4 my-4 h-[30vh] sm:h-[20vh] w-[80vw] sm:w-[20vw] border-2 border-red-900 bg-gradient-to-r from-indigo-100 via-violet-100 to-purple-400 rounded-lg inline-block">
      <div className="overflow-auto">
        <div className="text-2xl font-semibold py-2">{props.title}</div>

        <div className="py-2">
          <p>{props.content}</p>
        </div>
      </div>

      <button
        onClick={handleClick}
        className="delete-button bg-lime-100 border-2 border-orange-500 p-1 h-fit w-fit rounded-md absolute bottom-2 right-2"
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Notes;
