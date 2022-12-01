import React,{useState} from 'react'
import "./Auth.css";
import AuthStartComponent from '../../Components/AuthStartComponent/AuthStartComponent';
import SignIn from '../../Components/SignIn/SignIn';

const Auth = () => {
    const [user, setUser] = useState(true);
    const handleUser=()=>{
        setUser(false)
    }
  return (
    <div className='auth-page'>
        <div className='auth-background'>
            <img className='auth-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png' alt='logo'/>
            {user && <button  onClick={()=>handleUser()} className='auth-button'>Sign In</button>}
            <div className='auth-gradient'/>
        </div>
        {user? <AuthStartComponent/> :<SignIn/>}
        
    </div>
  )
}

export default Auth;