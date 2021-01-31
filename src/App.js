import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }

    setTodo([...todo, value]);
    setValue("");
  };

  return (
    <div className="App">
      <h1 style={{ color: "pink" }}>React Todo List</h1>
      <h4>Input Todo:</h4>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setValue(e.target.value)} value={value}></input>
      </form>
      <p>Value: {value}</p>

      <h4>Todo:</h4>
      <div>
        <ul>
          {todo.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
