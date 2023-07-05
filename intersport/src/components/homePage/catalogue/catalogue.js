import React from "react";
import "./catalogue.scss";
import blackFridayFrameLeftButtom from "../../../images/assets/Frame catalogue2.png";
import blackFridayFrameRightButtom from "../../../images/assets/Frame catalogue1.png";
import catalogueImage from "../../../images/assets/couv_dep 1.png";

function Catalogue() {
  return (
    <>
      <div className="catalogue-container-empty"></div>
      <div className="catalogue-container">
        <img
          className="catalogue-container-catalogueImage"
          src={catalogueImage}
          alt="catalogueImg"
        />
        <img
          className="catalogue-container-blackFridayFrame"
          src={blackFridayFrameRightButtom}
          alt="blackFridayFrame"
        />
        <img
          className="topBrand-blackFridayFrameLeftButtom"
          src={blackFridayFrameLeftButtom}
          alt="blackFridayFrame"
        />
        <div className="catalogue-groupeText">
          <div className="column-right-text-line">
            <div className="catalogue-catalogueTextWhite">E-</div>
            <div className="catalogue-catalogueText">CATALOGUE</div>
          </div>

          <div className="catalogue-blackText">
            Découvrez notre toute dernière sélection black friday
          </div>
          <button className="catalogue-button-discover">Découvrir</button>
        </div>
      </div>
    </>
  );
}

export default Catalogue;
