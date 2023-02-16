import React from 'react'
import FAQ from './FAQ'
import Footer from './Footer'

const Pricing = () => {
  return (
    <section className='scrollbar overflow-x: hidden;'>
    <div className= "bg-gradient-to-r from-sky-500 to-indigo-500 rounded-br-extraLarge rounded-bl-extraLarge pt-20">
    {/* <h1 className="animate-pulse bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent text-6xl text-center font-black">
        Pricing
          </h1> */}
          <h1 className="text-white  text-6xl text-center font-black py-20 drop-shadow-xl font-poppins">
        Pricing
          </h1>
       </div>
       <h2 className="text-black text-6xl text-center font-poppins font-black pt-20 drop-shadow-xl">Pick a Plan</h2>
       <div className='grid grid-cols-3 gap-3 '>
       <div className='drop-shadow-2xl mt-20 '>
       <div className='bg-gradient-to-r from-gray-100 to-gray-300 w-[90%] h-[10%] m-auto  rounded-t-lg'>
<p className=" text-xl font-poppins text-gray-900 font-bold text-center uppercase tracking-px py-5">Game Development</p>
            </div>
       <div className='bg-gradient-to-r from-gray-100 to-gray-300 w-[90%] h-[58%]  m-auto'>
<div className="px-5 pt-5">

<span className=" inline-block text-sm text-gray-500 font-semibold uppercase tracking-px pb-4">Features included:</span>
            <ul className='mt-2 font-poppins text-gray-900 '>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">Multi User Game</p>
              </li>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">All UI components</p>
              </li>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">Lifetime accesse</p>
              </li>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">Use on 1 (one) project</p>
              </li>
              <li className="flex items-center pb-5">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">4 months support</p>
              </li>
            </ul>
          </div>
</div>
<div className='bg-white w-[90%] m-auto  rounded-b-lg'>
{/* <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 px-8">
                <span className="mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px mt-10">Pro Package</span>
                <p className="text-gray-900 font-semibold leading-normal">Best for Startups &amp; Small Businesses</p>
              </div>
              <div className="w-full sm:w-1/2 p-8">
                <div className="sm:max-w-max ml-auto">
                  <p className="font-bold">
                    <span className="text-5xl leading-tight tracking-px-n">$49</span>
                    <span className="text-lg text-gray-500 leading-snug tracking-px-n">/mo</span>
                  </p>
                  <p className="font-medium text-gray-500 leading-relaxed">Billed anually</p>
                </div>
              </div>
            </div> */}
            <div className="flex justify-center py-10">
              <button className="py-4 px-5 w-[50%]  text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-gradient-to-r from-sky-500 to-indigo-500 transform hover:scale-125 transition ease-in-out duration-200" type="button">Contact Sales</button>
            </div>
</div>
  
       </div>
       <div className='drop-shadow-2xl mt-20 '>
       <div className='bg-gradient-to-r from-gray-100 to-gray-300 w-[90%] h-[10%] m-auto  rounded-t-lg'>
<p className=" text-xl font-poppins text-gray-900 font-bold text-center uppercase tracking-px py-5">Blockchain Development</p>
            </div>
       <div className='bg-gradient-to-r from-gray-100 to-gray-300 w-[90%] h-[62%]  m-auto'>
<div className="px-5 pt-5">

<span className=" inline-block text-sm text-gray-500 font-semibold uppercase tracking-px pb-4">Features included:</span>
            <ul className='mt-2 font-poppins text-gray-900 '>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">Ethereum/Matic Network</p>
              </li>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">Defi Protocol</p>
              </li>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">Blockchain Hosting</p>
              </li>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">Websites</p>
              </li>
              <li className="flex items-center pb-5">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">Hybrid Mobile Application</p>
              </li>
              <li className="flex items-center pb-5">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">4 Months support</p>
              </li>
            </ul>
          </div>
</div>
<div className='bg-white w-[90%] m-auto  rounded-b-lg'>
{/* <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 px-8">
                <span className="mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px mt-10">Pro Package</span>
                <p className="text-gray-900 font-semibold leading-normal">Best for Startups &amp; Small Businesses</p>
              </div>
              <div className="w-full sm:w-1/2 p-8">
                <div className="sm:max-w-max ml-auto">
                  <p className="font-bold">
                    <span className="text-5xl leading-tight tracking-px-n">$49</span>
                    <span className="text-lg text-gray-500 leading-snug tracking-px-n">/mo</span>
                  </p>
                  <p className="font-medium text-gray-500 leading-relaxed">Billed anually</p>
                </div>
              </div>
            </div> */}
            <div className="flex justify-center py-10">
              <button className="py-4 px-5 w-[50%]  text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-gradient-to-r from-sky-500 to-indigo-500 transform hover:scale-125 transition ease-in-out duration-200" type="button">Contact Sales</button>
            </div>
</div>
  
       </div>
       <div className='drop-shadow-2xl mt-20 '>
       <div className='bg-gradient-to-r from-gray-100 to-gray-300 w-[90%] h-[10%] m-auto  rounded-t-lg'>
<p className=" text-xl font-poppins text-gray-900 font-bold text-center uppercase tracking-px py-5">Metaverse</p>
            </div>
       <div className='bg-gradient-to-r from-gray-100 to-gray-300 w-[90%] h-[58%]  m-auto'>
<div className="px-5 pt-5">

<span className=" inline-block text-sm text-gray-500 font-semibold uppercase tracking-px pb-4">Features included:</span>
            <ul className='mt-2 font-poppins text-gray-900 '>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">World Architecture</p>
              </li>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">All UI components</p>
              </li>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">All Functionality</p>
              </li>
              <li className="mb-4 flex items-center">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">Decentraland Projects</p>
              </li>
              <li className="flex items-center pb-5">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="font-semibold leading-normal">4 months support</p>
              </li>
            </ul>
          </div>
</div>
<div className='bg-white w-[90%] m-auto  rounded-b-lg'>
{/* <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 px-8">
                <span className="mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px mt-10">Pro Package</span>
                <p className="text-gray-900 font-semibold leading-normal">Best for Startups &amp; Small Businesses</p>
              </div>
              <div className="w-full sm:w-1/2 p-8">
                <div className="sm:max-w-max ml-auto">
                  <p className="font-bold">
                    <span className="text-5xl leading-tight tracking-px-n">$49</span>
                    <span className="text-lg text-gray-500 leading-snug tracking-px-n">/mo</span>
                  </p>
                  <p className="font-medium text-gray-500 leading-relaxed">Billed anually</p>
                </div>
              </div>
            </div> */}
            <div className="flex justify-center py-10">
              <button className="py-4 px-5 w-[50%]  text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-gradient-to-r from-sky-500 to-indigo-500 transform hover:scale-125 transition ease-in-out duration-200" type="button">Contact Sales</button>
            </div>
</div>
  
       </div>


       </div>
     
<FAQ/>
       <Footer/>
</section>
  )
}

export default Pricing