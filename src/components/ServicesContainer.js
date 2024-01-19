import React from 'react';
import OverlapingRectangle from './OverlapingRectangle'; // Correct the file name if necessary
import '../css/ServicesContainer.css';
import CustomCarousel from './Carousel';

function ServicesContainer() {
  const carouselItems = [
    <OverlapingRectangle
      key={1}
      header="Mobile App Development"
      technologies={['React Native', 'Flutter', 'Cross-Platform Application', 'Native Apps', 'Mobile UI/UX Desgins']}
      backgroundColor="#cc0066" // This should be a valid CSS color value
      imageSrc="https://aditya113141.github.io/assets/mobile.png"
    />,
    <OverlapingRectangle
      key={2}
      header="Web App Development"
      technologies={['React', 'Node.js', 'MongoDB', 'Express.js', 'Next.js', 'NoSQL', 'MySQL', 'Sqlite']}
      backgroundColor="#ff8000" // This should be a valid CSS color value
      imageSrc="https://aditya113141.github.io/assets/web.png"
    />,
    <OverlapingRectangle
      key={3}
      header="ML and AI Development"
      technologies={['React', 'Node.js', 'MongoDB', 'Node.js', 'MongoDB', 'Node.js', 'MongoDB']}
      backgroundColor="#0080ff" // This should be a valid CSS color value
      imageSrc="https://aditya113141.github.io/assets/ai.jpg"
    />,

    // ... more items
  ];


  return (
    <div className="services" id="service-container">
      <h2 className="section-heading">Our Services</h2>
      <CustomCarousel items={carouselItems} />
    </div>
  );
}

export default ServicesContainer;