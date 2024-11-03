import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, remove } from './Store';
function Cart()
{
    const cartItems=useSelector((state)=>state.cart);

    const dispatch = useDispatch();

    const listItems= cartItems.map((item,index) =>(
        <li key={index}>{item.name}-${item.price}-
        <button onClick={() => dispatch(increment(item))}>+</button>
        <button onClick={() => dispatch(decrement(item))}>-</button>
        <button onClick={()=>   dispatch(remove(item))}>Remove </button>
        Quantity:{item.quantity}
        </li>
    ))
     const[dpamount,setdpAmount]=useState(0);

     const handleDiscountPercentage=(dvalue)=>
        {setdpAmount(dvalue);}

     const [couponCode,setCouponCode]=useState();
     const [couponDiscountPercentage,setCouponDiscountPercentage]=useState(0);
     const handleApplyCoupon=()=>{
        switch(couponCode)
        {
            case 'anil123':
                setCouponDiscountPercentage(10);
                break;
            case 'vamsi123':
                setCouponDiscountPercentage(20);
                break;
            case 'naveen123':
                setCouponDiscountPercentage(30);
                break;
                default:
                    alert('Invalid Coupon Code');
                    setCouponDiscountPercentage(0);
        }
     }

    const calculateTotal=()=>{
    const total=cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0);
    const ftotal=parseFloat(total.toFixed(2));
    const discountAmount=total*(dpamount/100);
    const fdiscount=parseFloat(discountAmount.toFixed(2));
    const couponDiscountAmount=(total*(couponDiscountPercentage/100))
    const cdamount=parseFloat(couponDiscountAmount.toFixed(2));
    const finalTotal=total-discountAmount-couponDiscountAmount;
    const fftotal=parseFloat(finalTotal.toFixed(2));
    

    return{
        // total:parseFloat(total.toFixed(2)),
        // discountAmount:parseFloat(discountAmount.toFixed(2)),
        // finalTotal:parseFloat(finalTotal.toFixed(2))
        ftotal,fdiscount,fftotal,cdamount
    }
  }
// const {total,discountAmount,finalTotal} =calculateTotal();
const{ftotal,fdiscount,fftotal,cdamount}=calculateTotal();





    return (
        <>
        {listItems.length===0?
        (<h2>Cart is empty</h2>):
                 (<>
                    <ul>{listItems}</ul>     
                    <h2>Total Before Discount:{ftotal}</h2>
                    <button onClick={()=>handleDiscountPercentage(10)}>Apply 10% discount</button>
                    <button onClick={()=>handleDiscountPercentage(20)}>Apply 20% discount</button>
                    <button onClick={()=>handleDiscountPercentage(30)}>Apply 30% discount</button>
                    <p>Discount percentage applied:${dpamount}%</p>
                    <p>Discount ammount:{fdiscount}</p>
                  

                    <label>Enter Coupon Code:</label>
                    <input type='text' value={couponCode} onChange={(e)=>setCouponCode(e.target.value)} placeholder='Enter Coupon Code'/>
                    <button onClick={handleApplyCoupon}>Apply Coupon</button>
                    <p>Coupon Discount Amount:${cdamount}</p> 
                    <p>Final Amount after discount:${fftotal}</p>
                    
                 </>
                 )
                }
        </>
    );
}

export default Cart;
