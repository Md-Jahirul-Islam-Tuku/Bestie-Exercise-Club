import React from 'react';

const Activity = ({ activity, addExerciseTime }) => {
   const { name, picture, description, age, time } = activity;
   
   return (
      <div>
         <div className="card min-w-96 min-h-full bg-zinc-900 shadow-xl border-2 border-gray-700">
            <figure><img className='h-60 lg:h-80 min-w-full p-5' src={picture} alt="Shoes" /></figure>
            <div className="card-body text-left">
               <h2 className="card-title text-3xl text-yellow-400">{name}</h2>
               <p>{description}</p>
               <h3 className='lg:text-xl font-semibold'>For Age: <span className='text-orange-500'>{age} yrs.</span></h3>
               <h3 className='lg:text-xl font-semibold'>Time required: <span className='text-orange-500'>{time} min.</span></h3>
               <div className="">
                  <button onClick={()=>addExerciseTime(activity)} className="text-xl font-bold text-white btn btn-info w-[100%]" >Add to List</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Activity;