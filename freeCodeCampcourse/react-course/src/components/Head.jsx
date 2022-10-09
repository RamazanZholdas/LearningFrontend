import React from 'react';
import WomanImage from '../assets/woman.png';

function Head() {
  return (
    <div>
      <img src={WomanImage} alt="hatyn" />
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-white text-2xl">Laura Smith</h1>
        <h1 className="text-yellow-500 text-xs pb-2">Frontend developer</h1>
        <h1 className="text-white" style={{ fontSize: '10px' }}>
          laurasmith.website
        </h1>
      </div>
    </div>
  );
}

export default Head;
