import React from 'react'
import "./home.css";

const Home = () => {
  return (
    <>
      <section className='banner'>
        <div id="demo" className='carousel slide' data-ride="carousel">
          <div className='container6'>
            <div className='row res_padd'>
              <ul className='carousel-indicators'>
                <li className='active' data-target="#demo" data-slide-to="0">
                </li>
                <li className='' data-target="#demo" data-slide-to="1">
                </li>
                <li className='' data-target="#demo" data-slide-to="2">
                </li>
              </ul>
            </div>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src='./images/banner1.jpg' alt='' />
              <div className='container7'>
                <div className='row res_padd'>
                  <div className='sliderr_ttxt'>
                    <div className='carousel-caption'>
                      <h3>Quality Assurance</h3>
                      <p>Free Weighting Machine for our members.</p>
                      <a href='/'>Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div><br></br>
            <div className='carousel-item active'>
              <img src='./images/banner2.jpg' alt='' />
              <div className='container7'>
                <div className='row res_padd'>
                  <div className='sliderr_ttxt'>
                    <div className='carousel-caption'>
                      <h3>Simply Dummy Caption Here</h3>
                      <p>Free Weighting Machine for our members.</p>
                      <a href='/'>Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='about_us_area'>
        <div className='container8'>
          <div className='row res_padd'>
            <h1>Welcome to BazarMoynaguri</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet aliquid, vitae perspiciatis molestiae deserunt exercitationem et eum cumque! Consequatur, perspiciatis. Placeat sint veritatis ullam dolore, officia totam quos modi deleniti obcaecati esse, nulla et. Eveniet minima laboriosam nisi molesti
            </h2>
            <img src='./images/icon05.jpg' alt=''/>
            <div className='linee'></div>
            <div className='aboput_boxx line_left'>
            <img src='./images/icon12.png' alt=''/>
              <h3>Best Quality Product</h3>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet aliquid, vitae perspiciatis molestiae deserunt exercitationem et eum cumque! et dolore magna.
              </p>
            </div>
            <div className='aboput_boxx'>
                <img src='./images/icon11.png' alt=''/>
                <h3>Free Shipping</h3>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet aliquid, vitae perspiciatis molestiae deserunt exercitationem et eum cumque! et dolore magna.
                </p>
            </div>
            <div className='aboput_boxx border_none line_right'>
            <img src='./images/icon10.png' alt=''/>
              <h3>On Time Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet aliquid, vitae perspiciatis molestiae deserunt exercitationem et eum cumque! et dolore magna.
                </p>
            </div>
              <a href='/'>Quality Product at your door step</a>
          </div>
        </div>
      </div>
      <div className='slider_one_area'>
          <div className='container'>
              <div className='row res_padd'>
                  <div id='offer' className='owl-carousel testimonial-carousel-main owl-loaded owl-drag'>
                      <div className='owl-stage-outer'>
                          <div className='owl-stage'>
                          <div className='owl-item cloned'>
                                <div className='item'>
                                  <div className='boxx_sg'>
                                      <img src='./images/icon35.jpg' alt=''/>
                                        <div className='containtt_one'>
                                            <h1>Simply dummy offer text here</h1>
                                            <h2>100% Organic vegetable</h2>
                                          <span>
                                            <img src='./images/cruve.png' alt=''/>
                                            <a href='/'>
                                              Call For Enquiry
                                              <img src='./images/icon07.png' alt=''/>
                                              </a>
                                          </span>
                                        </div>
                                  </div>
                                </div>
                              </div>
                                                      
                              <div className='owl-item cloned'>
                                <div className='item'>
                                  <div className='boxx_sg'>
                                      <img src='./images/icon36.jpg' alt=''/>
                                        <div className='containtt_two'>
                                          <span>
                                            <h1>Simply dummy offer text here</h1>
                                            <h2>100% Organic vegetable</h2>
                                            <a href='/'>Call For Enquiry</a>
                                          </span>
                                        </div>
                                  </div>
                                </div>
                              </div>
                             </div>
                              <div className='owl-dots'>
                                  <div className='owl-dot active'>
                                      <span></span>
                                  </div>
                                  <div className='owl-dot'>
                                        <span></span>
                                  </div>
                                  <div className='owl-dot'>
                                        <span></span>
                                  </div>
                              </div>
                            </div>
                      </div>
                  </div>
              </div>
              <div className='our_products'>
                  <div className='container'>
                      <div className='row res_padd2'>
                          <h1>Our Products</h1>
                          <h3>Shopping made easy or some caption text show here</h3>
                          <img src='./images/icon05.jpg' alt=''/>
                          <div className='linee'></div>
                            <div className='product_box'>
                                <div className='pro_image'>
                                  <a href='/'>
                                      <img src='./images/icon15.jpg' alt=''/>
                                  </a>
                                  <span className='enq01'>
                                      <a href='/'>Call For Enquiry</a>
                                  </span>
                                </div>
                                <div className='pro_desc'>
                                    <a href='/'>Product name show here</a>
                                    <p>Rs.40.00</p>
                                    <span className='pro_line'>
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>
                            <div className='product_box'>
                                <div className='pro_image'>
                                  <a href='/'>
                                      <img src='./images/icon22.jpg' alt=''/>
                                  </a>
                                  <span className='enq01'>
                                      <a href='/'>Call For Enquiry</a>
                                  </span>
                                </div>
                                <div className='pro_desc'>
                                    <a href='/'>Product name show here</a>
                                    <p>Rs.40.00</p>
                                    <span className='pro_line'>
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>
                            <div className='product_box'>
                                <div className='pro_image'>
                                  <a href='/'>
                                      <img src='./images/icon21.jpg' alt=''/>
                                  </a>
                                  <span className='enq01'>
                                      <a href='/'>Call For Enquiry</a>
                                  </span>
                                </div>
                                <div className='pro_desc'>
                                    <a href='/'>Product name show here</a>
                                    <p>Rs.40.00</p>
                                    <span className='pro_line'>
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>
                            <div className='product_box'>
                                <div className='pro_image'>
                                  <a href='/'>
                                      <img src='./images/icon20.png' alt=''/>
                                  </a>
                                  <span className='enq01'>
                                      <a href='/'>Call For Enquiry</a>
                                  </span>
                                </div>
                                <div className='pro_desc'>
                                    <a href='/'>Product name show here</a>
                                    <p>Rs.40.00</p>
                                    <span className='pro_line'>
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>
                            <div className='product_box'>
                                <div className='pro_image'>
                                  <a href='/'>
                                      <img src='./images/icon18.png' alt=''/>
                                  </a>
                                  <span className='enq01'>
                                      <a href='/'>Call For Enquiry</a>
                                  </span>
                                </div>
                                <div className='pro_desc'>
                                    <a href='/'>Product name show here</a>
                                    <p>Rs.40.00</p>
                                    <span className='pro_line'>
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>
                            <div className='product_box'>
                                <div className='pro_image'>
                                  <a href='/'>
                                      <img src='./images/icon17.jpg' alt=''/>
                                  </a>
                                  <span className='enq01'>
                                      <a href='/'>Call For Enquiry</a>
                                  </span>
                                </div>
                                <div className='pro_desc'>
                                    <a href='/'>Product name show here</a>
                                    <p>Rs.40.00</p>
                                    <span className='pro_line'>
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>
                            <div className='product_box'>
                                <div className='pro_image'>
                                  <a href='/'>
                                      <img src='./images/icon16.JPG' alt=''/>
                                  </a>
                                  <span className='enq01'>
                                      <a href='/'>Call For Enquiry</a>
                                  </span>
                                </div>
                                <div className='pro_desc'>
                                    <a href='/'>Product name show here</a>
                                    <p>Rs.40.00</p>
                                    <span className='pro_line'>
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>
                            <div className='product_box'>
                                <div className='pro_image'>
                                  <a href='/'>
                                      <img src='./images/icon19.png' alt=''/>
                                  </a>
                                  <span className='enq01'>
                                      <a href='/'>Call For Enquiry</a>
                                  </span>
                                </div>
                                <div className='pro_desc'>
                                    <a href='/'>Product name show here</a>
                                    <p>Rs.40.00</p>
                                    <span className='pro_line'>
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>
              <div className='small_banner'>
                  <div className='container'>
                      <div className='row rellati res_padd'>
                          <h1>
                            If you have any quary please fill free to contact us
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                          <a href='/'>Contact Us</a>
                      </div>
                  </div>
              </div>
              <div className='latest_products'>
                <div className='container'>
                    <div className='row rellati'>
                        <div className='lp_product'></div>
                        <h1>Latest Products</h1>
                        <h3>Shopping made easy or some caption text show here</h3>
                        <img src='./images/icon05.jpg' alt=''/>
                        <div className='linee'></div>
                      <div id='latest_product_slider' className='owl-carousel testimonial-carousel-main rounded_pro owl-loaded owl-drag'>
                        <div className='owl-stage-outer'>
                            <div className='owl-stage'>
                                <div className='owl-item cloned'>
                                    <div className='item'>
                                        <div className='lp_round'>
                                          <a href='/'>
                                            <img src='./images/icon28.jpg' alt=''/>
                                          </a>
                                        </div>
                                        <a href='/'>Product name show here</a>
                                        <p>Rs.40.00</p>
                                        <a className='inqq' href='/'>Call For Enquiry</a>
                                    </div>
                                </div>
                                <div className='owl-item cloned'>
                                    <div className='item'>
                                        <div className='lp_round'>
                                          <a href='/'>
                                            <img src='./images/icon27.jpg' alt=''/>
                                          </a>
                                        </div>
                                        <a href='/'>Product name show here</a>
                                        <p>Rs.40.00</p>
                                        <a className='inqq' href='/'>Call For Enquiry</a>
                                    </div>
                                </div>
                                <div className='owl-item cloned'>
                                    <div className='item'>
                                        <div className='lp_round'>
                                          <a href='/'>
                                            <img src='./images/icon26.jpg' alt=''/>
                                          </a>
                                        </div>
                                        <a href='/'>Product name show here</a>
                                        <p>Rs.40.00</p>
                                        <a className='inqq' href='/'>Call For Enquiry</a>
                                    </div>
                                </div>
                                <div className='owl-item cloned'>
                                    <div className='item'>
                                        <div className='lp_round'>
                                          <a href='/'>
                                            <img src='./images/icon30.jpg' alt=''/>
                                          </a>
                                        </div>
                                        <a href='/'>Product name show here</a>
                                        <p>Rs.40.00</p>
                                        <a className='inqq' href='/'>Call For Enquiry</a>
                                    </div>
                                </div>
                                <div className='owl-item cloned'>
                                    <div className='item'>
                                        <div className='lp_round'>
                                          <a href='/'>
                                            <img src='./images/icon29.png' alt=''/>
                                          </a>
                                        </div>
                                        <a href='/'>Product name show here</a>
                                        <p>Rs.40.00</p>
                                        <a className='inqq' href='/'>Call For Enquiry</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='owl-dots'>
                                  <div className='owl-dot '>
                                      <span></span>
                                  </div>
                                  <div className='owl-dot'>
                                        <span></span>
                                  </div>
                                  <div className='owl-dot active'>
                                        <span></span>
                                  </div>
                              </div>
                      </div>  
                    </div>
                </div>
              </div>
          </div>
    </>
  )
}

export default Home