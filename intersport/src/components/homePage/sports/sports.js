import React, { useRef } from "react";
import "./sports.scss";
import blackFridayFrame from "../../../images/assets/Frame 275.png";
import blackFridayFrameLeft from "../../../images/assets/Frame 279.png";
import blackFridayFrameRightButtom from "../../../images/assets/Frame 282.png";
import selectionBackgroundImage from "../../../images/assets/INT2022_C1_0697_ok 1.png";
import blackFridayFrameMobileLeft from "../../../images/assets/FrameTopBrandMobileLeft.png";

import football from "../../../images/sports/2210_LP-blackfriday_encart_01.png";
import hiking from "../../../images/sports/2210_LP-blackfriday_encart_02.png";
import fitness from "../../../images/sports/2210_LP-blackfriday_encart_03.png";
import ski from "../../../images/sports/2210_LP-blackfriday_encart_04.png";
import running from "../../../images/sports/2210_LP-blackfriday_encart_05.png";

function Sports() {
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
      <div className="sport-main-container">
        <div className="sport-container">
          <div className="sports-Left-Column">
            <img
              className="selection-container-blackFridayFrameLeft"
              src={blackFridayFrameLeft}
              alt="blackFridayFrame"
            />
            <img
              className="sports-FrameTopBrandMobileLeft"
              src={blackFridayFrameMobileLeft}
              alt="blackFridayFrame"
            />

            <div className="sports-exclusivityText">exclusivité web</div>

            <div className="sports-blackText">Les Sports</div>
            <div className="sports-outlinedText">en black friday !</div>
          </div>
          <div className="selection-container-Right-Column">
            <img
              className="selection-container-blackFridayFrame"
              src={blackFridayFrame}
              alt="blackFridayFrame"
            />
            <img
              className="sports-container-blackFridayFrameRightButtom"
              src={blackFridayFrameRightButtom}
              alt="blackFridayFrame"
            />
            <img
              className="sports-container-selectionBackgroundImage"
              src={selectionBackgroundImage}
              alt="blackFridayFrame"
            />
          </div>
        </div>
        <div className="sport-carousel">
          <div className="sport-images-container" ref={containerRef}>
            <img className="sport-image" src={football} alt="brandImg" />
            <img className="sport-image" src={hiking} alt="brandImg" />
            <img className="sport-image" src={fitness} alt="brandImg" />
            <img className="sport-image" src={ski} alt="brandImg" />
            <img className="sport-image" src={running} alt="brandImg" />
            <img className="sport-image" src={football} alt="brandImg" />
            <img className="sport-image" src={hiking} alt="brandImg" />
            <img className="sport-image" src={fitness} alt="brandImg" />
            <img className="sport-image" src={ski} alt="brandImg" />
            <img className="sport-image" src={running} alt="brandImg" />
            <img className="sport-image" src={football} alt="brandImg" />
            <img className="sport-image" src={hiking} alt="brandImg" />
            <img className="sport-image" src={fitness} alt="brandImg" />
            <img className="sport-image" src={ski} alt="brandImg" />
            <img className="sport-image" src={running} alt="brandImg" />
          </div>
          <button className="sport-scroll-button" onClick={scrollNextImage}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default Sports;
