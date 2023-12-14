import React from 'react'

const FeaturedCard = () => {
  return (
    <React.Fragment>
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
                        <a href="product_detail_page.html">pure-spice-3</a>
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
    </React.Fragment>
  )
}

export default FeaturedCard