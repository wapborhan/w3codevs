import React from "react";

const Testimonials = () => {
  return (
    <div className="section background-opacity slider-talk-about-us">
      <div className="container">
        <div
          id="people-talk"
          data-ride="carousel"
          data-interval="5000"
          className="slider-talk-about-us-wrapper carousel slide"
        >
          <div
            role="listbox"
            className="slider-talk-about-us-content carousel-inner"
          >
            <div className="peopel-item item active">
              <p className="peopel-comment">
                " There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable. "
              </p>

              <div className="group-peole-info">
                <div className="peopel-avatar">
                  <img
                    src="assets/images/people-avatar-1.jpg"
                    alt=""
                    className="img-responsive"
                  />
                </div>
                <div className="peopel-name">john doe</div>
                <div className="people-job">Microshop Crop.SEO</div>
              </div>
            </div>
            <div className="peopel-item item">
              <p className="peopel-comment">
                " There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable. "
              </p>

              <div className="group-peole-info">
                <div className="peopel-avatar">
                  <img
                    src="assets/images/people-avatar-1.jpg"
                    alt=""
                    className="img-responsive"
                  />
                </div>
                <div className="peopel-name">john doe</div>
                <div className="people-job">Microshop Crop.SEO</div>
              </div>
            </div>
            <div className="peopel-item item">
              <p className="peopel-comment">
                " There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable. "
              </p>

              <div className="group-peole-info">
                <div className="peopel-avatar">
                  <img
                    src="assets/images/people-avatar-1.jpg"
                    alt=""
                    className="img-responsive"
                  />
                </div>
                <div className="peopel-name">john doe</div>
                <div className="people-job">Microshop Crop.SEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-btn-slider">
        <a href="#people-talk" role="button" data-slide="prev">
          <div className="btn-prev carousel-control left">
            <i className="fa fa-angle-left"></i>
          </div>
        </a>
        <a href="#people-talk" role="button" data-slide="next">
          <div className="btn-next carousel-control right">
            <i className="fa fa-angle-right"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
