import React from "react";

const Banner = () => {
  return (
    <div className="section slider-banner set-height-top" >
      <div className="slider-item">
        <div className="slider-1" style={{ 
      backgroundImage: `url("assets//images/background-slider-1.jpg")` 
    }}>
          <div className="slider-caption">
            <div className="container">
              <h5 className="text-info-2">You only have to know one thing</h5>

              <h1 className="text-info-1">You can learn anything</h1>

              <p className="text-info-3">For free. For everyone</p>
              <button className="btn btn-green">
                <span>Start learning now !</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
