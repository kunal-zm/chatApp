import React from 'react'
import woman from '../images/woman.png'
import { NavLink } from 'react-router-dom'
const SignUp = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const files=e.target[3].files[0];
    console.log(displayName,email,password,files)
  }
  return (
    <div className='formConatinaer'>
      <div className='formwapper'>
        <span className='logo'>Chat</span>
        <span className='register'>Register</span>
            <form onSubmit={handleSubmit}>
                <input className="" type="text" placeholder='Display Name'/>
                <input type="email" placeholder='enter your email'/>
                <input type="password" placeholder='enter your password'/>
                <input style={{display:'none'}}type="file" id="file"/>
                <label htmlFor='file' >
                  <img src={woman} alt=""/>
                  <sapn className='avatar'>Add an Avatar</sapn>
                </label>
                
                <button>Submit</button>
                
            </form>
            <p>Already register? <NavLink style={{textDecoration:'none',color:'white'}}to='/login'> Login</NavLink></p>
      </div>
    </div>
  )
}
 
export default SignUp
