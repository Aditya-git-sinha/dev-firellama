import React from 'react';
import '../css/SmallLaptopDisplay.css'; // Ensure the path is correct for your project

const SmallLaptopComponent = () => {
  return (
    <div className="small-laptop">
      <div className="small-laptop__screen">
        <div className="small-laptop__display"></div> 
      </div>
      <div className="small-laptop__bottom">
        <div className="small-laptop__under"></div>
      </div>
    </div>
  );
};

export default SmallLaptopComponent;