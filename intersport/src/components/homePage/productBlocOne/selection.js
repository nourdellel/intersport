import React from "react";
import "./selection.scss";
import blackFridayFrame from "../../../images/assets/Frame 275.png";
import selectionBackgroundImage from "../../../images/assets/GettyImages-758281071 copie 1.png";

function Selection() {
  return (
    <div className="selection-container">
      <img
        className="selection-container-blackFridayFrame"
        src={blackFridayFrame}
        alt="blackFridayFrame"
      />
      <div className="selection-container-Right-Column">
        <img
          className="selection-container-blackFridayFrame"
          src={selectionBackgroundImage}
          alt="blackFridayFrame"
        />
      </div>
      <div className="selection-container-Right-Column">
        <img
          className="selection-container-blackFridayFrame"
          src={selectionBackgroundImage}
          alt="blackFridayFrame"
        />
      </div>

      <div className="blackText">sélection</div>
    </div>
  );
}

export default Selection;
