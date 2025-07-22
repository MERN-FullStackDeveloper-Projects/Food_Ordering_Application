// yarn add axios react-toastify
// https://getbootstrap.com/

import React, { createContext, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import Success from "./pages/Success/Success";  // ✅ Add this component
import Error from "./pages/Error/Error";        // ✅ Add this component
import ProtectedRoute from "./components/ProtectedRoute";

// Create context to share user details with all components
export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Error />} />
          <Route index path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          {/* Protected Home Route with nested child routes */}
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>

        {/* Toast notification container */}
        <ToastContainer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;


// // yarn add
// // axios react-toastify
// //https://getbootstrap.com/
// import React, { createContext, useState } from "react";

// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import Home from "./pages/Home/Home";
// import Orders from "./pages/Orders/Orders";
// import Cart from "./pages/Cart/Cart";
// // import { Navigate, Route, Routes } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import Products from "./pages/Products/Products";
// import Profile from "./pages/Profile/Profile";
// import NotFound from "./pages/NotFound/NotFound";
// import ProtectedRoute from "./components/ProtectedRoute";

// //create a context to share the user details all the components
//  export const AuthContext = createContext()

// function App() {
// const [user, setUser] = useState(null)
  
//   return (
//     <div>
// <AuthContext.Provider value={{user, setUser}}>

//       <Routes>
//         <Route
//       path="/success"
//       element={<Success/>}
//         />
//  <Routes>
//         <Route
//       path="/cancel"
//       element={<Error/>}
//         />

//         <Route index path='/' element={<Login />} />
//         <Route path="/register" element={<Register />} />
//                 <Route path="*" element={<NotFound />} />

//         {/* Home is a parent component */}
//         {/* <Route path="/app" element={<Home />}>  if user is available only then let user access this component otherwise redirect ti / */}
       
       
//         {/* <Route path="/app" element={user? <Home /> : <Navigate to='/'/>}> */}
//       {/* other soultion */}
//                <Route path="/app" element={<ProtectedRoute>
//                 <Home/>
//                </ProtectedRoute>}>

//         {/*child components */}
//          <Route path="products" element={<Products />} />
//           <Route path="cart" element={<Cart />} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="profile" element={<Profile />} />
//         </Route>
//       </Routes>
//       {/* //without toast container toast not showing pop up  */}
//       </AuthContext.Provider>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;
