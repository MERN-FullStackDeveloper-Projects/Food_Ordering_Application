// yarn add 
// axios react-toastify
//https://getbootstrap.com/
import React from 'react'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
