import React, { useRef } from "react";
import "./frame100Carousel.scss";
import imageWatch from "../../../images/products/Assets Product-hero.png";
import imageBike from "../../../images/products/Rectangle.png";
import imageBikeMobile from "../../../images/products/bikeMobile.png";

function Frame100Carousel() {
  const containerRef = useRef(null);

  const scrollRight = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: 1000,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: -1080,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="carousel-laptop-display">
        <div className="parent-container">
          <div className="column-1">
            <button
              className="frame100Carousel-scroll-button-left"
              onClick={scrollLeft}
            >
              &lt;
            </button>
          </div>
          <div className="column-2" ref={containerRef}>
            {/* product 1 */}
            <div className="sub-column">
              <img
                src={imageWatch}
                alt="imageWatch"
                className="column-left-image"
              />
            </div>
            <div className="sub-column">
              <div className="column column-right">
                <div className="column-right discount-price">-60€</div>
                <div className="column-right product-category">Adulte</div>
                <div className="column-right product-brand">Garmin</div>
                <div className="column-right product-name">
                  Montre GPS & Cardio VENUS SQ
                </div>
                <div className="carousel-column-right-text-line">
                  <div className="column-right product-oldPrice">249,99€</div>
                  <div className="column-right product-newPrice">189,99€</div>
                </div>
                <button className="buy-button">Acheter</button>
              </div>
            </div>
            {/* product 2 */}
            <div className="sub-column">
              <img
                src={imageBike}
                alt="imageWatch"
                className="column-left-image"
              />
            </div>
            <div className="sub-column">
              <div className="column column-right">
                <div className="column-right discount-price">-300€</div>
                <div className="column-right product-category">Adulte</div>
                <div className="column-right product-brand">nakamura</div>
                <div className="column-right product-name">
                  VTT électrique E-CLIFF LTD
                </div>
                <div className="column-right-text-line">
                  <div className="column-right product-oldPrice">999,99€</div>
                  <div className="column-right product-newPrice">699,99€</div>
                </div>
                <button className="buy-button">Acheter</button>
              </div>
            </div>
            {/* product 3 */}
            <div className="sub-column">
              <img
                src={imageWatch}
                alt="imageWatch"
                className="column-left-image"
              />
            </div>
            <div className="sub-column">
              <div className="column column-right">
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
            </div>
            {/* product 4 */}
            <div className="sub-column">
              <img
                src={imageBike}
                alt="imageWatch"
                className="column-left-image"
              />
            </div>
            <div className="sub-column">
              <div className="column column-right">
                <div className="column-right discount-price">-300€</div>
                <div className="column-right product-category">Adulte</div>
                <div className="column-right product-brand">nakamura</div>
                <div className="column-right product-name">
                  VTT électrique E-CLIFF LTD
                </div>
                <div className="column-right-text-line">
                  <div className="column-right product-oldPrice">999,99€</div>
                  <div className="column-right product-newPrice">699,99€</div>
                </div>
                <button className="buy-button">Acheter</button>
              </div>
            </div>
          </div>
          <div className="column-3">
            <button
              className="frame100Carousel-scroll-button-right"
              onClick={scrollRight}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-mobile-display">
        <div>
          <img
            className="catalogue-container-catalogueImageMobile"
            src={imageBikeMobile}
            alt="catalogueImg"
          />

          <div className="sub-column-mobile">
            <div className="column-right discount-price">-300€</div>
            <div className="column-right product-category">Adulte</div>
            <div className="column-right product-brand">nakamura</div>
            <div className="column-right product-name">
              VTT électrique E-CLIFF LTD
            </div>
            <div className="column-right-text-line">
              <div className="column-right product-oldPrice">999,99€</div>
              <div className="column-right product-newPrice">699,99€</div>
            </div>
            <div className="column-right-badge-line">
              <div class="badge-container">
                <div class="badge">x4</div>
              </div>
              <div className="product-text-price-easy">
                Ou payez en 4x sans frais
              </div>
            </div>{" "}
            <button className="buy-button">Acheter</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frame100Carousel;
