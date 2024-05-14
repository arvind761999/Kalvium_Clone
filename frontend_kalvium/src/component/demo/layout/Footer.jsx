import React from 'react'
import '../../css/Header&Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div class="container-fluid  text-center mt-5 alert m-0 ">
      <p>Dear parents and students, be vigilant while making your fee payments.
        <Link to="/readmore">Read more</Link></p>
    </div>
    <footer>
      <div className="container-fluid bg-black text-white pt-5 pb-5" >
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 text-start'>
            <h1 className='text-start'>Kalvium</h1>
            <br/>
            <h3>Bangalore Office</h3>
            <br/>
            <p>Olsen Spaces, Ground Floor, Site no 41/41A, 12th main road, HSR
              layout Sector 6, Bengaluru – 560102</p>
            </div>
            <div className='col-md-3'>
            <h3>company</h3>
            <br/>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Wall of Love</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
            </div>
            <div className='col-md-3'>
            <h3>Admissions</h3>
            <br/>
            <ul>
              <li><a href="#">Kalvium Program</a></li>
              <li><a href="#">Get Prospectus</a></li>
              <li><a href="#">Work interation</a></li>
              <li><a href="#">Hire from Us!</a></li>
              <li><a href="#">Student Fee Portal</a></li>
            </ul>
            </div>
            <div className='col-md-3'>
            <h3>Program</h3>
            <br/>
            <ul>
              <li><a href="#">FAQs</a></li> 
               <li><a href="#">Admission Process 2024</a></li>
              <li><a href="#">Register For KQ</a></li>
              <li><a href="#">Aspirant login</a></li>
            </ul>
            </div>
            <div className='col-md-3 pt-3'>
            <h3 className='pb-4'>social-links</h3>
            <a href="#"><i class="fab fa-facebook-f pe-4"></i></a>
            <a href="#"><i class="fab fa-twitter pe-4"></i></a>
            <a href="#"><i class="fab fa-instagram pe-4"></i></a>
            <a href="#"><i class="fab fa-linkedin-in pe-4"></i></a>
          </div>
           <div className='col-md-3'>
           <h3>Coimbatore Office</h3>
            <br/>
            <p>SNS Kalvi Nagar, Sathy Main Road (NH-209) Vazhiyampalayam,
              Saravanampatti Post Coimbatore – 641035, Tamil Nadu, IN.</p>
           </div>
           <div className='col-md-3'>
           <h3>Contact Us</h3>
            <br/>
            <p>Email: contactus@kalvium.com</p>
            <p>Mobile: +91 9483 200 300</p>
          </div>
           <div className='col-md-3'>
           <h3>Partner Universities</h3>
            <br/>
            <ul>
              <li>Lovely Professional University, Jalandhar</li>
              <li>Alliance University, Bengaluru</li>
               Add more universities here 
             </ul>
           </div>
            </div>
            </div>

          </div>
      </footer>
    </>
  )
}

export default Footer