/* 
    File: MainRouter.js
    Name: Manuel Carl Jr. Toleran
    ID: 301341708
    Date: January 28, 2024
*/

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar";
import Home from "./components/Intro/intro";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Services from "./components/Services/services";
import Contact from "./components/Contact/contact";

//MainRouter function
const MainRouter = () => {
        return (<div>
                {/* Navbar page */}
                <Navbar />
                {/* Routes for each page */}
                <Routes>
                        <Route exact path="/COMP229SEC004W24/" element={<Home />} />
                        <Route exact path="/COMP229SEC004W24/home" element={<Home />} />
                        <Route exact path="/COMP229SEC004W24/about" element={<About />} />
                        <Route exact path="/COMP229SEC004W24/projects" element={<Projects />} />
                        <Route exact path="/COMP229SEC004W24/services" element={<Services />} />
                        <Route exact path="/COMP229SEC004W24/contact" element={<Contact />} />    
                </Routes>
        </div>
        )
}
export default MainRouter
