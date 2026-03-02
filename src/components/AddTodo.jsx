// AddTodo.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Enter your todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
