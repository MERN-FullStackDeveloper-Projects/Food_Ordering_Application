import React from 'react'
import { Link } from "react-router-dom";

import './error.css'
function Error() {
  return (
  <div className="container">
    <div className="error-container">
      <div className="title">Error</div>
      <div className="error-message">
        your payment was not successfully ! try again
      </div>
      <div className="error-message">
        <Link to="/app/products">Home</Link>{" "}
      </div>
    </div>
  </div>)
}

export default Error
