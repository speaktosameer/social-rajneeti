import React from 'react'

const HeroSection = () => {
  return (
    <div className="banner-area auto-height text-light banner-business bg  theme" style={{background: "url('assets/img/thumb/background1.png')"}}>
        <div className="item">
            <div className="box-table">
                <div className="box-cell">
                    <div className="container">
                        <div className="banner-items">
                            <div className="row align-center">
                                <div className="col-lg-4">
                                    {/* <div className="content">
                                        <h4 className="wow fadeInLeft">Business Services</h4>
                                        <h2 className="wow fadeInDown" data-wow-delay="500ms"><strong>Provide Massive</strong> Business Solutions</h2>
                                        <p className="wow fadeInLeft" data-wow-delay="900ms">
                                            Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen. 
                                        </p>
                                        <div className="button wow fadeInDown" data-wow-delay="1200ms">
                                            <a href="https://www.youtube.com/watch?v=owhuBrGIOsE" className="popup-youtube video-btn"><i className="fal fa-play"></i>Our Story</a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-lg-8 thumbs wow fadeInDown">
                                <img src="assets/img/thumb/flag.png" alt="Thumb"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection