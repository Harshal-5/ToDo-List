import Todoitem from "./Todoitem";

const TodoItems = ({ todoItems, onDelete }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <Todoitem
          key={item.value}
          todoName={item.value}
          todoDate={item.date}
          onDelete={onDelete}
        ></Todoitem>
      ))}
    </div>
  );
};

export default TodoItems;
