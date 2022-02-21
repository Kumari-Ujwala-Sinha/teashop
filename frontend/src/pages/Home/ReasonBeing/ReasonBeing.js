import React from 'react';
import './reasonbeing.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

function ReasonBeing() {
 

  return <div className='reason-being'>
            <div className='reason__header'>
                <h1 className='text__wrapper__head'>REASON FOR BEING</h1>  
            </div>
           
            <Carousel
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={true}
                interval={2500}
                stopOnHover={false}
            >
                <div className='reasonContainer'>
                    <div className='reasonSlider'>
                        <div className='reasonDetail'>
                            <h2 className='reasonDetailHead'>Vision</h2>
                            <p className='reasonDetailPara'>People are more at a risk of DOSHA "Diseases" than Death..</p>
                            <p className='reasonDetailPara'> People are more likely to commit stress than be killed in Conflict..</p>
                            <p className='reasonDetailPara'>People are more at risk of obesity than Starvation</p>
                            <p className='reasonDetailPara'>People are more at a risk of DOSHA "Diseases" than Death..</p>
                            <p className='reasonDetailPara'> People are more likely to commit stress than be killed in Conflict..</p>
                            <p className='reasonDetailPara'>People are more at risk of obesity than Starvation</p>
                        </div>
                        <div className='reasonImgContainer'>
                            <img className='reasonImg' src="/prod_1.jpg" />
                        </div>
                    </div>            
                </div>

                <div className='reasonContainer'>
                    <div className='reasonSlider'>
                        <div className='reasonDetail'>
                            <h2 className='reasonDetailHead'>Benefit</h2>
                            <p className='reasonDetailPara'>People are more at a risk of DOSHA "Diseases" than Death..</p>
                            <p className='reasonDetailPara'> People are more likely to commit stress than be killed in Conflict..</p>
                            <p className='reasonDetailPara'>People are more at risk of obesity than Starvation</p>
                            <p className='reasonDetailPara'>People are more at a risk of DOSHA "Diseases" than Death..</p>
                            <p className='reasonDetailPara'> People are more likely to commit stress than be killed in Conflict..</p>
                            <p className='reasonDetailPara'>People are more at risk of obesity than Starvation</p>
                        </div>
                        <div className='reasonImgContainer'>
                            <img className='reasonImg' src="/prod_2.jpg" />
                        </div>
                    </div>            
                </div>

                <div className='reasonContainer'>
                    <div className='reasonSlider'>
                        <div className='reasonDetail'>
                            <h2 className='reasonDetailHead'>Interest</h2>
                            <p className='reasonDetailPara'>People are more at a risk of DOSHA "Diseases" than Death..</p>
                            <p className='reasonDetailPara'> People are more likely to commit stress than be killed in Conflict..</p>
                            <p className='reasonDetailPara'>People are more at risk of obesity than Starvation</p>
                            <p className='reasonDetailPara'>People are more at a risk of DOSHA "Diseases" than Death..</p>
                            <p className='reasonDetailPara'> People are more likely to commit stress than be killed in Conflict..</p>
                            <p className='reasonDetailPara'>People are more at risk of obesity than Starvation</p>
                        </div>
                        <div className='reasonImgContainer'>
                            <img className='reasonImg' src="/prod_3.jpg" />
                        </div>
                    </div>            
                </div>
            </Carousel>
  </div>;
}

export default ReasonBeing;
