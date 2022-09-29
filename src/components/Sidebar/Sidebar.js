import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import image from '../../Profile Photo.png'
const Sidebar = () => {
   return (
      <div className='border border-gray-500 bg-zinc-800 rounded-xl mx-8 lg:mr-5 lg:h-screen p-5 lg:fixed top-0 lg:min-w-[23%] md:min-w-full my-5 lg:mt-0'>
         <div className='flex'>
            <div>
               <img className='h-14 mr-4 rounded-full border border-gray-500' src={image} alt="" />
            </div>
            <div className='text-white'>
               <h4 className='text-xl font-bold text-orange-400'>Jahirul Islam Tuku</h4>
               <p><FontAwesomeIcon className='mr-1' icon={faLocationDot}></FontAwesomeIcon> Barishal, Bangladesh</p>
            </div>
         </div>
         <div className='text-white flex justify-around my-5 bg-slate-600 py-5 rounded-xl'>
            <div>
               <h2><span className='text-3xl font-bold'>82</span>kg</h2>
               <p>Weight</p>
            </div>
            <div>
               <h2 className='text-3xl font-bold'>5.5</h2>
               <p>Height</p>
            </div>
            <div>
               <h2><span className='text-3xl font-bold'>31</span>yrs</h2>
               <p>Age</p>
            </div>
         </div>
         <h1 className='text-2xl font-bold text-left'>Add a Break</h1>
         <div className='text-yellow-400 flex justify-around my-5 bg-slate-600 h-24 py-5 rounded-xl'>
            <h5 className='bg-slate-500 p-2 rounded-full'><span className='text-2xl font-semibold'>2</span>min</h5>
            <h5 className='bg-slate-500 p-2 rounded-full'><span className='text-2xl font-semibold'>3</span>min</h5>
            <h5 className='bg-slate-500 p-2 rounded-full'><span className='text-2xl font-semibold'>5</span>min</h5>
            <h5 className='bg-slate-500 p-2 rounded-full'><span className='text-2xl font-semibold'>7</span>min</h5>
            <h5 className='bg-slate-500 p-2 rounded-full'><span className='text-2xl font-semibold'>9</span>min</h5>
         </div>
         <h1 className='text-2xl font-bold text-left'>Exercise Details</h1>
         <div className='text-yellow-400 flex justify-around my-5 bg-slate-600 h-18 py-5 rounded-xl'>
            <h1 className='text-xl font-semibold'><span>Exercise Time</span></h1>
            <p className='text-orange-500 text-xl'>{40} minutes</p>
         </div>
         <div className='text-yellow-400 flex justify-around my-5 bg-slate-600 h-18 py-5 rounded-xl'>
            <h1 className='text-xl font-semibold'><span>Break Time</span></h1>
            <p className='text-orange-500 text-xl'>{9} minutes</p>
         </div>
      </div>
   );
};

export default Sidebar;