import React from "react";
import Banner from "../Banner/Banner";
import CategoryCard from "../ReuseableComp/CategoryCard";
import StoreCard from "../ReuseableComp/StoreCard";
import CrauselCard from "../ReuseableComp/CrauselCard";
import BookOnline from "../BookOnline/BookOnline";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <CrauselCard/>
      <div className="container-fluid">
        <div className="subbanner-section section mt-20">
          <div className="owl-carousel banner-carousel">
            <div className="home-subbanner">
              <div className="home-img">
                <a href="#">
                  <img
                    className="leftbanner"
                    src="images/sub-banner1.jpg"
                    alt="sub-banner1"
                  />
                </a>
              </div>
              <div className="cms-desc">
                <div className="cms-text1">
                  Get <b>Chana Dal</b>
                </div>
                <div className="cms-text2">@ 20$</div>
                <div className="cms-text3">Shop for $ 500</div>
              </div>
            </div>
            <div className="home-subbanner">
              <div className="home-img">
                <a href="#">
                  <img
                    className="leftbanner"
                    src="images/sub-banner2.jpg"
                    alt="sub-banner1"
                  />
                </a>
              </div>
              <div className="cms-desc">
                <div className="cms-text1">
                  Get <b>California RED</b>
                </div>
                <div className="cms-text2">@ 12$</div>
                <div className="cms-text3">Shop for $ 200</div>
              </div>
            </div>
            <div className="home-subbanner">
              <div className="home-img">
                <a href="#">
                  <img
                    className="leftbanner"
                    src="images/sub-banner3.jpg"
                    alt="sub-banner1"
                  />
                </a>
              </div>
              <div className="cms-desc">
                <div className="cms-text1">
                  Get <b>Chana dal</b>
                </div>
                <div className="cms-text2">@ 20$</div>
                <div className="cms-text3">Shop for $ 500</div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- =====  SUB BANNER END  ===== --> */}

        {/* <!-- =====  SEARVICES START  ===== --> */}
        {/* <div className="shipping-outer section">
          <div className="shipping-inner row">
            <div className="heading col-lg-3 col-12 text-center text-lg-left">
              <h2>Why choose us?</h2>
            </div>
            <div className="subtitle-part subtitle-part1 col-lg-3 col-4 text-center text-lg-left">
              <div className="subtitle-part-inner">
                <div className="subtitile">
                  <div className="subtitle-part-image"></div>
                  <div className="subtitile1">On time delivery</div>
                  <div className="subtitile2">15% back if not able</div>
                </div>
              </div>
            </div>
            <div className="subtitle-part subtitle-part2 col-lg-3 col-4 text-center text-lg-left">
              <div className="subtitle-part-inner">
                <div className="subtitile">
                  <div className="subtitle-part-image"></div>
                  <div className="subtitile1">Free delivery</div>
                  <div className="subtitile2">Order over $ 200</div>
                </div>
              </div>
            </div>
            <div className="subtitle-part subtitle-part3 col-lg-3 col-4 text-center text-lg-left">
              <div className="subtitle-part-inner">
                <div className="subtitile">
                  <div className="subtitle-part-image"></div>
                  <div className="subtitile1">Quality assurance</div>
                  <div className="subtitile2">You can trust us</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="category-banner-block">
          <div className="section_title">Don't be slow! Our prices are low.</div>
          <div className="row">
            <CategoryCard
              captain="Del Monte Beets"
              linkPage="category_page.html"
              src="images/cat1.png"
              title="Del Monte Beets"
            />
            <div className="product-layout col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="product-thumb transition text-center">
                <div className="caption categoryname">
                  <h4>
                    <a href="category_page.html">Medicine</a>
                  </h4>
                </div>
                <div className="image">
                  <a href="category_page.html">
                    <img
                      src="images/cat2.png"
                      alt="Veggies"
                      title="Veggies"
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-layout col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="product-thumb transition text-center">
                <div className="caption categoryname">
                  <h4>
                    <a href="category_page.html">Medicine</a>
                  </h4>
                </div>
                <div className="image">
                  <a href="category_page.html">
                    <img
                      src="images/cat3.png"
                      alt="Del Monte Corn"
                      title="Del Monte Corn"
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-layout col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="product-thumb transition text-center">
                <div className="caption categoryname">
                  <h4>
                    <a href="category_page.html">Medicine</a>
                  </h4>
                </div>
                <div className="image">
                  <a href="category_page.html">
                    <img
                      src="images/cat4.png"
                      alt="Riced cauliflower"
                      title="Riced cauliflower"
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-layout col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="product-thumb transition text-center">
                <div className="caption categoryname">
                  <h4>
                    <a href="category_page.html">Medicine</a>
                  </h4>
                </div>
                <div className="image">
                  <a href="category_page.html">
                    <img
                      src="images/cat5.png"
                      alt="Veggies Bowl"
                      title="Veggies Bowl"
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-layout col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="product-thumb transition text-center">
                <div className="caption categoryname">
                  <h4>
                    <a href="category_page.html">Medicine</a>
                  </h4>
                </div>
                <div className="image">
                  <a href="category_page.html">
                    <img
                      src="images/cat6.png"
                      alt="Green peas | Carrots"
                      title="Green peas | Carrots"
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="category_product section">
          <div className="row">
            <div className="col-12">
              <div className="section_title">Shop By Categories</div>
            </div>
            <div className="col-sm-3 productcategory_thumb text-center mb-15">
              <img
                src="images/14.jpg"
                alt=""
                title=""
                className="img-thumbnail"
              />
            </div>
            <div className="col-sm-9 right_block">
              <div className="row">
                {/* <div className="product-layout col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="product-thumb transition">
                    <p className="tag">
                      11
                      <br />
                      % <br />
                      <i>off</i>
                    </p>
                    <h4>
                      <a href="category_page.html">Apple</a>
                    </h4>
                    <div className="image">
                      <a href="category_page.html">
                        <img
                          src="images/12.jpg"
                          alt="Apple"
                          title="Apple"
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </div>
                </div> */}
                <StoreCard tagPer="11" hoverName="Apple" pageLink="" src="images/12.jpg" alt="Apple" title="Apple"/>
                <div className="product-layout col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="product-thumb transition">
                    <p className="tag">
                      20
                      <br />
                      % <br />
                      <i>off</i>
                    </p>
                    <h4>
                      <a href="category_page.html">Strawberry</a>
                    </h4>
                    <div className="image">
                      <a href="category_page.html">
                        <img
                          src="images/11.jpg"
                          alt="Strawberry"
                          title="Strawberry"
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-layout col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="product-thumb transition">
                    <h4>
                      <a href="category_page.html">Pineapple</a>
                    </h4>
                    <div className="image">
                      <a href="category_page.html">
                        <img
                          src="images/10.jpg"
                          alt="Pineapple"
                          title="Pineapple"
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-layout col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="product-thumb transition">
                    <h4>
                      <a href="category_page.html">Banana</a>
                    </h4>
                    <div className="image">
                      <a href="category_page.html">
                        <img
                          src="images/09.jpg"
                          alt="Banana"
                          title="Banana"
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-layout col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="product-thumb transition">
                    <h4>
                      <a href="category_page.html">Orange</a>
                    </h4>
                    <div className="image">
                      <a href="category_page.html">
                        <img
                          src="images/08.jpg"
                          alt="Orange"
                          title="Orange"
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-layout col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="product-thumb transition">
                    <p className="tag">
                      10
                      <br />
                      % <br />
                      <i>off</i>
                    </p>
                    <h4>
                      <a href="category_page.html">Greps</a>
                    </h4>
                    <div className="image">
                      <a href="category_page.html">
                        <img
                          src="images/07.jpg"
                          alt="Greps"
                          title="Greps"
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 text-center">
              <div className="btn btn-primary viewall">
                <a href="category_page.html">View All</a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- =====  featured section  ===== --> */}
        <div className="featured_product section mt-30">
          <div className="row">
            <div className="col-12">
              <div className="section_title">Featured Products</div>
            </div>
            <div className="section-product grid section">
              <div className="product-items col-6 col-sm-4 col-md-4 col-lg-3">
                <div className="product-thumb transition">
                  <div className="image">
                    <div className="first_image">
                      <a href="product_detail_page.html">
                        <img
                          src="images/pro/014.jpg"
                          alt="pure-spice-3"
                          title="pure-spice-3"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="swap_image">
                      <a href="product_detail_page.html">
                        <img
                          src="images/pro/015.jpg"
                          alt="pure-spice-3"
                          title="pure-spice-3"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="product-details">
                    <div className="caption">
                      <h4>
                        <a href="product_detail_page.html">Medicines</a>
                      </h4>
                      <p className="price">
                        $7.25<span className="price-tax">Ex Tax: $7.25</span>
                      </p>
                      <div className="product_option">
                        <div className="form-group required">
                          <select
                            name="option[239]"
                            id="input-option230"
                            className="form-control"
                          >
                            <option value="">--- Please Select ---</option>
                            <option value="45">1kg(+$0.07)</option>
                            <option value="46">5kg(+$0.22)</option>
                            <option value="47">10kg(+$0.44)</option>
                          </select>
                        </div>
                        <div className="input-group button-group">
                          <label className="control-label">Qty</label>
                          <input
                            type="number"
                            name="quantity"
                            min="1"
                            // value="1"
                            step="1"
                            className="qty form-control"
                          />
                          <button
                            type="button"
                            className="addtocart pull-right"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-items col-6 col-sm-4 col-md-4 col-lg-3">
                <div className="product-thumb transition">
                  <div className="image">
                    <div className="first_image">
                      <a href="product_detail_page.html">
                        <img
                          src="images/pro/009.jpg"
                          alt="pure-spice-3"
                          title="pure-spice-3"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="swap_image">
                      <a href="product_detail_page.html">
                        <img
                          src="images/pro/003.jpg"
                          alt="pure-spice-3"
                          title="pure-spice-3"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="product-details">
                    <div className="caption">
                      <h4>
                        <a href="product_detail_page.html">Medicines</a>
                      </h4>
                      <p className="price">
                        $7.25<span className="price-tax">Ex Tax: $7.25</span>
                      </p>
                      <div className="product_option">
                        <div className="form-group required">
                          <select
                            name="option[239]"
                            id="input-option239"
                            className="form-control"
                          >
                            <option value="">--- Please Select ---</option>
                            <option value="45">1kg(+$0.07)</option>
                            <option value="46">5kg(+$0.22)</option>
                            <option value="47">10kg(+$0.44)</option>
                          </select>
                        </div>
                        <div className="input-group button-group">
                          <label className="control-label">Qty</label>
                          <input
                            type="number"
                            name="quantity"
                            min="1"
                            // value="1"
                            step="1"
                            className="qty form-control"
                          />
                          <button
                            type="button"
                            className="addtocart pull-right"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-items col-6 col-sm-4 col-md-4 col-lg-3">
                <div className="product-thumb transition">
                  <div className="image">
                    <div className="first_image">
                      <a href="product_detail_page.html">
                        <img
                          src="images/pro/006.jpg"
                          alt="pure-spice-3"
                          title="pure-spice-3"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="swap_image">
                      <a href="product_detail_page.html">
                        <img
                          src="images/pro/009.jpg"
                          alt="pure-spice-3"
                          title="pure-spice-3"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="product-details">
                    <div className="caption">
                      <h4>
                        <a href="product_detail_page.html">Medicines</a>
                      </h4>
                      <p className="price">
                        $7.25<span className="price-tax">Ex Tax: $7.25</span>
                      </p>
                      <div className="product_option">
                        <div className="form-group required">
                          <select
                            name="option[239]"
                            id="input-option231"
                            className="form-control"
                          >
                            <option value="">--- Please Select ---</option>
                            <option value="45">1kg(+$0.07)</option>
                            <option value="46">5kg(+$0.22)</option>
                            <option value="47">10kg(+$0.44)</option>
                          </select>
                        </div>
                        <div className="input-group button-group">
                          <label className="control-label">Qty</label>
                          <input
                            type="number"
                            name="quantity"
                            min="1"
                            // value="1"
                            step="1"
                            className="qty form-control"
                          />
                          <button
                            type="button"
                            className="addtocart pull-right"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-items col-6 col-sm-4 col-md-4 col-lg-3">
                <div className="product-thumb transition">
                  <div className="image">
                    <div className="first_image">
                      <a href="product_detail_page.html">
                        <img
                          src="images/pro/003.jpg"
                          alt="pure-spice-3"
                          title="pure-spice-3"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="swap_image">
                      <a href="product_detail_page.html">
                        <img
                          src="images/pro/006.jpg"
                          alt="pure-spice-3"
                          title="pure-spice-3"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="product-details">
                    <div className="caption">
                      <h4>
                        <a href="product_detail_page.html">Medicines</a>
                      </h4>
                      <p className="price">
                        $7.25<span className="price-tax">Ex Tax: $7.25</span>
                      </p>
                      <div className="product_option">
                        <div className="form-group required">
                          <select
                            name="option[239]"
                            id="input-option232"
                            className="form-control"
                          >
                            <option value="">--- Please Select ---</option>
                            <option value="45">1kg(+$0.07)</option>
                            <option value="46">5kg(+$0.22)</option>
                            <option value="47">10kg(+$0.44)</option>
                          </select>
                        </div>
                        <div className="input-group button-group">
                          <label className="control-label">Qty</label>
                          <input
                            type="number"
                            name="quantity"
                            min="1"
                            // value="1"
                            step="1"
                            className="qty form-control"
                          />
                          <button
                            type="button"
                            className="addtocart pull-right"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-items col-6 col-sm-4 col-md-4 col-lg-3">
                <div className="product-thumb transition">
                  <div className="image">
                    <div className="first_image">
                      <a href="product_detail_page.html">
                        <img
                          src="images/pro/012.jpg"
                          alt="pure-spice-3"
                          title="pure-spice-3"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="swap_image">
                      <a href="product_detail_page.html">
                        <img
                          src="images/pro/013.jpg"
                          alt="pure-spice-3"
                          title="pure-spice-3"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="product-details">
                    <div className="caption">
                      <h4>
                        <a href="product_detail_page.html">Medicines</a>
                      </h4>
                      <p className="price">
                        $7.25<span className="price-tax">Ex Tax: $7.25</span>
                      </p>
                      <div className="product_option">
                        <div className="form-group required">
                          <select
                            name="option[239]"
                            id="input-option233"
                            className="form-control"
                          >
                            <option value="">--- Please Select ---</option>
                            <option value="45">1kg(+$0.07)</option>
                            <option value="46">5kg(+$0.22)</option>
                            <option value="47">10kg(+$0.44)</option>
                          </select>
                        </div>
                        <div className="input-group button-group">
                          <label className="control-label">Qty</label>
                          <input
                            type="number"
                            name="quantity"
                            min="1"
                            // value="1"
                            step="1"
                            className="qty form-control"
                          />
                          <button
                            type="button"
                            className="addtocart pull-right"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured_product section mt-30">
        <BookOnline/>
        </div>
        <div className="featured_product section mt-30">
        <img src="/Ayurveda2.webp"/>
        </div>
        {/* <TestimonialCard/> */}
      </div>
    </React.Fragment>
  );
};

export default HomePage;
