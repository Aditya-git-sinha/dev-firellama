import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import TopContainer from './components/TopContainer';
import SecondContainer from './components/SecondContainer';
import ThirdContainer from './components/ThirdContainer';
import Dialog from './components/Dialog';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openDialog = (project) => {
    setSelectedProject(project);
  };

  const closeDialog = () => {
    setSelectedProject(null);
  };

  return (
    <div className="App">
      <Navbar />
      <TopContainer />
      <SecondContainer />
      <ThirdContainer openDialog={openDialog} />
      <Footer />
      <Dialog isOpen={selectedProject !== null} closeDialog={closeDialog}>
        {selectedProject && (
          <>
            <img src={selectedProject.pictureLocation} alt={selectedProject.title} className="dialog-image" />
            <div className="large-description">{selectedProject.largeDescription}</div>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default App;