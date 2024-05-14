import React from 'react'
import { Link } from 'react-router-dom'
import '../../component/Hero/Hero.css'

function Heros() {
  return (
    <>
    <div id="home-container">
        <div className="inner-home-container">
            <div className="part1">
               <div className="home-heading">
                <img src="image/triangle.png" alt="triangle img" className="tri" />
                <h1 >The Best Undergraduate Program <br/>In Computer Science Engineering</h1>
               </div>

               <div className="icons">
                <div className="box1">
                    <img src="image/graduation.png" alt="graduation img" className="graduation"  />
                    <p className="year">4 Years</p>
                    <h5 className="UG">UG program with 3- Year <br/>paid internship</h5>

                    
                </div>
                {/* <!-- <hr className="hr"> --> */}
               <hr className="hr" />
                <div className="box1">
                    <img src="image/timer.png" alt="graduation img" className="graduation"  />
                    <p className="year">4 Years</p>
                    <h5 className="UG">On-campus Program</h5>
                </div>
                <hr />
                <div className="box1">
                    <img src="image/poll.png" alt="graduation img" className="graduation"  />
                    <p className="year">4 Years</p>
                    <h5 className="UG">Across the country</h5>
                </div>
                <hr className="hr" />
                 <div className="box1">
                    <img src="image/coding.png" alt="graduation img" className="graduation"  />
                    <p className="year">4 Years</p>
                    <h5 className="UG">designed by top CXO's & <br/>CEO's</h5>
                   
                 </div>
                 
                 
               </div>


               <img src="image/circle.png" alt="circle img" className="circle-img" />
            </div>
            <div className="part2">
                <div className="inner-part2">
                    <img src="image/zic-zack.png" alt="" className="zic-zack" />
                    <img src="https://kalvium.com/wp-content/uploads//2023/10/Cap.svg" alt="cap img" className="cap" />
                    <img src="image/Students_hero-1024x857.webp" alt="students img" className="students" />
                </div>
            </div>
        </div>
    </div>


    <div className="testing">
        <div className="testing-child">
             <div className="parent-set">
            <div className="set">
                <h2 className="set-h1">Not Sure Where To Study? Don’t Worry. Apply Now, Choose Later</h2>

                <p>With just 1 Kalvium application, choose among the best universities in India & abroad.</p>
                <div className="logosmall">
                    <img src="https://kalvium.com/wp-content/uploads/2023/04/s_LPU-300x300.jpg" alt="" className="fix" />
                    <img src="https://kalvium.com/wp-content/uploads/2023/04/s_JECRC-University-300x300.jpg" alt="" className="fix" />
                    <img src="https://kalvium.com/wp-content/uploads/2023/10/Manipal-University-300x300.webp" alt="" className="fix" />
                    <img src="https://kalvium.com/wp-content/uploads/2023/10/MIT-ADT-300x300.webp" alt="" className="fix" />
                    <img src="https://kalvium.com/wp-content/uploads/2023/10/Chitkara-University-300x300.png" alt="" className="fix" />
                    <img src="https://kalvium.com/wp-content/uploads/2023/04/s_RV-University-300x300.jpg" alt="" className="fix" />
                    <img src="https://kalvium.com/wp-content/uploads/2023/04/s_Kalasalingam-University-300x300.jpg" alt="" className="fix" />
                    <img src="https://kalvium.com/wp-content/uploads/2023/06/Vels-University-300x300.webp" alt="" className="fix" />
                    <img src="https://kalvium.com/wp-content/uploads/2023/04/s_Apollo-University-300x300.jpg" alt="" className="fix" />
                    <img src="https://kalvium.com/wp-content/uploads/2023/04/Yenepoya-University-300x300.jpg" alt="" className="fix" />
                    <img src="https://kalvium.com/wp-content/uploads/2023/12/ManyMore-1-300x300.webp" alt="" className="fix" />
                </div>

                
            </div>
        </div>


        <div className="after-logo">
            <h2>Want To Know More?</h2>
            <p>Register Now for a Free counseling session</p>
            <Link to="/enquire" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><h3>Register For Free</h3></Link>
        </div>
            <div className="last">
               <div className="child-conatiner700">
                <p>Admissions for the academic year 2024 – 2025 are open!</p>  

                <div className="child-conatiner600">
                    <Link to="/enquire"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Prospectus.</Link>
                </div>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Heros