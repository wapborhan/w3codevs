import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-topbar">
        <div className="container">
          <div className="topbar-left float-start">
            <div className="email">
              <a href="#">
                <i className="topbar-icon fa fa-envelope-o"></i>
                <span>w3Codevs@gmail.com</span>
              </a>
            </div>
            <div className="hotline">
              <a href="#">
                <i className="topbar-icon fa fa-phone"></i>
                <span>+84 909 015 345</span>
              </a>
            </div>
          </div>
          <div className="topbar-right ms-auto">
            <div className="socials">
              <a href="#" className="facebook">
                f<i className="fa fa-facebook"></i>
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
            {/* <div className="group-sign-in">
                        <a href="login.html" className="login">login</a><a href="register.html"
                            className="register">register</a>
                    </div>  */}
          </div>
        </div>
      </div>
      <div className="header-main homepage-01">
        <div className="container">
          <div className="header-main-wrapper">
            <div className="navbar-heade">
              <div className="logo pull-left">
                <a href="index.html" className="header-logo">
                  <img src="assets/images/logo-color-1.png" alt="" />
                </a>
              </div>
              <button
                type="button"
                data-toggle="collapse"
                data-target=".navigation"
                className="navbar-toggle edugate-navbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <nav className="navigation collapse navbar-collapse pull-right">
              <ul className="nav-links nav navbar-nav">
                <li className="dropdown active">
                  <a href="#" className="main-menu">
                    Home
                    {/* <span className="fa fa-angle-down icons-dropdown"></span>  */}
                  </a>
                  {/* <ul className="dropdown-menu edugate-dropdown-menu-1">
                                    <li>
                                        <a href="index.html" className="link-page">Home page 01</a>
                                    </li>
                                    <li>
                                        <a href="homepage-02.html" className="link-page">Home page 02</a>
                                    </li>
                                    <li>
                                        <a href="homepage-03.html" className="link-page">Home page 03</a>
                                    </li>
                                </ul>  */}
                </li>
                <li className="dropdown">
                  <a href="#" className="main-menu">
                    Courses
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="main-menu">
                    gallery
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="main-menu">
                    News
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="main-menu">
                    Contact
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="main-menu">
                    pages
                    <span className="fa fa-angle-down icons-dropdown"></span>
                  </a>
                  <ul className="dropdown-menu edugate-dropdown-menu-1">
                    <li>
                      <a href="categories.html" className="link-page">
                        categories
                      </a>
                    </li>
                    <li>
                      <a href="profile-teacher.html" className="link-page">
                        profile teacher
                      </a>
                    </li>
                    <li>
                      <a href="about-us.html" className="link-page">
                        about us
                      </a>
                    </li>
                    <li>
                      <a href="login.html" className="link-page">
                        login
                      </a>
                    </li>
                    <li>
                      <a href="register.html" className="link-page">
                        register
                      </a>
                    </li>
                    <li>
                      <a href="404.html" className="link-page">
                        404 page
                      </a>
                    </li>
                    <li>
                      <a href="faq.html" className="link-page">
                        FAQ page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="button-search">
                  <p className="main-menu">
                    <i className="fa fa-search"></i>
                  </p>
                </li>
                <div className="nav-search hide">
                  <form>
                    <input
                      type="text"
                      placeholder="Search"
                      className="searchbox"
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    ></button>
                  </form>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
