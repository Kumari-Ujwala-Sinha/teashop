import React from 'react';
import './review.css';
function Review() {
    const arr=[
        {   img:"/homeImg/homeSlider1.jpg",
            title:"Richard",
            opinion:"Satisfied Customer",
            desc:`"The best publicity is, well, public.  I’ll be honest. One of the most satisfying parts of working in customer service is turning an angry customer into a happy one "`
        },
        {   img:"/homeImg/homeSlider2.jpg",
            title:"Martin",
            opinion:"Satisfied Customer",
            desc:`"The best publicity is, well, public. Tap into your most public-facing resource by engaging with customers on social media platforms. "`
        },
        {   img:"/homeImg/homeSlider1.jpg",
            title:"Newmansfield",
            opinion:"Satisfied Customer",
            desc:`"The best publicity is, well, public. Tap into your most public-facing resource by engaging "`
        }

    ]
    return (
        <div className="review">
            <div className="review__wrapper">
                <h1 className="review__wrapper__head">Reviews</h1>
                <div className="review__features">
                {arr.map((val)=>{
                    return(
                        <div className="review__feature">
                        <div className="review__feature__inner">
                            <div className="review__feature__img">
                                <img src={val.img} alt=""/>
                            </div>
                            <div className="review__feature__info">
                                <h1>{val.title}</h1>
                                <p>{val.opinion}</p>
                            </div>
                        </div>
                        <div className="review__desc">
                            {val.desc}
                        </div>
                    </div>  
                    )
                })}
                            
                </div>
                
            </div>
        </div>
    )
}

export default Review
