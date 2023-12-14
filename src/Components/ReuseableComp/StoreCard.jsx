import React from 'react'

const StoreCard = (props) => {
  return (
    <React.Fragment>
          <div className="product-layout col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="product-thumb transition">
                    <p className="tag">
                      {props.tagPer}
                      <br />
                      % <br />
                      <i>off</i>
                    </p>
                    <h4>
                      <a href="category_page.html">{props.hoverName}</a>
                    </h4>
                    <div className="image">
                      <a href={props.pageLink}>
                        <img
                          src={props.src}
                          alt={props.alt}
                          title={props.title}
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </div>
                </div>
    </React.Fragment>
  )
}

export default StoreCard