import React from 'react';
import './services.css';
import webDev from '../../assets/web_development.png';
import mobileDev from '../../assets/mobile_development.png';
import userInterface from '../../assets/userint_userex.png';

const Services = () => {
    return(
        <section id='services'>
            <span className='servicesTitle'>Services</span>
            <div className='serviceBars'>
                <div className='serviceBar'>
                    <img src={webDev} alt='' className='serviceBarImg'/>
                    <div className='serviceBarText'>
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='serviceBar'>
                    <img src={mobileDev} alt='' className='serviceBarImg'/>
                    <div className='serviceBarText'>
                        <h2>Mobile Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='serviceBar'>
                    <img src={userInterface} alt='' className='serviceBarImg'/>
                    <div className='serviceBarText'>
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;