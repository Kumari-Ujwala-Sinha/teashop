import React from 'react';
import './product_item.css';
function Product_item() {
    const arr = [
        {
            img1:"/prod_1.jpg",
            head:"Gut Health & Digestion"
        },
        {
            img1:"/prod_2.jpg",
            head:"Beauty(Skins, Nails, Hair & Wrinkles) & WeightLoss"
        },
        {
            img1:"/prod_3.jpg",
            head:"Heart Health & Immunity, Joint & Bones"
        },
        {
            img1:"/prod_4.jpg",
            head:"Stress /Anxiety /Depression /Hypertension /Insomnia /Sleep"
        },
        // {
        //     img1:"/prod_5.jpg",
        //     head:"Mindset /Focus /Clear Head /Tiedness /Satmina /Lethargy"
        // },
        // {
        //     img1:"/prod_6.jpg",
        //     head:"Diabetes, High Cholesteol & Insulin"
        // },
    ]
return  (
    arr.map((val)=>{
        return (<div className='product__item__container'>
            <div className='product__item'>
                <img src={val.img1} alt=""/>
            </div>
            <a href="/product" className='product__item__hover__containter'>
                <div>
                    <div className='product__item__hover__head'>{val.head}</div>
                    <div className='product__item__hover__para'>Our store offers a wide range of teas from all over the world.</div>
                </div>
            </a>
        </div>)
        })
    );
}

export default Product_item;
