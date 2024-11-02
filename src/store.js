import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cart from "./Cart";

const productSlice=createSlice(
    {
        name: 'products',
        initialState:{
            veg:[
                {name:'tomato',price:200.5},
                {name:'potato',price:100.2},
                {name:'carrot',price:50.5},
                {name:'beetroot',price:60.4},
                {name:'brinjal',price:40.5}
            ],
            nonveg:[
                {name:'chicken',price:500},
                {name:'mutton',price:800},
                {name:'fish',price:400},
                {name:'prawns',price:500},
                
              ],
            },
reducers:{}
});

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        }
    }
})



const store=configureStore(
    {
        reducer:
        {products:productSlice.reducer,
            cart:cartSlice.reducer,
        }
    })

export default store;
export const {addToCart}=cartSlice.actions;