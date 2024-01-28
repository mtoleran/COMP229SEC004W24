import React from 'react';
import './about.css';
import bg from '../../assets/toleran.jpg';
import resume from '../../documents/resume.pdf';

const About = () => {
    return(
        <section id='about'>
            <span className='aboutTitle'>About Me</span>
            <span className='aboutDesc'>
                My name is Manuel Carl Jr. Toleran, and I am a full-stack developer. The industry experience in the early years of my career helped me 
                hone my web-development skills to transition into a freelance developer. I am highly proficient in building and deploying custom MERN stack applications. 
                I also have a background in developing mobile applications and as well experience in UI/UX design. 
                <a className='resumeText' href={resume} target='_blank' rel="noopener noreferrer"> You can check my resume for more details!</a>
            </span>
            <img src={bg} alt='Profile' className='bg'/>
        </section>
    )
}

export default About;