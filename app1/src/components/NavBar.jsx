import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { useSelector } from 'react-redux'

function NavBar() {
  //get the cart items
  const{items} = useSelector(store => store.cart)

//read the user info from AuthContext
const {setUser} = useContext(AuthContext)

  //get the navigate function reference
  const navigate = useNavigate();

  const onLogout = () => {
    //remove all cached data (name, token)
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");

    //reset it user in AuthContex
setUser(null)

    //go to the login screen
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Food App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/app/products">
                Home
              </Link>
              <Link className="nav-link" to="/app/cart">
                Cart ({items.length})
              </Link>
              <Link className="nav-link" to="/app/orders">
                Orders
              </Link>
              <Link className="nav-link" to="/app/profile">
                Profile
              </Link>
              <button
                onClick={onLogout}
                // className="nav-link disabled"
                className="nav-link"
                aria-disabled='true'
              
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
