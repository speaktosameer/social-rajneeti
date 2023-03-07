import React from 'react'

const Contact = () => {
  return (
    <div className="banner-area shadow it-banner dark bg-cover text-light default-padding" style={{backgroundColor:'orange'}}>
    <div className="item-box">
        <div className="item">
            
            <div className="sahpe"></div>
            
            <div className="container">
                <div className="row align-center">
                                    
                    <div className="col-lg-6">
                        <div className="content">
                            <h4 className="wow fadeInUp">Best Solution Provider</h4>
                            <h2 className="wow fadeInDown">Creating a better <strong>Solutions</strong></h2>
                            <p className="wow fadeInLeft">
                                Connect with us to get the latest Details
                            </p>
                            {/* <a className="btn btn-theme effect btn-md wow fadeInUp" href="#">Get Details <i className="arrow_right"></i></a> */}
                        </div>
                    </div>
                    
                    <div className="col-lg-5 offset-lg-1 appoinment">
                        <div className="appoinment-box text-center">
                            <div className="heading">
                                <h4>Appointment</h4>
                                <p>
                                    Please fill the form we will get back to you quickly
                                </p>
                            </div>
                            <form action="https://formspree.io/f/mdovzvjp" method='POST'>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="ap-name" name="name" placeholder="Name" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="ap-email" name="email" placeholder="Email" type="email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="ap-phone" name="phone" placeholder="Phone Number" type="number"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" name="submit" id="ap-submit">
                                            Submit Query
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact