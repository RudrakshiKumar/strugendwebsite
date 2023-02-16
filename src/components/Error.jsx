import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <section className='flex flex-col h-screen justify-center items-center ' >
 <div className='bg-gradient-to-r from-sky-500 to-indigo-500 w-[50%] h-[50%] drop-shadow-2xl m-auto rounded-lg font-poppins'>
 <div className='mt-14'>
 <h1 className='text-white  font-poppins text-6xl text-center font-black drop-shadow-xl'>404</h1>
<p className='text-gray-200 font-poppins text-[18px] leading-[30.8px] max-w-[50%] mx-auto pt-5 text-center'>Oops...Page not found</p>
<p className='text-gray-200 font-poppins text-[18px] leading-[30.8px] max-w-[50%] mx-auto pt-5 text-center'>Go back to</p>
<p className='text-white m-auto font-medium max-w-[20%] font-poppins rounded-full mt-5 text-sm px-5 py-2.5 text-center bg-pink-600 transform hover:scale-125 transition ease-in-out duration-200'>
<NavLink to="/" className=''>HOME</NavLink>
</p>

 </div>



 </div>
    </section>
   
  )
}

export default Error