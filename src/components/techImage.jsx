import React from "react";

const TechImage = ({ image, alt }) => {
  return (
    <img
      src={`http://localhost:3000/assets/tech/${image}.jpg`}
      width="32"
      height="32"
      alt={alt}
    />
  );
};

export default TechImage;
