import React, { useState, useEffect } from "react";
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
import Restaurant from "./components/pages/Restaurant/Restaurant";
import Directions from "./components/pages/Directions/Directions";
import Contact from "./components/pages/Contact/Contact";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  //PARALLAX EFFECT
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className="app"
      // style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {" "}
                <Home /> <RoomsPreview rooms={roomData} />{" "}
              </>
            }
          ></Route>
          <Route path="/chambres" element={<Rooms rooms={roomData} />}></Route>
          <Route path="/table" element={<Restaurant />}></Route>
          <Route path="/acces" element={<Directions />}></Route>
          <Route path="/contact" element={<Contact rooms={roomData} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
