import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Cards";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const inputItems = (e) => {
    setInput(e.target.value);
  };

  const Add = () => {
    if (input) {
      setTodos([input, ...todos]);
      setInput("");
    }
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const onKeyDown = (e) => {
    if (e.key == "Enter" && input) {
      setTodos([input, ...todos]);
      setInput("");
    }
  };
  // const [a, ...d] = todos;
  // const Remove = () => {
  //   setTodos(d, input);
  // };

  return (
    <div className="main">
      <div className="todo">
        <Input value={input} onChange={inputItems} onKeyDown={onKeyDown} />
        <Button onClick={Add} text="ADD" />
      </div>
      <div className="card">
        {todos.map((i, index) => {
          return <Card index={index} remove={removeTodo} title={i}></Card>;
        })}
      </div>
    </div>
  );
};

export default App;
