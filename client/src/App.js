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
import Rooms from "./components/pages/Rooms/RoomPage";
import Restaurant from "./components/pages/Restaurant/Restaurant";
import Directions from "./components/pages/Directions/Directions";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import PrivacyPolicy from "./components/pages/Footer/Legal/PrivacyPolicy";
import LegalNotice from "./components/pages/Footer/Legal/LegalNotice";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/chambres" element={<Rooms rooms={roomData} />}></Route>
          <Route path="/table" element={<Restaurant />}></Route>
          <Route path="/acces" element={<Directions />}></Route>
          <Route path="/a-propos" element={<About />}></Route>
          <Route path="/contact" element={<Contact rooms={roomData} />}></Route>
          <Route path="/mentions-legales" element={<LegalNotice />}></Route>
          <Route
            path="/politique-de-confidentialite"
            element={<PrivacyPolicy />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
