import React from 'react';
import { Link, useParams } from 'react-router-dom';
import JoinUsData from './JoinUsData'; // Import your data file here
import '../Hero/joinview.css'

function JoinView() {
  // Get the job ID from URL params
  const { id } = useParams();

  // Find the job data based on the ID
  const job = JoinUsData.find(job => job.id === Number(id)); // Convert id to number if it's stored as a string
//   console.log('Job:', job);

  return (
    <>
      <div className="container-view">
        <div className="inner-container-view">
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
                            "{job.experience}"
                        </p>
                    </span>
                </div>
                

                <div className="more-job-details-button">
                    <Link to="/joinus"><button className="see all jobs">see all jobs</button></Link>
                    <Link to={`apply/${job.id}`}><button className="apply">apply</button></Link>          
                </div>
               
            </div>
        </div>

    </div>
    <div className="mid-section">
        <div className="part-one">
           <div className="one">
            <span>{job.description}</span>
           </div>
           <div className="two">
            <strong>Basic Eligibility:</strong><span>{job.eligibility}</span>
           </div>
           <div className="three">
            <span>·     {job.eligibilitypoint1}</span>
           </div>
           <div className="three">
            <span>·{job.eligibilitypoint2}</span>
           </div>
           <div className="three">
            <span>·      Screens applications and selects qualified candidates.</span>
           </div>
           <div className="three">
            <span>·      Schedule interviews; oversee preparation of interview questions and other hiring and selection materials.</span>
           </div>
           <div className="three">
            <span>·      Assists with the interview process, attending and conducting interviews with the stakeholders.</span>
           </div>
           <div className="three">
            <span>·      Managing the effective and smooth onboarding of new hires in collaboration with the onboarding team in accordance with the set process to ensure their acclimatization to the organization for improved engagement and stability.</span>
           </div>
           <div className="three">
            <span>·      Finding candidates using different methods, such as job boards, employee referrals, social media, and professional networks.</span>
           </div>
           <div className="three">
            <span>·      Proven track record of identifying, attracting, and recruiting top-tier sales talent.</span>
           </div>
           <div className="three">
            <span>·      Knowledge of edtech and sales industry tendencies, the competitive environment, and best practices.</span>
           </div>
           <div className="three">
            <span>·      Solid comprehension of HR policies and practices.</span>
           </div>
           <div className="three">
            <span>·      Capability to assess candidates’ suitability for a position.</span>
           </div>
           <div className="three">
            <span>·      Strong organizational and time management skills to manage a large number of recruitment activities.</span>
           </div>
           <div className="three">
            <span>·      Outstanding communication, negotiation, and interpersonal abilities.</span>
           </div>
           <div className="three">
            <span>·      Capacity to work under duress, prioritize responsibilities, and meet deadlines.</span>
           </div>
           <div className="three">
            <span>·      Working with hiring managers to make sure the hiring process goes smoothly and quickly.</span>
           </div>
           <div className="three">
            <span>·      Building strong relationships with potential candidates.</span>
           </div>
           <div className="three">
            <span>·      Keeping up with changes and trends in the industry to help improve recruitment strategies.</span>
           </div>
           <div className="three">
            <span>·      Managing the offer process and making sure the candidates are comfortable.</span>
           </div>
           <div className="three">
            <span>·      Keeping accurate data and metrics of recruitment activities and regularly updating the hiring managers.</span>
           </div>
           <div className="three">
            <span>·      Bachelor’s degree in business, human resources, or a related field.</span>
           </div>
           <div className="three">
            <span>·      Three to five years experience in Mass hiring/sales recruitment, talent acquisition, or a related role.</span>
           </div>
           <div className="four">

               <div>
                <span><strong>Location and Work Mode</strong>: {job.workplacetype}, {job.address}, {job.location}
                    Kalvium Benefits:</span>
               </div>
               <div>
                <span>{job.benefit}</span>
               </div>
               <div>
                <span><strong>Kalvium’s Core Values</strong></span>
               </div>
               <div>
                <span><strong>● We obsess about student experience and outcomes above all.</strong></span>
               </div>
               <div>
                <span><strong>● We respect and trust each other. We disagree with candour and courtesy</strong></span>
               </div>
               <div>
                <span><strong>● We improve things regularly, rather than chase perfection</strong></span>
               </div>
               <div>
                <span><strong>● We seek out technology leverage to accelerate our mission</strong></span>
               </div>
               <div>
                <span><strong>● We are pirates who challenge and change the status quo, and enjoy doing so.</strong></span>
               </div>
           </div>
    
        </div>
        <div className="part-two">
            <div className="part-two-content">
                <h2>Workplace Type</h2>
                <p>{job.workplacetype}</p>

                <h2>Employment Type</h2>
                <p>{job.employmenttype}</p>

                <h2>Industry Type</h2>
                <p>{job.industry}</p>

                <h2>Experience Level</h2>
                <p>{job.experiencelevel}</p>

                <h2>Annual Compensation</h2>
                <p>{job.salary}</p>

                <h2>Work Experience (years)</h2>
                <p>{job.experience}</p>

                <h2>Education</h2>
                <p>{job.education}</p>
            </div>
            <div className="part-two-content">
                <h2>Skills</h2>
                <p>This is the content that I want in the midsection part two.</p>
            </div>
        </div>
    </div>
    <footer className="footer-sg">
        <div className="footer-content">
            <h5>Hiring powered by</h5>
            <h1>PyjamaHR</h1>
        </div>
    </footer>
    </>
  );
}

export default JoinView;
