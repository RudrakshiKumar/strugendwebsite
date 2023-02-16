import React from 'react'
import blockchian from "../assets/blockchain.png";
import product from "../assets/product.png";
import prototype from "../assets/prototype.png";
import  monitoring from "../assets/monitoring.png";

const OurProcess = () => {
  return (
    <section className=''>
        <div className=''>
        
<h1 className=" text-purple-600  text-6xl text-center font-black pt-20 shadow-lg shadow-current  pb-10 mt-5 font-poppins">
        Our Process
        
          </h1>
<div className='grid grid-cols-2 mt-5'>
<div className='flex flex-col items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ml-16 mt-10 rounded-tr-extraLarge rounded-bl-extraLarge'>
  
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ml-5">Facing difficulty in Blockchain?</h5>
        <ul className="mb-3 font-normal text-gray-700 list-disc ml-10 mt-4">
          <li>Identify the problem</li>
          <li>Determine and Implement the solution</li>
          <li>Hand holding support and guidance</li>
        </ul>
    </div>
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mr-4" src={blockchian} alt=""/>
          </div>

          <div className='flex flex-col items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ml-16 mt-10 rounded-br-extraLarge rounded-tl-extraLarge'>
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg ml-4" src={product} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ml-5">Got a working product already?</h5>
        <ul className="mb-3 font-normal text-gray-700 list-disc ml-10 mt-4">
          <li>Scale-up and reach new milestones</li>
          <li>Modernize your software</li>
          <li>Bring stability and predictability into how your product behaves</li>
        </ul>
    </div>
          </div>

          <div className='flex flex-col items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ml-16 mt-16 rounded-br-extraLarge rounded-tl-extraLarge'>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ml-5">Got a product idea?</h5>
        <ul className="mb-3 font-normal text-gray-700 list-disc ml-10 mt-4">
          <li>Hire your engineering team quickly</li>
          <li>Go to market strategy</li>
          <li>Iterate rapidly</li>
        </ul>
    </div>
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg ml-12" src={prototype} alt=""/>
          </div>

          <div className='flex flex-col items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ml-16 mt-16 rounded-tr-extraLarge rounded-bl-extraLarge'>
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg ml-10" src={monitoring} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ml-5">Got too many manual processes?</h5>
        <ul className="mb-3 font-normal text-gray-700 list-disc ml-10 mt-4">
          <li>Develop solutions to optimize processes</li>
          <li>Enable non-linear scale</li>
          <li>Measure and monitor outcomes</li>
        </ul>
    </div>
          </div>

</div>
          
          


      
     
    </div>
    </section>
  )
}

export default OurProcess