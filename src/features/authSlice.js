import {createSlice} from '@reduxjs/toolkit';


const initialState={
    currentUser:null ,
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCurrentUser:(state,action)=>{
            console.log(action.payload)
            state.currentUser=action.payload;
        }
    }
})

export const {setCurrentUser}=authSlice.actions;
export default authSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { //this name must be correct
//   currentUser: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState, // Ensure initialState is defined here
//   reducers: {
//     setCurrentUser: (state, action) => {
//       state.currentUser = action.payload;
//     },
//   },
// });

// export const { setCurrentUser } = authSlice.actions;
// export default authSlice.reducer;
