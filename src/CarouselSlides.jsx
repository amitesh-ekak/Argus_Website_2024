import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Factory1 from "./Assets/Factory_1.jpg";
import Factory2 from "./Assets/Factory_2.jpg";
import Factory3 from "./Assets/Factory_3.jpg";
import "./Components/CarouselSlides.css";

function CarouselSlides() {
  return (
    <div>
      <>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Factory1} class="d-block w-100 " alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <p className="heading">A WATCHFUL GUARDIAN</p>
                <p className="sub_heading">for your business</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Factory3} class="d-block w-100 " alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>A WATCHFUL GUARDIAN</h5>
                <p>for your business</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Factory2} class="d-block w-100 " alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h1 className="heading_1">Want Safer And Efficient Factories?</h1>
                <p className="sub_heading_1">
                  Here we are! Our proactive safety solution is designed to
                  optimize employee safety and enhance operational efficiency
                  within your organization.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </>
    </div>
  );
}

export default CarouselSlides;
