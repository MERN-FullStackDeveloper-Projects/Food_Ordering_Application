import React from "react";
import "./success.css";
import { Link } from "react-router-dom";
function Success() {
  return(
  <div className="container">
    <div className="success-container">
      <div className="title">Success</div>
      <div className="success-message">
        your payment was successfully ! thank you for your purchase...
      </div>
      <div className="success-message">
        <Link to="/app/products">Home</Link>{" "}
      </div>
    </div>
  </div>)
}

export default Success;
