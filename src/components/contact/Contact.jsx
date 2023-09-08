import React, {useRef} from 'react'
import "./Contact.css"
import {MdEmail} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"
import emailjs from "emailjs-com"

export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_traysd4', 'template_mdcecup', form.current, 'qKCcIiNlfcCLk3az1')
    
    e.target.reset()
  };

    return (
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>yuktabehare96@gmail.com</h5>
              <a href='mailto:yuktabehare96@gmail.com' target='_blank'>Send A Message</a>
            </article>

            <article className="contact_option">
              <FaLinkedin className='contact_option-icon'/>
              <h4>LinkedIn</h4>
              <h5>Yukta Behare</h5>
              <a href='https://www.linkedin.com/in/yukta-behare' target='_blank'>Add Connection</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' id='' placeholder="Your Message" rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    )
}
