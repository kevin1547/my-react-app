/*
import Slider from './Work/Slider/Slider'
import LoginWork from './components/LoginWork'
import data from './Work/Slider/dataSlider'
import React from 'react';

function App() {
  return (
    <>
    <Slider src={data} />
    <LoginWork />
    </>
  );
}

export default App; */

// import Calculator from "./Work/Calculator/Calculator";
// import MainApp from "./Work/TodoList/MainApp"
import Picture from "./Work/AddPicture/Picture";
import { Routes, Route } from "react-router-dom";
// import Slider from "./Work/Slider/Slider";
// import LoginForm from "./components/LoginForm";
import Switch from "./Work/Switch/Switch";
import SignUpWork from "./Work/SignUp/SignUpWork";
// import Calculator from "./Work/Calculator/Calculator";
import TodoList from "./Work/TodoList/MainApp";
import MainFunc from "./Work/CounterByMyself/MainFunc";
import Counter from "./Counter";
import RootStoreContext from "./store";
// import './style.css';
export default function App() {
  return (
    <RootStoreContext>
      <Routes>
        <Route path="/picture" element={<Picture />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counterbymyself" element={<MainFunc />} />
        <Route path="/signup" element={<SignUpWork />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/" element={<Switch />} />
      </Routes>
    </RootStoreContext>
  );
}
