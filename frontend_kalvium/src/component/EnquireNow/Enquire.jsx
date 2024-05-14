import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { MDBAlert } from 'mdbreact';
import { clearErrors, enquire } from '../../redux/action/EnquireAction'
import Swal from 'sweetalert2';

function Enquire() {
  const {enquire1, loading, error } = useSelector((state) => state.enquire)
  const [fullname,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [state,setState] = useState('')
  const [grade,setGrade] = useState('')
  const [successPopup, setSuccessPopup] = useState(false); // Success popup state
  const [showModal, setShowModal] = useState(false) // Modal state
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const alert = useAlert()

  const submithandler = (e)=>{
    e.preventDefault()
    console.log(fullname,phone,state,grade)
    const myForm = new FormData()
    myForm.append('fullname',fullname)
    myForm.append('phone',phone)
    myForm.append('state',state)
    myForm.append('grade',grade)
    dispatch(enquire(myForm))
    setShowModal(false) // Close modal after submission
    // navigate('/')
  }

  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(clearErrors)
    }

    
    if (enquire1) {
      alert.success('Enquiry successfully sent!')
      setSuccessPopup(true); // Show success popup
      navigate('/')
    }

  },[dispatch,alert,enquire1,error,navigate])

  
const handleSubmit=()=>{
  Swal.fire({
     // title: "Sweet!",
      text: "Your Query is Successfully Send ",//Modal with a custom image.
      //imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      color:"green",
      imageAlt: "Custom image",

    });
    navigate('/')
    
}



  return (
    <>
    <div className="sticky-box">
        <Link
          to="enquire"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Enquire Now
        </Link>
      </div>

      
      {/* model */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable "
          style={{ height: "900px", width: "70%" }}
        >
          <div
            className="modal-content  "
            style={{
              border: " 3px solid black",
              width: "130%",
              height: "150%",
              padding: "40px",
            }}
          >
            <div className="modal-header ">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submithandler}>
                <h3 style={{ fontFamily: "var", fontWeight: "800" }}>
                  Request A Call Back
                </h3>
                <p
                  style={{
                    paddingTop: "15px",
                    fontFamily: "roboto",
                    fontSize: "12px",
                  }}
                >
                  Have an admission query related to Kalvium? Fill this form and
                  our team will get in touch with you within a day during
                  working hours!
                </p>
                <div className="field">
                  <label
                    style={{
                      marginTop: "10px",
                      fontFamily: "roboto",
                      fontSize: "15px",
                      fontWeight: "500",
                      paddingBottom: "6px",
                    }}
                  >
                    Full Name<span style={{ color: "red" }}>*</span>{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e)=>setName(e.target.value)}
                    name="Full Name"
                    placeholder="Enter your first name"
                    style={{
                      display: "block",
                      width: "95%",
                      marginTop: "8px",
                      border: "3px solid black",
                      boxSizing: "border-box",
                      paddingLeft: "15px",
                      fontSize: "15px",
                      paddingBottom: "8px",
                      paddingTop: "8px",
                    }}
                  />
                </div>
                <div className="field">
                  <label
                    style={{
                      marginTop: "25px",
                      fontFamily: "roboto",
                      fontSize: "15px",
                      fontWeight: "500",
                      paddingtop: "15px",
                    }}
                  >
                    Mobile Number <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                   onChange={(e)=>setPhone(e.target.value)}
                    type="text"
                    name="Mobile Number"
                    placeholder="Please enter a 10-digit mobile number"
                    style={{
                      
                      display: "block",
                      width: "95%",
                      marginTop: "15px",
                      border: "3px solid black",
                      boxSizing: "border-box",
                      paddingLeft: "15px",
                      fontSize: "15px",
                      paddingBottom: "8px",
                      paddingTop: "8px",
                    }}
                  />
                </div>

                <div className="field">
                  <label
                    style={{
                      marginTop: "30px",
                      fontFamily: "roboto",
                      fontSize: "15px",
                      fontWeight: "500",
                      paddingtop: "15px",
                    }}
                  >
                    State <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                  onChange={(e)=>setState(e.target.value)}
                    type="text"
                    name="State"
                    placeholder="-Choose-"
                    style={{
                      display: "block",
                      marginTop: "15px",
                      border: "3px solid black",
                      width: "95%",
                      boxSizing: "border-box",
                      paddingLeft: "15px",
                      fontSize: "15px",
                      paddingBottom: "8px",
                      paddingTop: "8px",
                    }}
                  />
                </div>
                <div className="field">
                  <label
                    style={{
                      marginTop: "30px",
                      fontFamily: "roboto",
                      fontSize: "15px",
                      fontWeight: "500",
                      paddingtop: "15px",
                    }}
                  >
                    Student Grade <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                  onChange={(e)=>setGrade(e.target.value)}
                    type="text"
                    name="Student Grade"
                    placeholder="-Choose-"
                    style={{
                      display: "block",
                      marginTop: "15px",
                      border: "3px solid black",
                      width: "95%",
                      boxSizing: "border-box",
                      paddingLeft: "15px",
                      fontSize: "15px",
                      paddingBottom: "8px",
                      paddingTop: "8px",
                    }}
                  />
                </div>
                <div>
                  
                  <button
                  // className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                    type="submit"
                    className="btn-btn-color"
                    style={{
                      background: "purple",
                      color: "white",
                      margin: "10%",
                      borderRadius: "3px solid black",
                      marginLeft: "5px",
                      display: "block",
                      width: "30%",
                      paddingBottom: "30px",
                      paddingtop: "30px",
                      fontSize: "20px",
                    }}  onClick={()=>handleSubmit()}
                  >
                    Submit
                  </button>

                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        {/* Success Popup */}
        {/* {successPopup && (
        <div className="success-popup">
          <h2>Success!</h2>
          <p>Your enquiry has been successfully submitted.</p>
          <button onClick={() => setSuccessPopup(false)}>Close</button>
        </div>
      )} */}
    </>
  )
}

export default Enquire