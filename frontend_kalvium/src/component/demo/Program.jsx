import React from 'react'
import '../css/universiyjaladhar.css'

function Program() {
  return (
    <>
    <div className="container-fluid mt-5 pt-5">
      <div className="container mt-5 pt-5">
        <h2 className="h1 text-center mb-5 px-5">
          The Best Computer Science Program
        </h2>
      </div>
      <div className="px-5 row text-center">
          <div className="col-md-6 px-5 ">
            <img src="image/bestprogram.webp" width={"100%"} alt="" />
          </div>
          <div className="col-md-6 mt-4 ">
            <span
              style={{
                fontWeight: "500",
                fontFamily: "sans-serif",
                display: "flex",
              }}
            >
              <img
                src="image/advocate.png"
                className="pe-3"
                width={"90px"}
                alt=""
              />
              Undergraduate Program In Computer Science Engineering With
              Specialisation In Software Product Development
            </span>
            <span style={{ display: "flex" }}>
              <img
                src="image/study.png"
                width={"60px"}
                className="pe-2 "
                alt=""
              />
              4 years • B.Tech. • Full-time • On-campus​
            </span>
           
            <div className="d-grid gap-3 ps-4 pe-4 ">
            <div className="px-0 bg-light border">
              <div className="row bg-white py-0 ">
                  <div className="col-md-4 p-0 ">
                    <img
                      style={{
                        background: "#fefbf6",
                        width: "100%",
                        height: '220px',
                        border: "2px black solid",
                      }}
                      src="image/B.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 py-2 " style={{border: "2px black solid"}}>
                     <h6 className="font-bold mb-1 font text-2xl ...">Beyond Books</h6>
                    <ul>
                     <li className=" mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><rect x="6.5" y="11.5" width="35" height="15" fill="white"></rect><path d="M21 16L26 19L21 22V16Z" stroke="#EF3837" stroke-width="0.5"></path><rect x="6.5" y="11.5" width="35" height="15" stroke="#454545"></rect><path d="M6 30H12.4741" stroke="#454545" stroke-width="0.349353"></path><path d="M13.1641 30H15.9142" stroke="#454545" stroke-width="0.349353"></path><path d="M6 31.9688H8.7501" stroke="#454545" stroke-width="0.349353"></path><path d="M18.8672 31.9688H21.6173" stroke="#454545" stroke-width="0.349353"></path><path d="M17.2031 30H19.4471" stroke="#454545" stroke-width="0.349353"></path><path d="M20.2422 30H27.4239" stroke="#454545" stroke-width="0.349353"></path><path d="M10.0195 31.9688H17.2012" stroke="#454545" stroke-width="0.349353"></path><path d="M6 34.0234H11.095" stroke="#454545" stroke-width="0.349353"></path><path d="M12.1055 34.0234H17.2004" stroke="#454545" stroke-width="0.349353"></path></svg>Livebooks</li>
                      <li className="mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><path d="M38.4429 14.7965L37.8804 13.4353L36.2994 13.7379C36.0317 13.3536 35.7086 13.0209 35.346 12.7464L35.7128 11.1498L34.3526 10.585L33.4488 11.9166C33.0006 11.8366 32.5372 11.8252 32.0744 11.889L31.2047 10.5005L29.8435 11.063L30.146 12.6436C29.7144 12.9442 29.348 13.3147 29.0559 13.7325L27.4755 13.4273L26.9102 14.7873L28.2983 15.6603C28.2354 16.1103 28.2415 16.5735 28.3231 17.0342L26.9908 17.9352L27.5528 19.2967L29.1501 18.9328C29.4315 19.3056 29.7666 19.6257 30.1396 19.8865L29.8344 21.467L31.1944 22.0323L32.0672 20.6447C32.5175 20.7077 32.9811 20.7017 33.4422 20.62L34.3434 21.9526L35.7048 21.3906L35.3409 19.793C35.668 19.5461 35.9545 19.2578 36.196 18.9389L37.7927 19.3057L38.3575 17.9455L37.0263 17.0419C37.1065 16.5934 37.118 16.1296 37.0541 15.6664L38.4429 14.7965Z" stroke="#333333" stroke-width="0.910872"></path><path d="M34.371 15.5658C34.7579 16.502 34.3126 17.5745 33.3764 17.9614C32.4402 18.3482 31.3677 17.9029 30.9808 16.9667C30.594 16.0305 31.0393 14.958 31.9755 14.5711C32.9116 14.1843 33.9842 14.6296 34.371 15.5658Z" fill="#F0B847" stroke="#333333" stroke-width="0.910872"></path><path d="M21.09 29.9806L20.5275 28.6194L18.9465 28.922C18.6788 28.5377 18.3557 28.205 17.9931 27.9305L18.3599 26.3339L16.9997 25.7691L16.0958 27.1007C15.6477 27.0206 15.1843 27.0092 14.7215 27.0731L13.8518 25.6846L12.4906 26.2471L12.7931 27.8277C12.3615 28.1283 11.9951 28.4987 11.703 28.9166L10.1226 28.6114L9.55725 29.9714L10.9454 30.8444C10.8825 31.2944 10.8886 31.7576 10.9702 32.2183L9.63792 33.1193L10.1999 34.4807L11.7972 34.1169C12.0786 34.4897 12.4137 34.8098 12.7867 35.0706L12.4815 36.6511L13.8415 37.2164L14.7143 35.8288C15.1646 35.8918 15.6282 35.8857 16.0893 35.8041L16.9905 37.1366L18.3519 36.5747L17.988 34.9771C18.3151 34.7301 18.6016 34.4419 18.8431 34.123L20.4398 34.4898L21.0046 33.1296L19.6733 32.226C19.7536 31.7775 19.7651 31.3137 19.7012 30.8505L21.09 29.9806Z" stroke="#333333" stroke-width="0.910872"></path><path d="M17.0181 30.7499C17.405 31.686 16.9597 32.7586 16.0235 33.1454C15.0873 33.5323 14.0148 33.087 13.6279 32.1508C13.2411 31.2146 13.6864 30.1421 14.6225 29.7552C15.5587 29.3684 16.6313 29.8137 17.0181 30.7499Z" fill="#F0B847" stroke="#333333" stroke-width="0.910872"></path><path d="M16.4928 9.39307V38.607H31.4V9.39307H16.4928Z" fill="white"></path><path d="M22.3957 11.6942H25.4972M16.4928 9.39307V38.607H31.4V9.39307H16.4928Z" stroke="#333333" stroke-width="1.21004"></path><path d="M24.4414 22.9453L23.4517 26.6389" stroke="#EF3837" stroke-width="0.331039"></path><path d="M24.9865 23.5444L26.2344 24.7924L24.9865 26.0404" stroke="#333333" stroke-width="0.331039"></path><path d="M22.9066 23.5444L21.6587 24.7924L22.9066 26.0404" stroke="#333333" stroke-width="0.331039"></path></svg>Capstone Projects</li>
                      <li className="mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><path d="M20 40V33M24 40V33M28 40V33M20 13V6M24 13V6M28 13V6M41.5 27H34.5M41.5 23H34.5M41.5 19H34.5M14 27H7M14 23H7M14 19H7" stroke="#333333"></path><path d="M34 13H14V33H34V13Z" fill="white" stroke="#333333"></path><path d="M29 18H19V28H29V18Z" fill="#3689B0" fill-opacity="0.3" stroke="#333333"></path></svg>Keeping pace with technology</li>
                      <li className="mb-1 d-flex font "><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><rect x="10.5" y="21.5" width="25" height="22" fill="white" stroke="#454545"></rect><path d="M14 27H19.1373" stroke="#454545" stroke-width="0.349353"></path><path d="M19.6836 27H21.8658" stroke="#454545" stroke-width="0.349353"></path><path d="M14 28.9688H16.1822" stroke="#454545" stroke-width="0.349353"></path><path d="M24.2109 28.9688H26.3932" stroke="#454545" stroke-width="0.349353"></path><path d="M22.8906 27H24.6712" stroke="#454545" stroke-width="0.349353"></path><path d="M25.3008 27H30.9995" stroke="#454545" stroke-width="0.349353"></path><path d="M17.1914 28.9688H22.8901" stroke="#454545" stroke-width="0.349353"></path><path d="M14 31.0234H18.0429" stroke="#454545" stroke-width="0.349353"></path><path d="M18.8438 31.0234H22.8866" stroke="#454545" stroke-width="0.349353"></path><path d="M32 15.1962L34.5981 16.6962L35.5981 14.9641L33 13.4641L32 15.1962Z" fill="white"></path><path d="M37.5981 11.5L35 10L33 13.4641L35.5981 14.9641L37.5981 11.5Z" fill="#CB3434"></path><path d="M34.5981 16.6962L32 15.1962L22 32.5167L24.5981 34.0167L34.5981 16.6962Z" fill="#F0B847"></path><path d="M24.5981 34.0167L22 32.5167L21.299 36.7308L24.5981 34.0167Z" fill="white"></path><path d="M32 15.1962L34.5981 16.6962M32 15.1962L22 32.5167M32 15.1962L33 13.4641M34.5981 16.6962L24.5981 34.0167M34.5981 16.6962L35.5981 14.9641M24.5981 34.0167L22 32.5167M24.5981 34.0167L21.299 36.7308L22 32.5167M33 13.4641L35 10L37.5981 11.5L35.5981 14.9641M33 13.4641L35.5981 14.9641" stroke="#333333"></path></svg>No end semester exams</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-0 bg-light border">
              <div className="row bg-white py-0 ">
                  <div className="col-md-4 p-0 ">
                    <img
                      style={{
                        background: "#fefbf6",
                        width: "100%",
                        height: '220px',
                        border: "2px black solid",
                      }}
                      src="image/B.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 py-2 " style={{border: "2px black solid"}}>
                     <h6 className="font-bold mb-1 font text-2xl ...">Beyond Books</h6>
                    <ul>
                     <li className=" mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><rect x="6.5" y="11.5" width="35" height="15" fill="white"></rect><path d="M21 16L26 19L21 22V16Z" stroke="#EF3837" stroke-width="0.5"></path><rect x="6.5" y="11.5" width="35" height="15" stroke="#454545"></rect><path d="M6 30H12.4741" stroke="#454545" stroke-width="0.349353"></path><path d="M13.1641 30H15.9142" stroke="#454545" stroke-width="0.349353"></path><path d="M6 31.9688H8.7501" stroke="#454545" stroke-width="0.349353"></path><path d="M18.8672 31.9688H21.6173" stroke="#454545" stroke-width="0.349353"></path><path d="M17.2031 30H19.4471" stroke="#454545" stroke-width="0.349353"></path><path d="M20.2422 30H27.4239" stroke="#454545" stroke-width="0.349353"></path><path d="M10.0195 31.9688H17.2012" stroke="#454545" stroke-width="0.349353"></path><path d="M6 34.0234H11.095" stroke="#454545" stroke-width="0.349353"></path><path d="M12.1055 34.0234H17.2004" stroke="#454545" stroke-width="0.349353"></path></svg>Livebooks</li>
                      <li className="mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><path d="M38.4429 14.7965L37.8804 13.4353L36.2994 13.7379C36.0317 13.3536 35.7086 13.0209 35.346 12.7464L35.7128 11.1498L34.3526 10.585L33.4488 11.9166C33.0006 11.8366 32.5372 11.8252 32.0744 11.889L31.2047 10.5005L29.8435 11.063L30.146 12.6436C29.7144 12.9442 29.348 13.3147 29.0559 13.7325L27.4755 13.4273L26.9102 14.7873L28.2983 15.6603C28.2354 16.1103 28.2415 16.5735 28.3231 17.0342L26.9908 17.9352L27.5528 19.2967L29.1501 18.9328C29.4315 19.3056 29.7666 19.6257 30.1396 19.8865L29.8344 21.467L31.1944 22.0323L32.0672 20.6447C32.5175 20.7077 32.9811 20.7017 33.4422 20.62L34.3434 21.9526L35.7048 21.3906L35.3409 19.793C35.668 19.5461 35.9545 19.2578 36.196 18.9389L37.7927 19.3057L38.3575 17.9455L37.0263 17.0419C37.1065 16.5934 37.118 16.1296 37.0541 15.6664L38.4429 14.7965Z" stroke="#333333" stroke-width="0.910872"></path><path d="M34.371 15.5658C34.7579 16.502 34.3126 17.5745 33.3764 17.9614C32.4402 18.3482 31.3677 17.9029 30.9808 16.9667C30.594 16.0305 31.0393 14.958 31.9755 14.5711C32.9116 14.1843 33.9842 14.6296 34.371 15.5658Z" fill="#F0B847" stroke="#333333" stroke-width="0.910872"></path><path d="M21.09 29.9806L20.5275 28.6194L18.9465 28.922C18.6788 28.5377 18.3557 28.205 17.9931 27.9305L18.3599 26.3339L16.9997 25.7691L16.0958 27.1007C15.6477 27.0206 15.1843 27.0092 14.7215 27.0731L13.8518 25.6846L12.4906 26.2471L12.7931 27.8277C12.3615 28.1283 11.9951 28.4987 11.703 28.9166L10.1226 28.6114L9.55725 29.9714L10.9454 30.8444C10.8825 31.2944 10.8886 31.7576 10.9702 32.2183L9.63792 33.1193L10.1999 34.4807L11.7972 34.1169C12.0786 34.4897 12.4137 34.8098 12.7867 35.0706L12.4815 36.6511L13.8415 37.2164L14.7143 35.8288C15.1646 35.8918 15.6282 35.8857 16.0893 35.8041L16.9905 37.1366L18.3519 36.5747L17.988 34.9771C18.3151 34.7301 18.6016 34.4419 18.8431 34.123L20.4398 34.4898L21.0046 33.1296L19.6733 32.226C19.7536 31.7775 19.7651 31.3137 19.7012 30.8505L21.09 29.9806Z" stroke="#333333" stroke-width="0.910872"></path><path d="M17.0181 30.7499C17.405 31.686 16.9597 32.7586 16.0235 33.1454C15.0873 33.5323 14.0148 33.087 13.6279 32.1508C13.2411 31.2146 13.6864 30.1421 14.6225 29.7552C15.5587 29.3684 16.6313 29.8137 17.0181 30.7499Z" fill="#F0B847" stroke="#333333" stroke-width="0.910872"></path><path d="M16.4928 9.39307V38.607H31.4V9.39307H16.4928Z" fill="white"></path><path d="M22.3957 11.6942H25.4972M16.4928 9.39307V38.607H31.4V9.39307H16.4928Z" stroke="#333333" stroke-width="1.21004"></path><path d="M24.4414 22.9453L23.4517 26.6389" stroke="#EF3837" stroke-width="0.331039"></path><path d="M24.9865 23.5444L26.2344 24.7924L24.9865 26.0404" stroke="#333333" stroke-width="0.331039"></path><path d="M22.9066 23.5444L21.6587 24.7924L22.9066 26.0404" stroke="#333333" stroke-width="0.331039"></path></svg>Capstone Projects</li>
                      <li className="mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><path d="M20 40V33M24 40V33M28 40V33M20 13V6M24 13V6M28 13V6M41.5 27H34.5M41.5 23H34.5M41.5 19H34.5M14 27H7M14 23H7M14 19H7" stroke="#333333"></path><path d="M34 13H14V33H34V13Z" fill="white" stroke="#333333"></path><path d="M29 18H19V28H29V18Z" fill="#3689B0" fill-opacity="0.3" stroke="#333333"></path></svg>Keeping pace with technology</li>
                      <li className="mb-1 d-flex font "><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><rect x="10.5" y="21.5" width="25" height="22" fill="white" stroke="#454545"></rect><path d="M14 27H19.1373" stroke="#454545" stroke-width="0.349353"></path><path d="M19.6836 27H21.8658" stroke="#454545" stroke-width="0.349353"></path><path d="M14 28.9688H16.1822" stroke="#454545" stroke-width="0.349353"></path><path d="M24.2109 28.9688H26.3932" stroke="#454545" stroke-width="0.349353"></path><path d="M22.8906 27H24.6712" stroke="#454545" stroke-width="0.349353"></path><path d="M25.3008 27H30.9995" stroke="#454545" stroke-width="0.349353"></path><path d="M17.1914 28.9688H22.8901" stroke="#454545" stroke-width="0.349353"></path><path d="M14 31.0234H18.0429" stroke="#454545" stroke-width="0.349353"></path><path d="M18.8438 31.0234H22.8866" stroke="#454545" stroke-width="0.349353"></path><path d="M32 15.1962L34.5981 16.6962L35.5981 14.9641L33 13.4641L32 15.1962Z" fill="white"></path><path d="M37.5981 11.5L35 10L33 13.4641L35.5981 14.9641L37.5981 11.5Z" fill="#CB3434"></path><path d="M34.5981 16.6962L32 15.1962L22 32.5167L24.5981 34.0167L34.5981 16.6962Z" fill="#F0B847"></path><path d="M24.5981 34.0167L22 32.5167L21.299 36.7308L24.5981 34.0167Z" fill="white"></path><path d="M32 15.1962L34.5981 16.6962M32 15.1962L22 32.5167M32 15.1962L33 13.4641M34.5981 16.6962L24.5981 34.0167M34.5981 16.6962L35.5981 14.9641M24.5981 34.0167L22 32.5167M24.5981 34.0167L21.299 36.7308L22 32.5167M33 13.4641L35 10L37.5981 11.5L35.5981 14.9641M33 13.4641L35.5981 14.9641" stroke="#333333"></path></svg>No end semester exams</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-0 bg-light border">
              <div className="row bg-white py-0 ">
                  <div className="col-md-4 p-0 ">
                    <img
                      style={{
                        background: "#fefbf6",
                        width: "100%",
                        height: '220px',
                        border: "2px black solid",
                      }}
                      src="image/B.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 py-2 " style={{border: "2px black solid"}}>
                     <h6 className="font-bold mb-1 font text-2xl ...">Beyond Books</h6>
                    <ul>
                     <li className=" mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><rect x="6.5" y="11.5" width="35" height="15" fill="white"></rect><path d="M21 16L26 19L21 22V16Z" stroke="#EF3837" stroke-width="0.5"></path><rect x="6.5" y="11.5" width="35" height="15" stroke="#454545"></rect><path d="M6 30H12.4741" stroke="#454545" stroke-width="0.349353"></path><path d="M13.1641 30H15.9142" stroke="#454545" stroke-width="0.349353"></path><path d="M6 31.9688H8.7501" stroke="#454545" stroke-width="0.349353"></path><path d="M18.8672 31.9688H21.6173" stroke="#454545" stroke-width="0.349353"></path><path d="M17.2031 30H19.4471" stroke="#454545" stroke-width="0.349353"></path><path d="M20.2422 30H27.4239" stroke="#454545" stroke-width="0.349353"></path><path d="M10.0195 31.9688H17.2012" stroke="#454545" stroke-width="0.349353"></path><path d="M6 34.0234H11.095" stroke="#454545" stroke-width="0.349353"></path><path d="M12.1055 34.0234H17.2004" stroke="#454545" stroke-width="0.349353"></path></svg>Livebooks</li>
                      <li className="mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><path d="M38.4429 14.7965L37.8804 13.4353L36.2994 13.7379C36.0317 13.3536 35.7086 13.0209 35.346 12.7464L35.7128 11.1498L34.3526 10.585L33.4488 11.9166C33.0006 11.8366 32.5372 11.8252 32.0744 11.889L31.2047 10.5005L29.8435 11.063L30.146 12.6436C29.7144 12.9442 29.348 13.3147 29.0559 13.7325L27.4755 13.4273L26.9102 14.7873L28.2983 15.6603C28.2354 16.1103 28.2415 16.5735 28.3231 17.0342L26.9908 17.9352L27.5528 19.2967L29.1501 18.9328C29.4315 19.3056 29.7666 19.6257 30.1396 19.8865L29.8344 21.467L31.1944 22.0323L32.0672 20.6447C32.5175 20.7077 32.9811 20.7017 33.4422 20.62L34.3434 21.9526L35.7048 21.3906L35.3409 19.793C35.668 19.5461 35.9545 19.2578 36.196 18.9389L37.7927 19.3057L38.3575 17.9455L37.0263 17.0419C37.1065 16.5934 37.118 16.1296 37.0541 15.6664L38.4429 14.7965Z" stroke="#333333" stroke-width="0.910872"></path><path d="M34.371 15.5658C34.7579 16.502 34.3126 17.5745 33.3764 17.9614C32.4402 18.3482 31.3677 17.9029 30.9808 16.9667C30.594 16.0305 31.0393 14.958 31.9755 14.5711C32.9116 14.1843 33.9842 14.6296 34.371 15.5658Z" fill="#F0B847" stroke="#333333" stroke-width="0.910872"></path><path d="M21.09 29.9806L20.5275 28.6194L18.9465 28.922C18.6788 28.5377 18.3557 28.205 17.9931 27.9305L18.3599 26.3339L16.9997 25.7691L16.0958 27.1007C15.6477 27.0206 15.1843 27.0092 14.7215 27.0731L13.8518 25.6846L12.4906 26.2471L12.7931 27.8277C12.3615 28.1283 11.9951 28.4987 11.703 28.9166L10.1226 28.6114L9.55725 29.9714L10.9454 30.8444C10.8825 31.2944 10.8886 31.7576 10.9702 32.2183L9.63792 33.1193L10.1999 34.4807L11.7972 34.1169C12.0786 34.4897 12.4137 34.8098 12.7867 35.0706L12.4815 36.6511L13.8415 37.2164L14.7143 35.8288C15.1646 35.8918 15.6282 35.8857 16.0893 35.8041L16.9905 37.1366L18.3519 36.5747L17.988 34.9771C18.3151 34.7301 18.6016 34.4419 18.8431 34.123L20.4398 34.4898L21.0046 33.1296L19.6733 32.226C19.7536 31.7775 19.7651 31.3137 19.7012 30.8505L21.09 29.9806Z" stroke="#333333" stroke-width="0.910872"></path><path d="M17.0181 30.7499C17.405 31.686 16.9597 32.7586 16.0235 33.1454C15.0873 33.5323 14.0148 33.087 13.6279 32.1508C13.2411 31.2146 13.6864 30.1421 14.6225 29.7552C15.5587 29.3684 16.6313 29.8137 17.0181 30.7499Z" fill="#F0B847" stroke="#333333" stroke-width="0.910872"></path><path d="M16.4928 9.39307V38.607H31.4V9.39307H16.4928Z" fill="white"></path><path d="M22.3957 11.6942H25.4972M16.4928 9.39307V38.607H31.4V9.39307H16.4928Z" stroke="#333333" stroke-width="1.21004"></path><path d="M24.4414 22.9453L23.4517 26.6389" stroke="#EF3837" stroke-width="0.331039"></path><path d="M24.9865 23.5444L26.2344 24.7924L24.9865 26.0404" stroke="#333333" stroke-width="0.331039"></path><path d="M22.9066 23.5444L21.6587 24.7924L22.9066 26.0404" stroke="#333333" stroke-width="0.331039"></path></svg>Capstone Projects</li>
                      <li className="mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><path d="M20 40V33M24 40V33M28 40V33M20 13V6M24 13V6M28 13V6M41.5 27H34.5M41.5 23H34.5M41.5 19H34.5M14 27H7M14 23H7M14 19H7" stroke="#333333"></path><path d="M34 13H14V33H34V13Z" fill="white" stroke="#333333"></path><path d="M29 18H19V28H29V18Z" fill="#3689B0" fill-opacity="0.3" stroke="#333333"></path></svg>Keeping pace with technology</li>
                      <li className="mb-1 d-flex font "><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><rect x="10.5" y="21.5" width="25" height="22" fill="white" stroke="#454545"></rect><path d="M14 27H19.1373" stroke="#454545" stroke-width="0.349353"></path><path d="M19.6836 27H21.8658" stroke="#454545" stroke-width="0.349353"></path><path d="M14 28.9688H16.1822" stroke="#454545" stroke-width="0.349353"></path><path d="M24.2109 28.9688H26.3932" stroke="#454545" stroke-width="0.349353"></path><path d="M22.8906 27H24.6712" stroke="#454545" stroke-width="0.349353"></path><path d="M25.3008 27H30.9995" stroke="#454545" stroke-width="0.349353"></path><path d="M17.1914 28.9688H22.8901" stroke="#454545" stroke-width="0.349353"></path><path d="M14 31.0234H18.0429" stroke="#454545" stroke-width="0.349353"></path><path d="M18.8438 31.0234H22.8866" stroke="#454545" stroke-width="0.349353"></path><path d="M32 15.1962L34.5981 16.6962L35.5981 14.9641L33 13.4641L32 15.1962Z" fill="white"></path><path d="M37.5981 11.5L35 10L33 13.4641L35.5981 14.9641L37.5981 11.5Z" fill="#CB3434"></path><path d="M34.5981 16.6962L32 15.1962L22 32.5167L24.5981 34.0167L34.5981 16.6962Z" fill="#F0B847"></path><path d="M24.5981 34.0167L22 32.5167L21.299 36.7308L24.5981 34.0167Z" fill="white"></path><path d="M32 15.1962L34.5981 16.6962M32 15.1962L22 32.5167M32 15.1962L33 13.4641M34.5981 16.6962L24.5981 34.0167M34.5981 16.6962L35.5981 14.9641M24.5981 34.0167L22 32.5167M24.5981 34.0167L21.299 36.7308L22 32.5167M33 13.4641L35 10L37.5981 11.5L35.5981 14.9641M33 13.4641L35.5981 14.9641" stroke="#333333"></path></svg>No end semester exams</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-0 bg-light border">
              <div className="row bg-white py-0 ">
                  <div className="col-md-4 p-0 ">
                    <img
                      style={{
                        background: "#fefbf6",
                        width: "100%",
                        height: '220px',
                        border: "2px black solid",
                      }}
                      src="image/B.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 py-2 " style={{border: "2px black solid"}}>
                     <h6 className="font-bold mb-1 font text-2xl ...">Beyond Books</h6>
                    <ul>
                     <li className=" mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><rect x="6.5" y="11.5" width="35" height="15" fill="white"></rect><path d="M21 16L26 19L21 22V16Z" stroke="#EF3837" stroke-width="0.5"></path><rect x="6.5" y="11.5" width="35" height="15" stroke="#454545"></rect><path d="M6 30H12.4741" stroke="#454545" stroke-width="0.349353"></path><path d="M13.1641 30H15.9142" stroke="#454545" stroke-width="0.349353"></path><path d="M6 31.9688H8.7501" stroke="#454545" stroke-width="0.349353"></path><path d="M18.8672 31.9688H21.6173" stroke="#454545" stroke-width="0.349353"></path><path d="M17.2031 30H19.4471" stroke="#454545" stroke-width="0.349353"></path><path d="M20.2422 30H27.4239" stroke="#454545" stroke-width="0.349353"></path><path d="M10.0195 31.9688H17.2012" stroke="#454545" stroke-width="0.349353"></path><path d="M6 34.0234H11.095" stroke="#454545" stroke-width="0.349353"></path><path d="M12.1055 34.0234H17.2004" stroke="#454545" stroke-width="0.349353"></path></svg>Livebooks</li>
                      <li className="mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><path d="M38.4429 14.7965L37.8804 13.4353L36.2994 13.7379C36.0317 13.3536 35.7086 13.0209 35.346 12.7464L35.7128 11.1498L34.3526 10.585L33.4488 11.9166C33.0006 11.8366 32.5372 11.8252 32.0744 11.889L31.2047 10.5005L29.8435 11.063L30.146 12.6436C29.7144 12.9442 29.348 13.3147 29.0559 13.7325L27.4755 13.4273L26.9102 14.7873L28.2983 15.6603C28.2354 16.1103 28.2415 16.5735 28.3231 17.0342L26.9908 17.9352L27.5528 19.2967L29.1501 18.9328C29.4315 19.3056 29.7666 19.6257 30.1396 19.8865L29.8344 21.467L31.1944 22.0323L32.0672 20.6447C32.5175 20.7077 32.9811 20.7017 33.4422 20.62L34.3434 21.9526L35.7048 21.3906L35.3409 19.793C35.668 19.5461 35.9545 19.2578 36.196 18.9389L37.7927 19.3057L38.3575 17.9455L37.0263 17.0419C37.1065 16.5934 37.118 16.1296 37.0541 15.6664L38.4429 14.7965Z" stroke="#333333" stroke-width="0.910872"></path><path d="M34.371 15.5658C34.7579 16.502 34.3126 17.5745 33.3764 17.9614C32.4402 18.3482 31.3677 17.9029 30.9808 16.9667C30.594 16.0305 31.0393 14.958 31.9755 14.5711C32.9116 14.1843 33.9842 14.6296 34.371 15.5658Z" fill="#F0B847" stroke="#333333" stroke-width="0.910872"></path><path d="M21.09 29.9806L20.5275 28.6194L18.9465 28.922C18.6788 28.5377 18.3557 28.205 17.9931 27.9305L18.3599 26.3339L16.9997 25.7691L16.0958 27.1007C15.6477 27.0206 15.1843 27.0092 14.7215 27.0731L13.8518 25.6846L12.4906 26.2471L12.7931 27.8277C12.3615 28.1283 11.9951 28.4987 11.703 28.9166L10.1226 28.6114L9.55725 29.9714L10.9454 30.8444C10.8825 31.2944 10.8886 31.7576 10.9702 32.2183L9.63792 33.1193L10.1999 34.4807L11.7972 34.1169C12.0786 34.4897 12.4137 34.8098 12.7867 35.0706L12.4815 36.6511L13.8415 37.2164L14.7143 35.8288C15.1646 35.8918 15.6282 35.8857 16.0893 35.8041L16.9905 37.1366L18.3519 36.5747L17.988 34.9771C18.3151 34.7301 18.6016 34.4419 18.8431 34.123L20.4398 34.4898L21.0046 33.1296L19.6733 32.226C19.7536 31.7775 19.7651 31.3137 19.7012 30.8505L21.09 29.9806Z" stroke="#333333" stroke-width="0.910872"></path><path d="M17.0181 30.7499C17.405 31.686 16.9597 32.7586 16.0235 33.1454C15.0873 33.5323 14.0148 33.087 13.6279 32.1508C13.2411 31.2146 13.6864 30.1421 14.6225 29.7552C15.5587 29.3684 16.6313 29.8137 17.0181 30.7499Z" fill="#F0B847" stroke="#333333" stroke-width="0.910872"></path><path d="M16.4928 9.39307V38.607H31.4V9.39307H16.4928Z" fill="white"></path><path d="M22.3957 11.6942H25.4972M16.4928 9.39307V38.607H31.4V9.39307H16.4928Z" stroke="#333333" stroke-width="1.21004"></path><path d="M24.4414 22.9453L23.4517 26.6389" stroke="#EF3837" stroke-width="0.331039"></path><path d="M24.9865 23.5444L26.2344 24.7924L24.9865 26.0404" stroke="#333333" stroke-width="0.331039"></path><path d="M22.9066 23.5444L21.6587 24.7924L22.9066 26.0404" stroke="#333333" stroke-width="0.331039"></path></svg>Capstone Projects</li>
                      <li className="mb-1 d-flex font"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><path d="M20 40V33M24 40V33M28 40V33M20 13V6M24 13V6M28 13V6M41.5 27H34.5M41.5 23H34.5M41.5 19H34.5M14 27H7M14 23H7M14 19H7" stroke="#333333"></path><path d="M34 13H14V33H34V13Z" fill="white" stroke="#333333"></path><path d="M29 18H19V28H29V18Z" fill="#3689B0" fill-opacity="0.3" stroke="#333333"></path></svg>Keeping pace with technology</li>
                      <li className="mb-1 d-flex font "><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 48 48" fill="none"><rect x="10.5" y="21.5" width="25" height="22" fill="white" stroke="#454545"></rect><path d="M14 27H19.1373" stroke="#454545" stroke-width="0.349353"></path><path d="M19.6836 27H21.8658" stroke="#454545" stroke-width="0.349353"></path><path d="M14 28.9688H16.1822" stroke="#454545" stroke-width="0.349353"></path><path d="M24.2109 28.9688H26.3932" stroke="#454545" stroke-width="0.349353"></path><path d="M22.8906 27H24.6712" stroke="#454545" stroke-width="0.349353"></path><path d="M25.3008 27H30.9995" stroke="#454545" stroke-width="0.349353"></path><path d="M17.1914 28.9688H22.8901" stroke="#454545" stroke-width="0.349353"></path><path d="M14 31.0234H18.0429" stroke="#454545" stroke-width="0.349353"></path><path d="M18.8438 31.0234H22.8866" stroke="#454545" stroke-width="0.349353"></path><path d="M32 15.1962L34.5981 16.6962L35.5981 14.9641L33 13.4641L32 15.1962Z" fill="white"></path><path d="M37.5981 11.5L35 10L33 13.4641L35.5981 14.9641L37.5981 11.5Z" fill="#CB3434"></path><path d="M34.5981 16.6962L32 15.1962L22 32.5167L24.5981 34.0167L34.5981 16.6962Z" fill="#F0B847"></path><path d="M24.5981 34.0167L22 32.5167L21.299 36.7308L24.5981 34.0167Z" fill="white"></path><path d="M32 15.1962L34.5981 16.6962M32 15.1962L22 32.5167M32 15.1962L33 13.4641M34.5981 16.6962L24.5981 34.0167M34.5981 16.6962L35.5981 14.9641M24.5981 34.0167L22 32.5167M24.5981 34.0167L21.299 36.7308L22 32.5167M33 13.4641L35 10L37.5981 11.5L35.5981 14.9641M33 13.4641L35.5981 14.9641" stroke="#333333"></path></svg>No end semester exams</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex ">
              <button className="button me-4">Download Brochure</button>
              <button className="button text-dark bg-white">About the program</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5 academic1  px-0">
        {/* <img  className="mt-5" src="image/yellowish1.jpg" style={{background: "#fefbf6"}} width={'100%'}  alt=""/> */}
        <div className="container academic mt-5 pt-5">
          <img src="image/academic.svg" alt="academic" />
        </div>
      </div>

    </>
  )
}

export default Program