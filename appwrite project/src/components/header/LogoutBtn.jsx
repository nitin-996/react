import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const Dispatch = useDispatch;
    const logoutHandler = ()=>{
        authService.logout()
        .then((data)=>{
            Dispatch(logout()),
            console.log("this is return value id authservice logout:", data);
        })
    }


  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn