import React from 'react'
import '../forbidden/Forbidde.css'

function Forbidden() {
  return (
    <>
    <div id="main-body-center">
        <div className="forbidden">
            <div className="lock">
                <img src="image/icon_lock.png" alt="icon_lock" className="lock-icon" />
            </div>
            <div className="text-container">
                <h1>FORBIDDEN ACCESS</h1>
                <h3>Sorry, you don't have access to this page.</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Forbidden