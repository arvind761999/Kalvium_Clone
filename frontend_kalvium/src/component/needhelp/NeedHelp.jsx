import React from "react";

function NeedHelp() {
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{
            background: "black",
            color: "white",
            position: 'fixed',
            left: '42px',
            zIndex: '1000',
            marginLeft: '1387px' ,
            marginTop: '330px',
            transform: 'translateY(-50%) rotate(90deg)'
          }}
        >
          Need Help?
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog" // Changed from modal-content to modal-dialog
            style={{
              borderRadius: "20px solid black", // Corrected camelCase spelling
              width: "30%",
              height: "90%",
            }}
          >
            <div className="modal-content text-center bg-black" style={{top: '29%',left: '118%'}}>
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="text">
                    <p
                      style={{
                        paddingTop: "15px",
                        fontFamily: "roboto",
                        fontSize: "25px",
                        width: "100%",
                        background: "black",
                        color: "white",
                        // marginLeft: "50px", // Corrected camelCase spelling
                        textAlign: "center",
                      }}
                    >
                      We're offline at the moment. Please fill out the form
                      below and we will get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="field">
                    <input
                      type="text"
                      name="name"
                      placeholder="* Name"
                      style={{
                        display: "block",
                        margin: "15px",
                        width: "90%",
                        borderRadius: "10px solid grey", // Corrected camelCase spelling
                        boxSizing: "border-box",
                        paddingLeft: "10px",
                        fontSize: "15px",
                        paddingBottom: "12px",
                        paddingTop: "12px",
                      }}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      name="Email"
                      placeholder="* Email"
                      style={{
                        display: "block",
                        margin: "15px",
                        width: "90%",
                        borderRadius: "10px solid grey", // Corrected camelCase spelling
                        boxSizing: "border-box",
                        paddingLeft: "10px",
                        fontSize: "15px",
                        paddingBottom: "12px",
                        paddingTop: "12px",
                      }}
                    />
                  </div>

                  <div className="field">
                    <input
                      type="text"
                      name="message"
                      placeholder="* Message"
                      style={{
                        display: "block",
                        margin: "15px",
                        width: "90%",
                        borderRadius: "10px solid grey", // Corrected camelCase spelling
                        boxSizing: "border-box",
                        paddingLeft: "10px",
                        fontSize: "15px",
                        paddingBottom: "50px",
                        paddingTop: "6px",
                      }}
                    />
                  </div>

                  <button className=" font-bold ... text-white" style={{padding:'10px 160px',background:'#3e354b',fontFamily:'monospace',fontSize:'20px'}}>SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NeedHelp;
