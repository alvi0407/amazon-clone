import React from 'react';
import '../Styling/Subtotal.css';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer';
import {useHistory} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {

    const history= useHistory();
    const[{basket}, dispatch]= useStateValue();

    return (
        <div className="subtotal">
        <CurrencyFormat
        renderText={(value) => (
            <>{/*fragmants in react*/}
            <p>
              {/* Part of the homework */}
                Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />

        <button>Proceed to Checkout</button>
    </div>
    )
}

export default Subtotal;
