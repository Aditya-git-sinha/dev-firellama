import React from 'react';
import SmallLaptopComponent from './SmallLaptopDisplay';
import previousProjectsData from './previousProjects.json';
import megsoft from '../assets/megsoft.png';
import '../css/ThirdContainer.css';
import CustomCarousel from './Carousel';



const ThirdContainer = ({ openDialog }) => {
  return (
    <div className="third-container">
      <h2 className="section-heading">Previous Projects</h2>

      {previousProjectsData.map((project) => (
        <div key={project.title} className="previous-project">
          <img src={project.pictureLocation} alt={project.title} className="project-image" />
          <div className="project-title">{project.title}</div>
          <div className="small-description">{project.smallDescription}</div>
          <button onClick={() => openDialog(
            <>
              <CustomCarousel items={project.pictureArray.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Project Image ${index + 1}`}
                  className="responsive-carousel-image"
                />
              ))} />
              <ul className="project-description-list">
                {Object.entries(project.largeDescription).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </>
          )} className="view-more-btn">View More</button>
        </div>
      ))}

      <h2 className="section-heading">Upcoming Projects</h2>

      <div className="project-box megsoft-product">
        <SmallLaptopComponent iframeSrc={megsoft} />
        <div className="megsoft-text">
          <h1>MegSoft - Business Accounting Software</h1>
          <div className="description-background">
            <p className="megsoft-description">Streamline your accounting processes and take control of your business finances with our user-friendly software.</p>
          </div>
          <button
            name="submit"
            className="btn-2" // Updated class name to match the style provided
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;