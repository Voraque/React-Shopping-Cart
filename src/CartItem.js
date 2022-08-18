import React from "react";
import './CartItem.css'


function CartItem({id, name, price, qty, updateQty}){

    const addOne = ()=>{
        updateQty(id, qty + 1)
    }
    const subtractOne = ()=>{
        updateQty(id, qty - 1)
    }
    return(
        <>
        <div className="Cart-Item">
            <div className="Item-name">{name}</div>
                <div className="Item-price"><span>{price}</span></div>
                <div className="Item-quantity">{qty}
                <div className="Buttons">
                    <button onClick={subtractOne} disabled={qty < 1 ? true : false}>-</button>
                    <button onClick={addOne}>+</button>
                </div>
            </div>
                <div className="Item-total">Total: {qty * price}¥</div>
        </div>
        </>
    )
}

export default CartItem;