import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import roomData from "./data/roomData";

import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";

import Home from "./components/pages/Home/Home";
import RoomsPreview from "./components/pages/Home/RoomsPreview/RoomsPreview";
import Rooms from "./components/pages/Rooms/RoomPage";
import Contact from "./components/pages/Contact/Contact";




function App() {

  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" exact element={<> <Home/> <RoomsPreview rooms={roomData}/> </>}></Route>
        <Route path="/chambres" element={  <Rooms rooms={roomData} /> }></Route>
        <Route path="/contact" element={  <Contact rooms={roomData} /> }></Route>
      </Routes>

     <Footer />

    </Router>
  );
}

export default App;
