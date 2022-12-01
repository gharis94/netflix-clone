import React from 'react'
import Nav from '../../Components/Nav/Nav';
import './Profile.css';
import Avatar from '@mui/material/Avatar';
import {signOutFn} from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutAsync } from '../../features/user/userSlice';

const Profile = () => {
    const navigateTo=useNavigate();
    const dispatch = useDispatch();
    
    const handleOut=()=>{
        dispatch(signOutAsync());
        navigateTo('/');
    }
  return (
    <div className='profile'>
        <Nav/>
        <h1>Edit Profile</h1>
        <div className='profile-content'>
            <Avatar/>
            <div className='profile-data'>
                <button onClick={()=>handleOut()}>Sign Out</button>
            </div>
        </div>
    </div>
  )
}

export default Profile