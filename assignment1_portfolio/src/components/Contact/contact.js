import React, {useRef} from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

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
        <section className='contactPage'>
            <div className='contactDetails'>
                <h1 className='contactPageTitle'>Contact Information</h1>
                <div className='contactDesc' >
                    <ul>Name: Manuel Carl Jr. Toleran</ul>
                    <ul>Email: manuelcarltoleran@gmail.com</ul>
                    <ul>Contact Number: (647)-465-8069</ul>
                </div>

                <h1 className='contactPageTitle'>Send a message</h1>
                <span className='contactDesc'>Fill out the form below to discuss potential work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='inputField' id='firstName' placeholder='Your First Name' name='first_name'></input>
                    <input type='text' className='inputField' id='lastName' placeholder='Your Last Name' name='last_name'></input>
                    <input type='text' className='inputField' id='contactNumber' placeholder='Your Contact Number' name='contact_number'></input>
                    <input type='email' className='emailField' placeholder='Your Email' name='from_email'></input>
                    <textarea className='msgField' rows='5' placeholder='Your Message' name='message' ></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                </form>
            </div>    
        </section>

    )
}

export default Contact;