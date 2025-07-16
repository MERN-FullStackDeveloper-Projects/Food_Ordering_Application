import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addToCartAction: (state, {payload}) => {
            //check if the product already present
            if(state.items.findIndex(item => item.id == payload.id) != -1 ){
                //teh item does not exist in the cart
                //add the item push  to the items list
                state.items.push(payload)
            }
console.log(state)
console.log(payload)
        },
        removeFromCartAction: (state,{payload}) => {

            console.log(state)
console.log(payload)
        },
    },
})
export const {addToCartAction, removeFromCartAction} = cartSlice.actions
export default cartSlice.reducer