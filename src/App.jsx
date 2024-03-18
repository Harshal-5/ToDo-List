import AppName from "./assets/components/AppName";
import AddToDo from "./assets/components/AddTodo";
import Welcome from "./assets/components/Welcome";
import TodoItems from "./assets/components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDoFinal, setToDoFinal] = useState([]);

  const handleOnAdding = (workInput, todoDate) => {
    const newItems = { value: workInput, date: todoDate };
    setToDoFinal([...toDoFinal, newItems]);
  };
  const handleOnDelete = (todoName) => {
    const finalItemsList = toDoFinal.filter((item) => item.value !== todoName);
    setToDoFinal(finalItemsList);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onAdding={handleOnAdding}></AddToDo>
      {toDoFinal.length == 0 && <Welcome></Welcome>}
      <TodoItems todoItems={toDoFinal} onDelete={handleOnDelete}></TodoItems>
    </center>
  );
}

export default App;
