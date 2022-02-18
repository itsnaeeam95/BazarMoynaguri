import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <div>
          <header>
            <div className='mainheader'>
                <div className='top-head'>
                    <div className='container'>
                      <div className='row'>
                          <div className='head-content'>
                              <ul>
                                  <li>
                                    {/* <img src='./images/logo.png' alt=""/> */}
                                      Sarkar shoss exclusive Natun Bazar turminal complex, PO : Maynaguri, Dist : Jalpaiguri, Pin : 753224. 
                                  </li>
                              </ul>
                          </div>
                             <div className='head-logo-area ml-auto'>
                                  <ul>
                                    <li>
                                      <a href='/'>
                                        <img src='./images/icon03.png' alt=""/>
                                          dhrubadjs.mng@gmail.com
                                      </a>
                                    </li>
                                    <li>
                                       <a href='tel:7797813261'>
                                          <img  src="./images/icon02.jpg" alt=""/>
                                            +91 7797813261
                                       </a>
                                    </li>
                                  </ul>
                             </div>
                      </div>
                    </div>
                </div>
              <div className='middle_head '>
                  <div className='container'>
                      <div className='row res_padd'>
                          <span className='logo'>
                            <a href='index.html'>
                                <img src='./images/logo.png' alt=""/>
                            </a>
                          </span>
                      <div className='right-search ml-auto'>
                          <div className='left-search'>
                              <form>
                                <input className='search-type mobill010' type="text" placeholder='Search for Products'/>
                                <button className='search-submit' type='submit' value=""/>
                              </form>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
                  <div className='for_all_containt_sub_containt '>
                        <div className='menu-bar'>
                              <div className='container'>
                                  <div className='row res-pad relet'>
                                      <div className='adjust_row'>
                                          <div className='containt_animated slide containt'>
                                              <div className='containt_animated slide'>
                                                  <nav className='dropdown'>
                                                      <ul>
                                                        <li>
                                                          <a className='adjust_rm02' href="/">ALL Categories
                                                          <i className='fa fa-caret-down' aria-hidden="true">
                                                          </i>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                  </nav>
                                              </div>
                                          </div>
                                      </div>
                                      <nav className='navbar navbar-expand-md navbar-light'>
                                        <button className='navbar-toggle' type='button' dat-toggle="collapse" data-target="#navbarSupportedContent" aria-controls='navbarSupportedContent' aria-expanded="false" aria-label='Toggle navigation'>
                                          <span className='navbar-toggler-icon'></span>
                                          </button>
                                      <div id="navbarSupportContent" className='collapse navbar-collapse'>
                                          <ul className='navbar-nav mr-auto'>
                                              <li className='nav-item'>
                                                  <a className='nav-link' href="/">About Bazar Maynaguri</a>
                                              </li>
                                              <li className='nav-item'>
                                                  <a className='nav-link' href="/">B2B Information</a>
                                              </li>
                                              <li className='nav-item'>
                                                  <a className='nav-link' href="/">FAQ</a>
                                              </li>
                                              <li className='nav-item'>
                                                  <a className='nav-link' href="/">Contact Us</a>
                                              </li>
                                              <li className='nav-item'>
                                                  <a className='nav-link' href="/">Enquiry Us</a>
                                              </li>
                                          </ul>
                                      </div>
                                      </nav>
                                  </div>
                              </div>
                        </div>
                  </div>
            </div>
          </header> 
          </div>
  )
}

export default Header