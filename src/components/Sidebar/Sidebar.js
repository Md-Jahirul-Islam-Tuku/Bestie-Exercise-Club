import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import image from '../../Profile Photo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Sidebar = ({ exerciseTime }) => {

   const [breakTime, setBreakTime] = useState();
   useEffect(() => {
      const breakTime = getStoredBreakTime();
      setBreakTime(breakTime);
   }, []);
   const handleBreakTimeSet = (props) => {
      localStorage.setItem('break-time', JSON.stringify(props));
      getStoredBreakTime();
   };
   const getStoredBreakTime = () => {
      let breakTime = {};
      const storedBreakTime = localStorage.getItem('break-time');
      if (storedBreakTime) {
         breakTime = JSON.parse(storedBreakTime);
      }
      setBreakTime(breakTime);
      return breakTime;
   }
   const notify = () => {
      toast("Wow so easy !");
      Swal.fire({
         title: 'Congratulations !',
         text: 'You are done with your activity !',
         imageUrl: 'https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/288676971_106295258788119_5518577303932797875_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dCSipwQzc30AX9xftQh&_nc_ht=scontent.fdac27-2.fna&oh=00_AT8jqyRt5bYGH2LREo8Z7L8Fy2P8IwtG8hupW1CD3l1lZQ&oe=633A147F',
         imageWidth: 420,
         imageHeight: 400,
         imageAlt: 'Custom image',
      })
   }
   return (
      <div className='border border-gray-500 bg-zinc-800 rounded-xl mx-8 lg:mx-0 lg:h-screen p-5 lg:fixed top-0 lg:min-w-[23%] md:min-w-full my-5 lg:mt-0'>
         <div className='flex'>
            <div className="avatar online">
               <div className="w-14 rounded-full ring ring-info ring-offset-base-100 ring-offset-1">
                  <img src={image} alt="Tuku" />
               </div>
            </div>
            <div className='text-white ml-5'>
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
               <h2><span className='text-3xl font-bold'>5.5</span>ft</h2>
               <p>Height</p>
            </div>
            <div>
               <h2><span className='text-3xl font-bold'>31</span>yrs</h2>
               <p>Age</p>
            </div>
         </div>
         <h1 className='text-2xl font-bold text-left'>Add a Break</h1>
         <div className='text-yellow-300 flex justify-around my-5 px-2 bg-slate-600 h-24 py-5 rounded-xl'>
            <button onClick={() => handleBreakTimeSet(2)} className='bg-slate-500 p-2 rounded-full'><span className='text-2xl font-semibold'>2</span>min</button>
            <button onClick={() => handleBreakTimeSet(3)} className='bg-slate-500 p-2 rounded-full'><span className='text-2xl font-semibold'>3</span>min</button>
            <button onClick={() => handleBreakTimeSet(5)} className='bg-slate-500 p-2 rounded-full'><span className='text-2xl font-semibold'>5</span>min</button>
            <button onClick={() => handleBreakTimeSet(7)} className='bg-slate-500 p-2 rounded-full'><span className='text-2xl font-semibold'>7</span>min</button>
            <button onClick={() => handleBreakTimeSet(9)} className='bg-slate-500 p-2 rounded-full'><span className='text-2xl font-semibold'>9</span>min</button>
         </div>
         <h1 className='text-2xl font-bold text-left'>Exercise Details</h1>
         <div className='text-yellow-300 flex justify-around my-5 bg-slate-600 h-18 py-5 rounded-xl'>
            <h1 className='text-xl font-semibold'><span>Exercise Time</span></h1>
            <p className='text-orange-400 text-2xl'>{exerciseTime} minutes</p>
         </div>
         <div className='text-yellow-300 flex justify-around my-5 bg-slate-600 h-18 py-5 rounded-xl'>
            <h1 className='text-xl font-semibold'><span>Break Time</span></h1>
            <p className='text-orange-400 text-2xl'>{breakTime} minutes</p>
         </div>
         <button onClick={notify} className='text-white w-full text-3xl flex justify-around my-5 btn-info h-18 py-5 rounded-xl'>Activity Completed</button>
      </div>
   );
};

export default Sidebar;