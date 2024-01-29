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
                <Link className='navbarMenuListItem' to='/home'>Home</Link>
                <Link className='navbarMenuListItem' to='/about' >About Me</Link>
                <Link className='navbarMenuListItem' to='/projects' >Projects</Link>
                <Link className='navbarMenuListItem' to='/services'>Services</Link> 
            </div>
            {/* Navbar contact me button */}
            <Link className='contactLink' to='/contact'>
                <button className='contactBtn'>
                    <img src={contactImg} alt='' className='contactImg'/>Contact Me
                </button>
            </Link>
        </nav>      
    )
}

export default Navbar;