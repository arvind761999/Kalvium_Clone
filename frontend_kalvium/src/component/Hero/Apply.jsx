import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import JoinUsData from './JoinUsData';
import '../Hero/apply.css'
import { apply, clearErrors } from '../../redux/action/ApplyAction';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import Swal from 'sweetalert2';

function Apply() {
  const { id } = useParams();
  const job = JoinUsData.find(job => job.id === Number(id)); // Convert id to number if it's stored as a string

  const { error } = useSelector((state) => state.apply)
  const [resume,setResume] = useState('')
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [location,setLocation] = useState('')
  const [address,setAddress] = useState('')
  const [country,setCountry] = useState('')
  const [state,setState] = useState('')
  const [city,setCity] = useState('')
  const [dob,setDOB] = useState('')
  const [gender,setGender] = useState('')
  const [marital_status,setMarital_status] = useState('')
  const [image,setImage] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const alert = useAlert()

  const handlesubmit = (e)=>{
    e.preventDefault()
    console.log(firstname,phone,state,image,resume,lastname,email,location,address,country,state,city,dob,gender)
    const myForm = new FormData()
    myForm.append('resume',resume)
    myForm.append('firstname',firstname)
    myForm.append('lastname',lastname)
    myForm.append('phone',phone)
    myForm.append('email',email)
    myForm.append('location',location)
    myForm.append('address',address)
    myForm.append('country',country)
    myForm.append('state',state)
    myForm.append('city',city)
    myForm.append('dob',dob)
    myForm.append('gender',gender)
    myForm.append('marital_status',marital_status)
    myForm.append('image',image)
    dispatch(apply(myForm))
    navigate('/')
  }

  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(clearErrors)
    }

   

  },[dispatch,alert,error,navigate])


    
