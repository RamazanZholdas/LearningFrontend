import React from 'react';
import Header from './components/Header';
import Inputs from './components/Inputs';
import GetImage from './components/GetImage';

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      <Inputs />
      <GetImage />
    </div>
  );
}

export default App;
