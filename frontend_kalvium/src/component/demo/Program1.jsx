import React, { useState } from "react";
import '../css/program.css'
import BestOutcome from "./BestOutcome";
import { Link } from "react-router-dom";

function Program1() {
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
      <div className="container-1 lg:flex md:flex-row gap-2 bg-gradient-to-t bg-orange-50 cnt-1">
        <div className="undergraduate-program-info p-4 md:p-7 w-full md:w-2/5 cnta-1">
          <h1 className="mt-8 md:mt-20 text-2xl md:text-4xl font-bold text-center md:text-left">
            Liberate The Engineer In You!
          </h1>

          <p className="mt-4 md:mt-8 text-sm md:text-base text-center md:text-left">
            A 4-year, Full-time, On-campus, Work-integrated Under Graduate
            Program in Computer Science Engineering.
          </p>

          <div className="flex btnone  gap-4 mt-4 md:mt-8">
            <button className=" btn1 ">Register For Floobyte</button>
            <button className="btn2 ">Get Prospectus</button>
          </div>

          <p className="mt-4 md:mt-8 text-md md:text-base text-center md:text-left font-semibold">
            LEARN MORE ABOUT THE ADMISSION PROCESS
          </p>
        </div>

        <div className="pic w-full md:w-3/5 cnta-1">
          <img className="I15 w-2/3 md:w-90 ps-5 h-auto ml-4 md:ml-0 mb-4 md:mb-0"    width={'63%'} src="/image/i15.webp" alt="Program Image" />
        </div>
      </div>

      <div className="container-2 xl:flex-row lg:flex md:flex-col gap-2 bg-gradient-to-t bg-zinc-50 p-7 xl:h-1/2 md:h-auto cnt-2">
        <div className="w-full xl:w-1/4 md:w-full  xl:mt-0 md:mt-16 xl:ml-14 md:ml-0">
          <h2 className="text-3xl xl:text-4xl font-bold text-center md:text-left mt-24">
            Program Outcomes
          </h2>
        </div>

        <div className="w-full xl:w-2/3 md:w-full mt-12">
          <ul className="list-disc pl-6 mt-4 text-base xl:text-lg cntu-2">
            <li className="pb-4 xl:pb-6">
              <i className="fa-solid fa-bag-shopping m-4 text-yellow-600 text-2xl"></i>
              Earn up to INR 50,000 per month in stipends while you study.
            </li>
            <li className="pb-4 xl:pb-6">
              <i className="fa-regular fa-user m-4 text-2xl"></i>End of 1st Year
              Placements.
            </li>
            <li className="pb-4 xl:pb-6">
              <i className="fa-solid fa-user-graduate m-4 text-2xl text-gray-500"></i>
              Graduate with a 3-year work experience.
            </li>
            <li className="pb-4 xl:pb-6">
              <i className="fa-solid fa-sack-dollar m-4 text-2xl text-yellow-600"></i>
              Bag 7-figure package in final placements.
            </li>
            <li className="pb-4 xl:pb-6">
              <i className="fa-solid fa-user-tie m-4  text-2xl  text-blue-400"></i>
              Become an ace software professional.
            </li>
          </ul>
        </div>
      </div>

      <div className="container-3 cnt-3 text-white flex flex-col md:flex-row h-auto md:h-80">
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-2xl font-extrabold md:ml-24 p-3 xl:text-center md:text-left">
            Not Just 1st In India, But Among The Best In The World!
          </h1>
          <p className="text-center md:ml-24 p-3 md:text-left ">
            Academic partnerships with leading schools like Illinois Institute
            of Technology (IIT), Chicago
          </p>
        </div>
        <div className="w-full md:w-1/3 cnta-3 flex justify-center items-center  gap-12">
          <img className="w-24 h-24" src="/image/i13.jpg" alt="Image 1" />
          <img 
            className="w-24 h-24"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4x_x9rSckFFyzepZp9WFJYvpJ24oQjFYBw&s"
            alt="Image 2"
          />
        </div>
      </div>

      <div className="container-4 bg-slate-50 cnt-4">
        <div>
          <h2 className="text-4xl font-bold pt-10 pl-4 pb-6 text-center md:text-left">
            India’s 1st Liberal Engineering Curriculum
          </h2>
        </div>

        <div className="md:flex gap-2 bg-gradient-to-t p-4 md:p-7 ">
          <div className="md:w-1/2 text-wrap">
            <ul className="list-disc pl-4 md:pl-20 text-base md:text-lg text-center cntu-4">
              <li className="pb-2 md:pb-4">
                <i className="fa-solid fa-industry m-4 text-2xl text-red-500"></i>
                Curriculum designed by the top CXOs of the Tech Industry.
              </li>
              <li className="pb-2 md:pb-4 md:ml-5">
                <i className="fa-solid fa-code m-4  text-2xl text-blue-400"></i>
                Skilling courses to make you a MERN-Stack Developer even before
                you graduate.
              </li>
              <li className="pb-2 md:pb-4">
                <i className="fa-solid fa-users-rectangle m-4  text-2xl"></i>
                Based on MIT Human Skills framework that make a Future Global
                Leader.
              </li>
              <li className="pb-2 md:pb-4">
                <i className="fa-solid fa-laptop-code m-4 text-2xl text-orange-300"></i>
                Focus on academics to build a strong foundation in computer
                science.
              </li>
              <li className="pb-2 md:pb-4">
                <i className="fa-solid fa-check m-4 text-2xl text-green-400"></i>
                Academic Credits for real-world experience through integrated
                work.
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 pl-4 md:pl-8">
            <img alt = "" src="/image/I16.webp" className="w-full" />
          </div>
        </div>

        <div className="download-btn pl-4 md:pl-20">
          <button className="bg-blue-950 btn-3 p-2 md:p-3  md:w-1/5 sm:w-full sm:mr-20 rounded text-white mt-4 md:mt-20 mb-10 md:mb-20">
            Download Curriculum
          </button>
        </div>
      </div>

      <div className="container-5 cnt-5 bg-yellow-100 md:flex  gap-2">
        <div className="md:w-1/2 grid grid-cols-4 gap-2 cnta-5 ">
          <img alt = "" className="md:w-28 md:h-16" src="/image/I1.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I2.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I3.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I4.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I5.jpg" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I6.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/i7.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I8.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I9.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I10.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I11.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I12.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I9.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I10.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I11.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I12.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I5.jpg" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I6.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/i7.png" />
          <img alt = "" className="md:w-28 md:h-16" src="/image/I8.png" />
        </div>

        <div className="md:w-1/2 cnta-5">
          <h1 className="text-3xl font-bold text-center md:text-left">
            With Integrated Work, Gain 3 Years Of Work-Ex Even Before You
            Graduate!
          </h1>
          <un className="m-4">
            <li className="m-4">
              Placement at the end of 1st year in leading Tech Companies.
            </li>
            <li className="m-4">
              Earn as you learn with Stipends up to INR 8 Lakhs.
            </li>
            <li className="m-4">
              Apply classNameroom learning to build real world applications.
            </li>
            <li className="m-4">
              Get mentorship and guidance by on-campus Industry trained mentors.
            </li>
          </un>

          <p className="font-semibold">LEARN MORE ABOUT WORK-INTEGRATION</p>
        </div>
      </div>

      <div className="container-6 bg-zinc-50 pt-14 cnt-6">
        <div className="font-bold text-4xl p-14">
          <h1>Kalvium Program Vs A Regular Program​</h1>
        </div>

        <div className="grid grid-cols-3  pl-20 pb-20 pr-20 pt-6">
          <div className="cnt-6"></div>

          <div className="cnta-6  border-2 border-black bg-orange-50">
            <p className="bg-red-600 text-white font-semibold text-center ">
              Most Sought After
            </p>

            <h1 className="text-red-600 text-center mt-7 text-3xl font-extrabold ">
              Floobyte CSE
            </h1>
          </div>

          <div className=" cnta-6 border-2 border-black bg-gray-100">
            <h1 className="text-center mt-7 text-3xl font-extrabold ">
              Regular CSE
            </h1>
          </div>

          <div className="p-3 border-2 border-black bg-pink-50 text-center">
            <ul>
              <li className="p-3">Learning</li>
              <li className="p-3">Teaching</li>
              <li className="p-3">Assignments</li>
              <li className="p-3">Evaluation</li>
              <li className="p-3">Pedagogy</li>
              <li className="p-3">Courses</li>
              <li className="p-3">Curriculum</li>
              <li className="p-3">Mentorship</li>
              <li className="p-3">Faculty</li>
              <li className="p-3">Internship</li>
              <li className="p-3">Employability</li>
            </ul>
          </div>

          <div className="p-3 border-2 border-black bg-orange-50">
            <ul>
              <li className="p-3">
                Minds-on & Hands-on
              </li>
              <li className="p-3" >
                Real-World Application
              </li>
              <li className="p-3">
                Capstone Projects, Open Source Contribution
              </li>
              <li className="p-3" >
                Continuous & Ongoing Feedback
              </li>
              <li className="p-3" >
                On The Job, Coaching
              </li>
              <li className="p-3" >
                Focus on CSE & professional skills
              </li>
              <li className="p-3">
                SDLC Methodology
              </li>
              <li className="p-3" >
                1:1 & Comprehensive
              </li>
              <li className="p-3" >
                Industry Trained Mentors
              </li>
              <li className="p-3" >
                3 Years, Paid, at top companies
              </li>
              <li className="p-3" >
                Ready to Work & Senior Developers
              </li>
            </ul>
          </div>

          <div className="p-3 border-2 border-black bg-orange-50">
            <ul>
              <li className="p-3">Rote Learning</li>
              <li className="p-3">Passive Lectures</li>
              <li className="p-3">Pen & Paper</li>
              <li className="p-3">End of Semester Exams</li>
              <li className="p-3">Chalk & Board, Instructional</li>
              <li className="p-3">Includes Physics, Organic Chemistry, etc.</li>
              <li className="p-3">Outdated</li>
              <li className="p-3">-NA-</li>
              <li className="p-3">Subject Professors</li>
              <li className="p-3">No Support, only short term</li>
              <li className="p-3">Has to undergo extra training</li>
            </ul>
          </div>

          <div className="cnta-6"></div>

          <div className="cnta-6 p-3 border-2 border-black text-center">
            <button className="btn md:mt-6 ">Register For Floobyte</button>
          </div>

          <div className="I4 p-3 border-2 border-black">
            <img 
              className="md:h-10 md:w-10 md:m-auto md:mt-5 h-10 w-10 m-auto mt-20"
              src="/image/right.jpg"
            alt=""/>
          </div>
        </div>
      </div>

      <div className="container-7 bg-black pb-5">
        <div className="font-bold text-4xl p-14 text-white text-center">
          <h1>Kalvium Program Vs A Regular Program​</h1>
        </div>

        <div className="grid gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  text-center md:text-base xl:w-5/6 lg:w-9/12 md:w-2/3 md:m-auto md:mb-8 m-16 text-3xl">
          <div className="bg-slate-100 w-full md:w-60 h-48 m-auto rounded-lg">
            <i className="fas fas-address-book"></i>
            <p className="p-10">
              Build websites, apps, and games instead of boring lectures
            </p>
          </div>
          <div className="bg-slate-100 w-full md:w-60 h-48 m-auto rounded-lg">
            <p className="p-10">
              Collaborate with classNamemates instead of competing over grades.
            </p>
          </div>
          <div className="bg-slate-100 w-full md:w-60 h-48 m-auto rounded-lg">
            <p className="p-10">On-campus access to Industry trained mentors.</p>
          </div>
          <div className="bg-slate-100 w-full md:w-60 h-48 m-auto rounded-lg">
            <p className="p-10">Cutting edge programming labs.</p>
          </div>
          <div className="bg-slate-100 w-full md:w-60 h-48 m-auto rounded-lg">
            <p className="p-10">
              H.O.L. (High on Learning) sessions from peers and industry
              experts.
            </p>
          </div>
          <div className="bg-slate-100 w-full md:w-60 h-48 m-auto rounded-lg">
            <p className="p-10">
              Hackathons & events to leave your mark on a global stage.
            </p>
          </div>
          <div className="bg-slate-100 w-full md:w-60 h-48 m-auto rounded-lg">
            <p className="p-10">Networking with industry experts.</p>
          </div>
          <div className="bg-slate-100 w-full md:w-60 h-48 m-auto rounded-lg">
            <p className="p-10">
              Get adept in agile through real world Software Development
              projects.
            </p>
          </div>
        </div>
      </div>

      <BestOutcome/>

      <div className="container-8 bg-white">
        <div className="font-bold text-4xl p-14  ml-8">
          <h1>
            Four Years In This Program, Foundation To A Fulfilling Tech Career
          </h1>
        </div>
        <div>
          <img alt = "" className="md:w-2/5 md:h-2/5 md:ml-24" src="/image/I14.svg" />
        </div>
      </div>
      
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

export default Program1;
