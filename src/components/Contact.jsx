import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <section className='scrollbar overflow-x: hidden;'>
    <div className= "bg-gradient-to-r from-sky-500 to-indigo-500 pt-20">
          <h1 className="text-white text-6xl text-center font-black pt-20 drop-shadow-xl font-poppins">
        Contact Us
          </h1>
          <p className=' text-gray-200 font-poppins text-[18px] leading-[30.8px] max-w-[50%] mx-auto text-center py-14 '>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
</p>
       </div>
       <div className="bg-white w-[70%] drop-shadow-2xl m-auto my-20 rounded-lg">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
   
      <form action="#" className="space-y-8">
      <div className='grid grid-cols-2 gap-24'>
      <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your First Name *</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="example@email.com" required/>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Last Name *</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="example@email.com" required/>
          </div>
      </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email *</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="example@email.com" required/>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Phone Number</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="+00 000-000-0000" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject *</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your Message *</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a Comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 transform hover:scale-95 transition ease-in-out duration-200">Send Message</button>
      </form>
  </div>
</div>
       <Footer/>
</section>
  )
}

export default Contact
