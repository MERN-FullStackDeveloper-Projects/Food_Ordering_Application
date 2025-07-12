import React, { useEffect, useState } from 'react'
import { getProfile } from '../../services/users'
import { toast } from 'react-toastify'

function Profile() {
    const [profile, setProfile] =useState(null)
    const loadProfile = async ()  => {
     const result = await getProfile()
     if (result['status']=='success') {
      setProfile(result['data'])  
     }  else{
        toast.error(result['error'])
     }
    }

    useEffect(() => {
        console.log(`profile component got loaded`)
      return () =>{
     console.log(`profile components unloaded`)
   }
    },[])
  return (
    <div>
      <h2 className='page-header'>Profile</h2>
    </div>
  )
}

export default Profile
