
import React, { useEffect, useState } from "react";
import { loadCatalog } from "../../services/catalog";
import {toast} from 'react-toastify'
import { config } from "../../services/config";
import './Products.css'

function Products() {
const [items, setItems] = useState([])
    const getCatalog = async () => {
  const result = await loadCatalog()
  if (result['status'] == 'success') {
    setItems(result['data'])
    console.log(result)
  }else{
    toast.error(result['error'])
  }
  
   console.log(result)

}
useEffect(() =>{
  console.log(`product components loaded`)
  //load the catalog
  getCatalog()

   return () =>{
     console.log(`product components unloaded`)
   }
},[])

  return (
    <div>    
      <h2 className='page-header'> Products</h2>
      {/* <button onClick={getCatalog}>load Catalog</button> */}
     <div className="row mt-3">
      {items.map(item => {
        const imageUrl = `${config.serverBaseUrlCatalog}/${item['image']}`
        console.log('Image URL:', imageUrl)
        return  <div className="col-3">
        <div className="card" style={{position:'relative'}}>
          <img
          style={{height: 200}}
          src={imageUrl} className="card-img-top" alt="..."></img>
      <button className="btn btn-success cart-button">Cart</button>
          <div className="card-body">
    <h5 className="card-title">{item['title']}</h5>
    <p className="card-text">{item['description']}</p>
    
  </div>
        </div>
      </div>
      })}

     </div>
    </div>
  )
}

export default Products
