import React,{useState,useRef} from 'react';
import './SignIn.css';
import { useDispatch } from 'react-redux';
import {signInAsync,newUserAsync} from '../../features/user/userSlice';

const initialState={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignIn = () => {
    const [state,setState] = useState(false);
    const [user,setUser] = useState(initialState);
    const {displayName,email,password,confirmPassword} = user;
    const dispatch=useDispatch();
    
    const handleState=()=>{
        setState(!state);
    };

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(state){
            let action = {
                email,
                password
            }
            dispatch(signInAsync(action))
        }else{
            console.log('Out')
            if(password===confirmPassword){

            }else{
                alert('Password & Confirm Password Does not match ')
            }
        }
    }

  return (
    <div className='sign-in'>
        <div className='sign-in-body'>
            <h1>{state?'Sign In':'Sign Up'}</h1>
        <form onSubmit={(e)=>handleSubmit(e)} className='sign-in-form'>
            {state==false && (
                <input 
                    required
                    type='text' 
                    name='displayName' 
                    value={displayName} 
                    placeholder='Enter Name'
                    onChange={(e)=>handleChange(e)}
                />)}
            <input  
                required
                type='email' 
                name='email' 
                value={email} 
                placeholder='Email'
                onChange={(e)=>handleChange(e)}
            />
            <input 
                required
                type='password' 
                name='password' 
                value={password} 
                placeholder='Password'
                onChange={(e)=>handleChange(e)}
            />
            {state==false && (
                <input 
                required
                type='password' 
                placeholder='Confirm Password'
                value={confirmPassword} 
                name='confirmPassword'
                onChange={(e)=>handleChange(e)}
            />)}
            <button type='submit'>{state?'Sign In':'Sign Up'}</button>
            <h4>
                <span className='sign-in-sp1'>{state?'New to Netflix':'' }</span>
                <span onClick={()=>handleState()} className='sign-in-sp2'>{state?'Sign Up now':'Sign In?'}</span> 
            </h4>
        </form>
        </div>
        

    </div>
  )
}

export default SignIn;