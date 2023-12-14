import React from 'react'

const CategoryCard = (props) => {
  return (
    <React.Fragment>
        <div className="product-layout col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="product-thumb transition text-center">
                <div className="caption categoryname">
                  {/* <h4><a href="#">Del Monte Beets</a></h4> */}
                  <h4><a href="#">{props.captain}</a></h4>
                </div>
                <div className="image">
                  <a href={props.linkPage}
                    ><img
                      src={props.src}
                    //   src="images/cat1.png"
                      alt={props.alt}
                    //   alt="Del Monte Beets"
                      title={props.title}
                    //   title="Del Monte Beets"
                      className="img-responsive"
                  /></a>
                </div>
              </div>
            </div>
    </React.Fragment>
  )
}

export default CategoryCard