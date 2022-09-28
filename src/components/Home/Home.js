import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';

const Home = () => {
   const [activities, setActivities] = useState([]);
   useEffect(() => {
     fetch('fakedata.json')
     .then(res => res.json())
     .then(data => setActivities(data))
   }, []);
   return (
      <div>
         <Header></Header>
         <div className='grid grid-cols-3 gap-5 px-8'>
            {
               activities.map(activity => <Activity
                  activity={activity}
               ></Activity>)
            }
         </div>
      </div>
   );
};

export default Home;