import React, {useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currtState,setCurrState]=useState("Login")

  return (
    <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currtState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currtState==='Login' ? <></> :<input type="text" placeholder='Your Name' required />}
                
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currtState==="Sign Up" ? "Create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, you agree to the terms of use & privacy policy</p>
            </div>
            {
                  currtState==='Login' ? <p>Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p> : 
                  <p>Already have an account ?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
           
            
        </form>
    </div>
  )
}

export default LoginPopup
