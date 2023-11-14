import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./Sections/Header"
import { Footer } from "./Sections/Footer";
import { AboutMe } from "./Sections/AboutMe";
import { Portfolio } from "./Sections/Portfolio"
import { Contact } from "./Sections/Contact"
import { Resume } from "./Sections/Resume"

function App () {
  return (
    <Router>
      <Header/>
        <main>
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;

