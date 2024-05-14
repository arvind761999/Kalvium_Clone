import React, { useState } from 'react'
import Register from './register/Register'
import Login from './login/Login'

const customStyle ={
  backgroundColor:"#7c6a96",
  color:"white",
  fontWeight:"bold"
}

const RightSide = () => {
  const [selected, setSelected] = useState("register")
  return (
    <div className='an-right-container'>
      <div className="an-tab">
        <span className="an-btn an-register-btn" name="register" onClick={()=>setSelected("register")}
        style={selected=="register"? customStyle:{}}
        >Register</span>
        <span className='an-btn an-login-btn' name="login" onClick={()=>setSelected("login")} 
        style={selected!="register"?customStyle:{}}
        >Login</span>
      </div>
      {selected=="register"?<Register /> : <Login />}
      {/* <span className='needhelp'>Need Hel...</span> */}
    </div>
  )
}

export default RightSide
