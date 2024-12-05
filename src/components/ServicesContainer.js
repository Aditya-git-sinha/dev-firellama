import React from 'react';
import OverlapingRectangle from './OverlapingRectangle'; // Correct the file name if necessary
import '../css/ServicesContainer.css';
import CustomCarousel from './Carousel';

function ServicesContainer() {
  const carouselItems = [
    <OverlapingRectangle
      key={3}
      header="ML and AI Development"
      technologies={['ChatBots', 'Generative AI', 'Predictive Analytics', 'Automation', 'Data Science', 'Custom Models',]}
      backgroundColor="#0080ff" // This should be a valid CSS color value
      imageSrc="https://aditya113141.github.io/assets/ai.jpg"
    />,
    <OverlapingRectangle
      key={4}
      header="SaaS Technologies"
      technologies={[
        'Cloud Computing',
        'SaaS Product Development',
        'Enterprise Software',
        'CRM Systems',
        'Business Intelligence',
        'API Integrations'
      ]}
      backgroundColor="#FF0000" // This is a teal shade, you can change this to any valid CSS color value you prefer.
      imageSrc="https://aditya113141.github.io/assets/saas.jpg"
    />,
    <OverlapingRectangle
      key={5}
      header="B2B IT Products"
      technologies={[
        'ERP Solutions',
        'Supply Chain Management',
        'Procurement Systems',
        'IT Support & Maintenance',
        'Custom Solutions',
        'Tech Consulting'
      ]}
      backgroundColor="#4d0099" // This is a purple shade, you can change this to any valid CSS color value you prefer.
      imageSrc="https://aditya113141.github.io/assets/b2b.jpg"
    />,
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
      key={6}
      header="UI/UX Design & Strategy"
      technologies={[
        'User Experience Design',
        'User Interface Design',
        'Wireframing & Prototyping',
        'Interaction Design',
        'User Research & Testing',
      ]}
      backgroundColor="#FFD700" // This is a pink shade, it's associated with creativity and can be used for the UI/UX section.
      imageSrc="https://aditya113141.github.io/assets/UI_UX_.jpg"
    />


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