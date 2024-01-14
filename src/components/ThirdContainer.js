import React from 'react';
import SmallLaptopComponent from './SmallLaptopDisplay';
import previousProjectsData from './previousProjects.json';
import megsoft from '../assets/megsoft.png';
import '../css/ThirdContainer.css';

const ThirdContainer = ({ openDialog }) => {
  return (
    <div className="third-container">
        {previousProjectsData.map((project) => (
            <div key={project.title} className="project-box">
                <img src={project.pictureLocation} alt={project.title} className="project-image" />
                <div className="small-description">{project.smallDescription}</div>
                <button onClick={() => openDialog(project)} className="view-more-btn">View More</button>
            </div>
        ))}

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