import React from "react";

const ProgressBar = () => {
  return (
    <div
      className="section progress-bars section-padding bg-dark"
      style={{
        backgroundImage: `url("assets//images/background-count-number.png")`,
      }}
    >
      <div className="container">
        <div className="progress-bars-content">
          <div className="progress-bar-wrapper">
            <h2 className="title-2">Some important facts about us</h2>

            <div className="content">
              <div className="row">
                <div className="col-sm-3 col-md-3">
                  <div className="progress-bar-number">
                    <div
                      data-from="0"
                      data-to="6"
                      data-speed="1000"
                      className="num"
                    >
                      0
                    </div>
                    <p className="name-inner">teachers</p>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3">
                  <div className="progress-bar-number">
                    <div
                      data-from="0"
                      data-to="3"
                      data-speed="1000"
                      className="num"
                    >
                      0
                    </div>
                    <p className="name-inner">courses</p>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3">
                  <div className="progress-bar-number">
                    <div
                      data-from="0"
                      data-to="1200"
                      data-speed="1000"
                      className="num"
                    >
                      0
                    </div>
                    <p className="name-inner">members</p>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3">
                  <div className="progress-bar-number">
                    <div
                      data-from="0"
                      data-to="20"
                      data-speed="1000"
                      className="num"
                    >
                      0
                    </div>
                    <p className="name-inner">State</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-button">
              <button
                href="window.location.href='categories.html'"
                className="btn btn-transition-3"
              >
                <span>About Us</span>
              </button>
              <button
                href="window.location.href='about-us.html'"
                className="btn btn-green-3"
              >
                <span>About Courses</span>
              </button>
            </div>
            <div className="group-btn-slider">
              <div className="btn-prev">
                <i className="fa fa-angle-left"></i>
              </div>
              <div className="btn-next">
                <i className="fa fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
