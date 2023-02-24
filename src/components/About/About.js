import React from 'react'
import { TiTick } from 'react-icons/ti'

const About = () => {
  return (
    <div className="about-area overflow-hidden ">
    <div className="container">
        <div className="about-items">
            <div className="row align-center">

                {/* <!-- Thumb --> */}
                <div className="col-lg-6">
                    <div className="thumb">
                        <img src="assets/img/thumb/lalkila.png" alt="Thumb"/>
                        
                    </div>
                </div>
                {/* <!-- End Thumb --> */}

                <div className="col-lg-6">
                    <div className="content">
                        <h2>About Social Rajneeti</h2>
                        <p>
                        In today’s digital world the best candidate may not win, but the better marketedone will!
<strong>“Social Rajneeti”</strong> is a political digital marketing and social media campaignmanagement firm that aims to empower political parties and candidatesand bring them closer to potential voters. Our expertise lies inproviding web and mobile based political marketing services thatinclude digital marketing, social media marketing social profilesmanagement, online networking, online presence management, anddigital campaign management. Social Rajneeti is the political digitalmarketing partner you need to unearth the maximum advantage of modernmarketing and advertising mediums.
What differentiates us from other digital marketing companies is thefact that we are a full-service political digital marketing agency inPune, India that is passionately dedicated to empower politicalclients with quirky, smart, and effective digital marketing andsocial media campaigns to augment their overall online branding andhelp them in electoral campaigns.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default About