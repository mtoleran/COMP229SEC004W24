/* 
    File: intro.js
    Name: Manuel Carl Jr. Toleran
    ID: 301341708
    Date: January 28, 2024
*/

import React from 'react';
import './intro.css'

// Home page function
const Intro = () => {
    return(
        // Home page section
        <section id='intro'>
            {/* Home page div */}
            <div className='introContent'>
                {/* Home page 'hello' text */}
                <span className='helloText'>Hello,</span>
                {/* Home page name and role text */}
                <span className='introText'>I'm <span className='introName'>Manuel</span> <br/>Full-Stack Developer</span>
                {/* Home page short introduction text */}
                <p className='introPara'>I am a Full-Stack Developer with industry experience of over 5 years. I strive to offer my 
                                        clients the highest quality of custom-made web and mobile applications.</p>
            </div>
            
        </section>
        
    )
}

export default Intro;