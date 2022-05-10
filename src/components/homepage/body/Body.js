import React from "react";
import Banner from "./banner/Banner";
import Blog from "./blog/Blog";
import ChooseCourses from "./choose-courses/ChooseCourses";
import ChooseUs from "./choose-us/ChooseUs";
import Clients from "./clients/Clients";
import Courses from "./courses/Courses";
// import Gallery from "./gallery/Gallery";
import Pricing from "./pricing/Pricing";
import ProgressBar from "./progress/ProgressBar";
import Staff from "./staff/Staff";
// import Testimonials from "./testimonials/Testimonials";

const Body = () => {
  return (
    <div className="wrapper-content">
      <div id="page-wrapper">
        <div className="main-content">
          <div className="content">
            <Banner />
            <ChooseCourses />
            <ProgressBar />
            <Courses />
            <ChooseUs />
            <Pricing />
            {/* <Testimonials /> */}
            <Blog />
            <Staff />
            {/* <Gallery /> */}
            <Clients />
          </div>
        </div>
      </div>
      <div id="back-top">
        <a href="#top">
          <i className="fa fa-angle-double-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Body;
