import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addToCartAction: (state, {payload}) => {
            //check if the product already present
            if(state.items.findIndex(item => item.id == payload.id) == -1 ){
                //the item does not exist in the cart
                //add the item push  to the items list
                state.items.push({...payload, quantity:1})
            }
console.log(state)
console.log(payload)
        },
        removeFromCartAction: (state,{payload}) => {
const {id} = payload
// console.log(`id: ${id},quantity: ${quantity}`)
//find the product which matcges with the id
const index = state.items.findIndex((item) => item.id == id)
console.log(`index = ${index}`)
if (index > -1) {
    state.items.splice(index, 1)
}

//             console.log(state)
// console.log(payload)
        },
        updateQuantityAction: (state, {payload})=> {
//  console.log(state)
// console.log(payload)
const {id, quantity} = payload
// console.log(`id: ${id},quantity: ${quantity}`)
//find the product which matcges with the id
const index = state.items.findIndex((item) => item.id == id)
state.items[index].quantity += quantity
        }
    },
})
export const {addToCartAction, removeFromCartAction, updateQuantityAction} = cartSlice.actions
export default cartSlice.reducer