import React from 'react';
import '../css/SmallLaptopDisplay.css'; // Make sure this path matches your project structure
const SmallLaptopComponent = () => {
  return (
    <div className="small-laptop">
      <div className="small-laptop__screen">
        <iframe
          width="100%"
          height="100%"
          src="https://megsoft.firellama.app/assets/vid1.mp4"
          title="Top 5 VS Code Productivity Tips Marathon"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> 
      </div>
      <div className="small-laptop__bottom">
        <div className="small-laptop__under"></div>
      </div>
    </div>
  );
};

export default SmallLaptopComponent;