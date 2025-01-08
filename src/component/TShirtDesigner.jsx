import React, { useState, useRef } from "react";
import TShirtCanvas from "./TShirtCanvas";
import Controls from "./Controls";
import html2canvas from "html2canvas";
import "./TShirtDesigner.css";

const TShirtDesigner = () => {
  const [logo, setLogo] = useState(null);
  const [isExporting, setIsExporting] = useState(false);
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
    setIsExporting(true); // Hide slider
    await new Promise((resolve) => setTimeout(resolve, 100)); // Wait briefly for UI update

    if (tShirtRef.current) {
      const canvas = await html2canvas(tShirtRef.current);
      const link = document.createElement("a");
      link.download = "tshirt-design.png";
      link.href = canvas.toDataURL();
      link.click();
    }

    setIsExporting(false); // Show slider again
  };

  return (
    <div className="tshirt-designer">
      <TShirtCanvas tShirtRef={tShirtRef} logo={logo} isExporting={isExporting} />
      <Controls handleLogoUpload={handleLogoUpload} handleExport={handleExport} />
    </div>
  );
};

export default TShirtDesigner;
