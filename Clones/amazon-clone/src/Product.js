import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    const [state, dispatch] = useStateValue();
    const addtoBasket = () => {
        //Dispatcht the item into  the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                price:price,
                rating:rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>
                    <p>*</p>)}
                </div>    
            </div>
            <img src={image} alt="procut_image"></img>
            <button onClick={addtoBasket}>Add to basket</button>
        </div>
    )
}

export default Product
