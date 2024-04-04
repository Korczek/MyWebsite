import React from 'react'

export const NavBar = () => {
  return (
    <div className="flex justify-center p-4 items-center bg-teal-300/50 backdrop-blur-md fixed top-0 w-full text-2xl">
      <a className='p-2' href='#'> Home </a>
      <a className='p-2' href='#skills'> Skills </a>
      <a className='p-2' href='#projects'> Projects </a>
      <a className='p-2' href='#demo'> Demo </a>
      <a className='p-2' href='#contact'> Contact </a>
    </div>
  );
};