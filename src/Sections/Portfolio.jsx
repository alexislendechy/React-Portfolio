import React from "react";
import note from "../assets/note.png"
import employee from "../assets/employee.jpeg"
import social from "../assets/social.png"
import text from "../assets/text.png"
import logo from "../assets/logo.png"
import read from "../assets/read.png"




export function Portfolio () {
    return(
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="grid-container">
            <div className="grid-item">
            <a href="https://github.com/alexislendechy/NoteTaker">
                <img className="portfolio-image" src={note} alt="Note Taker" />
            </a>
            </div>
            <div className="grid-item">
            <a href="https://github.com/alexislendechy/EmployeeTracker">
            <img className="portfolio-image" src={employee} alt="Employee Tracker" />
            </a>
            </div>
            <div className="grid-item">
            <a href="https://github.com/alexislendechy/Social-Network-API">
            <img className="portfolio-image" src={social} alt="Social Network API" />
            </a>
            </div>
            <div className="grid-item">
            <a href="https://github.com/alexislendechy/jate">
            <img className="portfolio-image" src={text} alt="Text Editor" />
            </a>
            </div>
            <div className="grid-item">
            <a href="https://github.com/alexislendechy/LogoGenerator">
            <img className="portfolio-image" src={logo} alt="Logo Generator" />
            </a>
            </div>
            <div className="grid-item">
            <a href="https://github.com/alexislendechy/READMEGenerator">
            <img className="portfolio-image" src={read} alt="Readme Generator" />
            </a>
            </div>
            </div>
        </section>
    )
}