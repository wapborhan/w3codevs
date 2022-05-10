import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <div className="section why-choose-us">
      <div className="why-choose-us-wrapper-top">
        <div className="container">
          <div className="why-choose-us-wrapper">
            <h2 className="title-2">Why w3codevs?</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <button href="categories.html" className="btn btn-green-2">
              <span>start Learn now</span>
            </button>
          </div>
          <div
            data-wow-delay="0.2s"
            data-wow-duration="1.2s"
            className="background-girl-1 wow fadeInUp"
          >
            <img src="assets/images/girl-1.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div
        className="why-choose-us-wrapper-bottom background-opacity"
        style={{
          backgroundImage: `url("assets//images/background-why-choose-us.jpg")`,
        }}
      >
        <div className="container">
          <div
            data-wow-delay="0.4s"
            data-wow-duration="1s"
            className="row why-choose-us-wrapper wow zoomIn"
          >
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xs-6 section-icon">
                <i>
                  <FaPencilAlt />
                </i>
                <p>Over 600 free tutorial</p>
              </div>
              <div className="col-sm-4 col-md-4 col-xs-6 section-icon">
                <i>
                  <FaPencilAlt />
                </i>
                <p>Refund if not Satisfied</p>
              </div>

              <div className="col-sm-4 col-md-4 col-xs-6 section-icon">
                <i>
                  <FaPencilAlt />
                </i>
                <p>Easy to learning everytime, everywhere</p>
              </div>
              <div className="col-sm-4 col-md-4 col-xs-6 section-icon">
                <i>
                  <FaPencilAlt />
                </i>
                <p>Over 3000 Ebook a-vailable</p>
              </div>

              <div className="col-sm-4 col-md-4  col-xs-6 section-icon">
                <i>
                  <FaPencilAlt />
                </i>
                <p>Free updates & support</p>
              </div>
              <div className="col-sm-4 col-md-4 col-xs-6 section-icon">
                <i>
                  <FaPencilAlt />
                </i>
                <p>Flexible payment methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
