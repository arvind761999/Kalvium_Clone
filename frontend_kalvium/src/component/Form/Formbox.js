import React from 'react'

const Formbox = () => {
  return (
    <><div className='field' style={{ display: 'flex' ,marginTop:'99px', paddingLeft:"200px",justifyContent:"space-between",width:"1000px",}}>
          <div>
              <label style={{ marginTop: '25px', fontFamily: 'roboto', fontSize: '15px', fontWeight: '500', paddingTop: '15px' }}>
                  First Name <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                  type="text"
                  name="Name"
                  placeholder="Please enter first name"
                  style={{ display: 'block', width: '400px', marginTop: '15px', border: '3px solid black', boxSizing: 'border-box', paddingLeft: '15px', fontSize: '15px', paddingBottom: '8px', paddingTop: '8px',borderColor:"grey",borderRadius:"5px"}} />
          </div>
          <div>
              <label style={{ marginTop: '25px', fontFamily: 'roboto', fontSize: '15px', fontWeight: '500', paddingTop: '15px' }}>
                  Last Name <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                  type="text"
                  name="Last name"
                  placeholder="Please enter last name"
                  style={{ display: 'block', width: '400px', marginTop: '15px',borderRadius:"5px",border: '3px solid black', boxSizing: 'border-box', paddingLeft: '15px', fontSize: '15px', paddingBottom: '8px', paddingTop: '8px',borderColor:"grey" }} />
          </div>
      </div><div className='field'style={{paddingLeft:"200px"}}>
              <label style={{ marginTop: '25px', fontFamily: 'roboto', fontSize: '15px', fontWeight: '500', paddingTop: '15px' ,}}>
                  Preferred location<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                  type="text"
                  name="Preferred Location"
                  placeholder="Please enter location"
                  style={{
                      display: 'block',
                      width: '1000px',
                      marginTop: '15px',
                      border: '3px solid black',
                      boxSizing: 'border-box',
                      paddingLeft: '15px',
                      fontSize: '15px',
                      paddingBottom: '8px',
                      paddingTop: '8px',
                      borderColor:"grey",
                      borderRadius:"5px"

                  }} />
                  <div style={{display:"flex",  justifyContent:"space-between",width:"1000px",}}>
                  <div >
              <label style={{ marginTop: '25px', fontFamily: 'roboto', fontSize: '15px', fontWeight: '500', paddingTop: '15px' }}>
              Address (Optional) <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                  type="text"
                  name="Address (Optional)"
                  placeholder="Address "
                  style={{ display: 'block', width: '400px', marginTop: '15px',borderRadius:"5px", border: '3px solid black', boxSizing: 'border-box', paddingLeft: '15px', fontSize: '15px', paddingBottom: '8px', paddingTop: '8px',borderColor:"grey" }} />
          </div>
          <div>
              <label style={{ marginTop: '25px', fontFamily: 'roboto', fontSize: '15px', fontWeight: '500', paddingTop: '15px' }}>
              Postcode (Optional) <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                  type="text"
                  name="Postcode (Optional)"
                  placeholder="Postcode "
                  style={{ display: 'block', width: '400px', marginTop: '15px', border: '3px solid black', boxSizing: 'border-box', paddingLeft: '15px', fontSize: '15px', paddingBottom: '8px', paddingTop: '8px',borderColor:"grey",borderRadius:"5px" }} />
          </div></div>
          <h1>Educational details<span style={{ color: 'red' }}>*</span></h1>
          <br/>
          <div>Resume<span style={{ color: 'red' }}>*</span><div style={{background:"rgb(245, 246, 250",border:"2px dashed rgb(235, 237, 242)",width:"300px",height:"60px",display:"flex",alignItems:"center",cursor:"pointer"}}>Browse</div></div>
      </div><div style={{paddingLeft:"200px"}}>
                 <div style={{background:"rgb(10, 187, 135",color: 'rgb(255, 255, 255)',padding: '10px 14px',border: '1px solid transparent',display:"inline-block",marginLeftLeft:"10000px",marginTop:"50px",borderRadius:"2px",cursor:"pointer"}}>Submit Application</div>
                 
  </div>

</>
          
    
  );
}
export default Formbox
