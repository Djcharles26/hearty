import React from 'react';
import Navbar from './components/common/Header';
import Footer from './components/common/Footer';

import Routes from './routes/routes';


function App() {
  return (
    <div>
      <Navbar />
      <Routes/>
      <Footer />
    </div>
  );
}

export default App;
