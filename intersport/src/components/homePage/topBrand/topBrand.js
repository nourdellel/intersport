import React, { useRef } from "react";
import "./topBrand.scss";
import blackFridayFrame from "../../../images/assets/Frame 275.png";
import blackFridayFrameLeft from "../../../images/assets/Frame 279.png";
import blackFridayFrameLeftButtom from "../../../images/assets/Frame 281.png";
import blackFridayFrameRightButtom from "../../../images/assets/Frame 280.png";
import selectionBackgroundImage from "../../../images/assets/2210_blackfriday_imagelame_produit02_desktop.png";
import nike from "../../../images/brands/Group 8.png";
import adidas from "../../../images/brands/Vector (2).png";
import puma from "../../../images/brands/Group 18.png";
import coqSportif from "../../../images/brands/Group 41.png";
import jacks from "../../../images/brands/Fill 1 (1).png";

function TopBrand() {
  const containerRef = useRef(null);

  const scrollNextImage = () => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;
    const maxScrollLeft = scrollWidth - clientWidth;

    if (scrollLeft < maxScrollLeft) {
      container.scrollTo({
        left: scrollLeft + clientWidth,
        behavior: "smooth",
      });
    } else {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="topBrand-container">
          <div className="selection-container-Left-Column">
            <img
              className="selection-container-blackFridayFrameLeft"
              src={blackFridayFrameLeft}
              alt="blackFridayFrame"
            />
            <div className="topBrand-exclusivityText">exclusivité web</div>

            <div className="topBrand-blackText">Black Friday sur</div>
            <div className="topBrand-outlinedText">Les grandes marques</div>
            <img
              className="topBrand-blackFridayFrameLeftButtom"
              src={blackFridayFrameLeftButtom}
              alt="blackFridayFrame"
            />
          </div>
          <div className="selection-container-Right-Column">
            <img
              className="selection-container-blackFridayFrame"
              src={blackFridayFrame}
              alt="blackFridayFrame"
            />
            <img
              className="selection-container-blackFridayFrame"
              src={blackFridayFrameRightButtom}
              alt="blackFridayFrame"
            />
            <img
              className="topBrand-container-selectionBackgroundImage"
              src={selectionBackgroundImage}
              alt="blackFridayFrame"
            />
          </div>
        </div>
        <div className="topBrand-carousel-topBrand">
          {/* <div class="topBrand-grid-container"> */}
          <div className="topBrand-images-container" ref={containerRef}>
            <div class="brand-item">
              <div class="brand-item-content">
                <img className="brand-image" src={nike} alt="brandImg" />
                <div class="brand-all">Voir tout &gt;</div>
              </div>
            </div>
            <div class="brand-item">
              <div class="brand-item-content">
                <img className="brand-image" src={adidas} alt="brandImg" />
                <div class="brand-all">Voir tout &gt;</div>
              </div>
            </div>
            <div class="brand-item">
              <div class="brand-item-content">
                <img className="brand-image" src={puma} alt="brandImg" />
                <div class="brand-all">Voir tout &gt;</div>
              </div>
            </div>
            <div class="brand-item">
              <div class="brand-item-content">
                <img className="brand-image" src={coqSportif} alt="brandImg" />
                <div class="brand-all">Voir tout &gt;</div>
              </div>
            </div>
            <div class="brand-item">
              <div class="brand-item-content">
                <img className="brand-image" src={jacks} alt="brandImg" />
                <div class="brand-all">Voir tout &gt;</div>
              </div>
            </div>
            <div class="brand-item">
              <div class="brand-item-content">
                <img className="brand-image" src={nike} alt="brandImg" />
                <div class="brand-all">Voir tout &gt;</div>
              </div>
            </div>
            <div class="brand-item">
              <div class="brand-item-content">
                <img className="brand-image" src={adidas} alt="brandImg" />
                <div class="brand-all">Voir tout &gt;</div>
              </div>
            </div>
            <div class="brand-item">
              <div class="brand-item-content">
                <img className="brand-image" src={puma} alt="brandImg" />
                <div class="brand-all">Voir tout &gt;</div>
              </div>
            </div>
            <div class="brand-item">
              <div class="brand-item-content">
                <img className="brand-image" src={coqSportif} alt="brandImg" />
                <div class="brand-all">Voir tout &gt;</div>
              </div>
            </div>
            <div class="brand-item">
              <div class="brand-item-content">
                <img className="brand-image" src={jacks} alt="brandImg" />
                <div class="brand-all">Voir tout &gt;</div>
              </div>
            </div>
            <button
              className="topBrand-scroll-button"
              onClick={scrollNextImage}
            >
              &gt;
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default TopBrand;
