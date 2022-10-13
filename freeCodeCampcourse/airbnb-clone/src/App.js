import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Title from './components/Title';
import CardElement from './components/CardElement';
import data from './data';

function App() {
  console.log(data.img);

  const myCards = data.map((data) => {
    return <CardElement data={data} />;
  });

  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar />
      <Banner />
      <Title />
      <div className="flex ml-20 flex-grow-0 flex-shrink-0 flex-auto gap-5 max-w-4xl">
        {myCards}
      </div>
    </div>
  );
}

export default App;
