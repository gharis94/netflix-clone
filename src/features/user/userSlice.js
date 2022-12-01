import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {signInFn,createUser,signOutFn} from '../../utils/firebase'

export const signInAsync =createAsyncThunk('user/signIn',async(state)=>{
        const {email,password} = state;
    const rsp=await  signInFn(email,password)
    const data = {
        uid:rsp.user.uid,
        displayName: rsp.user.displayName,
        photoURL: rsp.user.photoURL,
        email: rsp.user.email
    }
    console.log(rsp)
    return data;
})

export const newUserAsync =createAsyncThunk('user/newuserAsync',async(email,password)=>{
    const rsp =await createUser(email,password);
    return rsp;
})

export const signOutAsync=createAsyncThunk('user/signOutAsync',async()=>{
    await signOutFn();
})



export const userSlice = createSlice({
    name:'user',
    initialState:{
        isLog:false,
        user:null,
        error:''
    },reducers:{
        logOut:(state)=>{
            state.isLog=false;
            state.user=null;
        },
        logIn:(state,action)=>{
            state.isLog=true;
            state.user=action.payload;
        }
    }
    ,
      extraReducers: (builder) => {
        builder.addCase(signInAsync.pending,(state)=>{
            state.isLog=false;
        })
        builder.addCase(signInAsync.fulfilled,(state,action)=>{
            state.isLog=true;
            state.user = action.payload;
        })
        builder.addCase(signInAsync.rejected,(state,action)=>{
            state.isLog=false;
            state.error=action.payload;
        })
        builder.addCase(newUserAsync.pending,(state)=>{
            state.isLog=false;
        })
        builder.addCase(newUserAsync.fulfilled,(state,action)=>{
            state.isLog=true;
            state.user=action.payload;
        })
        builder.addCase(newUserAsync.rejected,(state,action)=>{
            state.isLog=false;
            state.error=action.payload;
        })
        builder.addCase(signOutAsync.pending,(state)=>{
            state.isLog=true;
        })
        builder.addCase(signOutAsync.fulfilled,(state)=>{
            state.isLog=false;
            state.user=null;
        })
        builder.addCase(signOutAsync.rejected,(state,action)=>{
            state.error=action.payload;
        })
    }
})

export const {logIn,logOut} = userSlice.actions;

export const userSelector=state=>state.user.user;
export const isLogSelector =state=>state.user.isLog;

export default userSlice.reducer;