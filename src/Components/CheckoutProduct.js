import React from 'react'
import '../Styling/CheckoutProduct.css';
import {useStateValue} from './StateProvider';
import StarIcon from '@material-ui/icons/Star';


function CheckoutProduct({id,image,name,price,rating,hideButton}) {
    const[{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }

    return (
        <div className="checkout-product">
            <img className="checkout-product-image" src={image} />

            <div className="checkout-product-info" >
                <p className="checkout-product-name">{name}</p>
                <p className="checkout-product-price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p><StarIcon/></p>
                    ))}
                    </div>
                        {!hideButton && (
                            <button onClick={removeFromBasket}>
                                Remove from Basket
                            </button>
                        )}
                </div>           
            </div>
    )
}

export default CheckoutProduct
