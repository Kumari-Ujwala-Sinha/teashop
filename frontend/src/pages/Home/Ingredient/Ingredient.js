import React from 'react'
import Cinnamon from './Cinnamon';
import Clove from './Clove';
import Licorice from './Licorice';
import PepperMint from './Peppermint';
import Turmeric from './Turmeric';
import './ingredient.css';

function Ingredient() {
  return (
    <div className='ingredient'>
        <div className="p-5 mx-20 mt-8 h-2-5">
            <h2 className="font-light text-4xl text-center titleColor">
            Ingredients for better lifestyle
          </h2>
        <div className="ingredientMain">
          <Cinnamon />
          <Licorice />
          <Clove />
          <Turmeric />
          <PepperMint />
        </div>
      </div>
    </div>
  )
}

export default Ingredient