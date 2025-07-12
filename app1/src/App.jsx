// yarn add
// axios react-toastify
//https://getbootstrap.com/
import React from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Home is a parent component */}
        <Route path="/app" element={<Home />}>
        {/*child components */}
         <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
      {/* //without toast container toast not showing pop up  */}
      <ToastContainer />
    </div>
  );
}

export default App;
