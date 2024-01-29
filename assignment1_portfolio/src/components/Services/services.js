/* 
    File: services.js
    Name: Manuel Carl Jr. Toleran
    ID: 301341708
    Date: January 28, 2024
*/

import React from 'react';
import './services.css';
import webDev from '../../assets/web_development.png';
import mobileDev from '../../assets/mobile_development.png';
import userInterface from '../../assets/userint_userex.png';

//Services page function
const Services = () => {
    return(
        // Services page section
        <section id='services'>
            {/* Services page title */}
            <span className='servicesTitle'>Services</span>
            {/* div for all services */}
            <div className='serviceBars'>
                {/* div for first service */}
                <div className='serviceBar'>
                    {/* Image for first service */}
                    <img src={webDev} alt='' className='serviceBarImg'/>
                    {/* div for first service text */}
                    <div className='serviceBarText'>
                        <h2>Web Development</h2>
                        <p>Build web applications using MERN stack.</p>
                    </div>
                </div>{/* closing div for first service */}

                {/* div for second service */}
                <div className='serviceBar'>
                    {/* Image for second service */}
                    <img src={mobileDev} alt='' className='serviceBarImg'/>
                    {/* div for second service text */}
                    <div className='serviceBarText'>
                        <h2>Mobile Development</h2>
                        <p>Build mobile applications on Android and iOS devices.</p>
                    </div>
                </div>{/* closing div for second service */}

                {/* div for third service */}
                <div className='serviceBar'>
                    {/* Image for third service */}
                    <img src={userInterface} alt='' className='serviceBarImg'/>
                    {/* div for third service text */}
                    <div className='serviceBarText'>
                        <h2>UI/UX Design</h2>
                        <p>Build screen prototypes and design user experience flow for web and mobile applications.</p>
                    </div>
                </div>{/* closing div for third service */}
            </div>{/* closing div for all services */}
        </section>
    )
}

export default Services;