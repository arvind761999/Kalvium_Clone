import React from 'react'
import '../Form/Formnav.css'
const Formnav = () => {
  return (
    <div className='formnav mt-5 pt-5'>
      <div className='squarelogo'>
       <h3 style={{fontWeight:"500px",alignContent:"center"}}>K</h3> 
      </div >
      <div style={{display:"flex",justifyContent:"space-between",width:"300px"}}>
     <h2>HRPB</h2>
      <div style={{borderRadius:"10px",width:"100px",background:"rgb(239, 240, 246)",paddingTop:"20px",color:"rgb(116, 120, 141)",fontSize:"12px",paddingLeft:"5px",height:"20px",display:"flex",justifyContent:"center"}}>Job ID: 81561</div></div>
          <div style={{display:"flex",justifyContent:"space-between",width:"1000px",color:"#959cb6"}}>
            <div style={{display:"flex",justifyContent:"space-between",width:"500px"}}>
           <div>People Operations</div>
           <div>Bengaluru, India + 1</div>
           <div>1 - 10 years</div></div>
           <div style={{border:"1px solid",borderRadius:"3px",height:"40px",width:"150px",display:"flex",justifyContent:"center",paddingTop:"10px", cursor:"pointer"}}>See Job Details</div>
           </div>
    </div>
  )
}

export default Formnav
