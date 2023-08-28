import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../service/firebase'
import {AuthContext} from '../context/AuthContext'
const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  console.log('i am currentuser',currentUser)
  return (
    <div className='navbar'>
      <span className='logo'>Chatty</span>
      <div className='user'>
        <img src={currentUser?.photoURL} alt=''/>
        <span style={{fontSize:'25px'}}>{currentUser?.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
