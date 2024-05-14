import React from 'react'
import { Link } from 'react-router-dom'
import '../css/home.css'

function BestOutcome() {
  return (
    <>
    <div id="conatiner">
        <div className="heading font-bold text-center text-3xl ... "><h1>Best Outcomes</h1></div>
        <div className="box-container">
            <div className="div1">
                <div className="div1-child">
                    <img src="/image/bag.png" alt="bag img" className="bag" />
                    <h1 className="rupess">INR 8,00,000</h1>
                    <p className="des">Worth stipends through paid internships while you study!</p>
                    <Link to="/work-integration" className="learn-how">LEARN HOW &nbsp; &nbsp;   <i className="fa-solid fa-arrow-right" style={{color: '#ee1111'}}></i></Link>
                </div>
            </div>
            <div className="div2">
                <div className="div2-child">
                    <h1 className="div2-text">Dream Placements At Top MNCs</h1>
                    <div className="slider">
                        <div className="all-logo">
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/CRED.webp"  alt="" /> 
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Byjus.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/ATT.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Haptik.png" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Google.png" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Udaan.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Thought-works-1.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/TATA-1MG.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Rupeek.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Rapido.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Progress.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/People.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Ola.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Nineleaps.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Microsoft.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/izooto.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Hotstar.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Genspark.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Freshmenu.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Flipkart.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Dineout.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Digit.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/darwin-Box.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/CRED.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Byjus.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/ATT.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Haptik.png" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Google.png" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Udaan.webp" alt="" />
                            <img src="https://kalvium.com/wp-content/uploads/2023/05/Thought-works.webp" alt="" />
                        </div>
                    </div>

                    <Link to="/work-integration" className="know-more">KNOW MORE &nbsp; &nbsp; <i className="fa-solid fa-arrow-right" style={{color: '#ee1111'}}></i></Link>
                </div>
            </div>

        </div>

        <div className="box-container-2">
            <div className="div3">
                <h3>India's 1st Liberal Engineering Curriculum</h3>

                <div className="man">
                    <img src="/image/man.png" alt="man img" /> 
                    &nbsp; &nbsp; &nbsp;   <h3>Curriculum designed by the top CXOs of the Tech Industry</h3>
                </div>

                <div className="light">
                    <img src="/image/light.png" alt="light img" />
                    &nbsp; <h3>Skilling courses to make you a MERN-Stack Developer even before you graduate</h3>
                </div>

                <div className="cube">
                    <img src="/image/cube.png" alt="cube img" />
                    &nbsp; &nbsp; &nbsp; <h3>Based on MIT Human Skills framework that make a Future Global Leader</h3>
                </div>

                <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="Curriculum"><h3>DOWNLOAD CURRICULUM</h3></Link> &nbsp; &nbsp; <i className="fa-solid fa-arrow-right" style={{color: '#ee1111'}}></i>
            </div>


            <div className="div4">
                <img src="/image/money.png" alt="money img" />
                <h2 className="Packages">7-Figure Packages</h2>
                <p className="placements">In the final placements (in INR)</p>
                <Link to="/work-integration" className="How"><h3>LEARN HOW  &nbsp; &nbsp; <i className="fa-solid fa-arrow-right" style={{color: '#ee1111'}}></i></h3></Link>
            </div>
        </div>

{/* <!-- 😊😊😊 --> */}

        <div id="conatiner-2">
            <div className="both">
                <img src="/image/star.png" alt="star img" />

                <div className="best">
                    <h1 className='font-bold text-center text-3xl ...'>Best Student Experience</h1>
                </div>
            </div>
            {/* <!--  --> */}
            <div id="solve">
                <div className="main1">
                    <div className="div11">
                        <iframe width="643" height="362" src="https://www.youtube.com/embed/3dAN1ucQxeA" title="Wall of love | Chirag | Squad 43" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="videoplay" allowfullscreen></iframe>
                        <div className="comma-and-heading">
                            <img src="/image/comma.png" alt="comma img" />
                            <h2>My Ideas Are Heard. The Learning Environment Is Supportive.</h2>
                        </div>
                        
                        
                    </div>
                    <div className="div22">
                        <img src="/image/comma.png" alt="comma img" />
                        <p>The learning environment and program design are student-centric. The mentors, and even my batchmates, are actively supportive of each other. I feel included and involved.</p>
                        <hr/>
                        
                        <div className="t-family-contaienr">
                            <div className="divv">
                                <img src="/image/tanishq.png" alt="" />
                            </div>
                            <div className="divv2">
                                <h2>Tanishq</h2>
                                <h3>Squad 44</h3>
                                <p>Lovely Professional University</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="main2">
                    <div className="div33">
                        <img src="/image/comma.png" alt="comma img" className="lol" />
                        <p>Hands-on learning & mentorship has been a transformative experience. Moreover, self-paced learning via livebooks and doubt clearance with mentors is something I find exciting.</p>
                        <hr />
                        
                        <div className="she-family-contaienr">
                            <div className="divv33">
                                <img src="/image/panku.png" alt="" />
                            </div>
                            <div className="divv44">
                                <h2>Pankhuri</h2>
                                <h3>Squad 43</h3>
                                <p>Lovely Professional University</p>
                            </div>
                        </div>
                    </div>
                    <div className="div44">
                        <iframe width="643" height="362" src="https://www.youtube.com/embed/ya0Y4F7BIqY" title="Wall of love | Raju | Squad 44" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="videoplay" allowfullscreen></iframe>                        
                        <div className="comma-and-heading">
                            <img src="/image/comma.png" alt="comma img" />
                            <h2>I Was Impressed By The Eligibility Test That Tested My Passion And Real-World Skills.</h2>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className="click-me">
                <Link to="/reviews"><h2>Visit the Wall of Love</h2></Link>
            </div>

            
        </div>


        <div className="thumb">
            <img src="/image/thumb.png" alt="" />
        </div>

        
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
  )
}

export default BestOutcome