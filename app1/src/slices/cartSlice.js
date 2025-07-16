import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addToCartAction: (state, payload) => {
console.log(state)
console.log(payload)
        },
        removeFromCartAction: (state,payload) => {
            console.log(state)
console.log(payload)
        },
    },
})
export const {addToCartAction, removeFromCartAction} = cartSlice.actions
export default cartSlice.reducer