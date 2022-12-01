import React,{useState} from 'react';
import './AuthStartComponent.css';


const AuthStartComponent = () => {
    
  return (
    <div className='auth-body'>
            <h1>Unlimited films,TV programmes and more</h1>
            <h2>Watch anywhere. Cancel any time</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='auth-input'>
                <form>
                    <input type='email' placeholder='Enter the email'/>
                    <button type='submit'>GET STARTED</button>
                </form>
            </div>
        </div>
  )
}

export default AuthStartComponent