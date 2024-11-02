import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
function Cart()
{
    const cartItems=useSelector((state)=>state.cart);

    const listItems= cartItems.map((item,index) =>(
        <li key={index}>{item.name}-${item.price}-{item.quantity}</li>
    ))
    return (
        <>
        {listItems.length===0?
        (<h2>Cart is empty</h2>):
        (<ul>{listItems}</ul>)
    }  
        </>
    );
}

export default Cart;
