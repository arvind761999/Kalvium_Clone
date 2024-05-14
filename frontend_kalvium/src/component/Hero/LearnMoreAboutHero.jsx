import React from 'react'
import { Link } from 'react-router-dom'

function LearnMoreAboutHero() {
  return (
    <>
        {/* <!---------------------------------------------- Section-1 ------------------------------------------------------> */}
   
   {/* <!-- For screen width 375px --> */}
<div className="container-1 mt-5  pb-5 pt-5 px-5 bg-orange-50">
  <div className="A1 mt-5 flex flex-col md:flex-row">
    <div className="a1 w-full md:w-1/2 p-4 md:p-20">
      <h1 className="font-extrabold text-lg md:text-4xl md:m-0 m-8 md:pb-8">H.E.R.O.S. Enables Education With Outcomes!</h1>
      <p className="md:m-0 m-8">
        Higher Education Real-time Operating System (H.E.R.O.S.) is a platform that enables the delivery of higher education focused on outcomes. Think of it like Google Maps for learning. It’s a real-time learning navigator that continuously collects learning signals and intervenes towards improving the outcomes.
      </p>
    </div>

    <div className="a2 w-full md:w-1/2 p-4 md:p-20 flex justify-center items-center">
      <img className="w-48 md:w-72" src="image/chkra.webp" />
    </div>
  </div>

  {/* <!-- Cards --> */}
  <div className="B1 flex flex-col md:flex-row gap-1">

    <div className="card lg:h-60 md:h-72 w-3/4 md:w-4/12  m-auto md:m-8 md:-rotate-6 md:ml-24 bg-white p-2 md:p-3 mb-8 md:mb-32 border border-b-4 border-gray-600">
      <div className="card-body w-full">
        <h5 className="card-title ml-2 md:ml-4 text-md md:text-5xl font-extrabold text-yellow-500">50+</h5>
        <p className="card-text p-2 md:p-4">signals collected <strong>DAILY</strong> as compared to 48 signals per YEAR collected in the traditional model.</p>
      </div>
    </div>

    <div className="card w-3/4 lg:h-60 md:h-72  md:w-4/12 m-auto md:m-8 md:rotate-6 bg-white p-2 md:p-3 border border-b-4 border-gray-600 mb-8">
      <div className="card-body w-full">
        <h5 className="card-title ml-2 md:ml-4 text-md md:text-5xl font-extrabold text-yellow-500">8 months</h5>
        <p className="card-text p-2 md:p-4">into a <strong>UG program</strong> enables outcomes as compared to 42-48 months in the regular programs.</p>
      </div>
    </div>

    <div className="card lg:h-60 md:h-72 w-3/4 md:w-4/12 m-auto md:m-8 md:-rotate-6 md:mr-24 bg-white p-2 md:p-3 border border-b-4 border-gray-600 mb-8">
      <div className="card-body w-full">
        <h5 className="card-title ml-2 md:ml-4 text-md md:text-5xl font-extrabold text-yellow-500">-87%</h5>
        <p className="card-text p-2 md:p-4">of students achieved outcomes at the <strong>end of 12 months</strong> of our UG program. Deployed and tested with a pilot batch.</p>
      </div>
    </div>
  </div>
</div>


{/* <!------------------------------------------- Section-2---------------------------------------------> */}

<div className="container-2 ">
  <div className="C1 grid grid-cols-1 md:grid-cols-2">

    <div className="c1 m-auto ">
      <div className="loader-part2 mt-12">
        <svg className="pl" viewBox="0 0 170 170 " width="180px" height="180px" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#000"></stop>
                    <stop offset="100%" stop-color="#fff"></stop>
                </linearGradient>
                <mask id="mask1">
                    <rect x="0" y="0" width="160" height="160" fill="url(#grad)"></rect>
                </mask>
                <mask id="mask2">
                    <rect x="28" y="28" width="104" height="104" fill="url(#grad)"></rect>
                </mask>
            </defs>
            
            <g>
                <g className="pl__ring-rotate">
                    <circle className="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(223,90%,55%)" stroke-width="16" stroke-dasharray="452.39 452.39" stroke-dashoffset="452" stroke-linecap="round" transform="rotate(-45,80,80)"></circle>
                </g>
            </g>
            <g mask="url(#mask1)">
                <g className="pl__ring-rotate">
                    <circle className="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(193,90%,55%)" stroke-width="16" stroke-dasharray="452.39 452.39" stroke-dashoffset="452" stroke-linecap="round" transform="rotate(-45,80,80)"></circle>
                </g>
            </g>
            
            <g>
                <g stroke-width="4" stroke-dasharray="12 12" stroke-dashoffset="12" stroke-linecap="round" transform="translate(80,80)">
                    <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
                </g>
            </g>
            <g mask="url(#mask1)">
                <g stroke-width="4" stroke-dasharray="12 12" stroke-dashoffset="12" stroke-linecap="round" transform="translate(80,80)">
                    <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
                    <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
                </g>
            </g>
            
            <g>
                <g transform="translate(64,28)">
                    <g className="pl__arrows" transform="rotate(45,16,52)">
                        <path fill="hsl(3,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
                        <path fill="hsl(223,10%,90%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
                    </g>
                </g>
            </g>
            <g mask="url(#mask2)">
                <g transform="translate(64,28)">
                    <g className="pl__arrows" transform="rotate(45,16,52)">
                        <path fill="hsl(333,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
                        <path fill="hsl(223,90%,80%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
                    </g>
                </g>
            </g>
        </svg>
  
    </div>

    </div>

    <div className="c2 m-4 md:m-16 md:p-0 p-12">

      <h2 className="font-extrabold mb-8 md:pb-4 pt-4 md:pt-8 text-2xl md:text-4xl">H.E.R.O.S - The Navigator</h2>

      <p>H.E.R.O.S. continuously collects learning signals and intervenes through its 3 sub-systems:</p>
      <h3 className="font-bold text-xl md:text-2xl mt-4 mb-4"><i className="fa-solid fa-traffic-light text-yellow-300 md:ml-0 md:mr-4 md:mb-4 md:mt-4 text-2xl md:text-2xl mr-4"></i>Signals Platform</h3>
      <p className="md:pl-4 md:pr-10">Collects real-time data (up to 8 data points per hour) about a student’s progress on various learning tracks.</p>
      <h3 className="font-bold text-xl md:text-2xl mt-4 mb-4"><i className="fa-solid fa-tower-observation text-blue-300 md:ml-0 md:mr-4 md:mb-4 md:mt-4 text-2xl md:text-2xl mr-4"></i>Observation And Intervention Engine</h3>
      <p className="md:pl-4 md:pr-10">Undertakes system interventions and in-person interventions.</p>
      <h3 className="font-bold text-xl md:text-2xl mt-4 mb-4"><i className="fa-solid fa-brain text-orange-300 md:ml-0 md:mr-4 md:mb-4 md:mt-4 text-2xl md:text-2xl mr-4"></i>Aggregate Intelligence</h3>
      <p className="md:pl-4 md:pr-10">Continuously mines signals at an aggregate level to provide directional improvements to the system design.</p>
    </div>
  </div>


  <div className="D2 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="d1 pb-4 md:pb-32">
      <h1 className="text-md md:text-4xl font-extrabold ml-14 mb-8 md:p-12">Work With Us</h1>
      <p className="ml-14 mb-8 mr-14 md:pl-12">This is a world-first effort. A fully digital platform which can scalably and efficiently integrate outcomes-oriented programs. As educators, we welcome you to connect with us to understand more and explore possible synergies. As builders, we welcome you to come be a part of building an extremely innovative platform.</p>
      <Link to="/joinus"><button className="button-54 ms-5 text-white mb-5">Join Us</button></Link>
    </div>

    <div className="d2  md:w-2/3 flex items-center">
      <img className=" md:ml-24" src="image/chair.webp" />
    </div>
  </div>
</div>
    </>
  )
}

export default LearnMoreAboutHero