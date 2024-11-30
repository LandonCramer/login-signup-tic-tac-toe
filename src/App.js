import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Home from "./Components/Home/Home.js";
import Game from "./Components/Tic-Tac-toe/Game.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
