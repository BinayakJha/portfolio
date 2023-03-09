import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';
import BackgroundAnimation from './BackgroundAnimation';
import { motion } from "framer-motion";
function ContactMe() {
  return (
    <div className='contactpage'>
        <motion.div
		className="container text-center  bg-black"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.3 }}
		>
            <BackgroundAnimation />
            <section className="contact-section sec-padding" id="contact">
                <NavLink to='/about' className="btn link-item" style={{'position':'absolute','top': '29px','left': '33px'}}>
                    <i className="fa fa-arrow-left"></i>
                </NavLink>
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="contact-form">
                            <form name="contact1" data-netlify="true" method="POST">
                                <div className="row">
                                    <div className="input-group">
                                        <input type="text" placeholder="Your Name" className="input-control" name="name" required />
                                    </div>
                                    <div className="input-group">
                                        <input type="email" placeholder="Your Email" className="input-control" name="email" required />
                                    </div>
                                    <div className="input-group">
                                        <input type="number" placeholder="Your Phone-number" name="phone" className="input-control" />
                                    </div>
                                    <div className="input-group">
                                        <textarea placeholder="Your Message" className="input-control" name="message">

                                        </textarea>
                                    </div>
                                    <div className="submit-btn">
                                        <button type="submit" className="btn">Send Message</button>
                                    </div>
                                    <input type="hidden" name="form-name" value="contact1"/>

                                </div>
                            </form>
                        </div>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <h3>Email</h3>
                                <p>jha36binayak@gmail.com</p>
                            </div>
                            <div className="contact-info-item">
                                <h3>Address</h3>
                                <p>Imadol, Lalitpur - Nepal</p>
                            </div>
                            <div className="contact-info-item">
                                <h3>Follow Me</h3>
                                <div className="social-links">
                                    <a href="https://www.facebook.com/binayak.jha.py/" target="_blank">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="https://github.com/BinayakJha" target="_blank">
                                        <i className="fa fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/binayak-jha" target="_blank">
                                        <i className="fa fa-linkedin"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    </div>
  )
}

export default ContactMe