import React from 'react'
import heropic from "../assets/heropic.png";
import { motion } from "framer-motion"
import Features from './Features';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';


const Home = () => {
  return (
    <section className='scrollbar overflow-x: hidden; pt-20'>
    <div id="home" className= "bg-gradient-to-r from-sky-500 to-indigo-500 rounded-br-full grid grid-cols-2 ">
    <div className="mt-0">
    <h1 className="font-poppins font-semibold text-6xl text-white pl-36 pb-8 py-14 ml-10">
        Let's Begin Your
            <div className= "text-white py-5">Success With</div>
            <div className= "text-8xl text-purple-200">Strugend</div>
          </h1>
          <p className="pl-36 font-poppins font-normal text-gray-100 text-[18px] leading-[30.8px] max-w-[90%] mt-5 ml-10">We work on Blockchain Services, Game Development, Metaverse Development and other advance technologies.</p>
       </div>

<motion.div className='relative ml-0 mr-56 mb-20'
animate={{ rotate: 360 }}
transition={{ duration: 10, repeat: Infinity }}
    >
<img src={heropic} alt="Hero" className="w-[100%] h-[100%] my-0" />
</motion.div>
   



    </div>
    <Features/>
<Testimonials/>
<CTA/>
<Footer/>
</section>
    
   
  )
}

export default Home