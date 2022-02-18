import React from 'react';
import "./search.css"

const Search = () => {
  return (
    <div className='search_main_section'>
        <div className='container1'>
            <div className='row res_padd'>
                <div className='bread_cb'>
                      <a href='/'>Home</a>
                      <span>
                        <i className='fa fa-angle-right' aria-hidden="true">
                        </i>
                      </span>
                        <a href='/'>Vegetables</a>
                </div>
                  <div className='laft_search_panel'>
                      <h3>Filter Options</h3>
                        <div className='form_group'>
                          <input className='search-input' type="text" placeholder='Keyword'/>
                            <img className='search-icon' src="./images/icon36.png" alt=""/>
                        </div>
                    <div className='form_group'>
                          <label className='search-label'>Category</label>
                           <select className='select'>
                              <option>Vegetable</option>
                              <option>Fruits</option>
                              <option>Dairy Products</option>
                              <option>Organic Products</option>
                              <option>Grocery Items</option>
                           </select>
                    </div>
                        <div className='form_group'>
                          <label className='search_label'>Sub Category</label>
                            <ul className='c_ul'>
                              <li>
                                <label className='contect_container_checkBox'>
                                    Sub Category one
                                    <input type="checkbox" checked="checked" name="text"/>
                                  <span className='contect_checkmark'>
                                  </span>
                                </label>
                              </li>
                              <li>
                              <label className='contect_container_checkBox'>
                                    Sub Category two
                                    <input type="checkbox" checked="checked" name="text"/>
                                  <span className='contect_checkmark'>
                                  </span>
                                </label>
                              </li>
                              <li>
                              <label className='contect_container_checkBox'>
                                    Sub Category 
                                    <input type="checkbox" checked="checked" name="text"/>
                                  <span className='contect_checkmark'>
                                  </span>
                                </label>
                              </li>
                              <li>
                              <label className='contect_container_checkBox'>
                                    Sub Category name here
                                    <input type="checkbox" checked="checked" name="text"/>
                                  <span className='contect_checkmark'>
                                  </span>
                                </label>
                              </li>
                              <li>
                              <label className='contect_container_checkBox'>
                                    Sub Category 
                                    <input type="checkbox" checked="checked" name="text"/>
                                  <span className='contect_checkmark'>
                                  </span>
                                </label>
                              </li>
                            </ul>
                        </div>
                          <div className='form_group'>
                              <label className='search_label'>Price Range</label>
                              <div className='slider_rnge'>
                                <div id="slider-range" className='ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all'>
                                    <div className='ui-slider-range ui-widget-header ui-corner-all' id="ui-header" ></div>
                                    <span className='ui-slider-handle ui-state-default ui-corner-all' tabIndex="0" id="ui-default"></span>
                                    <span className='ui-slider-handle ui-state-default ui-corner-all' tabIndex="0" id="ui-cor"></span>
                                    <div className='ui-slider-range ui-corner-all ui-widget-header' id="slider-handel"></div>
                                </div>
                                <span className='range-text'>
                                  <input id="amount" className='price_numb' type="text" readOnly=""/>
                                    <h3>Rs.10 - Rs.500</h3>
                                </span>
                              </div>
                          </div>
                          <button className='search-submit1' type='submit'>Filter</button>
                  </div>
                    <div className='right_search_panel'>
                        <div className='evnt_shot_by_main'>
                              <label className='event-sort'>Showing 1-20 out of 100 product for Vegetable</label>
                              <div className='sort-filter'>
                                    <p>SORT BY :</p>
                                    <select className='sort-select'>
                                          <option>Select</option>
                                          <option>Price - Low to High</option>
                                          <option>Price - High to Low</option>
                                    </select>
                              </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search01.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.40.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search02.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.20.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search03.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.40.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search04.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.30.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search05.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search06.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search07.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search08.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search09.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search10.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search11.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search12.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search01.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.40.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search02.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.20.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search03.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.40.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search04.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.30.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search05.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search06.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search07.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                        <div className='search_proo'>
                          <div className='srch_pic_box'>
                            <img src="./images/search08.jpg" alt=""/>
                            <span>
                              <a href='/'>Call for Enquiry</a>
                            </span>
                          </div>
                          <div className='srch_dtls_box'>
                              <a href='/'>Fresh Onion</a>
                                <p>Rs.80.00</p>
                          </div>
                        </div>
                          <div className='w-100'></div>
                          <div className='pagination-area'>
                              <ul>
                                <li>
                                  <a href='/'>
                                    <i className='fa fa-angle-left' aria-hidden="true"></i>
                                  </a>
                                </li>
                                  <li>
                                    <a href='/'>1</a>
                                  </li>
                                  <li>
                                    <a href='/'>2</a>
                                  </li>
                                  <li className='active'>
                                    <a href='/'>3</a>
                                  </li>
                                  <li>
                                    <a href='/'>4</a>
                                  </li>
                                  <li>
                                    <a href='/'>...</a>
                                  </li>
                                  <li>
                                    <a href='/'>25</a>
                                  </li>
                                  <li>
                                    <a href='/'>
                                      <i className='fa-solid fa-angle-right' aria-hidden="true"></i>
                                      
                                    </a>
                                  </li>
                              </ul>
                          </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Search;