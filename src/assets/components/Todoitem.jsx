import { AiFillDelete } from "react-icons/ai";

function Todoitem({ todoName, todoDate, onDelete }) {
  const handleDeleteClicked = () => {
    onDelete(todoName);
  };
  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={handleDeleteClicked}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
export default Todoitem;
