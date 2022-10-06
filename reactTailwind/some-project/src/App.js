import React from 'react';
import Navbar from './components/Navbar';
import VideoEdit from './components/VideoEdit';
import Main from './components/Main';
import Title from './components/Title';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <VideoEdit />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
