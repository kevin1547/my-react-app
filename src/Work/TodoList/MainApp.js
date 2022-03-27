
import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default function App() {
    const [InputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, [])

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status])

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(item => item.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(item => item.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }
    
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    }

    return (
        <div>
            <header>
                <h1> Kevin's TodoList </h1>
            </header>
            <Form setInputText={setInputText} InputText={InputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
            <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
        </div>
    )
}

