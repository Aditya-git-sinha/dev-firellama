import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import TopContainer from './components/TopContainer';
import SecondContainer from './components/SecondContainer';
import ThirdContainer from './components/ThirdContainer';
import Dialog from './components/Dialog';
import ServicesContainer from './components/ServicesContainer';

function App() {
  const [child, setChild] = useState(null);

  const openDialog = (child) => {
    setChild(child);
  };

  const closeDialog = () => {
    setChild(null);
  };

  return (
    <div className="App">
      <Navbar openDialog={openDialog} />
      <TopContainer openDialog={openDialog} />
      <SecondContainer />
      <ServicesContainer />
      <ThirdContainer openDialog={openDialog} />
      <Footer />
      <Dialog isOpen={child !== null} closeDialog={closeDialog}>
        {child}
      </Dialog>
    </div>
  );
}

export default App;