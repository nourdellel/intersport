import React from "react";
import "./bonPlan.scss";
import bonPlanImage from "../../../images/assets/illustration bon plan.png";
import vttImage from "../../../images/products/Rectangle.png";
import watchImage from "../../../images/products/Assets Product-hero.png";
import backgroundVector from "../../../images/assets/Vector.png";
import backgroundRound from "../../../images/assets/Vector (1).png";
import backgroundBonPlanMobile from "../../../images/backgrounds/backgroundBonPlan.png";

function BonPlan() {
  return (
    <>
      <div className="bonPlan-laptop-display">
        <div className="bonPlan-container">
          <div>
            <img
              className="bonPlan-container-image"
              src={bonPlanImage}
              alt="Background"
            />
          </div>
          <div className="bonPlan-container-Right-Column">
            <div className="bonPlan-container-Right-Column-discount-price">
              -300€
            </div>
            <div className="bonPlan-container-GroupeImages">
              <img
                className="bonPlan-container-vttImage"
                src={vttImage}
                alt="productImage"
              />
              <img
                className="bonPlan-container-backgroundVectorImage"
                src={backgroundVector}
                alt="BackgroundForm"
              />
              <img
                className="bonPlan-container-backgroundRoundImage"
                src={backgroundRound}
                alt="BackgroundForm"
              />
            </div>
            <div className="bonPlan-container-Right-Column-text-line">
              <div className="bonPlan-container-Right-Column-product-oldPrice">
                999,99€
              </div>
              <div className="bonPlan-container-Right-Column-product-newPrice">
                699,99€
              </div>
            </div>
            <div className="bonPlan-container-Right-Column-product-brand">
              nakamura
            </div>
            <div className="bonPlan-container-Right-Column-product-name">
              VTT électrique E-CLIFF LTD
            </div>
            <button className="bonPlan-container-Right-Column-buy-button">
              J’achète
            </button>
          </div>
        </div>
      </div>
      <div className="bonPlan-mobile-display">
        <div className="bonPlan-content">
          <h2 className="bonPlan-text">le bon plan</h2>
          <h2 className="bonPlan-text-outlined">du black friday</h2>

          <button className="bonPlan-button">
            Toute la sélection électronique
          </button>
        </div>
        <img
          className="bonPlan-background-mobile"
          src={backgroundBonPlanMobile}
          alt="Background"
        />
        {/* Product info */}
        <div className="bonPlan-container-Right-Column">
          <div className="bonPlan-discount-price-mobile">-60€</div>
          <div className="bonPlan-container-GroupeImages">
            <img
              className="bonPlan-watchImage"
              src={watchImage}
              alt="productImage"
            />
            <img
              className="bonPlan-backgroundVectorImageMobile"
              src={backgroundVector}
              alt="BackgroundForm"
            />
            <img
              className="bonPlan-backgroundRoundImageMobile"
              src={backgroundRound}
              alt="BackgroundForm"
            />
          </div>
          <div className="bonPlan-container-Right-Column-text-line">
            <div className="bonPlan-container-Right-Column-product-oldPrice">
              249,99€
            </div>
            <div className="bonPlan-container-Right-Column-product-newPrice">
              189,99€
            </div>
          </div>
          <div className="bonPlan-container-Right-Column-product-brand">
            nakamura
          </div>
          <div className="bonPlan-container-Right-Column-product-name">
            VTT électrique E-CLIFF LTD
          </div>
          <button className="bonPlan-container-Right-Column-buy-button">
            Acheter
          </button>
        </div>
      </div>
    </>
  );
}

export default BonPlan;
