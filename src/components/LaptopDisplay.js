import React from 'react';
import '../css/LaptopDisplay.css'; // importing the CSS for the component

const LaptopComponent = () => {
  return (
    <div className="laptop">
      <div className="laptop__screen">
        {/* Replaced img with white div placeholder */}
        <div className="laptop__display"></div> 
      </div>
      <div className="laptop__bottom">
        <div className="laptop__under"></div>
      </div>
      <div className="laptop__shadow"></div>
    </div>
  );
};

export default LaptopComponent;