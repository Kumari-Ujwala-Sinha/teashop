import React from 'react';
import './qualityaccom.css';
function Qualityaccom() {
    return (
        <div className="qualityaccom">
            <div className="qualityaccom__backimg">
                <img className='w-full h-full bg-cover bg-center object-cover object-center bg-no-repeat' src="https://roohome.com/wp-content/uploads/2016/08/PLASTER-LINA.jpg" alt="qual"/>
                <div className="qualityaccom__inner__content">
                    <div className="qualityaccom__desc">WHATS IN YOUR LYFE BOX!</div>
                    <p className='qualityaccom__para'>The box has your perfect cup of health. The journey of a thousand miles begins with a single step : Human body is 60% water, so next time you sip water add the right tea to your water.</p>
                    <p className='qualityaccom__subhead'>DRINK GOOD, FEEL GOOD.</p>
                    <button className="qualityaccom__btn">KNOW YOUR HERBS</button>
                    <button className="qualityaccom__btn">GET YOUR LYFE</button>
                </div>
            </div>
        </div>
    )
}

export default Qualityaccom
