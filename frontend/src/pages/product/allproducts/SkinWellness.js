import React, { useLayoutEffect } from 'react'
import Header from '../../../component/header/Header'
import MainProduct from '../MainProduct'
import Description from '../Description'
import RelatedProduct from '../RelatedProduct'
import CustomerReview from '../CustomerReview'

function SkinWellness() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div className='singleproduct'>
        <Header />
      <MainProduct productName="Skin Wellness" price="120"  />
      <Description />
      <RelatedProduct />
      <CustomerReview />
    </div>
  )
}

export default SkinWellness