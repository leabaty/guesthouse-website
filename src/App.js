import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import Rooms from "./components/pages/HomePage/Rooms/Rooms";
import RoomPage from "./components/pages/RoomPage/RoomPage";

import roomData from "./data/roomData";

function App() {


  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/chambres" element={<RoomPage />}></Route>
      </Routes>

      <Rooms rooms={roomData} />
      //TODO : Bouger les roomData dans la section des rooms (car sinon ça s'affiche sur chaque page)

      <Footer />

    </Router>
  );
}

export default App;
