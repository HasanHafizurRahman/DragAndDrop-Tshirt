import React from "react";
import Draggable from "react-draggable";
import "./TShirtCanvas.css";

const TShirtCanvas = ({ tShirtRef, logo }) => {
  return (
    <div
      className="tshirt-canvas"
      ref={tShirtRef}
    >
      {logo && (
        <Draggable>
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
        </Draggable>
      )}
    </div>
  );
};

export default TShirtCanvas;
