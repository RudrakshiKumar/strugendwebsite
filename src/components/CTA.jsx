import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const CTA = () => {
  return (
    <div className='rounded-tr-full'>
     <section className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-white drop-shadow-2xl w-[90%] m-auto">
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-purple-600 xs:leading-[76.8px] leading-[66.8px] w-full">Let's try our service now!</h2>
      <p className="font-poppins font-normal text-purple-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Tell us how <span className='text-purple-600 font-semibold'>STRUGEND  </span>can help you grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
    <Link to="https://95srrk5y0is.typeform.com/to/g9WfkMTI?typeform-source=strugend.com">
    <motion.button
   type="button" className="animate-bounce py-4 px-6 font-poppins font-medium text-[18px] text-white bg-purple-600 rounded-[10px] outline-none transform hover:scale-125 transition ease-in-out duration-200">
    Get Started
  </motion.button>
    </Link>
 



    </div>
  </section>
    </div>
  )
}

export default CTA






