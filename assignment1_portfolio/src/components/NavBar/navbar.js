import React from 'react';
import './navbar.css'
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className='navbarMenu'>
                <Link className='navbarMenuListItem' to='/home'>Home</Link>
                <Link className='navbarMenuListItem' to='/about' >About Me</Link>
                <Link className='navbarMenuListItem' to='/projects' >Projects</Link>
                <Link className='navbarMenuListItem' to='/services'>Services</Link>
                
            </div>
            <Link className='contactLink' to='/contact'>
                <button className='contactBtn'>
                    <img src={contactImg} alt='' className='contactImg'/>Contact Me
                </button>
            </Link>
        </nav>      
    )
}

export default Navbar;