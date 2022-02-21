import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <footer className="footerContainer">
        <div className="footerWrapper">
          {/* Footer section1 */}
          <div className="section">
            <div className="sectionWrapper">
              <h2 className="section__head">
                  CONTACT US
              </h2>

              <div className="section1__text">
                  <p>+1 (409) 987–5874</p>
                  <p>info@demolink.org</p>
                  <p>6036 Richmond hwy., Alexandria, VA, 2230</p>
              </div>
            </div>
          </div>

          {/* Footer section2 */}
          <div className="section">
            <div className="sectionWrapper">
              <h2 className="section__head">
                  SUBSCRIBE
              </h2>
              <div className="section2Items">
                  <div className="f-blog__text">
                  Enter your e-mail to receive the latest news from us.
                  </div>

                  <div className="section2Input">
                      <input type="text" placeholder="Your Email" />
                      <button className="section2Btn">Send</button>
                  </div>
              </div>
            </div>
          </div>

          {/* Footer section3 */}
          <div className="section">
            <div className="sectionWrapper">
              <h2 className="section__head">
                  SOCIAL LINKS
              </h2>
              <div className="section3Items">
                <div className="f-blog__text">
                  Enter your e-mail to receive the latest news from us.
                </div>

                <div className="section3Social">
                    <a to="https://www.instagram.com" className="socialIcon"><InstagramIcon /></a>
                    <a to="https://www.facebook.com" className="socialIcon"><FacebookIcon /></a>
                    <a to="https://www.twitter.com" className="socialIcon"><TwitterIcon /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copyright section */}
        <div className="copyright">
          <div className="copyrightContainer">
              <ul className="copyrightNav">
                  <li className="copyrightNavItem">Home</li>
                  <li className="copyrightNavItem">About</li>
                  <li className="copyrightNavItem">Product</li>
              </ul>
              <div className="copyrightAbout"> 
                  <p className="cc__text">
                  LYFESPIRIT ©  - 2022
                </p>{" "}
                <a
                  href="https://engagenreap.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2"
                >
                  {" "}
                  Developed by EnR Team
                </a>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
