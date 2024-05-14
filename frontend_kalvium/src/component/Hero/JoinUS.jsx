import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Hero/JoinUS.css";
import JoinUsData from "./JoinUsData";

function JoinUS() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [filteredData, setFilteredData] = useState(JoinUsData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value, selectedLocation, selectedDepartment);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    filterData(searchTerm, event.target.value, selectedDepartment);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    filterData(searchTerm, selectedLocation, event.target.value);
  };

  
  const filterData = (searchTerm, location, department) => {
    const filtered = JoinUsData.filter((data) => {
      const jobName = data.Job_name.toLowerCase();
      const dataLocation = data.location ? data.location.toLowerCase() : '';
      const dataDepartment = data.position ? data.position.toLowerCase() : '';
  
      return jobName.includes(searchTerm.toLowerCase()) &&
             (location === '' || dataLocation.includes(location.toLowerCase())) &&
             (department === '' || dataDepartment.includes(department.toLowerCase()));
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="container-sg mt-5 pt-5">
        <div className="navbar-sg">
          <div className="logo">K</div>
          <div className="logo-name">kalvium</div>
        </div>
      </div>
      <div className="content-sg">
        <div className="discription">
          <p>
            Kalvium is an ed-tech company that provides India’s Best
            Undergraduate Computer Science Program. We are on a mission to
            educate young individuals with the most advanced industry-relevant
            skills that can put them years ahead of their peers in the tech
            world. What we offer is a 4-year, on-campus Bachelor’s degree
            program in collaboration with top Universities across the country,
            such as Lovely Professional University, Kalasalingam Academy of
            Research and Education, RV University, Vels University, GD Goenka
            University, and more, where students can start gaining industrial
            work experience right from their second year of college by working
            as they study. This helps them gain a significant advantage over
            their peers. Our students get placed at some of the top leading tech
            companies such as Google, Microsoft, Disney+ Hotstar, Flipkart, and
            so on. Our program is powered by our proprietary AI-powered
            technology “Quadrangle”, which offers a unique and immersive
            learning environment to our students, which is a paradigm shift from
            the traditional chalk and board approach of learning. Our learning
            modules are curated by top C-Suite executives of leading tech
            companies, which aim to deliver a state-of-the-art learning
            experience. The founding team consists of a highly energetic, and
            dynamic set of individuals from Engineering Backgrounds, who are
            also alumni of the prestigious IIM Kozhikode. In their 13 years of
            experience in the education industry, they have trained and placed
            over 5 Million students in more than 500+ companies through their
            Coimbatore-based startups, FACE Prep and ProGrad. To know more about
            us, visit our website and follow our LinkedIn page for the latest
            updates and news.
          </p>
          <h4 style={{ paddingTop: "8px", marginBottom: "5px" }}>
            Contact Info
          </h4>
          <Link to="#">https://kalvium.com</Link>
        </div>
      </div>
      <div className="careers-section">
        <h2>Careers at Kalvium</h2>
        <form className="search-form" action="#" method="GET">
          <input
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
        </form>
      </div>
      <div className="search-here">
        <div className="searching-sec px-4">
          <h2>Department</h2>
          <select name="department" id="department" onChange={handleDepartmentChange}>
            <option value="">Select Department</option>
            <option value="People Operations">People Operations</option>
            <option value="Digital Markeitng">Digital Markeitng</option>
            <option value="Product Engineering">Product Engineering</option>
            <option value="Product">Product </option>
            {/* <!-- Add department options here --> */}
          </select>
        </div>
        <div className="searching-sec">
          <h2>Location</h2>
          <select name="location" id="location" onChange={handleLocationChange}>
            <option value="3">Search</option>
            <option value="Jaipur">Jaipur, India + 2</option>
            <option value="Bengaluru">Bengaluru, India</option>
            <option value="delhi">New Delhi</option>

            {/* <!-- Add location options here --> */}
          </select>
        </div>
      </div>
      {filteredData.map((data) => {
        return (
          <>
            <div className="job-container" key={data.id}>
              <div className="job-details">
                <h3>{data.Job_name}</h3>
                <div className="job-id">Job ID: {data.id}</div>
              </div>
              <div className="location-details">
                <h3>{data.position}</h3>
                <p>{data.location}</p>
                <p>{data.experience}</p>
              </div>
              <Link to={`view/${data.id}`}>
                {" "}
                <button className="view-button">View</button>
              </Link>
            </div>
          </>
        );
      })}

      <footer className="footer-sg">
        <div className="footer-content">
          <h5>Hiring powered by</h5>
          <h1>PyjamaHR</h1>
        </div>
      </footer>
    </>
  );
}

export default JoinUS;
