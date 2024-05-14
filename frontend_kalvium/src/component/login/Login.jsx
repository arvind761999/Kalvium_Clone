import React, { useEffect, useState } from 'react'
import './login.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, signUp, signup } from '../../redux/action/UserAction'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { user, error,message } = useSelector((state) => state.auth)
  const [number,setPhone] = useState('')
  const dispatch = useDispatch()
  const history = useNavigate()

  const submithandler = (e)=>{
    e.preventDefault()
    setIsInputTriggered(true);
    console.log(number)
    const myform = new FormData()
    myform.append('number',number)
    dispatch(signup(myform))
    history('/login/verify')
  }

  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(clearErrors)
    }
    // if(!user){
    //   history('/login/verify')
    // }
  
  },[dispatch,alert,error,history])




  const [isInputTriggered, setIsInputTriggered] = useState(false)

  // const submithandler = (e) => {
  //   e.preventDefault()
  //   setIsInputTriggered(true);
  // }

  // const [number, setNumber] = useState('');
  // const dispatch = useDispatch();
  // const { loading, error, message } = useSelector((state) => state.user);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(signUp(number));
  //   if (!error) {
  //     history('/login/verify'); // Navigate to VerifyOTP page if signup is successful
  //   }
  // };

  return (
    <div>
       {error && <p>Error: {error}</p>}
      {message && <p>{message}</p>}
      <form className='an-login-form' onSubmit={submithandler} action="">
        <div>
            <label htmlFor="otp">Enter your mobile number to get OTP</label>
            <div>
                <input className='an-input' value={number}  onChange={(e)=>setPhone(e.target.value)} type="text" />
                <button className='an-otp-btn an-btn'>OTP</button>
            </div>
            {/* {isInputTriggered && <input className='an-input' placeholder="enter otp" />}
            <div className="">
            {isInputTriggered && 
            <button className='an-submit-btn an-btn' >LogIn</button>
             } 

            </div> */}
        </div>
      </form>
    </div>
  )
}

export default Login