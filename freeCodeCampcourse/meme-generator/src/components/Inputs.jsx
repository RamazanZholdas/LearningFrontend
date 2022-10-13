import React from 'react';
import data from '../data'

function Inputs() {
  function DoSmth() {
    console.log(data[Math.floor(Math.random() * data.length)].id)
  }

  return (
    <div>
      <section className="mx-36 mt-16 mb-7 flex justify-between">
        <input
          type="text"
          className="h-10 w-1/2 mr-3 py-2 px-3 appearance-none border border-black rounded-md text-gray-700 leading-tight"
          placeholder="text on the top"
        />
        <input
          type="text"
          className="h-10 w-1/2 ml-3 py-2 px-3 appearance-none border border-black rounded-md text-gray-700 leading-tight"
          placeholder="text on the bottom"
        />
      </section>
      <div className='flex justify-center mx-36'>
        <button onClick={DoSmth} className='w-full h-10 bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded-md'>Get a new meme image</button>
      </div>
    </div>
  );
}

export default Inputs;
