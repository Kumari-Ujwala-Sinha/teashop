import React, { useState } from 'react';
import './header.css';

import SideCart from '../sidecart/SideCart';

function Header() {

    

  return  <div className='nav__header'>
            <div className="product__nav">
                <div className='homeLogo'>
                    <img className='homeLogoImg' src="/hover1.jpg" />
                    <div className='logoHead'>LyfeSpirit <p className='logoSubhead'>DRINK GOOD, FEEL GOOD.</p></div>
                </div>

                

                <SideCart  />
                
            </div>
        </div>;
}

export default Header;
