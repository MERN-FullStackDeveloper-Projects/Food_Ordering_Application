import {configurationStore} from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
export const store = configurationStore({
    reducer: {
        cart:cartReducer,
    }
})