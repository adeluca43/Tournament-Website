import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/info">Info</Link>
      <Link to="/rules">Rules</Link>
      <Link to="/brackets">Brackets</Link>
      <Link to="/results">Results</Link>
    </nav>
  );
}
