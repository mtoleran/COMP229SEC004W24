/* 
    File: about.js
    Name: Manuel Carl Jr. Toleran
    ID: 301341708
    Date: January 28, 2024
*/

import React from 'react';
import './about.css';
import bg from '../../assets/toleran.jpg';
import resume from '../../documents/resume.pdf';

// About Me page function
const About = () => {
    return(
        //About Me page section
        <section id='about'>
            {/* About Me page title */}
            <span className='aboutTitle'>About Me</span>
            {/* About Me page description */}
            <span className='aboutDesc'>
                My name is Manuel Carl Jr. Toleran, and I am a full-stack developer. The industry experience in the early years of my career helped me 
                hone my web-development skills to transition into a freelance developer. I am highly proficient in building and deploying custom MERN stack applications. 
                I also have a background in developing mobile applications as well as experience in UI/UX design. 
                {/* About Me link to resume */}
                <a className='resumeText' href={resume} target='_blank' rel="noopener noreferrer"> You can check my resume for more details!</a>
            </span>
            {/* About Me image of self */}
            <img src={bg} alt='Profile' className='bg'/>
        </section>
    )
}

export default About;