import React, { useEffect, useState } from 'react';
import LeftSide from '../LeftSide';
import NeedHelp from '../needhelp/NeedHelp';
import '../css/stylecomponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { clearErrors, login_user } from '../../redux/action/UserAction';

function LoginVerify() {
  const { users, error,message } = useSelector((state) => state.user)
  console.log(users)
  const [number,setPhone] = useState('')
  const [otp,setOtp] = useState('')
  const dispatch = useDispatch()
  const history = useNavigate()
  const [showMessage, setShowMessage] = useState(false);

  const submithandler = (e)=>{
    e.preventDefault()
    console.log(number)
    // const myform = new FormData()
    // myform.append('number',number)
    // myform.append('otp',otp)
    const myform = {
      number:number,
      otp:otp,
    }
    dispatch(login_user(myform))
    history('/successfully')
  }

  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(clearErrors)
    }
    },[dispatch,alert,error,history])

    const toggleMessage = () => {
      setShowMessage(!showMessage);
  };

  const Message = () => {
      return (
          <div>
              <span>OPT sent Successfully</span>
          </div>
      );
  };
   
  return (
    <>
        <div className="w-full max-w-xs mx-auto mt-5 pt-5 mt-10">
            {error && <p>Error: {error}</p>}
            {message && <p>{message}</p>}
            <form onSubmit={submithandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div clas sName="mb-4">
                    <h2 className='flex justify-center text-gray-700 text-lg font-bold mb-5'>Mobile Verification</h2>
                    <label htmlFor="first-name" className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
                    <input
                        type="text"
                        id="mobile-number"
                        placeholder="Mobile Number"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={number}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {/* <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className=" bg-gray-400 hover:bg-gray-500 text-white text-sm font-bold mt-4 py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                            onClick={toggleMessage}
                        >
                            Generate OTP
                        </button>
                    </div> */}
                    {showMessage && <Message />}
                </div>
                <div className="mb-6">
                    <label htmlFor="last-name" className="block text-gray-700 text-sm font-bold mt-2 mb-2">Enter OTP</label>
                    <input
                        type="text"
                        id="mobile-opt"
                        placeholder="OTP"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className=" bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Verify
                    </button>
                </div>
            </form>
        </div>
    </>
  );
}

export default LoginVerify;
