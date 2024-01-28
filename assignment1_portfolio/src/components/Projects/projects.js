import React from 'react';
import './projects.css'
import tricep from '../../assets/tricep.jpg';
import samuya from '../../assets/samuya.png';
import inkpanda from '../../assets/inkpanda.png';

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projectsTitle'>Projects</h2>
            <div className='projectBars'>
                <div className='projectBar'>
                    <img src={tricep} alt='' className='projectBarImg'/>
                    <div className='projectBarText'>
                        <h2>TRICEP: Technologies of RFID and image recognition in a checkout enhancement platform</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='projectBar'>
                    <img src={samuya} alt='' className='projectBarImg'/>
                    <div className='projectBarText'>
                        <h2>Samuya Inventory Management System</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='projectBar'>
                    <img src={inkpanda} alt='' className='projectBarImg'/>
                    <div className='projectBarText'>
                        <h2>InkPanda: Printing Delivery System</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;