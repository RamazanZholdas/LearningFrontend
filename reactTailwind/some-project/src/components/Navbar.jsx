//create navbar
import React from 'react';
import Typed from 'react-typed';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 text-white max-w-5xl mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-green-400">R6Play.</h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <ul className='inline-flex items-center'>
        <li className='ml-5 bg-transparent hover:bg-green-500 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Login</li>
        <li className='ml-5 bg-transparent hover:bg-green-500 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
