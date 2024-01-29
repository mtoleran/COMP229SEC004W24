/* 
    File: contact.js
    Name: Manuel Carl Jr. Toleran
    ID: 301341708
    Date: January 28, 2024
*/

import React, {useRef} from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';

// Contact page function
const Contact = () => {
    // Email form variable
    const form = useRef();

    // Send Email function
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p3r6tov', 'template_68478es', form.current, '1KfrpHSKTjJQ378HT')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!')
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        // Contact Me page section
        <section className='contactPage'>
            {/* Contact Me page div */}
            <div className='contactDetails'>
                {/* Contact Information title */}
                <h1 className='contactPageTitle'>Contact Information</h1>
                {/* Contact Information details */}
                <div className='contactDesc' >
                    <ul>Name: Manuel Carl Jr. Toleran</ul>
                    <ul>Email: manuelcarltoleran@gmail.com</ul>
                    <ul>Contact Number: (647)-465-8069</ul>
                </div> 
                {/* Contact Me 'Send a message' form title */}
                <h1 className='contactPageTitle'>Send a message</h1>
                {/* Contact Me 'Send a message' form description */}
                <span className='contactDesc'>Fill out the form below to discuss potential work opportunities</span>
                {/* Contact Me 'Send a message' form */}
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    {/* Contact Me 'Send a message' form input fields */}
                    <input type='text' className='inputField' id='firstName' placeholder='Your First Name' name='first_name'></input>
                    <input type='text' className='inputField' id='lastName' placeholder='Your Last Name' name='last_name'></input>
                    <input type='text' className='inputField' id='contactNumber' placeholder='Your Contact Number' name='contact_number'></input>
                    <input type='email' className='emailField' placeholder='Your Email' name='from_email'></input>
                    <textarea className='msgField' rows='5' placeholder='Your Message' name='message' ></textarea>
                    {/* Contact Me 'Send a message' form submit button */}
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                </form>
            </div>    
        </section>

    )
}

export default Contact;