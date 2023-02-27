import React from 'react'

const faq = () => {
  return (
<div className="faq-area default-padding">
        <div className="container">
                <h2 style={{textAlign:'center'}}>Frequently Asked Questions</h2>
            <div className="faq-items">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="faq-content">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h4 className="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Do You Promote Two Candidates in the Same Constituency?
                                        </h4>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p>
                                            NO –When working for a political party, we promote only their candidates in the particular constituency. Moreover, we undertake projects on a first come, first served basis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h4 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What are Your Expertise in Political Digital Marketing?
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p>
                                            We are an authorized ‘Google Certified Partner’ that signifies our expertise in executing specialized digital marketing campaigns to help politicians and political parties to connect with target audience online. We have qualified professionals who know how to reach the right people in the right area. We have rich experience of promoting a number of political clients through all online, digital, and social media channels.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h4 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        How Can We Have a Wikipedia Page?
                                      </h4>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p>
                                            Wikipedia is an online encyclopedia portal that is moderated by humans. However, they follow strict guidelines to approve a page/profile before uploading to their portal. Our content writers will make sure that the content and information adheres to Wikipedia guidelines.
                                            </p>
                                        </div>
                                    </div>
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

export default faq