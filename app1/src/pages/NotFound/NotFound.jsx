import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div>
      <h4>the page you looking for , does not exist</h4>
    <div
    style={{textAlign:'center'}}
    >Login <Link to='/'>Here</Link></div>
    </div>
  )
}

export default NotFound
