import React,{useEffect} from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import {Routes,Route} from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
import Profile from './Pages/Profile/Profile';
import { useNavigate, } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { isLogSelector } from './features/user/userSlice';
import {onAuthStateChangedListner,signOutFn} from './utils/firebase'


function App() {
  const user = useSelector(isLogSelector);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // onAuthStateChangedListner(user=>{
    //     if(user){
    //        //dispatch
    //     }
    // })

  }, [])
  console.log(user)

  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={user?<Home/>:<Auth/>}/>  
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
