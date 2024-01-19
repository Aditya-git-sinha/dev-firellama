import React from 'react';
import { shadeColor } from './Utility'; // Assumes Utility.js is in the same directory
import '../css/OverlapingRectangle.css'; // Adjust the import path as necessary

const OverlapingRectangles = ({ header, technologies, backgroundColor, imageSrc }) => {
  const listBackgroundColor = shadeColor(backgroundColor, -20);

  return (
    <div className="container">
      <div className="big-rectangle" style={{ backgroundImage: `url(${imageSrc})` }}>
      </div>
      <div className="overlaping-rectangle" style={{ backgroundColor: backgroundColor }}>
        <h2 style={{ color: 'white' }}>{header}</h2>
        <div className="technologies-layout" style={{ backgroundColor: listBackgroundColor }}>
          {technologies.map((tech, index) => (
            <span key={index} className="technology-item" style={{ color: 'white' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverlapingRectangles;