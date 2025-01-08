import React, { useState, useRef } from "react";
import TShirtCanvas from "./TShirtCanvas";
import Controls from "./Controls";
import html2canvas from "html2canvas";
import "./TShirtDesigner.css";

const TShirtDesigner = () => {
  const [logo, setLogo] = useState(null);
  const tShirtRef = useRef(null);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleExport = async () => {
    if (tShirtRef.current) {
      const canvas = await html2canvas(tShirtRef.current);
      const link = document.createElement("a");
      link.download = "tshirt-design.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="tshirt-designer">
      <TShirtCanvas tShirtRef={tShirtRef} logo={logo} />
      <Controls handleLogoUpload={handleLogoUpload} handleExport={handleExport} />
    </div>
  );
};

export default TShirtDesigner;
