import React from "react";

const Blog = () => {
  return (
    <div className="section section-padding latest-news">
      <div className="container">
        <div className="group-title-index">
          <h4 className="top-title">latest news</h4>

          <h2 className="center-title">all about edugate updates</h2>

          <div className="bottom-title">
            <i className="bottom-icon icon-a-01-01"></i>
          </div>
        </div>
        <div className="latest-news-wrapper">
          <div className="row">
            <div className="col-md-4">
              <div className="edugate-layout-1 edugate-layout-d">
                <div className="edugate-images">
                  <img
                    src="assets/images/news/news-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="edugate-content">
                  <a href="news-detail.html" className="title">
                    Effective researching method
                  </a>
                  <div className="d-flex justify-content-between">
                    <div className="info">
                      <div className="author item">
                        <a href="#">By Admin</a>
                      </div>
                      <div className="date-time item">
                        <a href="#">17 sep 2015</a>
                      </div>
                    </div>
                    <div className="info-more">
                      <div className="view item">
                        <i className="fa fa-user"></i>

                        <p>56</p>
                      </div>
                      <div className="comment item">
                        <i className="fa fa-comment"></i>

                        <p>239</p>
                      </div>
                    </div>
                  </div>
                  <div className="description">
                    Dalmatian hello amazing the rmore flung as thanks a manta
                    dealt to under emu some the and one baldbe dear sobbingly
                    save and spitefully less Dalmatian hello amazing the rmore
                    flung as thanks a manta dealt to under emu some the and one
                    baldbe dear sobbingly save and spitefully Dalmatian hello
                    amazing the...
                  </div>
                  {/* <button
                    onclick="window.location.href='news-detail.html'"
                    className="btn btn-green"
                  >
                    <span>learn now</span>
                  </button> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="edugate-layout-1 edugate-layout-d">
                <div className="edugate-images">
                  <img
                    src="assets/images/news/news-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="edugate-content">
                  <a href="news-detail.html" className="title">
                    Effective researching method
                  </a>
                  <div className="d-flex justify-content-between">
                    <div className="info">
                      <div className="author item">
                        <a href="#">By Admin</a>
                      </div>
                      <div className="date-time item">
                        <a href="#">17 sep 2015</a>
                      </div>
                    </div>
                    <div className="info-more">
                      <div className="view item">
                        <i className="fa fa-user"></i>

                        <p>56</p>
                      </div>
                      <div className="comment item">
                        <i className="fa fa-comment"></i>

                        <p>239</p>
                      </div>
                    </div>
                  </div>
                  <div className="description">
                    Dalmatian hello amazing the rmore flung as thanks a manta
                    dealt to under emu some the and one baldbe dear sobbingly
                    save and spitefully less Dalmatian hello amazing the rmore
                    flung as thanks a manta dealt to under emu some the and one
                    baldbe dear sobbingly save and spitefully Dalmatian hello
                    amazing the...
                  </div>
                  {/* <button
                    onclick="window.location.href='news-detail.html'"
                    className="btn btn-green"
                  >
                    <span>learn now</span>
                  </button> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="edugate-layout-1 edugate-layout-d">
                <div className="edugate-images">
                  <img
                    src="assets/images/news/news-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="edugate-content">
                  <a href="news-detail.html" className="title">
                    Effective researching method
                  </a>
                  <div className="d-flex justify-content-between">
                    <div className="info">
                      <div className="author item">
                        <a href="#">By Admin</a>
                      </div>
                      <div className="date-time item">
                        <a href="#">17 sep 2015</a>
                      </div>
                    </div>
                    <div className="info-more">
                      <div className="view item">
                        <i className="fa fa-user"></i>

                        <p>56</p>
                      </div>
                      <div className="comment item">
                        <i className="fa fa-comment"></i>

                        <p>239</p>
                      </div>
                    </div>
                  </div>
                  <div className="description">
                    Dalmatian hello amazing the rmore flung as thanks a manta
                    dealt to under emu some the and one baldbe dear sobbingly
                    save and spitefully less Dalmatian hello amazing the rmore
                    flung as thanks a manta dealt to under emu some the and one
                    baldbe dear sobbingly save and spitefully Dalmatian hello
                    amazing the...
                  </div>
                  {/* <button
                    onclick="window.location.href='news-detail.html'"
                    className="btn btn-green"
                  >
                    <span>learn now</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-green btn-latest-new">
            <span>
              Browser All Post<i className="fa fa-long-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
