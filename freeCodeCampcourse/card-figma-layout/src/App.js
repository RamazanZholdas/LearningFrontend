import React from 'react';
import Head from './components/Head';
import Buttons from './components/Buttons';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="card-size mt-20 rounded-3xl flex flex-col items-center justify-self-auto">
        <Head />
        <Buttons />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
