import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom'
import Weather from '../Main/Weather';
import TodoList from '../Main/TodoList';
import Home from '../Main/Home/Home';
// import NotFound from '../NotFound'


export class Main extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route element={<Home/>} path={"/"} />
          <Route element={<TodoList/>} path={"/todo"} />
          <Route element={<Weather/>} path={"/weather"} />
          {/* <Route element={<NotFound/>} path={"/*"} /> */}
        </Routes>
      </main>
    )
  }
}

export default Main