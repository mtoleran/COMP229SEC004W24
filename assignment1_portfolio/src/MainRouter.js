import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar";
import Home from "./components/Intro/intro";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Services from "./components/Services/services";
import Contact from "./components/Contact/contact";


const MainRouter = () => {
        return (<div>
                <Navbar />
                <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/projects" element={<Projects />} />
                        <Route exact path="/services" element={<Services />} />
                        <Route exact path="/contact" element={<Contact />} />    
                </Routes>
        </div>
        )
}
export default MainRouter
