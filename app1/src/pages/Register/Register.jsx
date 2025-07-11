import React, { useState } from 'react'
import './Register.css'
import { toast } from 'react-toastify'
import { registerUser } from '../../services/users'
import { Link } from 'react-router-dom'
 function Register() {
// 2
const [firstName ,setFirstName] = useState('')
const [lastName ,setLastName] = useState('')
const [email ,setEmail] = useState('')
const [password ,setPassword] = useState('')
const [confirmPassword ,setConfirmPassword] = useState('')
//4
const onRegister =async () => {
    if (firstName.length == 0) {
        toast.warn('please enter first name')
    }else if (lastName.length == 0) {
        toast.warn('please enter the last name')
    }else if (email.length==0) {
        toast.warn('please enter the email')
    }else if (password.length==0) {
        toast.warn('please enter the password')
    }else if (confirmPassword.length == 0) {
        toast.warn('enter the confirm password')
    }else if (password != confirmPassword) {
        toast.warn('password does not match')
    }else{
        const result = await registerUser(firstName, lastName,email,password)
    if (result['status'] == 'success') {
        toast.success('successfully registered a user')
    }
    }
}


//    1 
  return (
    <div className='container'>
        <h2 className='page-header'>Rergister page</h2>
        {/* div.register-form-container */}
<div className='reg-form-container'>
 {/* firstName, lastName , email, password  */}
<div className='input-container'>
    <label htmlFor=''>First Name</label>
    {/* <input type='text'/> */}
    {/* 3 */}
    <input type="text" onChange={e => setFirstName(e.target.value)} />
</div>
<div className='input-container'>
    <label htmlFor=''>Last Name</label>
    <input type='text' onChange={e => setLastName(e.target.value)}/>
</div>
<div className='input-container'>
    <label htmlFor=''>Email</label>
    <input type='email' onChange={e => setEmail(e.target.value)}/>
</div>
<div className='input-container'>
    <label htmlFor=''>Password</label>
    <input type='password' onChange={e => setPassword(e.target.value)}/>
</div>
<div className='input-container'>
    <label htmlFor=''> Confirm Password</label>
    <input type='password' onChange={e => setConfirmPassword(e.target.value)}/>
</div>
<div className='mb-3'>
    <div className='mb-3'>Already have an account?<Link to='/'>Login here</Link> </div>
 
</div>
<div className='input-container'>
  <button onClick= {onRegister}className="btn btn-success">Register</button>
</div>

    </div>  
    </div>
  )
}

export default Register
