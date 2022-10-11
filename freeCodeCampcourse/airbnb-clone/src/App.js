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
      <div className="flex ml-20 gap-5">
        <CardElement
          img="./images/spartsmen.png"
          status="Sold out"
          rate="5.0"
          country="(6) USA"
          name="Life lessons with Matzhan"
          price="136$"
        />
        <CardElement
          img="./images/wedding.png"
          status="online"
          rate="4.5"
          country="(6) USA"
          name="Wedding in a nutsheel"
          price="69$"
        />
        <CardElement
          img="./images/bike.png"
          rate="5.0"
          country="(6) USA"
          name="Mountain biking with mfs"
          price="10$"
        />
      </div>
    </div>
  );
}

export default App;
