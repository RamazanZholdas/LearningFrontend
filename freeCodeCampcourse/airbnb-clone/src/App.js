import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Title from './components/Title';
import Horlist from './components/Horlist';
import CardElement from './components/CardElement';

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar />
      <Banner />
      <Title />
      <CardElement />
    </div>
  );
}

export default App;
