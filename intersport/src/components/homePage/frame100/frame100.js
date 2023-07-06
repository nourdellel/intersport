import React from "react";
import "./frame100.scss";
import image from "../../../images/backgrounds/1809_STUDIO_BOXE_BOX2_DI_340784 copie 1.png";
import imageMobile from "../../../images/backgrounds/1809_STUDIO_BOXE_BOX2_DI_340784 mobile.png";

import counDownImage from "../../../images/assets/CountDown2_blackfriday_mobile.png";
import frameMobile from "../../../images/assets/Frame 291 mobile.png";

function Frame100() {
  return (
    <div className="frame100-container">
      <div className="column column-center">
        <img src={frameMobile} alt="frame" className="frameTopLeftMobile" />

        <img src={counDownImage} alt="Background" className="coundownImg" />
        <div className="text-line">
          <div className="blackText">Black</div>
          <div className="fridayText">Friday</div>
        </div>
        <div className="text-line">
          <div className="blackText">Weeks</div>
          <div className="lastDaysText">derniers jours</div>
        </div>
        <div className="blackTextMobile">Black</div>
        <div className="fridayTextMobile">Friday</div>
        <div className="blackTextMobile">Weeks</div>
      </div>
      <div className="column">
        <img src={image} alt="Background" className="frame100-image" />
        <img
          src={imageMobile}
          alt="Background"
          className="frame100-image-mobile"
        />
      </div>
    </div>
  );
}

export default Frame100;
