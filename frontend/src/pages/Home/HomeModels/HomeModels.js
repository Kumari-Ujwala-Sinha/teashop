import React from "react";
import { Link } from "react-router-dom";
import "./homemodel.css";

function HomeModels() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="productAnalysis" id="productanalysis">
        <div className="product__header">
          <h1 className="text__wrapper__head">ANALYSIS</h1>
        </div>


        <div className="analysisWrapper">
          
          <div className="analysisItems">
              <img src='/homeImg/mentalIcon.png' className="analysisImg"/>
              <div className="analysisText">
                <h2 className="analysisHead">Mental Wellness</h2>
                <p className="analysisPara">Slim down — without unsustainable diets, guilt or an emotional rollercoaster every time you look at the scale.</p>
              </div>
              <Link to='/mental-health-analysis' className="analysisBtn"><div className="analysisBtnDiv">Find Out How</div></Link>
          </div>

          <div className="analysisItems">
          <img src='/homeImg/weight-manage.png' className="analysisImg"/>
              <div className="analysisText">
                <h2 className="analysisHead">Weight Management</h2>
                <p className="analysisPara">Slim down — without unsustainable diets, guilt or an emotional rollercoaster every time you look at the scale Slim down — without you look at the scale .</p>
              </div>
              <Link to='/' className="analysisBtn"><div className="analysisBtnDiv">Find Out How</div></Link>
          </div>

          <div className="analysisItems">
          <img src='/homeImg/womenWellness.png' className="analysisImg"/>
              <div className="analysisText">
                <h2 className="analysisHead">Women Wellness</h2>
                <p className="analysisPara">Slim down — without unsustainable diets, guilt or an emotional rollercoaster every time you look at the scale.</p>
              </div>
              <Link to='/pcos-detection' className="analysisBtn"><div className="analysisBtnDiv">Find Out How</div></Link>
          </div>

          <div className="analysisItems">
          <img src='/homeImg/skinIcon.png' className="analysisImg"/>
              <div className="analysisText">
                <h2 className="analysisHead">Skin Wellness</h2>
                <p className="analysisPara">Slim down — without unsustainable diets, guilt or an emotional rollercoaster every time you look at the scale.</p>
              </div>
              <Link to='/' className="analysisBtn"><div className="analysisBtnDiv">Find Out How</div></Link>
          </div>

          <div className="analysisItems">
          <img src='/homeImg/heartIcon.png' className="analysisImg"/>
              <div className="analysisText">
                <h2 className="analysisHead">Heart Wellness</h2>
                <p className="analysisPara">Slim down — without unsustainable diets, guilt or an emotional rollercoaster every time you look at the scale.</p>
              </div>
              <Link to='/customer-health-analysis' className="analysisBtn"><div className="analysisBtnDiv">Find Out How</div></Link>
          </div>
          <div className="analysisItems">
          <img src='/homeImg/diabetesIcon.png' className="analysisImg"/>
              <div className="analysisText">
                <h2 className="analysisHead">Diabetes</h2>
                <p className="analysisPara">Slim down — without unsustainable diets, guilt or an emotional rollercoaster every time you look at the scale.</p>
              </div>
              <Link to='/diabetes-predictor' className="analysisBtn"><div className="analysisBtnDiv">Find Out How</div></Link>
          </div>
        </div>
        {/* <div className="product__items">
          <div className="productImgContainer">
            <Link
              onClick={scrollToTop}
              to="/customer-health-analysis"
              className="boxItemOne"
            >
              <img
                src="images/customerHealthAnalysis.jpg"
                className="lyfeBoxImg"
                alt="model1"
              />
              <h2>Customer Health Analysis</h2>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/diabetes-predictor"
              className="boxItemOne"
            >
              <img
                src="images/DiabetesPredictor.jpg"
                className="lyfeBoxImg"
                alt="model2"
              />
              <h2>Diabetes Predictor</h2>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/pcos-detection"
              className="boxItemOne"
            >
              <img src="images/pcos.jpg" className="lyfeBoxImg" alt="model3" />
              <h2>PCOS Detection</h2>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/mental-health-analysis"
              className="boxItemOne"
            >
              <img
                src="images/Mental_Health.jpeg"
                className="lyfeBoxImg"
                alt="model4"
              />
              <h2>Mental Health Analysis</h2>
            </Link>
          </div>
        </div> */}


      </div>
    </>
  );
}

export default HomeModels;
