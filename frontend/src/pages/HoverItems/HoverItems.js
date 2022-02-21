import React from "react";
import hoverData from "./HoverApi";
import { Link } from "react-router-dom";
import './hoverItem.css';
import Header from "../../component/header/Header";

function HoverItems() {
  return (
    <div className="hoverItemsPage">
        <Header />
        <div className="hoverItemWrapper">
          <h2>Process</h2>

          <ul className="nav__hover">
            {hoverData.map((val) => {
              return (<>
                <li className="nav__hover__item">
                  <Link className="hoverAllLink" to={val.link1}>{val.name1}</Link>
                </li>
                
              </>);
            })}
            <li>
                  <Link className="hoverAllLink" to="/allproduct">All Product</Link>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default HoverItems;
