import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })

  }

  return (

    <button type="logout" className='bg-red-500 hover:bg-red-700 text-white rounded-3xl px-6 py-3 m-2 relative bottom-4 w-22 h-12  ' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn