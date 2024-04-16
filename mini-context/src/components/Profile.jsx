import React , {useContext , useState } from 'react'
import Usercontext from '../context/Usercontext'

function Profile() {

    const {user} = useContext(Usercontext)
     
    if(!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
  }

export default Profile