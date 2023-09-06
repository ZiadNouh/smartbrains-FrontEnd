import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ boxes, imageUrl }) => {
  return (
    <div className=" mw7-ns center">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="800px" heigh="auto" />
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bounding-box"
            style={{
              right: box.rightCol,
              top: box.topRow,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
