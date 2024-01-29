/* 
    File: projects.js
    Name: Manuel Carl Jr. Toleran
    ID: 301341708
    Date: January 28, 2024
*/

import React from 'react';
import './projects.css'
import tricep from '../../assets/tricep.jpg';
import samuya from '../../assets/samuya.png';
import inkpanda from '../../assets/inkpanda.png';

//Projects page function
const Projects = () => {
    return (
        //Projects page section
        <section id='projects'>
            {/* Projects page title */}
            <h2 className='projectsTitle'>Projects</h2>
            {/* div for all projects */}
            <div className='projectBars'>
                {/* div for first project */}
                <div className='projectBar'>
                    {/* Image for first project */}
                    <img src={tricep} alt='' className='projectBarImg'/>
                    {/* div for first project text */}
                    <div className='projectBarText'>
                        <h2>TRICEP: Technologies of RFID and image recognition in a checkout enhancement platform</h2>
                        <p>A checkout enhancement platform which implements RFID and image recognition technologies in shopping baskets/carts, with a real-time integrated tool.
                            I was the back-end developer for the web application  of this project built using the Django framework. The project was successful in creating 
                            and testing a prototype of the basket cart with RFID and image scanners along with real-time tracking application. 
                        </p>
                    </div>
                </div> {/* closing div for first project */}

                {/* div for second project */}
                <div className='projectBar'>
                    {/* Image for second project */}
                    <img src={samuya} alt='' className='projectBarImg'/>
                    {/* div for second project text */}
                    <div className='projectBarText'>
                        <h2>Samuya Inventory Management System</h2>
                        <p>An invenotry management system was developed for Samuya Food Manufacturing. I was also the back-end developer for this project.
                            The team was successful in creating an initial version of the system.
                        </p>
                    </div>
                </div> {/* closing div for second project */}

                {/* div for third project */}
                <div className='projectBar'>
                    {/* Image for third project */}
                    <img src={inkpanda} alt='' className='projectBarImg'/>
                    {/* div for third project text */}
                    <div className='projectBarText'>
                        <h2>InkPanda: Printing Delivery System</h2>
                        <p>The project presents the development of a mobile application that will allow people and companies to place their 
                            printing orders online with pickup or delivery options. I served as the project manager/business analyst for this project, where I
                            monitored the overall state of the project as well as assisted in the requirements gathering. The team was able to
                            produce a detailed software requirements specification document including various UML diagrams, class diagrams, and mock-up screens.  
                        </p>
                    </div>
                </div> {/* closing div for third project */}
            </div> {/* closing div for all projects */}
        </section>
    )
}

export default Projects;