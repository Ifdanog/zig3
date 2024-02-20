// MatrixText.js

import React, { useEffect } from "react";

const MatrixText = () => {
  useEffect(() => {
    const textContainer = document.querySelector(".matrix-text-container");

    const text = "Your Matrix Code Goes Here";
    const textArray = text.split("");

    const numRows = 20; // Adjust the number of rows and columns as needed
    const numCols = 40;

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const charIndex = row * numCols + col;
        const char = textArray[charIndex % textArray.length];

        const charElement = document.createElement("span");
        charElement.className = "matrix-char";
        charElement.textContent = char;
        charElement.style.animationDelay = `${(row + col) * 0.05}s`; // Adjust the delay as needed
        textContainer.appendChild(charElement);
      }
    }
  }, []);

  return (
    <div className="matrix-text-container">
      {/* No need for direct content here */}
    </div>
  );
};

export default MatrixText;
