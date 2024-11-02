import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Store';
function NonVeg()
{
  const nonVegproducts=useSelector(state=>state.products.nonveg);

  const dispatch=useDispatch()
const items=nonVegproducts.map((product,index)=>
<li key={index}>
{product.name} - ${product.price.toFixed(2)}
<button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
</li>)


    return (
        <>
          <h1>This are Non-Veg products</h1>  
          <ul>{items}</ul>
        </>
    );
}

export default NonVeg;
