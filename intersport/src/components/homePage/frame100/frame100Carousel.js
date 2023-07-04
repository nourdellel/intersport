import React, { useRef } from "react";
import "./frame100Carousel.scss";
import imageWatch from "../../../images/products/Assets Product-hero.png";

function Frame100Carousel() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="frame100Carousel-container">
      <div className="column-Carousel">
        <button className="scroll-button" onClick={handlePrev}>
          &lt;
        </button>
      </div>
      <div className="column column-left">
        <img src={imageWatch} alt="imageWatch" className="column-left-image" />
      </div>
      <div className="column column-right" ref={carouselRef}>
        <div className="column-right discount-price">-60€</div>
        <div className="column-right product-category">Adulte</div>
        <div className="column-right product-brand">Garmin</div>
        <div className="column-right product-name">
          Montre GPS & Cardio VENUS SQ
        </div>
        <div className="column-right-text-line">
          <div className="column-right product-oldPrice">249,99€</div>
          <div className="column-right product-newPrice">189,99€</div>
        </div>
        <button className="buy-button">Acheter</button>
      </div>
      <div className="column">
        <button className="scroll-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Frame100Carousel;
