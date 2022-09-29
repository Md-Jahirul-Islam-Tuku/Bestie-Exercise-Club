import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
   const [activities, setActivities] = useState([]);
   useEffect(() => {
     fetch('fakeData.json')
     .then(res => res.json())
     .then(data => setActivities(data))
   }, []);
   const [exerciseTime, setExerciseTime] = useState(0);
   const addExerciseTime = activity => {
      const time = activity.time;
      const currentExerciseTime = exerciseTime + time;
      setExerciseTime(currentExerciseTime);
   }

   return (
      <div className='sm:px-2 md:px-5 lg:px-20'>
         <Header></Header>
         <h1 className='text-left text-3xl text-white pl-8 py-5'>Select Today's Activity</h1>
         <div className='grid md:grid-cols-2 lg:grid-cols-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 md:col-span-2 lg:col-span-3'>
               {
                  activities.map(activity => <Activity
                     key={activity.id}
                     activity={activity}
                     addExerciseTime={addExerciseTime}
                  ></Activity>)
               }
            </div>
            <div>
               <Sidebar
                  exerciseTime={exerciseTime}
               ></Sidebar>
            </div>
         </div>
      </div>
   );
};

export default Home;