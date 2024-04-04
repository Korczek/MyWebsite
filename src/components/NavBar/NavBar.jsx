import React from 'react'

export const NavBar = () => {
  return (
    <div className="flex justify-center p-4 items-center bg-teal-300/50 backdrop-blur-md fixed top-0 w-full text-2xl text-center">
      <a className='px-1 py-1 lg:px-3 hover:bg-teal-300/25 rounded-full' href='#'> Home </a>
      <a className='px-1 py-1 lg:px-3 hover:bg-teal-300/25 rounded-full' href='#skills'> Skills </a>
      <a className='px-1 py-1 lg:px-3 hover:bg-teal-300/25 rounded-full' href='#projects'> Projects </a>
      <a className='px-1 py-1 lg:px-3 hover:bg-teal-300/25 rounded-full' href='#demo'> Demo </a>
      <a className='px-1 py-1 lg:px-3 hover:bg-teal-300/25 rounded-full' href='#contact'> Contact </a>
    </div>
  );
};