const handleSubmit=()=>{
    Swal.fire({
       // title: "Sweet!",
        text: "Your Application Submitted Successfully ! ",//Modal with a custom image.
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
    <div className="container-viewap pt-5 mt-4">
        <div className="inner-container-view mb-5">
            <div className="view-logo"><span>K</span></div>
            <div className="hrbp-view">
                <div className="hrbp">{job.Job_name}</div>
                <div className="job-id">JOB ID: {job.id}</div>
            </div>
            <div className="more-job-details">
                <div className="more-job-details-child">

                    <span className="more-job-details-name" >&nbsp;
                      <i className="fas me-1 fa-code-branch"></i>
                      <p className="m-0">{job.position}</p>
                    </span>
                    <span className="more-job-details-location " >&nbsp;
                        <i className="fas me-1 fa-map-marker-alt"></i>
                        <p className="m-0" arial-label="Bengaluru,Coimbatore-based,India">{job.location}</p>
    
                    </span>
                    <span className="more-job-details-year " >&nbsp;
                        <i className="fas me-1 fa-briefcase"></i>
                        <p className="m-0">
                            {job.experience}
                        </p>
                    </span>
                </div>
                

                <div className="more-job-details-button">
                   <Link to="/joinus"> <button className="see all jobs">see all jobs</button></Link>
                </div>
               
            </div>
        </div>
        <form onSubmit={handlesubmit}>
        <section className="career-content">
            <div className="inner-career-content">
                <div className="auto-fill-resume">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    <p>Autofill your application</p>
                </div>
                <div className="autofill-content-text">
                    <span>Upload your Resume or CV in seconds with the autofill option.</span>
                </div>
                <div className="autofill-content" id="drop-area" ondrop="dropHandler(event)" ondragover="dragOverHandler(event)" ondragenter="dragEnterHandler(event)" ondragleave="dragLeaveHandler(event)">
                    <span>Drag and drop your Resume or CV here</span>
                    <input  onChange={(e)=>setResume(e.target.files[0])} type="file" id="file-input" accept=".pdf,.doc,.docx"  />
                    <label for="file-input" className="browse-btn">or Browse</label>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                       <span>First Name</span>
                       <input value={firstname}   onChange={(e)=>setFirstname(e.target.value)} type="text" placeholder="First Name" />
                    </div>
                    <div className="grid-item">
                        <span>Last Name</span>
                       <input value={lastname}   onChange={(e)=>setLastname(e.target.value)} type="text" placeholder="Last Name" />
                    </div>
                    <div className="grid-item">
                        <span>Contact number</span>
                        <div className="contact-input">
                            <div className="country-code">
                                <select >
                                    <option value="in">+91</option>
                                    <option value="US">+44</option>
                                    <option value="Afg">+93</option>
                                </select>
                            </div>
                            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="Contact Number" />
                        </div>
                    </div>
                    <div className="grid-item">
                        <span>Email address</span>
                        <div className="mail-icon">
                            <div className="icon">
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                        </div>
                       <input  onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email address" />
                    </div>
            </div>
            <div className="grid-item">
                <div className="location">
                    <span>Prefered location</span>
                    <input  onChange={(e)=>setLocation(e.target.value)} className="location-input" type="text" placeholder="Prefered location" />
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                   <span>Address (optional)</span>
                   <input  onChange={(e)=>setAddress(e.target.value)}type="text" placeholder="Address" />
                </div>
                <div className="grid-item">
                    <span>Country (Optional)</span>
                   <input  onChange={(e)=>setCountry(e.target.value)} type="text" placeholder="Country" />
                </div>
                <div className="grid-item">
                   <span>State (optional)</span>
                   <input onChange={(e)=>setState(e.target.value)} value={state} type="text" placeholder="State" />
                </div>
                <div className="grid-item">
                    <span>City (Optional)</span>
                   <input onChange={(e)=>setCity(e.target.value)} value={city} type="text" placeholder="City" />
                </div>
                <div className="grid-item">
                   <span>Date of birth (optional)</span>
                   <input  onChange={(e)=>setDOB(e.target.value)} type="date" placeholder="Date of birth " />
                </div>
                <div className="grid-item">
                    <span className="gender">Gender (Optional)</span>
                    <div className="radio-buttons">
                        <input type="radio" onChange={(e)=>setGender(e.target.value)} id="male" name="gender" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" onChange={(e)=>setGender(e.target.value)} id="female" name="gender" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" onChange={(e)=>setGender(e.target.value)} id="others" name="gender" value="other" />
                        <label for="others">Others</label>
                    </div>
                    
                </div>
            </div>
            <div className="grid-item">
                <span className="gender">Marital status</span>
                <div className="radio-buttons">
                    <input type="radio" onChange={(e)=>setMarital_status(e.target.value)} id="male" name="marital_status" value="married" />
                    <label for="married">Married</label>
                    <input type="radio" onChange={(e)=>setMarital_status(e.target.value)} id="single" name="marital_status" value="single" />
                    <label for="female">Single</label>
                    <input type="radio" onChange={(e)=>setMarital_status(e.target.value)} id="prefer_not_to_say" name="marital_status" value="prefer_not_to_say" />
                    <label for="others">Prefer not to say</label>
                </div>
                
            </div>
            <div className="grid-item">
                <div className="photo">
                    Photo
                </div>
                <div className="dropzone">
                    <input  onChange={(e)=>setImage(e.target.files[0])} type="file" name="image_url" accept=".png, .jpeg, .jpg" id="image_url" max-size="5000" companyuuid="DBE8CE5737" 
                    control="[object Object]" formstate="[object Object]" data-testid="photo-upload" />
                </div>
            </div>
            <button type="submit" onClick={()=>handleSubmit()} className="button-54" role='button'>Submit</button>
           
          </div>  
        </section>
        </form>
        <footer className="footer-sg">
            <div className="footer-content">
                <h5>Hiring powered by</h5>
                <h1>PyjamaHR</h1>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Apply