import React from "react";

const Pricing = () => {
  return (
    <div className="section section-padding pricing">
      <div className="container">
        <div className="group-title-index">
          <h4 className="top-title">chooses your pricing</h4>

          <h2 className="center-title">the best pricing we offered</h2>

          <div className="bottom-title">
            <i className="bottom-icon icon-a-1-01-01"></i>
          </div>
        </div>
        <div className="pricing-wrapper">
          <div className="row">
            <div className="col-sm-4">
              <div className="pricing-widget">
                <div className="pricing-header">
                  <div className="price-cost">
                    <div className="inner">
                      <p
                        data-from="0"
                        data-to="0"
                        data-speed="1000"
                        className="inner-number"
                      >
                        0
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pricing-content">
                  <h3 className="pricing-title">trial</h3>

                  <p className="pricing-subtitle">30 days free trial</p>
                  <ul className="pricing-list">
                    <li>
                      <p>
                        <strong>One day</strong> trial
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Limited</strong> courses
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Free</strong> 3 lessons
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>No</strong> supporter
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>No</strong> ebook
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>No</strong> tutorial
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Limited</strong> registered user
                      </p>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <a href="#">choose plan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="pricing-widget main ">
                <div className="pricing-header">
                  <div className="price-cost">
                    <div className="inner">
                      <p
                        data-from="0"
                        data-to="35"
                        data-speed="1000"
                        className="inner-number"
                      >
                        0
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pricing-content">
                  <h3 className="pricing-title">Standard</h3>

                  <p className="pricing-subtitle">
                    per month when paid annually
                  </p>
                  <ul className="pricing-list">
                    <li>
                      <p>
                        <strong>One year</strong> standard access
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Limited</strong> courses
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>300+</strong> lessons
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Random</strong> supporter
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>View only</strong> ebook
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Standard</strong> tutorials
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Unlimited</strong> registered user
                      </p>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <a href="#">choose plan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="pricing-widget">
                <div className="pricing-header">
                  <div className="price-cost">
                    <div className="inner">
                      <p
                        data-from="0"
                        data-to="89"
                        data-speed="1000"
                        className="inner-number"
                      >
                        0
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pricing-content">
                  <h3 className="pricing-title">Premiere</h3>

                  <p className="pricing-subtitle">
                    per month when paid annually
                  </p>
                  <ul className="pricing-list">
                    <li>
                      <p>
                        <strong>Life time</strong> access
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Unlimited</strong> All courses
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>3000+</strong> lessons & growing
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Free</strong> supporter
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Free</strong> Ebook Downloads
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Premium</strong> tutorials
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Unlimited</strong> registered user
                      </p>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <a href="#">choose plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  );
};

export default Pricing;
