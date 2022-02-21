import React, { useEffect, useState } from "react";
import "./homeHeader.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import NoUserOptions from "../layout/Header/NoUserOptions";
import UserOptions from "../layout/Header/UserOptions";
import SideCart from '../sidecart/SideCart';

function Home() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const[navMobSidebar, setNavSidebar] = useState(false);
  const [navbar, setNavbar] = useState(true);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  const handleNavSidebar = ()=>{
    setNavSidebar(!navMobSidebar);
  }

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);

    // to prevent memory leak
    return () => window.removeEventListener("scroll", changeBackground);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="homeHeader">
      <div className={navbar ? "homeNavbar" : "homeNavbarDark"}>
        <div className="homeHeaderWrapper">
          <div className="homeLogo">
            <img className="homeLogoImg" src="./hover1.jpg" />
            <div className="logoHead">
              LyfeSpirit <p className="logoSubhead">DRINK GOOD, FEEL GOOD.</p>
            </div>
          </div>

          <ul className="homeNavWrapper">
            <li className="homeNavItem">
              <Link onClick={scrollToTop} to="/">
                Home
              </Link>
            </li>
            <li className="homeNavItem">
              <Link onClick={scrollToTop} to="/customer-health-analysis">
                Test
              </Link>
            </li>
            <li className="homeNavItem">
              <div className="homeAnalysis">Analysis</div>
              <ul className="hoverNavInner">
                <li className="hoverInnerItem">
                  <Link onClick={scrollToTop} to="/customer-health-analysis">
                    Customer Health Analysis
                  </Link>
                </li>
                {/* <li className='hoverInnerItem'><Link to='/ingredient-analysis'>Ingredient Analysis</Link></li>
                                <li className='hoverInnerItem'><Link to='/tea-tanin-analysis'>Tea Tanin Analysis</Link></li> */}
                <li className="hoverInnerItem">
                  <Link onClick={scrollToTop} to="/diabetes-predictor">
                    Diabetes Predictor
                  </Link>
                </li>
                <li className="hoverInnerItem">
                  <Link onClick={scrollToTop} to="/pcos-detection">
                    PCOS Detection
                  </Link>
                </li>
                <li className="hoverInnerItem">
                  <Link onClick={scrollToTop} to="/mental-health-analysis">
                    Mental Health Analysis
                  </Link>
                </li>
                <li className="hoverInnerItem">
                  <Link onClick={scrollToTop} to="/gut-health-analysis">
                    Gut Health Analysis
                  </Link>
                </li>
                <li className="hoverInnerItem">
                  <Link onClick={scrollToTop} to="/stamina-analysis">
                    Stamina Analysis
                  </Link>
                </li> 
              </ul>
            </li>
            <li className="homeNavItem">
              <Link onClick={scrollToTop} to="/about">
                About
              </Link>
            </li>
            <li className="homeNavItem">
              <Link onClick={scrollToTop} to="/contact">
                Contact
              </Link>
            </li>
             
            <SideCart  />
          </ul>
          {isAuthenticated ? <UserOptions user={user} /> :<NoUserOptions/>}

          {/* sidebar for mobile resolution */}
          <div className='homeNav'>
                        <div className='homeNavIcon' onClick={handleNavSidebar}>
                            <MenuIcon />
                        </div>

                        <div className={navMobSidebar?'homeSidebar':"homeSidebarOpen"}>
                            <div className='homeSideWrapper'>
                                <div className='homeSideClose' onClick={handleNavSidebar}>
                                  <CloseIcon />
                                </div>
                                <ul className='homeNavItems'>
                                  <li className='homeNavItem'><Link to='/' className='homeNavLinn'>Home</Link></li>
                                  
                                  <li className='homeNavItem'><Link to='/customer-health-analysis' className='homeNavLinn'>Test</Link></li>
                                  <li className='homeNavItem'><Link to='/customer-health-analysis' className='homeNavLinn'>Analysis</Link>
                                  </li>
                                  <li className='homeNavItem'><Link to='/about' className='homeNavLinn'>About</Link></li>
                                  <li className='homeNavItem'><Link to='/contact' className='homeNavLinn'>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
