import React from 'react'
// import Header from '../Header'
import LeftSide from '../LeftSide'
import RightSide from '../RightSide'
import '../css/stylecomponent.css'
import NeedHelp from '../needhelp/NeedHelp'

function Login_Register() {
  return (
    <>
     {/* <Header /> */}
      <div className='main-container mt-4 mb-0'>
        <LeftSide />
        <RightSide />
        <NeedHelp/>
      </div>
    </>
  )
}

export default Login_Register