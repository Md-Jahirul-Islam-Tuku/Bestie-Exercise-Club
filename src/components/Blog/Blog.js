import React from 'react';
import blog from '../../blog.png'

const Blog = () => {
   return (
      <div className='mx-7 w-[90%] lg:w-[96%] xl:w-[98%]'>
         {/* <h1 className='font-bold italic text-4xl my-3 mr-96'>My Blog</h1> */}
         <img className='lg:mt-10 mx-auto lg:ml-96 lg:pl-64' src={blog} alt="" />
         <div tabIndex={0} className="mt-5 lg:w-[73%] collapse collapse-arrow border border-base-300 bg-zinc-800 rounded-box">
            <div className="collapse-title text-3xl font-medium text-yellow-300">
               What is React.js and how does it work?
            </div>
            <div className="collapse-content text-lg text-orange-300 px-24">
               <p className='text-left pl-[10%]'>React is without a doubt one of the most powerful and flexible frontend Libraries. But with its great power comes great responsibility. It's a library. For building user interfaces. This is perfect because, more often than not, this is all we want. React.js is generally thought of as the view layer in an application. This is literally all there is to React. We want to render this data to the UI, so we pass it to a React component which handles the job of getting the HTML into the page.</p>
            </div>
         </div>
         <div tabIndex={0} className="my-2 lg:w-[73%] collapse collapse-arrow border border-base-300 bg-zinc-800 rounded-box">
            <div className="collapse-title text-3xl font-medium text-yellow-300">
               What is the differences between props and state?
            </div>
            <div className="collapse-content text-lg text-orange-300 px-24">
               <p className='text-left pl-[10%]'>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            </div>
         </div>
         <div tabIndex={0} className="my-2 lg:w-[73%] collapse collapse-arrow border border-base-300 bg-zinc-800 rounded-box">
            <div className="collapse-title text-3xl font-medium text-yellow-300">
               Where does useEffect use except data load from API?
            </div>
            <div className="collapse-content text-lg text-orange-300 px-24">
               <ol className='text-left pl-[10%]'>
                  <li>Running on state change: validating input field</li>
                  <li>Running on state change: live filtering</li>
                  <li>Running on state change: trigger animation on new array value</li>
                  <li>Running on props change: update paragraph list on fetched API data update</li>
                  <li>Running on props change: updating fetched API data to get BTC updated price</li>
               </ol>
            </div>
         </div>
      </div>
   );
};

export default Blog;