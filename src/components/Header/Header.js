import React from 'react';
import logo from '../../logo.png'
const Header = () => {
   return (
      <div className='flex mt-3 lg:mt-20 lg:mb-14 ml-8 justify-start'>
         <img className='h-10 lg:h-16' src={logo} alt="" />
         <h1 className='text-4xl lg:text-6xl font-bold italic text-yellow-500 ml-2'>Bestie Exercise Club</h1>
      </div>
   );
};

export default Header;