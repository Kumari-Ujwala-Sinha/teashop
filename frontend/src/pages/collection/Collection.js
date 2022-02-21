import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../component/header/Header";
import collectionItem from "./collectionItems";

function CollectionItem() {

    const[items, setItems] = useState(collectionItem);
    // const[active, setActive] = useState(true);
    
    // let list = document.getElementsByClassName('collection-item');

    // const removeNav=()=>{
    //     for(let i=0;i<list.length;i++){
    //         for(let j=0;j<list.length;j++){
    //             list[j].classList.remove('activeClass');
    //             setActive(true); 
    //         } 
    //     }
    // }
    let { name } = useParams();
    console.log(name);
    const filterItem = (category)=>{
        const updatedItems = collectionItem.filter((currElem)=>{
            return currElem.category === category;
        })

        // const allCollection = document.getElementsByClassName('collection-item');
        // allCollection.forEach(element => {
        //     element.classList.remove('activeClass');
        // });

        // document.getElementsByClassName(category)[0].classList.add('activeClass');
        setItems(updatedItems);
    }
    
    useEffect(() => {
      filterItem(name);
  }, [])


  return (
    <div className="collectionItem">
      <Header />

      <div className="shopCollection">
        <div className="collectionWrapper">
          <h2>Shop Product</h2>

          {/* <div className="collectionItems">
            <button
              className="collection-item guthealth activeClass"
              onClick={() => filterItem("guthealth")}
            >
              Gut Health
            </button>
            <button
              className="collection-item digestion"
              onClick={() => filterItem("digestion")}
            >
              Digestion
            </button>
            <button
              className="collection-item beauty"
              onClick={() => filterItem("beauty")}
            >
              Beauty
            </button>
            <button
              className="collection-item hearthealth"
              onClick={() => filterItem("hearthealth")}
            >
              Heart Health
            </button>
            <button
              className="collection-item immunity"
              onClick={() => filterItem("immunity")}
            >
              Immunity
            </button>
            <button
              className="collection-item jointnbones"
              onClick={() => filterItem("jointnbones")}
            >
              Joint & Bones
            </button>
            <button
              className="collection-item stress"
              onClick={() => filterItem("stress")}
            >
              Stress
            </button>
            <button
              className="collection-item mindset"
              onClick={() => filterItem("mindset")}
            >
              Mindest
            </button>
            <button
              className="collection-item focus"
              onClick={() => filterItem("focus")}
            >
              Focus
            </button>
            <button
              className="collection-item womenproblem"
              onClick={() => filterItem("womenproblem")}
            >
              Women Problem
            </button>
          </div> */}

          <div className="collectionProducts">
            {items.map((val) => {
              const { id, name, image, price, rating } = val;

              return (
                <div className="colProduct1">
                  <Link className="linkProduct" to="/product">
                    <img src={image} className="colProductImg" />
                    <div className="colProductDesc">
                      <div className="colProductTitle">{name}</div>
                      <div class="singleproduct__rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                      </div>
                      <div className="colProductPrice">{price}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionItem;
