import React from 'react'
import '../css/Header&Footer.css'

function Map() {
   
  return (
    <>
    {/* <div className='container-fluid'> */}
    <div className='container px-5'>
        <div className='row'>
            <div className='col-md-6 mb-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49879445.85696133!2d-47.8023207!3d40.26686895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630313244579ef%3A0x1a21cfbc3879c678!2sFloobyte!5e0!3m2!1sen!2sin!4v1709969148009!5m2!1sen!2sin" width={'100%'} height={'300px'} style={{border:'6px solid black'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-md-6 px-5 mb-5'>
            <h1 className='font-bold text-xl ..'>Alliance University - Where We Are Shaping The Future Of Technology</h1>
            <p className='font-medim mt-2 text-l ..'>The campus offers access to state-of-the-art facilities, a modern approach to Computer Science & Engineering, and a diverse, vibrant student community.</p>
            <div className='d-flex mt-4'>
                <button className='button me-3'>Download Brochure</button>
                <button className='button text-dark bg-white border -1'>Visit University Website</button>
            </div>
            </div>
        </div>
    </div>

    <div className='container px-0 mt-4'>
    <div className="row px-5 row-cols-1 row-cols-md-3 g-4" style={{position:'relative',right:'-1%',left:'-1%'}}>
  <div className="col">
    <div className="card">
      <img src="image/card1.webp" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">New Age Classrooms</h5>
        <p className="card-text">Kalvium classrooms are equipped with high-speed internet, whiteboards, digital learning experience, developer workspace & Personal mentorship from Industry Trained Mentors to provide a one-of-a-kind learning experience.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="image/card2.webp" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Infrastructure</h5>
        <p className="card-text">A host of facilities such as WiFi-enabled campus, up-to-date library, food court, cafeteria, hospital tie-ups and emergency services, transportation amenities, and hostel services are available.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="image/card3.webp" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Sports & Extra-curricular Facilities</h5>
        <p className="card-text">Facilities for major outdoor Football, Cricket, Basketball etc. and indoor sports like Table tennis, Chess, Carroms etc. are available. Students also have access to all the on-campus clubs and student activities to network and grow.</p>
      </div>
    </div>
  </div>
</div>
    </div>
    {/* </div> */}
   {/* <div className='container-fluid'> */}
   <div className='container-fluid mt-5 pt-4 mb-5 tution'>
        <div className='row mt-2 '>
            <div className='col-md-8 px-5 mb-4'>
                <h1 className='font-bold text-justify ... mb-3 px-4 text-3xl ..'>Tuition Fees</h1>
                <p className='px-4' >Did you know that you could recoup up to 60% of the tuition fees before you graduate?</p>
            </div>
            <div className='col-md-3 pt-5  ps-5'>
                {/* <button className='button text-dark bg-white'>Download fees Estimate</button> */}
                <button className="button-54 bg-white" role="button">Download fees Estimate</button>
            </div>
        </div>
    </div>
   {/* </div> */}
    </>
  )
}

export default Map