import React from 'react'
import {RxCross2, RxDashboard} from 'react-icons/rx'
import {FaFacebook} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'
import {RxLinkedinLogo} from 'react-icons/rx'
import {BsInstagram, BsArrowRightCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-sticky bootsnav">
            <div className="container-full">

                {/* Start Atribute Navigation */}
                <div className="attr-nav">
                    <ul>
                        {/* <li className="search"></li> */}
                        <li>
                           <i className='fa'><FaFacebook/></i> &nbsp;
                           <i className='fa'><SiTwitter/></i> &nbsp;
                           <i className='fa'><RxLinkedinLogo/></i>

                        </li>
                    </ul>
                </div>        
                {/* End Atribute Navigation */}

                 {/* Start Header Navigation */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <RxDashboard/>
                    </button>
                    <Link to="/" className="navbar-brand">
                    
                        <img src="assets/img/logo.png" className="logo" alt="Logo" />
                    </Link>
                </div>
                 {/* End Header Navigation  */}

                 {/* Collect the nav links, forms, and other content for toggling  */}
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className="dropdown">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="dropdown">
                            <Link to="/digital-marketing" class="dropdown-toggle" data-toggle="dropdown" >Services</Link>
                            <ul class="dropdown-menu">
                                <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                                <li><Link to="/online-advertising">Online Advertising</Link></li>
                                <li><Link to="/online-event">Online Event Managment</Link></li>
                                <li><Link to="/social-media">Social Media Marketing</Link></li>
                                <li><Link to="/website-design">WebsiteDesign & Developement</Link></li>
                                <li><Link to="/whatsapp-advertise">WhatsApp Advertising</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/socialrajneeti">About Social Rajneeti</Link>
                        </li>
                        <li>
                        <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                 {/* navbar-collapse  */}
            </div>

             {/* Start Side Menu  */}
            <div className="side">
                <Link to="/" className="close-side"><RxCross2/></Link>
                <div className="widget">
                    <img src="assets/img/logo.png" alt="Logo" />
                    <p>
                    He is a deeply spiritual Jainmonk, with a secular & universal orientation to the pursuit of non-violent conflict resolution, promotion of peace, tolerance, and brother-hood of man.                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Address</p> 
                                    <strong>Shree Parshwa Padmavati Nagar,<br/>Sadhanpalli, Sundampatti Post,<br/>Post: Orappam Krishnagir</strong>
                                </div>
                            </li>
                            {/* <li>
                                <div className="content">
                                    <p>Email</p> 
                                    <strong>support@validtheme.com</strong>
                                </div>
                            </li> */}
                            <li>
                                <div className="content">
                                    <p>Contact</p> 
                                    <strong>+91 4343 329 323</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget newsletter">
                    <h4 className="title">Get Subscribed!</h4>
                    <form action="#">
                        <div className="input-group stylish-input-group">
                            <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" />
                            <span className="input-group-addon">
                                <button type="submit">
                                <BsArrowRightCircle/>
                                </button>  
                            </span>
                        </div>
                    </form>
                </div>
                <div className="widget social">
                    <ul className="link">
                        <li><Link to="https://www.facebook.com"><FaFacebook/></Link></li>
                        <li><Link to="https://www.twiiter.com"><SiTwitter/></Link></li>
                        <li><Link to="https://www.linkedin.in"><RxLinkedinLogo/></Link></li>
                        <li><Link to="https://www.instagram.com"><BsInstagram/></Link></li>
                    </ul>
                </div>
            </div>
             {/* End Side Menu  */}

        </nav>
  )
}

export default Navbar