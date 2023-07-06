import React, { useRef } from "react";
import "./selection.scss";
import blackFridayFrame from "../../../images/assets/Frame 275.png";
import blackFridayFrameLeft from "../../../images/assets/Frame 277.png";
import selectionBackgroundImage from "../../../images/assets/GettyImages-758281071 copie 1.png";
import productImg from "../../../images/products/Rectangle (1).png";

function Selection() {
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

  const products = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    brand: "MARQUE",
    name: "Nom produit",
    description: "Nom du produit ligne 2...",
    oldPrice: "100,99€",
    newPrice: "99,99€",
  }));

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
            <div className="selection-images-container" ref={containerRef}>
              {products.map((product) => (
                <div className="product-item" key={product.id}>
                  <div className="product-badge">
                    <div className="product-badge-text">Black Friday</div>
                    <div className="product-badge-number">25%</div>
                  </div>
                  <div className="product-badge-new">NOUVEAUTÉ</div>
                  <img
                    className="product-image"
                    src={productImg}
                    alt="ProductImg"
                  />
                  <div className="brand-name">{product.brand}</div>
                  <div className="product-name">{product.name}</div>
                  <div className="product-name">{product.description}</div>
                  <div className="price-text-line">
                    <div className="product-oldPrice">{product.oldPrice}</div>
                    <div className="product-newPrice">{product.newPrice}</div>
                  </div>
                </div>
              ))}

              <button
                className="selection-scroll-button"
                onClick={scrollNextImage}
              >
                &gt;
              </button>
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
