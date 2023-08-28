import React, { useContext } from 'react'
import addMore from '../images/addMore.png'
import camera from '../images/camera.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'
const Chat = () => {
  const {data}=useContext(ChatContext)
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <img style={{
          borderRadius:'50%',
          height:'40px',
          width:'40px'
        }}src={data.user?.photoURL} alt=""/>
        <span>{data.user?.displayName}</span>
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
