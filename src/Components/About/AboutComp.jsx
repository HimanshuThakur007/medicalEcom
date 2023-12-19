import React from 'react'

const AboutComp = () => {
  return (
    <React.Fragment>
         <div className="breadcrumb section pt-60 pb-60">
      <div className="container-fluid">
        <h1 className="uppercase">About</h1>
        <ul>
          <li><a href="index.html"><i className="fa fa-home"></i></a></li>
          <li className="active">About</li>
        </ul>
      </div>
    </div>
    {/* <!-- =====  BREADCRUMB END===== --> */}
    <div className="page-about section">
    {/* <!-- =====  CONTAINER START  ===== --> */}
    <div className="container">
      <div className="row ">        
        <div id="column-left" className="col-lg-4 col-xl-3">
          <div id="category-menu" className="mb-30">
            <div className="nav-responsive">
              <div className="heading-part">
                <h3 className="section_title">Top category</h3>
              </div>
              <ul>
                <li><a href="#">Appliances</a></li>
                <li><a href="#">Mobile Phones</a></li>
                <li><a href="#">Tablet PC & Accessories</a></li>
                <li><a href="#">Consumer Electronics</a></li>
                <li><a href="#">Computers & Networking</a></li>
                <li><a href="#">Electrical & Tools</a></li>
                <li><a href="#">Apparel</a></li>
                <li><a href="#">Bags & Shoes</a></li>
                <li><a href="#">Toys & Hobbies</a></li>
                <li><a href="#">Watches & Jewelry</a></li>
                <li><a href="#">Home & Garden</a></li>
                <li><a href="#">Health & Beauty</a></li>
                <li><a href="#">Outdoors & Sports</a></li>
              </ul>
            </div>
          </div>

          <div className="left_banner left-sidebar-widget mb-50"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
        </div>
        <div className="col-lg-8 col-xl-9 mb-20">
          {/* <!-- about  --> */}
          <div className="row">
            <div className="col-md-12">
              <figure> <img src="images/about-page-gaando.jpg" alt="#"/> </figure>
            </div>
            <div className="col-md-12">
              <div className="about-text">
                <div className="about-heading-wrap">
                  <h2 className="about-heading mb-20 mt-20 py-2">Design is Best Part of <span>my Life </span></h2>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
              </div>
            </div>
          </div>
          {/* <!-- =====  What We Do? ===== --> */}
          {/* <div className="row">
            <div className="col-md-6">
              <div className="heading-part mb-20 mt-40">
                <h3 className="section_title">What We Do?</h3>
              </div>
                <div id="accordion">
                <div className="card my-1">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">1. What is HTML?</a>

                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body"><p>HTML is a computer language devised to can then b the Internet. It is relatively easy to learn, with the basics being accessible.</p>
                    </div>
                  </div>
                </div>
                <div className="card my-1">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">2. What is Bootstrap?</a>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body"><p>Bootstrap is the most popular HTML, CSS, and JS frameen I discovered Bootstrap a few was still gaining in popularity, addition to HTML, CSS and JS.</p>
                    </div>
                  </div>
                </div>
                <div className="card my-1">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">3. What is CSS?</a>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body"><p>Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the procrt of a web page. Using CSS.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-6">
              <div className="heading-part mb-20 mt-40 ">
                <h3 className="section_title">Skills</h3>
              </div>
              <div id="p_line">
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" style="width: 60%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  <span className="progress-type">HTML / HTML5</span> <span className="progress-completed">60%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 40%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  <span className="progress-type">ASP.Net</span> <span className="progress-completed">40%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 20%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  <span className="progress-type">Java</span> <span className="progress-completed">20%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 60%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  <span className="progress-type">JavaScript / jQuery</span> <span className="progress-completed">60%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 80%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  <span className="progress-type">CSS / CSS3</span> <span className="progress-completed">80%</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- =====  end  ===== --> */}
          <div className="team-section section mt-40">
          {/* <!--Team Carousel --> */}
          <div className="heading-part mb-10">
            <h3 className="section_title mt-50">Our Creative Team</h3>
          </div>
          <div className="team_grid row-10">
            <div className="team3col  owl-carousel">
              <div className="item team-detail">
                <div className="team-item-img"> <img src="images/tm1.jpg" alt="" /> </div>
                <div className="team-designation mt-20">php Developer</div>
                <h4 className="team-title  my-2">joseph Lui </h4>
                <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt-20 mb-80">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src="images/tm2.jpg" alt="" /> </div>
                <div className="team-designation mt-20">php Developer</div>
                <h4 className="team-title  my-2">joseph Lui </h4>
                <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt-20 mb-80">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src="images/tm3.jpg" alt="" /> </div>
                <div className="team-designation mt-20">php Developer</div>
                <h4 className="team-title  my-2">joseph Lui </h4>
                <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt-20 mb-80">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src="images/tm4.jpg" alt="" /> </div>
                <div className="team-designation mt-20">php Developer</div>
                <h4 className="team-title  my-2">joseph Lui </h4>
                <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt-20 mb-80">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="item team-detail">
                <div className="team-item-img"> <img src="images/tm5.jpg" alt="" /> </div>
                <div className="team-designation mt-20">php Developer</div>
                <h4 className="team-title  my-2">joseph Lui </h4>
                <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                <ul className="social mt-20 mb-80">
                  <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                  <li><a href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  
    </React.Fragment>
  )
}

export default AboutComp