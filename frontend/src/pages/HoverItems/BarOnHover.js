import React from 'react';

function BarOnHover() {
  return <div>
      <div className="hoverItem">
                    <div className="hoverItemContainer">
                      <div className="hoverItemsList">
                        <div className="hover__item__one">
                        <Link to={val.link1} ><img src={val.img1} className="hover__item__img" /></Link>
                          <div className="hover__item__name">{val.name1}</div>
                        </div>

                        <div className="hover__item__one">
                        <Link to={val.link2} ><img src={val.img2} className="hover__item__img" /></Link>
                          <div className="hover__item__name">{val.name2}</div>
                        </div>

                        <div className="hover__item__one">
                        <Link to={val.link3} ><img src={val.img3} className="hover__item__img" /></Link>
                          <div className="hover__item__name">{val.name3}</div>
                        </div>

                        <div className="hover__item__one">
                        <Link to={val.link4} ><img src={val.img4} className="hover__item__img" /></Link>
                          <div className="hover__item__name">{val.name4}</div>
                        </div>

                        <div className="hover__item__one">
                        <Link to={val.link5}> <img src={val.img5} className="hover__item__img" /></Link>
                          <div className="hover__item__name">{val.name5}</div>
                        </div>

                        {val.name6 ? (
                          <div className="hover__item__one">
                          <Link to={val.link6} ><img src={val.img6} className="hover__item__img" /></Link>
                            <div className="hover__item__name">{val.name6}</div>
                          </div>
                        ) : (
                          ""
                        )}

                        {val.name7 ? (
                          <div className="hover__item__one">
                          <Link to={val.link7} ><img src={val.img7} className="hover__item__img" /></Link>
                            <div className="hover__item__name">{val.name7}</div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      
                    </div>
                  </div>
  </div>;
}

export default BarOnHover;
