import React from "react";
import '../css/universiyjaladhar.css'

function Slider() {
  return (

    <>
    <div className="slider1">
      <h1 className="font-bold mt-5 pt-5  slider-text  text-3xl ...">Backed By the Best</h1>
      <div className="container mt-4 px-5 ">
        <div id="z" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center  pt-5">
                <img
                  src="image/carosel1.webp"
                  className="d-block px-2"
                  alt="First slide"
                  width={'17%'}
                />
                <img
                  src="image/carosel2.webp"
                  className="d-block px-2"
                  alt="Second slide"
                  width={'17%'}
                />
                <img
                  src="image/carosel3.webp"
                  className="d-block px-2"
                  alt="Second slide"
                  width={'17%'}
                />
                <img
                  src="image/carosel4.webp"
                  className="d-block px-2"
                  alt="Second slide"
                  width={'17%'}
                />
                <img
                  src="image/carosel5.webp"
                  className="d-block px-2"
                  alt="Second slide"
                  width={'17%'}
                />
                {/* Add more images for the first carousel item */}
              </div>
              <div className="carousel-caption">
                {/* Caption for the first slide */}
              </div>
            </div>
            {/* Add more carousel items similarly */}
            <div className="carousel-item">
              <div className="d-flex justify-content-center  pt-5">
                <img
                  src="image/carosel6.webp"
                  className="d-block px-2"
                  alt="Sixth slide"
                  width={'17%'}
                />
                <img
                  src="image/carosel7.webp"
                  className="d-block px-2"
                  alt="Seventh slide"
                  width={'17%'}
                />
                <img
                  src="image/carosel8.webp"
                  className="d-block px-2"
                  alt="Second slide"
                  width={'17%'}
                />
                <img
                  src="image/carosel9.webp"
                  className="d-block px-2"
                  alt="Second slide"
                  width={'17%'}
                />
                <img
                  src="image/carosel10.webp"
                  className="d-block px-2"
                  alt="Second slide"
                  width={'17%'}
                />
                {/* Add more images for the second carousel item */}
              </div>
              <div className="carousel-caption">
                {/* Caption for the second slide */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#z"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon button" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#z"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon  button" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h1 className="font-medium slider-text mt-4 mt-2">MORE ABOUT US <span className="text-danger">></span></h1>
        </div>
      </div>
    </div>
    </>
  );
}

export default Slider;
