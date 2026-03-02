import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <div className="todo-app">
      <h1>Todos</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
