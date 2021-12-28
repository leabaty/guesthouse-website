import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
