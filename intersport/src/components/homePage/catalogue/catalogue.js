import React from "react";
import "./catalogue.scss";
import blackFridayFrameLeftButtom from "../../../images/assets/Frame catalogue2.png";
import blackFridayFrameRightButtom from "../../../images/assets/Frame catalogue1.png";
import catalogueImage from "../../../images/assets/couv_dep 1.png";
import catalogueImageMobile from "../../../images/assets/catalogueMobile.png";

function Catalogue() {
  return (
    <>
      <div className="catalogue-laptop-display">
        <div class="catalogue-container">
          <div class="catalogue-left">
            <img
              className="topBrand-blackFridayFrameLeftButtom"
              src={blackFridayFrameLeftButtom}
              alt="blackFridayFrame"
            />
            <img
              className="catalogue-container-catalogueImage"
              src={catalogueImage}
              alt="catalogueImg"
            />
          </div>
          <div>{""}</div>
          <div class="catalogue-right">
            <img
              className="catalogue-container-blackFridayFrame"
              src={blackFridayFrameRightButtom}
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
        </div>
      </div>
      <div className="catalogue-mobile-display">
        <div>
          <img
            className="catalogue-container-catalogueImageMobile"
            src={catalogueImageMobile}
            alt="catalogueImg"
          />

          <div class="catalogue-container-mobile">
            <div className="catalogue-groupeTextMobile">
              <div className="column-right-text-line">
                <div className="catalogue-catalogueTextWhiteMobile">E-</div>
                <div className="catalogue-catalogueTextMobile">CATALOGUE</div>
              </div>

              <div className="catalogue-blackText">
                Découvrez notre toute dernière sélection black friday
              </div>
              <button className="catalogue-button-discover">Découvrir</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalogue;
