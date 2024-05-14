import React, { useState } from "react";
import { Link } from "react-router-dom";

function Faq() {
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
      <section id="queBox">
        <div class="faq-header">
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>

      <div class="sticky-box">
        <Link
          href="#"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Enquire Now
        </Link>
      </div>

      {/* <!-- content --> */}
      <div class="container">
        <div class="faq-section">
          <div class="faq-category">
            <h2>General</h2>
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
      </div>

      {/* <!-- Another Category --> */}
      <div class="container">
        <div class="faq-section">
          <div class="faq-category">
            <h2>Technical</h2>
          </div>
          <div id="question4" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer4");
                  }}
                  data-target="answer4"
                >
                  What programming languages are taught?
                </Link>
              </h3>
            </div>
            <div
              id="answer4"
              class="answer"
              style={{ display: visibleAnswers["answer4"] ? "block" : "none" }}
            >
              <p>The program primarily focuses on Java, C++, and Python.</p>
            </div>
          </div>

          {/* <!-- Additional Questions for Technical Category --> */}
          <div id="question5" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer5");
                  }}
                  data-target="answer5"
                >
                  Are there any prerequisites for technical courses?
                </Link>
              </h3>
            </div>
            <div
              id="answer5"
              class="answer"
              style={{ display: visibleAnswers["answer5"] ? "block" : "none" }}
            >
              <p>
                Yes, some courses may require prior knowledge of basic
                programming concepts and data structures.
              </p>
            </div>
          </div>

          <div id="question6" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer6");
                  }}
                  data-target="answer6"
                >
                  Is there hands-on experience included?
                </Link>
              </h3>
            </div>
            <div
              id="answer6"
              class="answer"
              style={{ display: visibleAnswers["answer6"] ? "block" : "none" }}
            >
              <p>
                Yes, the curriculum includes practical projects and assignments
                to provide hands-on experience.
              </p>
            </div>
          </div>
          {/* <!-- End of Additional Questions for Technical Category --> */}
        </div>
      </div>

      {/* <!-- Another Category --> */}
      <div class="container">
        <div class="faq-section">
          <div class="faq-category">
            <h2>Category 3</h2>
          </div>
          <div id="question7" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer7");
                  }}
                  data-target="answer7"
                >
                  Question 1 for Category 3
                </Link>
              </h3>
            </div>
            <div
              id="answer7"
              class="answer"
              style={{ display: visibleAnswers["answer7"] ? "block" : "none" }}
            >
              <p>Answer to Question 1 for Category 3</p>
            </div>
          </div>

          {/* <!-- Additional Questions for Category 3 --> */}
          <div id="question8" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer8");
                  }}
                  data-target="answer8"
                >
                  Question 2 for Category 3
                </Link>
              </h3>
            </div>
            <div
              id="answer8"
              class="answer"
              style={{ display: visibleAnswers["answer8"] ? "block" : "none" }}
            >
              <p>Answer to Question 2 for Category 3</p>
            </div>
          </div>

          <div id="question9" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer9");
                  }}
                  data-target="answer9"
                >
                  Question 3 for Category 3
                </Link>
              </h3>
            </div>
            <div
              id="answer9"
              class="answer"
              style={{ display: visibleAnswers["answer9"] ? "block" : "none" }}
            >
              <p>Answer to Question 3 for Category 3</p>
            </div>
          </div>

          <div id="question10" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer10");
                  }}
                  data-target="answer10"
                >
                  Question 4 for Category 3
                </Link>
              </h3>
            </div>
            <div
              id="answer10"
              class="answer"
              style={{ display: visibleAnswers["answer10"] ? "block" : "none" }}
            >
              <p>Answer to Question 4 for Category 3</p>
            </div>
          </div>
          {/* <!-- End of Additional Questions for Category 3 --> */}
        </div>
      </div>

      {/* <!-- Another Category --> */}
      <div class="container">
        <div class="faq-section">
          <div class="faq-category">
            <h2>Category 4</h2>
          </div>
          <div id="question11" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer11");
                  }}
                  data-target="answer11"
                >
                  Question 1 for Category 4
                </Link>
              </h3>
            </div>
            <div
              id="answer11"
              class="answer"
              style={{ display: visibleAnswers["answer11"] ? "block" : "none" }}
            >
              <p>Answer to Question 1 for Category 4</p>
            </div>
          </div>

          {/* <!-- Additional Questions for Category 4 --> */}
          <div id="question12" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer12");
                  }}
                  data-target="answer12"
                >
                  Question 2 for Category 4
                </Link>
              </h3>
            </div>
            <div
              id="answer12"
              class="answer"
              style={{ display: visibleAnswers["answer12"] ? "block" : "none" }}
            >
              <p>Answer to Question 2 for Category 4</p>
            </div>
          </div>

          <div id="question13" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer13");
                  }}
                  data-target="answer13"
                >
                  Question 3 for Category 4
                </Link>
              </h3>
            </div>
            <div
              id="answer13"
              class="answer"
              style={{ display: visibleAnswers["answer13"] ? "block" : "none" }}
            >
              <p>Answer to Question 3 for Category 4</p>
            </div>
          </div>

          <div id="question14" class="faq-item">
            <div class="question">
              <h3>
                <Link
                  href="#"
                  class="question-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAnswer("answer14");
                  }}
                  data-target="answer14"
                >
                  Question 4 for Category 4
                </Link>
              </h3>
            </div>
            <div
              id="answer14"
              class="answer"
              style={{ display: visibleAnswers["answer14"] ? "block" : "none" }}
            >
              <p>Answer to Question 4 for Category 4</p>
            </div>
          </div>
          {/* <!-- End of Additional Questions for Category 4 --> */}
        </div>
      </div>
       
      <button className="button-54 bg-white text-center mb-4" style={{position:'relative',    right: '50%',left: '40%'}} role="button">Explore All FAQs</button>

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

export default Faq;
