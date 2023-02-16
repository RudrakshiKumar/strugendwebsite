import React from 'react'
import heropic from "../assets/heropic.png";
import { motion } from "framer-motion"

const Features = () => {
  return (
    <div id="home" className= "bg-white grid grid-cols-2">

    <div className="grid grid-cols-2 ">

    <div className="w-40 h-56 rounded-lg shadow ml-56 mt-16 px-2 hover:bg-purple-200 transform hover:scale-125 transition ease-in-out duration-200">
        <a href="#">
        <svg className="w-14 m-auto mt-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </a>
        <div className="hover:text-white">
            <a href="#">
                <h5 className="mb-2 text-lg font-poppins font-bold tracking-tight text-gray-900 text-center mt-2">Just in Time</h5>
            </a>
            <p className="mb-3 text-sm font-poppins font-normal text-gray-700 dark:text-gray-500 text-center">We believe the time is important, so we make sure that the product be delivered just in time.</p>
        </div>
    </div>


    <div className="w-40 h-56 rounded-lg shadow ml-28 mt-10 transform hover:scale-125 transition ease-in-out duration-200 hover:bg-purple-200 px-2">
        <a href="#">
        <svg className="w-14 m-auto mt-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>

        </a>
        <div className="">
            <a href="#">
                <h5 className="mb-2 text-lg font-poppins font-bold tracking-tight text-gray-900 text-center mt-2">Budget Friendly</h5>
            </a>
            <p className="mb-3 text-sm font-poppins font-normal text-gray-700 dark:text-gray-500 text-center">The best part is that we are flexible around your budget. We work with you to find the best solution for you.</p>
        </div>
    </div>


    <div className="w-40 h-56 rounded-lg shadow ml-56 mt-16 mb-5 transform hover:scale-125 transition ease-in-out duration-200 hover:bg-purple-200 px-1">
        <a href="#">
        <svg className="w-14 m-auto mt-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>

        </a>
        <div className="">
            <a href="#">
                <h5 className="mb-2 text-lg font-poppins font-bold tracking-tight text-gray-900 text-center">Best Team</h5>
            </a>
            <p className="mb-3 text-sm font-poppins font-normal text-gray-700 dark:text-gray-400 text-center">We have recruited the best team of developers with industry standard skills to deliver the product for you.</p>
        </div>
    </div>

    <div className="w-40 h-56 rounded-lg shadow ml-28 mt-10 transform hover:scale-125 transition ease-in-out duration-200 hover:bg-purple-200 px-1">
        <a href="#">
        <svg className="w-14 m-auto mt-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
</svg>

        </a>
        <div className="">
            <a href="#">
                <h5 className="mb-2 text-lg font-poppins font-bold tracking-tight text-gray-900 text-center">Extended Support</h5>
            </a>
            <p className="mb-3 text-sm font-poppins font-normal text-gray-700 dark:text-gray-400 text-center">We provide the extended support and maintenance even after our project is completed.</p>
        </div>
    </div>

    </div>


    


<div className="my-auto">
    <h1 className="font-poppins font-semibold text-4xl text-purple-400 text-right pb-8 py-16 mr-56">
        Get to Know the Main
            <div className= "text-purple-400 pt-10 text-5xl">FEATURES of</div>
            <div className= "text-8xl text-purple-600 pt-5">Strugend</div>
          </h1>
       </div>
   


    </div>

  )
}




export default Features


  {/* <section className='pt-10 pl-10 bg-white grid grid-cols-2'>
    
 <motion.div className='relative ml-0 mr-56 mb-20'
animate={{ rotate: 360 }}
transition={{ duration: 10, repeat: Infinity }}
    >
<img src={heropic} alt="Hero" className="w-[100%] h-[100%] my-0" />
</motion.div>
  
    </section> */}