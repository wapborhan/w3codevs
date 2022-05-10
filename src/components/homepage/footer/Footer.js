import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-wrapper">
            <div className="footer-top-left">
              <p className="footer-top-focus">BECOME AN INSTRUCTOR</p>

              <p className="footer-top-text">
                Join thousand of instructors and earn money hassle free!
              </p>
            </div>
            <div className="footer-top-right">
              <button href="contact.html" className="btn btn-blue btn-bold ">
                <span>GET STARTED NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="container">
          <div className="footer-main-wrapper">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-6 sd380">
                <div className="edugate-widget widget">
                  <div className="title-widget">EDUGATE</div>
                  <div className="content-widget">
                    <p>
                      Edugate is a great start for an education personnel or
                      organization to start the online business with 1 Click.
                    </p>

                    <div className="info-list">
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-envelope-o"></i>
                          <a href="#">hello@edugate.com</a>
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>
                          <a href="#">P: 3333 222 1111</a>
                        </li>
                        <li>
                          <i className="fa fa-map-marker"></i>
                          <a href="#">
                            <p>99 Barnard St - Suite 111</p>

                            <p>United States - GA 22222</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-6 sd380">
                <div className="useful-link-widget widget">
                  <div className="title-widget">USEFUL LINKS</div>
                  <div className="content-widget">
                    <div className="useful-link-list">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          <ul className="list-unstyled">
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Teachers</a>
                            </li>
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Courses</a>
                            </li>
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Support</a>
                            </li>
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Why Edugate</a>
                            </li>
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Social Media</a>
                            </li>
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Site Map</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          <ul className="list-unstyled">
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Company</a>
                            </li>
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Latest Courses</a>
                            </li>
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Partners</a>
                            </li>
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Blog Post</a>
                            </li>
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Help Topic</a>
                            </li>
                            <li>
                              <i className="fa fa-angle-right"></i>
                              <a href="#">Policies</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 sd380">
                <div className="mailing-widget widget">
                  <div className="title-widget">MAILING</div>
                  <div className="content-wiget">
                    <p>
                      Sign up for our mailing list to get latest updates and
                      offers.
                    </p>

                    <form action="http://swlabs.co/edugate/html/index.html">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Email address"
                          className="form-control form-email-widget"
                        />
                        <span className="input-group-btn">
                          <input
                            type="submit"
                            value="✓"
                            className="btn btn-email"
                          />
                        </span>
                      </div>
                    </form>
                    <p>We respect your privacy</p>

                    <div className="socials">
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#" className="google">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#" className="pinterest">
                        <i className="fa fa-pinterest"></i>
                      </a>
                      <a href="#" className="blog">
                        <i className="fa fa-rss"></i>
                      </a>
                      <a href="#" className="dribbble">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hyperlink">
            <div className="text-center text-light ">
              © 2022. All Rights Reserved By
              <span className="text-danger text-uppercase"> w3codevs</span> |
              Design By{" "}
              <a
                className="text-decoration-none text-warning"
                href="http://www.wapborhan.com"
              >
                Borhan Uddin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
