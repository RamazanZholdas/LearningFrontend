import React from 'react';
import Typed from 'react-typed';

function Title() {
  return (
    <div className="px-2 flex max-w-screen-lg mx-auto pt-5 justify-center items-center">
      <p className="text-4xl text-green-400 font-bold">
        <Typed strings={['Rainbow Six Siege', 'Try Now!!!']} typeSpeed={70} backSpeed={80} loop />
      </p>
    </div>
  );
}

export default Title;
