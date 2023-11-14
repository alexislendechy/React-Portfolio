import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>A little bit of Alexis</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about-me">About me</Link>{" "}
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact</Link>{" "}
          </li>
          <li>
            <Link to="/resume">Resume</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}