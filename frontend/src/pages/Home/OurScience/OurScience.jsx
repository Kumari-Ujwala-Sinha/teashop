import React from "react";
import { Link } from "react-router-dom";
import "./ourscience.css";
function Featured() {
  
  return (
    <div className="featured">
      <div className="scienceWrapper">
        <h1 className="text__wrapper__head">Our Science - How we help you</h1>
        <p className="science__wrapper__desc">Tea Blended with the right herbs harmonises all elements which are the essential force of life. Any disease
          is a sign of disharmony that thwart’s the body’s natural healing abilities and the right herbs provide the
          natural healing with blended in your daily cuppa.</p>
        <div className="scienceMain"> 
          <div className="scienceImgContainer">
              {/* <img className="scienceImg" src="/homeImg/teaLogo.png" /> */}
              <div class="video-responsive">
                    <video controls poster="/homeImg/videoImg2.png" src="/video/ourScience.mp4" type="video/mp4"></video>
            </div>
          </div>

          <div className="science__features">
              <div >
                  <Link to='/customer-health-analysis' className="science__feature">
                    <h2 className="scienceColHead">Know your current state of health </h2>
                    <span className="scienceColSide">01</span>
                  </Link>
              </div>
              <div>
                <a href='#productanalysis' className="science__feature">
                  <h2 className="scienceColHead">Identify the right herbs for you </h2>
                  <span className="scienceColSide">02</span>
                </a>
              </div>
              <div>
                <Link to='/products' className="science__feature">
                  <h2 className="scienceColHead">Curate the right tea blend for you</h2>
                  <span className="scienceColSide">03</span>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
