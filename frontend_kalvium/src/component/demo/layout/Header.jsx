import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Header&Footer.css'

function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
      const handleMenuClick = () => {
          setIsActive(!isActive);
      };

      document.querySelector('.hamburger-menu').addEventListener('click', handleMenuClick);

      return () => {
          document.querySelector('.hamburger-menu').removeEventListener('click', handleMenuClick);
      };
  }, [isActive]);
  return (
   <>
  <header>
    <nav className="navbar">
        <div className='container-fluid'>
        <div className="container1">
            <div className="logo">
                <Link to="/">Kalvium</Link>
            </div>
            <div className="hamburger-menu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                <li><Link to="/program">Program</Link></li>
                <li><Link to="/campuses">Campuses</Link>
                    <ul className="dropdown">
                      <div id="sub-box">
                        <li><Link to="/campusJalandhar">Lovely Professional University, Jalandhar</Link></li>
                        <li><Link to="/campusJalandhar">Alliance University, Bengaluru</Link></li>
                        <li><Link to="/campusJalandhar">Chitkara University, Baddi</Link></li>
                        <li><Link to="/campusJalandhar">JECRC University, Jaipur</Link></li>
                        <li><Link to="/campusJalandhar">Kalasalingam Academy of Research and Education (KARE), Srivilliputhur </Link></li>
                        <li><Link to="/campusJalandhar">JIS University, Kolkata</Link></li>
                        <li><Link to="/campusJalandhar">Veles University,Chennai</Link></li>
                        <li><Link to="/campusJalandhar">The Apollo University,chittoor</Link></li>
                        
                        

                      </div>
                    </ul>
                </li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/hirefromus"><button className="hire-button">Hire From Us</button></Link></li>
                <li><Link to="/login">Aspirant login</Link></li>
                <li><Link to="/login"><button className="register-button">Register for KQ</button></Link></li>
                
            </ul>
        </div>
        </div>
    </nav>
</header>
   </>
  )
}

export default Header