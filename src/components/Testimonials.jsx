import React from 'react'

const Testimonials = () => {
  return (
    <section id="clients" className="mt-10 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-tl-full  sm:py-16 py-6 flex justify-center items-center flex-col relative">
   <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

 <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative  mt-10">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full ml-96 my-auto">
         What People are <br className="sm:block hidden" /> Saying About Us
       </h2>
      <div className="w-full md:mt-0 mt-6">
         <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]">
           Everything you need to know about how we grow your business
           anywhere on the planet.         
</p>
     </div>
    </div>

    <div className="grid grid-cols-3 gap-10">

<div className="w-96 h-56 rounded-lg shadow ml-50 mt-16 px-2 transform hover:scale-105 transition ease-in-out duration-200 p-2">
    <a href="#">
    <svg className="m-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
    </a>
    <div className="hover:text-white">
        <a href="#">
            <h5 className="mb-2 text-lg font-poppins font-bold tracking-tight text-gray-900 text-center mt-2">
Rani Singh </h5>
<p className="mb-3 text-sm font-poppins font-normal text-gray-700 text-center">Director, CXO @ Bitzee Pvt. Ltd.</p>
        </a>
        <p className="mb-10 text-sm font-poppins font-semibold text-gray-900 text-justify mt-5">With the support of STRUGEND, we are here having one of the best centralized crypto exchange platforms in the world. I really think STRUGEND makes the impossible sounds like the comedy.</p>
    </div>
</div>

<div className="w-96 h-56 rounded-lg shadow ml-50 mt-16 px-2 transform hover:scale-105 transition ease-in-out duration-200 p-2">
    <a href="#">
    <svg className="m-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
    </a>
    <div className="hover:text-white">
        <a href="#">
            <h5 className="mb-2 text-lg font-poppins font-bold tracking-tight text-gray-900 text-center mt-2">

            NM Baibhab </h5>
<p className="mb-3 text-sm font-poppins font-normal text-gray-700 text-center">Co - founder @ Soulbliz</p>
        </a>
        <p className="mb-10 text-sm font-poppins font-semibold text-gray-900 text-justify mt-5">The patient bills and prescription management system on the blockchain developed by STRUGEND is wonderful, I am personally grateful as without their support our features will be incomplete.</p>
    </div>
</div>

<div className="w-96 h-56 rounded-lg shadow ml-50 mt-16 px-2 transform hover:scale-105 transition ease-in-out duration-200 p-2">
    <a href="#">
    <svg className="m-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
    </a>
    <div className="hover:text-white">
        <a href="#">
            <h5 className="mb-2 text-lg font-poppins font-bold tracking-tight text-gray-900 text-center mt-2">
            Krishal Mehta</h5>
<p className="mb-3 text-sm font-poppins font-normal text-gray-700 text-center">

CEO @ Waveprotocol</p>
        </a>
        <p className="mb-10 text-sm font-poppins font-semibold text-gray-900 text-justify mt-5">The crypto mutual platform developed by STRUGEND is way cool and working great. Thank you STRUGEND. Keep it up and go ahead in life.</p>
    </div>
</div>




</div>

</section>
  )
}

export default Testimonials



