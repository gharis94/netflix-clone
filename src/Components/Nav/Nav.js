import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import './Nav.css';

const Nav = () => {
    const [show,setShow] = useState(false);

    const handleListner=()=>{
        if(window.scrollY>100){
            setShow(true);
        }else{
            setShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleListner);
        return (()=>window.removeEventListener('scroll',handleListner));
    },[])

  return (
    <div className={`nav-main ${show &&'nav-black'}`}>
        <img className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png' alt='logo'/>
        <Avatar sx={{position:'fixed',right:'10px',top:'10px',cursor:'pointer'}}/>

    </div>
  )
}

export default Nav;

// below is style code

