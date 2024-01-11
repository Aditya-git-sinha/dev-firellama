import React from 'react';
import Footer from './components/Footer'; // Adjust the path as necessary for your project structure.
import Navbar from './components/NavBar';

function App() {
  // Your other component JSX or state management.
  
  return (
    <div className="App">
      {/* other components */}
      <Navbar/>
      <Footer />
      {/* End of other components */}
    </div>
  );
}

export default App;