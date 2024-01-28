import React from 'react';
import './about.css';
import bg from '../../assets/toleran.jpg';
import resume from '../../documents/resume.pdf';

const About = () => {
    return(
        <section id='about'>
            <span className='aboutTitle'>About Me</span>
            <span className='aboutDesc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <a className='resumeText' href={resume} target='_blank' rel="noopener noreferrer"> Check out my resume!</a>
            </span>
            <img src={bg} alt='Profile' className='bg'/>
        </section>
    )
}

export default About;