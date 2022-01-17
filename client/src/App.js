import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// STYLING
import "./App.css";

// DATA
import roomData from "./data/roomData";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";

import Home from "./components/pages/Home/Home";
import RoomsPreview from "./components/pages/Home/RoomsPreview/RoomsPreview";
import Rooms from "./components/pages/Rooms/RoomPage";
import Contact from "./components/pages/Contact/Contact";
import NotFound from "./components/pages/NotFound/NotFound"


function App() {

  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" exact element={<> <Home/> <RoomsPreview rooms={roomData}/> </>}></Route>
        <Route path="/chambres" element={  <Rooms rooms={roomData} /> }></Route>
        <Route path="/contact" element={  <Contact rooms={roomData} /> }></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

     <Footer />

    </Router>
  );
}

export default App;
