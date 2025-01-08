import { useState, useRef } from "react";
import Draggable from "react-draggable";

const App = () => {
  const [logo, setLogo] = useState(null);
  const tShirtRef = useRef(null);

  return (
    <div style={{ backgroundColor: "#333", color: "#fff", height: "100vh", padding: "20px" }}>
      <h1>T-Shirt Design Tool</h1>
      <div style={{ display: "flex", gap: "20px" }}>
   
        <div
          ref={tShirtRef}
          style={{
            position: "relative",
            width: "300px",
            height: "400px",
            backgroundImage: "url('/tshirt.png')", 
            backgroundSize: "cover",
            border: "2px solid red",
          }}
        >
          {logo && (
            <Draggable>
              <img
                src={logo}
                alt="Logo"
                style={{
                  position: "absolute",
                  maxWidth: "100px",
                  maxHeight: "100px",
                  cursor: "move",
                }}
              />
            </Draggable>
          )}
        </div>

       
        <div style={{ flex: 1 }}>
          <input
            type="file"
            accept="image/*"
            style={{ display: "block", marginBottom: "20px" }}
          />
          
        </div>
      </div>
    </div>
  );
};

export default App;
