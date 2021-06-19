import React from 'react'
import '../Styling/Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';


function Product({id,name,image,price,rating}) {

    const [{basket},dispatch]=useStateValue();
    const addToBasket=() =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                name:name,
                price:price,
                rating:rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product-info" >
                <p>{name}</p>
                <p className="product-price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating" >
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p className="product-rating-star-icon">
                            <StarIcon/>
                        </p>
                    ))}

                </div>
            </div>
            <img src={image}  />
            <button onClick={addToBasket} >Add to Basket</button>
        </div>
    );
}



export default Product;
