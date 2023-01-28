import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        itemsInCart:[]

    },
    reducers: {
        setItemInCart: (state, action) =>{
            state.itemsInCart.push(action.payload)

        },

        deleteFromCart:(state, action) =>{
            state.itemsInCart = state.itemsInCart.filter(product =>product.id !==action.payload)

        }

    }
});

export const{setItemInCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;