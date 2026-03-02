import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditTodoId(todo.id);
    setEditText(todo.text);
  };

  const handleSaveClick = (id) => {
    if (!editText.trim()) return;
    dispatch(updateTodo({ id, newText: editText }));
    setEditTodoId(null);
    setEditText("");
  };

  const handleCancelClick = () => {
    setEditTodoId(null);
    setEditText("");
  };

  return (
    <ul className="todos-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          {editTodoId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSaveClick(todo.id)}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button onClick={() => handleEditClick(todo)}>Edit</button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Todos;