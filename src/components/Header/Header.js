import React from 'react';
import logo from '../../logo.png'
const Header = () => {
   return (
      <div className='flex py-5 ml-8'>
         <img src={logo} alt="" />
         <h1 className='text-4xl font-bold italic text-yellow-500 ml-2'>Bestie Exercise Club</h1>
      </div>
   );
};

export default Header;