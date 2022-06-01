import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default function App() {
  const [InputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [user, setUser] = useState("Your");
  const [index, setIndex] = useState(true);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const changeUser = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <header>
        <h1> {user}&apos;s TodoList </h1>
        <button
          className="user-in-todolist"
          onClick={() => {
            setIndex((prev) => !prev);
          }}
        >
          change username
        </button>
      </header>
      {index ? (
        <div className="UserChange">
          <input type="text" className="USER" onChange={changeUser} />
          <button
            onClick={() => {
              setIndex((prev) => !prev);
            }}
          >
            Change
          </button>
        </div>
      ) : (
        <Form
          setInputText={setInputText}
          InputText={InputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
      )}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}
