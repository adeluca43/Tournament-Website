import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Rules from "./pages/Rules";
import Brackets from "./pages/Brackets";
import Results from "./pages/Results";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/brackets" element={<Brackets />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
