import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../service/firebase';
const Login = () => {
    const [err,setErr]=useState(false);
    const navigate=useNavigate();



    const handleSubmit=async(e)=>{
        e.preventDefault();
        const email=e.target[0].value;
        const password=e.target[1].value;
        try{
            await signInWithEmailAndPassword(auth,email,password);
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }


    return (<div className='formConatinaer'>
        <div className='formwapper'>
            <span className='logo'>Chat</span>
            <span className='register'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='enter your email' />
                <input type="password" placeholder='enter your password' />
                <button>Log In</button>

            </form>
            <p>Not a member? <NavLink style={{textDecoration:'none',color:'white'}} to='/register'>Register</NavLink></p>
        </div>
    </div>
    )
}

export default Login
