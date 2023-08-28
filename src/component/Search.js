import React, { useContext, useState } from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from '../service/firebase'
import { AuthContext } from '../context/AuthContext';
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const {currentUser}=useContext(AuthContext)
  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username))
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc)
       setUser(doc.data())
      });
      console.log(user)
    }catch(err){
      console.log(err)
      setErr(true)
    }
  }
  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }
  const handleSelect=async()=>{
    const combinedId=currentUser.uid>user.uid?currentUser.uid+user.uid:user.uid+currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId)); //checking if the data exists in firebase or not

      if (!res.exists()) { //if not exist then we had to create there room
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), { //updaing each of the profile so eaCH CAN SEE THEIR MESSAGE
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    
    setUser(null);
    setUsername("")
  }
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find the user' onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)}  value={username} />
      </div>
      {err && <p>User not found</p>}
      {user && <div className='user' onClick={handleSelect}>
        <img src={user?.photoURL} alt='' />
        <span>{user?.displayName}</span>
      </div>}
    </div>
  )
}

export default Search
