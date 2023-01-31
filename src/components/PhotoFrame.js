import React from "react";

const PhotoFrame = (props) => {
  return (
    <div className="photoframe">
      <img src={props.image} alt="img" />
      <h1 className="caption">{props.title}</h1>
    </div>
  );
};
export default PhotoFrame;
