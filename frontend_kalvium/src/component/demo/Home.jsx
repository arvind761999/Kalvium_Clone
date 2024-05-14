import React, { useState } from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'
import UniversityJalandhar from './UniversityJalandhar'
import '../css/universiyjaladhar.css'
import Program from './Program'
import Slider from './Slider'
import Compass from '../compass/Compass'
import Heros from '../Hero/Heros'

function Home() {
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
    {/* <UniversityJalandhar/> */}
    <Heros/>
    <Program/>
    
     <div id="conatiner">
        <div className="heading"><h1>Best Outcomes</h1></div>
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
                    <h1>Best Student Experience</h1>
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
               <Link to="/reviews"> <h2>Visit the Wall of Love</h2></Link>
            </div>

            
        </div>


        <div className="thumb">
            <img src="/image/thumb.png" alt="" />
        </div>

        
    </div>
    <Slider/>
    <Compass/>

    
    <div id="slider-section" className='pt-4'>
        <h1 style={{fontSize:'xx-large',fontWeight:'700'}}>Choose Among The BEST Campuses In India & Abroad</h1>
        <div className="slider-child">

            
            <div className="slide">
                
                <Link href="https://google.com" target="_blank"><img src="/image/1st.png" alt="1st" /></Link>
            </div>

            <div className="slide">
                <Link href="https://google.com" target="_blank"><img src="/image/2nd.png" alt="2nd" /></Link>
            </div>

            <div className="slide">
                <Link href="https://google.com" target="_blank"><img src="/image/3rd.png" alt="3rd" /></Link>
                
                
            </div>

            <div className="slide">
                <Link href="https://google.com" target="_blank"><img src="/image/4th.png" alt="4th" /></Link>
            </div>

            <div className="slide">
                <Link href="https://google.com" target="_blank"><img src="/image/5th.png" alt="5th" /></Link>
            </div>
            <div className="slide">
                <Link href="https://google.com" target="_blank"><img src="/image/6th.png" alt="6th" /></Link>
            </div>
            <div className="slide">
                <Link href="https://google.com" target="_blank"><img src="/image/7th.png" alt="7th" /></Link>
            </div>
            <div className="slide">
                <Link href="https://google.com" target="_blank"><img src="/image/8th.png" alt="8th" /></Link>
            </div>
            <div className="slide">
                <Link href="https://google.com" target="_blank"><img src="/image/9th.png" alt="9th" /></Link>
            </div>
            <div className="slide">
                <Link href="https://google.com" target="_blank"><img src="/image/10th.png" alt="10th" /></Link>
            </div>
            <div className="slide">
                <Link href="https://google.com" target="_blank"><img src="/image/11th.png" alt="11th" /></Link>
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
            <Link href="#"><h3>Register For Free</h3></Link>
        </div>
            <div className="last">
               <div className="child-conatiner700">
                <p>Admissions for the academic year 2024 – 2025 are open!</p>  

                <div className="child-conatiner600">
                    <Link href="#">Get Prospectus.</Link>
                </div>
               </div>
            </div>
        </div>
    </div>

    <section id="">
        <div class="mt-5 pt-3">
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>
{/* 
      <div class="sticky-box">
        <Link
          to="enquire"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Enquire Now
        </Link>
      </div> */}

      {/* <!-- content --> */}
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

  
    </>
  )
}

export default Home