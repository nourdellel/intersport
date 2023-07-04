import React from "react";
import "./bonPlan.scss";
import bonPlanImage from "../../../images/assets/illustration bon plan.png";
import vttImage from "../../../images/products/Rectangle.png";

function BonPlan() {
  return (
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
        <img
          className="bonPlan-container-vttImage"
          src={vttImage}
          alt="Background"
        />
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
          Montre GPS & Cardio VENUS SQ
        </div>
        <button className="bonPlan-container-Right-Column-buy-button">
          J’achète
        </button>
      </div>
    </div>
  );
}

export default BonPlan;