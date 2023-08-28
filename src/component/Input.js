import React from 'react'
import attach from '../images/attach.png'
import img from '../images/img.jpg'
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something........'/>
      <div className='send'> 
        <img src={attach} alt=""/>
        <input type="file" id="img" style={{display:'none'}}/>
        <label htmlFor='img'>
          <img src={img} alt=""/>
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input
