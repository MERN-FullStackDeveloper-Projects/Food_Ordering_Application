import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

// function ProtectedRoute(props) {
//     console.log(props)
function ProtectedRoute({children}) {
    //get the user details  from teh authcontext
    // console.log(props)
    const {user} = useContext(AuthContext)

    //if user exists, then allow the  children component
    //else , navigate to the Login componet
//   return user ? children : <Navigate to='/?details=no_login'/>
    return user ? children : <Navigate to='/?details=no_login'/>

    // <div>
    //   <h2>ProtectedRoute</h2>
    // </div>
  
}

export default ProtectedRoute
