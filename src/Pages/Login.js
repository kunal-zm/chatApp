import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {
    return (<div className='formConatinaer'>
        <div className='formwapper'>
            <span className='logo'>Chat</span>
            <span className='register'>Login</span>
            <form>
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
