import React, { useState } from "react";

export default function App() {
  let [color, setColor] = useState("#000");
  const buttonStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    height: 60,
    width: 115,
    borderRadius: 4
  };

  const getColor = () => {
    let hexValues = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e"
    ];
    let newColor = "#";

    for (let i = 0; i < 6; i++) {
      let x = Math.round(Math.random() * 14);
      let y = hexValues[x];
      newColor += y;
    }

    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  return (
    <div>
      <button style={buttonStyle} onClick={getColor}>
        Random Color
      </button>
    </div>
  );
}
