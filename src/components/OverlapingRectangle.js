import React from 'react';
import '../css/OverlapingRectangle.css';

const OverlapingRectangles = () => {
  return (
    <div className="container">
      <div className="big-rectangle">
        {/* Big rectangle can contain content or images here */}
      </div>
      <div className="overlaping-rectangle">
        {/* Overlaping content could go here */}
      </div>
    </div>
  );
};

export default OverlapingRectangles;