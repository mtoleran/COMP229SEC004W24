import React from 'react';
import './navbar.css'
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className='navbarMenu'>
                <Link className='navbarMenuListItem' >Home</Link>
                <Link className='navbarMenuListItem' >About Me</Link>
                <Link className='navbarMenuListItem' >Projects</Link>
                <Link className='navbarMenuListItem' >Services</Link>
                
            </div>
            <button className='contactBtn'>
                <img src={contactImg} alt='' className='contactImg'/>Contact Me
            </button>
        </nav>      
    )
}

export default Navbar;