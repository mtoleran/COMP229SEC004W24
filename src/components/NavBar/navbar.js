/* 
    File: navbar.js
    Name: Manuel Carl Jr. Toleran
    ID: 301341708
    Date: January 28, 2024
*/

import React from 'react';
import './navbar.css'
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-router-dom';

//Navbar function
const Navbar = () => {
    return (
        //Navbar section
        <nav className='navbar'>
            {/* Navbar logo */}
            <img src={logo} alt='Logo' className='logo'/>
            {/* Navbar links div */}
            <div className='navbarMenu'>
                {/* Navbar links */}
                <Link className='navbarMenuListItem' to='/COMP229SEC004W24/home'>Home</Link>
                <Link className='navbarMenuListItem' to='/COMP229SEC004W24/about' >About Me</Link>
                <Link className='navbarMenuListItem' to='/COMP229SEC004W24/projects' >Projects</Link>
                <Link className='navbarMenuListItem' to='/COMP229SEC004W24/services'>Services</Link> 
            </div>
            {/* Navbar contact me button */}
            <Link className='contactLink' to='/COMP229SEC004W24/contact'>
                <button className='contactBtn'>
                    <img src={contactImg} alt='' className='contactImg'/>Contact Me
                </button>
            </Link>
        </nav>      
    )
}

export default Navbar;