import React, { useState } from "react";
import "./Home.css";
import NavBar from "../../components/NavBar";
import { loadCatalog } from "../../services/catalog";
import {toast} from 'react-toastify'
import { config } from "../../services/config";
// import { Link} from "react-router-dom";
function Home() {
const [items, setItems] = useState([])

const getCatalog = async () => {
  const result = await loadCatalog()
  if (result['status'] == 'success') {
    setItems(result['data'])
  }else{
    toast.error(result['error'])
  }
   console.log(result)
}

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/home'>Food App</Link>
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
              <Link className="nav-link active" aria-current="page" to='/home'>
                Home
              </Link>
              <Link className="nav-link" to='/cart'>
                Cart
              </Link>
              <Link className="nav-link" to='/orders' >
                Orders
              </Link>
              <Link className="nav-link disabled" aria-disabled="true">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
      <NavBar/>
      <div className="container">
      <h2 className="page-header">Home Pge</h2>
      <button onClick={getCatalog}>load Catalog</button>
     <div className="row" mt-3>
      {items.map(item => {
        const imageUrl = `${config.serverBaseUrlCatalog}/${item['image']}`
        console.log('Image URL:', imageUrl)
        return  <div className="col-3">
        <div className="card">
          <img
          style={{height: 200}}
          src={imageUrl} className="card-img-top" alt="..."></img>
          <div className="card-body">
    <h5 className="card-title">{item['title']}</h5>
    <p className="card-text">{item['description']}</p>
    
  </div>
        </div>
      </div>
      })}

     </div>
      </div>
    </div>
  );
}

export default Home;
