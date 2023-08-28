import React from 'react'
import addMore from '../images/addMore.png'
import camera from '../images/camera.png'
import mpre from '../images/mpre2.png'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Kunal</span>
        <div className='chatIcons'>
          <img src={addMore} alt="camera"/>
          <img src={camera} alt="AddMore"/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
