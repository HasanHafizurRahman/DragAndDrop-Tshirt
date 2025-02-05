/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./TShirtCanvas.css";

const TShirtCanvas = ({ tShirtRef, logo, isExporting }) => {
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });
  const [aspectRatio, setAspectRatio] = useState(1);
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      const naturalWidth = logoRef.current.naturalWidth;
      const naturalHeight = logoRef.current.naturalHeight;
      setAspectRatio(naturalWidth / naturalHeight);
    }
  }, [logo]);

  const handleResize = (e) => {
    const newWidth = parseInt(e.target.value, 10); 
    setDimensions({
      width: newWidth,
      height: newWidth / aspectRatio,
    });
  };

  return (
    <div
      className="tshirt-canvas"
      ref={tShirtRef}
    >
      {logo && (
        <Draggable>
          <div
            className="resizable-wrapper"
            style={{ width: dimensions.width, height: dimensions.height }}
          >
            <img
              ref={logoRef}
              src={logo}
              alt="Logo"
              className="logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            {!isExporting && (
              <input
                type="range"
                min="50"
                max="300"
                value={dimensions.width}
                className="resize-slider"
                onChange={handleResize} 
              />
            )}
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default TShirtCanvas;
