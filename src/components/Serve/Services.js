import React from 'react'
import {FaThinkPeaks} from 'react-icons/fa'
import {TbSocial} from 'react-icons/tb'
import {CgWebsite} from 'react-icons/cg'
import {HiOutlineStatusOnline} from 'react-icons/hi'
import {BsWhatsapp, BsCalendar4Event} from 'react-icons/bs'
import {RxMobile} from 'react-icons/rx'
import {SiEspressif} from 'react-icons/si'





const Services = () => {
  return (
    <div className="services-area bg-fixed services-style-four default-padding bottom-less bg-gray" style={{backgroundimage: "url('assets/img/shape/banner.png')"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="heading-center text-center">
                        {/* <h5>What we do</h5> */}
                        <h2>Services</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                 {/* Single Itme  */}
                <div className="services-style-four col-lg-3 col-md-6">
                    <div className="item text-center">
                        <i className="flaticon-"><FaThinkPeaks/></i>
                        <h4><a href="#">DM Strategy & Planning</a></h4>
                        <p>
                        Influencing voters & putting the focus of masses towards you with well-planned digital marketing for political campaigns and strategies.
                        </p>
                    </div>
                </div>
                {/* Single Itme 
                Single Itme */}
                <div className="services-style-four col-lg-3 col-md-6">
                    <div className="item text-center">
                    <i className="flaticon-"><RxMobile/></i>
                        <h4><a href="#">Mobile Advertisements</a></h4>
                        <p>
                        The best mobile marketing & in-app mobile advertising to help your political campaign reach the audience of smart users.
                        </p>
                    </div>
                </div>
                 {/* Single Itme
                 Single Itme */}
                <div className="services-style-four col-lg-3 col-md-6">
                    <div className="item text-center">
                    <i className="flaticon-"><CgWebsite/></i>
                        <h4><a href="#">Website Development</a></h4>
                        <p>
                        Creating a strategic web presence to highlight all your achievements and development work in one place.
                        </p>
                    </div>
                </div>
                {/* <!-- Single Itme -->
                <!-- Single Itme --> */}
                <div className="services-style-four col-lg-3 col-md-6">
                    <div className="item text-center">
                    <i className="flaticon"><HiOutlineStatusOnline/></i>
                        <h4><a href="#">Online Advertisment</a></h4>
                        <p>
                        Promote political parties & candidates through various online channel to enhance reach and generate better support.
                        </p>
                    </div>
                </div>
                {/* <!-- Single Itme -->
                <!-- Single Itme --> */}
                <div className="services-style-four col-lg-3 col-md-6">
                    <div className="item text-center">
                    <i className="flaticon"><BsWhatsapp/></i>
                        <h4><a href="#">Whatsapp Marketing</a></h4>
                        <p>
                        Leveraging WhatsApp for political campaigns to reach virtually everyone in the city, state, country and the world instantly.
                        </p>
                    </div>
                </div>
                {/* <!-- Single Itme -->
                <!-- Single Itme --> */}
                 <div className="services-style-four col-lg-3 col-md-6">
                    <div className="item text-center">
                        <i className="flaticon"><TbSocial/></i>
                        <h4><a href="#">Social Media Management</a></h4>
                        <p>
                        Strategic social media management and marketing to expand your online followers and reach.
                        </p>
                    </div>
                </div> 
                {/* <!-- Single Itme --> */}
                 {/* <!-- Single Itme -->
                <!-- Single Itme --> */}
                 <div className="services-style-four col-lg-3 col-md-6">
                    <div className="item text-center">
                        <i className="flaticon"><BsCalendar4Event/></i>
                        <h4><a href="#">Online Events</a></h4>
                        <p>
                        Planning and executing various online events, such as webinars, live rallies and much more
                        </p>
                    </div>
                </div> 
                {/* <!-- Single Itme --> */}
                 {/* <!-- Single Itme -->
                <!-- Single Itme --> */}
                 <div className="services-style-four col-lg-3 col-md-6">
                    <div className="item text-center">
                        <i className="flaticon"><SiEspressif/></i>
                        <h4><a href="#">Online Press Releases</a></h4>
                        <p>
                        Creating effective Press Release distribution to create buzz, increase online visibility
                        </p>
                    </div>
                </div> 
                {/* <!-- Single Itme --> */}
            </div>
        </div>
    </div>
  )
}

export default Services