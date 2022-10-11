import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Title from './components/Title';
import CardElement from './components/CardElement';

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar />
      <Banner />
      <Title />
      <CardElement
        imgSrc="hz" 
        status="Sold out"
        rate="5.0"
        country="(6) USA"
        name="Life lessons with Matzhan"
        price="136$"
      />
    </div>
  );
}

export default App;
