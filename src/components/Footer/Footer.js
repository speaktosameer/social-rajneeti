import React from 'react'

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
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li class="twitter">
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li class="youtube">
                                        <a href="#"><i class="fab fa-youtube"></i></a>
                                    </li>
                                    <li class="instagram">
                                        <a href="#"><i class="fab fa-instagram"></i></a>
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
                                    <a href="#">Digital Marketing</a>
                                </li>
                                <li>
                                    <a href="#">Online Advertising</a>
                                </li>
                                <li>
                                    <a href="#">Social Media Marketing</a>
                                </li>
                                <li>
                                    <a href="#">Website Design & Development</a>
                                </li>
                                <li>
                                    <a href="#">Online Events Management</a>
                                </li>
                                <li>
                                    <a href="#">WhatsApp Advertising</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 item">
                        <div class="f-item link">
                            <h4 class="widget-title">Company</h4>
                            <ul>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Why Social Rajneeti</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms</a>
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
                        <a href="#"><img src="assets/img/logo.png" alt="Logo"/></a>
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