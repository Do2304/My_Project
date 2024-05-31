import { useState } from "react";
import "./App.css";
let nextId = 0;
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewToDo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  function handleAdd() {
    setTodos([...todos, { id: nextId, name: newTodo }]);
    setNewToDo("");
    nextId++;
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleEdit(id, name) {
    setEditId(id);
    setEditName(name);
  }
  function handleSave() {
    setTodos(
      todos.map((todo) => {
        if (todo.id === editId) {
          return { ...todo, name: editName };
        }
        return todo;
      })
    );
    setEditId(null);
    setEditName("");
  }
  return (
    <div className="Container">
      <h1>Todo List</h1>
      <div>
        <input value={newTodo} onChange={(e) => setNewToDo(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {editId === todo.id ? (
                <>
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <button onClick={handleSave}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {todo.name}
                  <button onClick={() => handleEdit(todo.id, todo.name)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
