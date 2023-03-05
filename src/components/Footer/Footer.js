import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="bg-dark text-light">
        <div class="container">
            <div class="f-items default-padding">
                <div class="row">
                    <div class="col-lg-5 col-md-6 item">
                        <div class="f-item about">
                            <h4 class="widget-title">About Us</h4>
                            <p>
                            <strong>Social Rajneeti</strong> is a political digital marketing and social media campaignmanagement firm that aims to empower political parties and candidatesand bring them closer to potential voters.
                            </p>
                            <div class="social">
                                <ul>
                                    <li class="facebook">
                                        <NavLink to="https://www.facebook.com"><i class="fab fa-facebook-f"></i></NavLink>
                                    </li>
                                    <li class="twitter">
                                        <NavLink to="https://www.twitter.com"><i class="fab fa-twitter"></i></NavLink>
                                    </li>
                                    <li class="youtube">
                                        <NavLink to="https://www.youtube.com"><i class="fab fa-youtube"></i></NavLink>
                                    </li>
                                    <li class="instagram">
                                        <NavLink to="https://www.instagram.com"><i class="fab fa-instagram"></i></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 item">
                        <div class="f-item link">
                            <h4 class="widget-title">Services</h4>
                            <ul>
                                <li>
                                    <NavLink to="/digital-marketing">Digital Marketing</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/online-advertising">Online Advertising</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/social-media">Social Media Marketing</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/website-design">Website Design & Development</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/online-event">Online Events Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/whatsapp-advertise">WhatsApp Advertising</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 item">
                        <div class="f-item link">
                            <h4 class="widget-title">Company</h4>
                            <ul>
                                <li>
                                    <NavLink to="/aboutus">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/socialrajneeti">Why Social Rajneeti</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/faq">FAQ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Terms</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 item">
                        <div class="f-item contact">
                            <h4 class="widget-title">Contact Us</h4>
                            <div class="address">
                                <ul>
                                    <li>
                                        <p>Address</p> 
                                        <strong>301-302, Saikar Paradise, Sr No. 131/1B/1, Ram Indu Park, Baner, Pune, Maharashtra 411045</strong>
                                    </li>
                                    <li>
                                        <p>Email</p> 
                                        <strong>info@innoserv.co.in</strong>
                                    </li>
                                    <li>
                                        <p>Contact</p> 
                                        <strong>+91- 9867633810 <br/>+91- 8237555778</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row align-center">
                    <div class="col-lg-4">
                        <p>&copy; Copyright 2023. All Rights Reserved</p>
                    </div>
                    <div class="col-lg-4 text-center logo">
                        <Link to="/"><img src="assets/img/logo.png" alt="Logo"/></Link>
                    </div>
                    <div class="col-lg-4 text-right newsletter">
                        <form action="#">
                            <div class="input-group stylish-input-group">
                                <input type="email" placeholder="Enter your e-mail" class="form-control" name="email"/>
                                <span class="input-group-addon">
                                    <button type="submit">
                                        <i class="fa fa-paper-plane"></i>
                                    </button>  
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer