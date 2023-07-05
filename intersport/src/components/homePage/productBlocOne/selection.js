import React from "react";
import "./selection.scss";
import blackFridayFrame from "../../../images/assets/Frame 275.png";
import blackFridayFrameLeft from "../../../images/assets/Frame 277.png";
import selectionBackgroundImage from "../../../images/assets/GettyImages-758281071 copie 1.png";
import productImg from "../../../images/products/Rectangle (1).png";

function Selection() {
  return (
    <>
      <div className="selection-container">
        <div className="selection-container-Left-Column">
          <img
            className="selection-container-blackFridayFrameLeft"
            src={blackFridayFrameLeft}
            alt="blackFridayFrame"
          />
          <div className="selection-container-blackText">sélection</div>
          <div className="selection-container-outlinedText">EXCEPTIONNELLE</div>
        </div>
        <div className="selection-container-Right-Column">
          <img
            className="selection-container-blackFridayFrame"
            src={blackFridayFrame}
            alt="blackFridayFrame"
          />
          <img
            className="selection-container-selectionBackgroundImage"
            src={selectionBackgroundImage}
            alt="blackFridayFrame"
          />
        </div>
      </div>
      <div className="selection-container-products">
        <div className="container">
          <div class="product-grid-container">
            <div class="product-item">
              <div class="product-badge">
                <div class="product-badge-text">Black Friday</div>
                <div class="product-badge-number">25%</div>
              </div>
              <img
                className="product-image"
                src={productImg}
                alt="ProductImg"
              />
              <div class="brand-name">MARQUE</div>
              <div class="product-name">Nom produit</div>
              <div class="product-name">Nom du produit ligne 2...</div>
              <div className="price-text-line">
                <div className="product-oldPrice">100,99€</div>
                <div className="product-newPrice">99,99€</div>
              </div>
            </div>
            <div class="product-item">
              <div class="product-badge">
                <div class="product-badge-text">Black Friday</div>
                <div class="product-badge-number">25%</div>
              </div>
              <img
                className="product-image"
                src={productImg}
                alt="ProductImg"
              />
              <div class="brand-name">MARQUE</div>
              <div class="product-name">Nom produit</div>
              <div class="product-name">Nom du produit ligne 2...</div>
              <div className="price-text-line">
                <div className="product-oldPrice">100,99€</div>
                <div className="product-newPrice">99,99€</div>
              </div>
            </div>
            <div class="product-item">
              <div class="product-badge">
                <div class="product-badge-text">Black Friday</div>
                <div class="product-badge-number">25%</div>
              </div>
              <img
                className="product-image"
                src={productImg}
                alt="ProductImg"
              />
              <div class="brand-name">MARQUE</div>
              <div class="product-name">Nom produit</div>
              <div class="product-name">Nom du produit ligne 2...</div>
              <div className="price-text-line">
                <div className="product-oldPrice">100,99€</div>
                <div className="product-newPrice">99,99€</div>
              </div>
            </div>
            <div class="product-item">
              <div class="product-badge">
                <div class="product-badge-text">Black Friday</div>
                <div class="product-badge-number">25%</div>
              </div>
              <img
                className="product-image"
                src={productImg}
                alt="ProductImg"
              />
              <div class="brand-name">MARQUE</div>
              <div class="product-name">Nom produit</div>
              <div class="product-name">Nom du produit ligne 2...</div>
              <div className="price-text-line">
                <div className="product-oldPrice">100,99€</div>
                <div className="product-newPrice">99,99€</div>
              </div>
            </div>
            <div class="product-item">
              <div class="product-badge">
                <div class="product-badge-text">Black Friday</div>
                <div class="product-badge-number">25%</div>
              </div>
              <img
                className="product-image"
                src={productImg}
                alt="ProductImg"
              />
              <div class="brand-name">MARQUE</div>
              <div class="product-name">Nom produit</div>
              <div class="product-name">Nom du produit ligne 2...</div>
              <div className="price-text-line">
                <div className="product-oldPrice">100,99€</div>
                <div className="product-newPrice">99,99€</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="selection-allTheSelectionButton">
          Toute la sélection
        </button>
      </div>
    </>
  );
}

export default Selection;
