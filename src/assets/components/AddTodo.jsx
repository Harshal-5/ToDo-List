import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddToDo({ onAdding }) {
  const [workInput, setWorkInput] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleChange = (event) => {
    setWorkInput(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value); // Update todo date state
  };

  const handleAddButton = () => {
    onAdding(workInput, todoDate);
    setWorkInput("");
    setTodoDate("");
  };
  return (
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={workInput}
          onChange={handleChange}
        />
      </div>
      {console.log("")}
      <div className="col-4">
        <input type="date" value={todoDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-button"
          onClick={handleAddButton}
        >
          <BiMessageAdd />
        </button>
      </div>
    </div>
  );
}
export default AddToDo;
