import React from 'react'
import SingIn from "./SingIn"
import LogOut from './LogOut'
import {auth} from "../firebase"
import { useAuthState } from 'react-firebase-hooks/auth'

const style = {
    nav: `bg-blue-700 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Mesinyer Plus</h1>
        {user ? <LogOut/> : <SingIn />}
    </div>
  )
}

export default Navbar