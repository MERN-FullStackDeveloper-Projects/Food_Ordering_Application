// yarn add 
// axios react-toastify
//https://getbootstrap.com/
import React from 'react'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <div>
      <Login/>
      <Register/>
      <Home/>
      <Orders/>
      <Cart/>
    </div>
  )
}

export default App
