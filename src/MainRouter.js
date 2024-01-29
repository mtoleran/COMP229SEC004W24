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
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />    
                </Routes>
        </div>
        )
}
export default MainRouter
