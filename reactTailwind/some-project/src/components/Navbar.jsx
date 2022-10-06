//create navbar
import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 text-white max-w-5xl mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-green-400">REACT.</h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
