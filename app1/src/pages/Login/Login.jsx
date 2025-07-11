import React, { useState } from 'react'
import './Login.css'
import {toast} from 'react-toastify'
import { login } from '../../services/users'
function Login() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

const onLogin = async () =>{
if (email.length  == 0 ){
  toast.warn('please enter email')
}else if (password.length == 0) {
  toast.warn('please enter password')
}else{
  const result = await login(email,password)
  if(result['status']==['success']){
    toast.success('successfully login')
  }

}
}

  return (
    <div className='container' > 
      <h2 className='page-header'> Login Page</h2>
    
    <div className='login-form'>
    <div className='mb-3'>
      <label htmlFor=''>Email</label>
      <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
    </div>
    <div className='mb-3'>
      <label htmlFor=''>Password</label>
      <input onChange={e=> setPassword(e.target.value)} type="password" className="form-control" />
    </div>
<div className='mb-3'>
  <button onClick={onLogin} className='btn btn-success'>Login</button>
    </div>
    </div>
    </div>
  )
}

export default Login
