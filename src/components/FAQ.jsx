import React from 'react'
import { NavLink } from 'react-router-dom'

const FAQ = () => {
  return (
    <section>
     {/* <div className= "bg-gradient-to-r from-sky-500 to-indigo-500 rounded-br-extraLarge rounded-bl-extraLarge">
   
          <h1 className="text-white  text-6xl text-center font-black py-20 drop-shadow-xl font-poppins">
      FAQ
          </h1>
       </div> */}
      <div className=" ">


<div className="">
  <div className="md:max-w-4xl mx-auto mb-20">

    <h2 className="text-black text-6xl text-center font-poppins font-black pt-20 drop-shadow-xl mb-20 mt-16">Frequently Asked Questions</h2>
    <div className="mb-11 flex flex-wrap ">
      <div className="w-full p-1">
        <a href="#">
          <div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 rounded-2xl shadow-xl">
            <div className="flex flex-wrap justify-between -m-2">
              <div className="flex-1 p-2">
                <h3 className="mb-4 text-lg font-semibold leading-normal">What services do you offer?
</h3>
                <p className="text-gray-600 font-medium">Currently we offer a range of services ranging from Game Development, Blockchain Development,Website Development, App development(Hybrid) and Metaverse Development.</p>
              </div>
              <div className="w-auto p-2">
                <svg className="relative top-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full p-1">
        <a href="#">
          <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-xl">
            <div className="flex flex-wrap justify-between -m-2">
              <div className="flex-1 p-2">
                <h3 className="text-lg font-semibold leading-normal">Why should I choose you or your company?</h3>
              </div>
              <div className="w-auto p-2">
                <svg className="relative top-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full p-1">
        <a href="#">
          <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-xl">
            <div className="flex flex-wrap justify-between -m-2">
              <div className="flex-1 p-2">
                <h3 className="text-lg font-semibold leading-normal">What if you leave us in between the project?</h3>
              </div>
              <div className="w-auto p-2">
                <svg className="relative top-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full p-1">
        <a href="#">
          <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-xl">
            <div className="flex flex-wrap justify-between -m-2">
              <div className="flex-1 p-2">
                <h3 className="text-lg font-semibold leading-normal">Why should we trust you?</h3>
              </div>
              <div className="w-auto p-2">
                <svg className="relative top-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <p className="text-gray-900 text-center font-medium">
      <span>Still have any questions?</span>
      <NavLink to="/contact">
      <button type="button" className="text-white font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-gradient-to-r from-sky-500 to-indigo-500 transform hover:scale-125 transition ease-in-out duration-200 ml-5">Contact Us</button>
      </NavLink> 
  
    </p>
  </div>
</div>
</div>
    </section>
    
   
  )
}

export default FAQ