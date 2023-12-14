import React from 'react'

const Banner = () => {
  return (
    <React.Fragment>
        <div className="banner section">
        <div className="main-banner owl-carousel">
          <div className="item">
            <a href="#"
              ><img
                src="/images/main_banner1.jpg"
                alt="Main Banner"
                className="img-responsive"
            /></a>
          </div>
          <div className="item">
            <a href="#"
              ><img
                src="/images/main_banner2.jpg"
                alt="Main Banner"
                className="img-responsive"
            /></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner