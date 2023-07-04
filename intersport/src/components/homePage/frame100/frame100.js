import React from "react";
import "./frame100.scss";
import image from "../../../images/backgrounds/1809_STUDIO_BOXE_BOX2_DI_340784 copie 1.png";
import counDownImage from "../../../images/assets/CountDown2_blackfriday_mobile.png";
// import brandSymbole from "../../../images/assets/Brand symbole_intersport_.svg";

function Frame100() {
  return (
    <div className="frame100-container">
      <div className="column column-center">
        <img src={counDownImage} alt="Background" />
        <div className="text-line">
          <div className="blackText">Black</div>
          <div className="fridayText">Friday</div>
        </div>
        <div className="text-line">
          <div className="blackText">Weeks</div>
          <div className="lastDaysText">derniers jours</div>
        </div>
      </div>
      <div className="column">
        <img src={image} alt="Background" className="frame100-image" />
      </div>
    </div>
  );
}

export default Frame100;
