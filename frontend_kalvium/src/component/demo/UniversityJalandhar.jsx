import React, { useState } from "react";
import "../css/universiyjaladhar.css";
import Program from './Program'
import BestOutcome from "./BestOutcome";
import Slider from "./Slider";
import CampusDiaries from './CampusDiaries'
import Map from './Map'
import { Link } from "react-router-dom";

function UniversityJalandhar() {
    // State to manage the visibility of answers
    const [visibleAnswers, setVisibleAnswers] = useState({});

    // Toggle function to show/hide answers
    const toggleAnswer = (targetId) => {
      setVisibleAnswers({
        ...visibleAnswers,
        [targetId]: !visibleAnswers[targetId],
      });
    };
  return (
    <>
      <div className="container-fluid animate-fadeIn p-0">
        <div className="row border-4  m-0 w-100 p-0 bg-pink-50 ... border-y-zinc-950 ..." style={{height:'700px'}}>
          <div className="col-md-6 pt-5 px-5 mt-5">
              <img
                src="image/LPU.jpg"
                width={"80px"}
                className="border-1 ms-4 border-zinc-950 border-y-zinc-950 ..."
                alt=""
              />
              <h1 className="h1 mt-2 px-3 mb-4">Study Computer Science</h1>
              <p className="ms-3">
                with Kalvium
                <strong> @ Lovely Professional University, Jalandhar.</strong>
              </p>   
          </div>
          <div className="col-md-6 px-0  background bg-pink-50 ... ">    
            <div>
              <img
                src="image/bgimage.webp"
                width={"90%"}
                style={{height:'600px'}}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl my-8 px-8 card1  border-zinc-950 border-y-zinc-950 animate-fadeIn">
          <div className="row">
            <div className="col-md-8 px-5 pt-4 m-0 " style={{border:'2px solid #333333', borderBottom:'none',borderTop:'none'}}>
              <h2 className="font-bold mb-3 text-xl ..." style={{color:'#f0b847'}}>Apply Here. Study In A Campus Of Your Choice.</h2>
              <p>With just 1 Kalvium application, choose among the best universities in India & abroad.</p>
              <div className="d-flex w-100 h-50 mb-3 mt-3" >
                <img src="image/LPU.jpg"  className="border-4 border-zinc-200  h-20 w-20 mx-2 rounded-full ..." width={'200px'}  alt="..." />
                <img src="image/s_JECRC.jpg" className="border-4 border-zinc-200  h-20 w-20 h-20 w-20 mx-2  rounded-full ..." width={'100px'} alt="..." />
                <img src="image/man.webp" className="border-4 border-zinc-200 h-20 w-20 h-20 w-20 mx-2 rounded-full ..." width={'100px'} alt="..." />
                <img src="image/MIT.webp" className="border-4 border-zinc-200 h-20 w-20 h-20 w-20 mx-2 rounded-full ..." width={'100px'} alt="..." />
                <img src="image/Chitkara.webp" className="border-4 border-zinc-200 h-20 w-20 h-20 w-20 mx-2 rounded-full ..." width={'100px'} alt="..." />
                <img src="image/s_RV.jpg" className="border-4 border-zinc-200 h-20 w-20 h-20 w-20 mx-2 rounded-full ..." width={'100px'} alt="..." />
                 </div>
            </div>
            <div className="col-md-4 px-5 pt-4 m-0">
              <h2 className="font-bold mb-2">Want To Know More?</h2>
              <p>Register Now for a Free counseling session</p>
              <button className="button-54 mt-2 mb-4" role="button">Register For Free</button>
            </div>
            <div className="col-md-12 text-center pt-2 pb-2 mb-2 font-bold ..." style={{background:'#f0b847',border:'2px solid #333333'}}>
              <h2>Admissions for the academic year 2024 – 2025 are open! <u  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Prospectus.</u></h2>
            </div>
          </div>
        </div> */}
      </div>
      <div className="container">
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
            <Link href="#"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><h3>Register For Free</h3></Link>
        </div>
            <div className="last">
               <div className="child-conatiner700">
                <p>Admissions for the academic year 2024 – 2025 are open!</p>  

                <div className="child-conatiner600">
                    <Link href="#"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Prospectus.</Link>
                </div>
               </div>
            </div>
        </div>
    </div>
      </div>
      <Program/>
      <BestOutcome/>
      <Slider/>
      <Map/>
      <CampusDiaries/>

      <div class="container">
        <div class="faq-section">
          <div class="faq-category">
            <h2 className='text-center pb-4'>Frequently Asked Questions</h2>
          </div>
          <div id="question1" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer1");
                  }}
                  data-target="answer1"
                >
                  Is Kalvium An Online Program?
                </Link>
              </h3>
            </div>
            <div
              id="answer1"
              class="answer"
              style={{ display: visibleAnswers["answer1"] ? "block" : "none" }}
            >
              <p>
                No. The Kalvium Work Integrated Computer Science Engineering is
                a full-time on-campus program.
              </p>
            </div>
          </div>

          {/* <!-- Additional Questions --> */}
          <div id="question2" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer2");
                  }}
                  data-target="answer2"
                >
                  What are the admission requirements?
                </Link>
              </h3>
            </div>
            <div
              id="answer2"
              class="answer"
              style={{ display: visibleAnswers["answer2"] ? "block" : "none" }}
            >
              <p>
                The admission requirements vary depending on the program.
                Generally, they include academic transcripts, letters of
                recommendation, and standardized test scores.
              </p>
            </div>
          </div>

          <div id="question3" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer3");
                  }}
                  data-target="answer3"
                >
                  Can I apply for financial aid?
                </Link>
              </h3>
            </div>
            <div
              id="answer3"
              class="answer"
              style={{ display: visibleAnswers["answer3"] ? "block" : "none" }}
            >
              <p>
                Yes, financial aid is available for eligible students. You can
                apply for scholarships, grants, and loans through the financial
                aid office.
              </p>
            </div>
          </div>
          {/* <!-- End of Additional Questions --> */}
        </div>
        <button className="button-54 bg-white text-center mb-4" style={{position:'relative',    right: '50%',left: '40%'}} role="button">Explore All FAQs</button>
      </div>

      <div class="sticky-box">
        <Link
          to="enquire"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Enquire Now
        </Link>
      </div>

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
              <form>
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
                    type="button"
                    class="btn-btn-color"
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
                    }}
                  >
                    Enquire Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UniversityJalandhar;
