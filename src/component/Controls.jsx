import React from "react";
import "./Controls.css";

const Controls = ({ handleLogoUpload, handleExport }) => {
  return (
    <div className="controls">
      <input
        type="file"
        accept="image/*"
        onChange={handleLogoUpload}
        className="upload-input"
      />
      <button onClick={handleExport} className="submit-button">
        Export T-Shirt Design
      </button>
    </div>
  );
};

export default Controls;
