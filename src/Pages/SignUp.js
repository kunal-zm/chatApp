import React, { useState } from 'react'
import woman from '../images/woman.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from '../service/firebase'
import { doc, setDoc } from 'firebase/firestore'
const SignUp = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      //user is created
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          console.log('heree')
          console.log(downloadURL)
          try {
            //updaing the created user
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            
            //crating a collection on the firestore database
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })


            //setting the userchats for displaying in the left pannl
            await setDoc(doc(db, "userChats", res.user.uid), {})

            navigate("/")
          } catch (err) {
            console.log("this is from here 1", err);
            setErr(true);
          }
        })
      })

    } catch (err) {
      console.log("this is from here 2", err)
      setErr(true);
    }


  }
  return (
    <div className='formConatinaer'>
      <div className='formwapper'>
        <span className='logo'>Chat</span>
        <span className='register'>Register</span>
        <form onSubmit={handleSubmit}>
          <input className="" type="text" placeholder='Display Name' />
          <input type="email" placeholder='enter your email' />
          <input type="password" placeholder='enter your password' />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor='file' >
            <img src={woman} alt="" />
            <span className='avatar'>Add an Avatar</span>
          </label>

          <button>Submit</button>
          {err && <span>There is an error occured</span>}
        </form>
        <p>Already register? <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'> Login</NavLink></p>
      </div>
    </div>
  )
}

export default SignUp
