import React from 'react';
import './intro.css'

const Intro = () => {
    return(
        <section id='intro'>
            <div className='introContent'>
                <span className='helloText'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Manuel</span> <br/>Full-Stack Developer</span>
                <p className='introPara'>I am a Full-Stack Developer with industry experience of over 5 years. I strive to offer my 
                                        clients the highest quality of custom-made web applications.</p>
            </div>
            
        </section>
        
    )
}

export default Intro;