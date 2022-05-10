import React from "react";
import { FaDiscourse, FaLaptopCode, FaRegImages } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";

const ChooseCourses = () => {
  return (
    <div className="section section-padding choose-course">
      <div className="container">
        <div className="group-title-index">
          <h4 className="top-title">CHOOSE YOUR COURSE</h4>

          <h2 className="center-title">
            GET THE WORLD className & VERIFIED COURSE
          </h2>

          <div className="bottom-title">
            <i className="bottom-icon icon-icon-04">
              <FaDiscourse />
            </i>
          </div>
        </div>
        <div className="choose-course-wrapper row">
          <div className="col-md-4 col-xs-6">
            <div className="item-course item-1">
              <div className="icon-circle">
                <div className="icon-background">
                  <i className="icons-img icon-globe">
                    <FaLaptopCode />
                  </i>
                </div>
                <div className="info">
                  <div className="info-back">
                    <a href="courses.html">
                      You already learned one, remember?
                    </a>
                  </div>
                </div>
              </div>
              <div className="name-course">
                <a href="courses.html">Web Design</a>
                <i className="fa fa-long-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-6">
            <div className="item-course item-2">
              <div className="icon-circle">
                <div className="icon-background">
                  <i className="icons-img icon-photocamera_1">
                    <FaRegImages />
                  </i>
                </div>
                <div className="info">
                  <div className="info-back">
                    <a href="courses.html">
                      You already learned one, remember?
                    </a>
                  </div>
                </div>
              </div>
              <div className="name-course">
                <a href="courses.html">Graphics Design</a>
                <i className="fa fa-long-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-6">
            <div className="item-course item-3">
              <div className="icon-circle">
                <div className="icon-background">
                  <i className="icons-img icon-computer_network">
                    <GiCyberEye />
                  </i>
                </div>
                <div className="info">
                  <div className="info-back">
                    <a href="courses.html">
                      You already learned one, remember?
                    </a>
                  </div>
                </div>
              </div>
              <div className="name-course">
                <a href="courses.html">Cyber Security</a>
                <i className="fa fa-long-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseCourses;
