import React, { useContext, useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { login } from "../../services/users";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //get the user details from AuthContext we just wanna updated
  const {setUser} = useContext(AuthContext)

//get the navigate function reference
const navigate = useNavigate()


  const onLogin = async () => {
    if (email.length == 0) {
      toast.warn("please enter email");
    } else if (password.length == 0) {
      toast.warn("please enter password");
    } else {
      const result = await login(email, password);
      if (result["status"] == 'success') {
        toast.success("successfully login");

//chache the required data
const data= result['data'] 
sessionStorage.setItem('name',`${data['firstName']}  ${data['lastName']}`)
sessionStorage.setItem('token',`${data['token']}`)
sessionStorage.setItem('user',JSON.stringify({
   firstName:data['firstName'],
  lastName: data['lastName'],
}))

//update the AuthContext
setUser({
  firstName:data['firstName'],
  lastName: data['lastName'],
})

//go to the home screen
navigate('/app/products')

      }else{
        toast.error('invalid user')
      }
    }
  };

  return (
    <div className="container">
      <h2 className="page-header"> Login Page</h2>

      <div className="login-form">
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          {/* //directly given ancher tag its not a final solution to hit link Register here page reload server side rendering if u see ganna.com website is pure client side rendering logo not render*/}
          {/* <div className='mb-3'>dont have an account yet? <a href='/register'>Register here</a></div> */}
          {/* after add Link to my aplication purely loading acting as SPA client side */}
          <div className="mb-3">
            dont have an account yet? <Link to="/register">Register here</Link>
          </div>
          <button onClick={onLogin} className="btn btn-success">
            Login
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;
