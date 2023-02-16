import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';


// const withouSidebarRoutes = ["404", "/signin", "/etc"];

// const { pathname } = useLocation();
// if (withouSidebarRoutes.some((item) => pathname.includes(item)))
//   return null;
  
const Navbar = () => {
  return (
    <section className='sticky'>

<nav className="px-2 sm:px-4 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 ">
  <div className="container flex flex-wrap items-center justify-between mx-auto ">
  <a href="https://strugend.com/index.html" className="flex items-center">
      <img src={logo} className="h-6 pl-12 mr-3 sm:h-9 transform hover:scale-150 transition ease-in-out duration-200" alt="Strugend Logo" />
  </a>
  <div className="flex md:order-2 pr-12">
      <NavLink to="/contact">
      <button type="button" className="text-white font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-pink-600 transform hover:scale-125 transition ease-in-out duration-200">Contact Us</button>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
      </NavLink> 
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-10 md:mt-0 md:text-lg md:font-medium md:border-0">
  
    <li>
    <NavLink to="/" className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:text-white md:p-0 dark:text-white hover:bg-pink-600 hover:before:pl-2 rounded-md hover:after:pr-2 hover:shadow-xl transform hover:scale-125 transition ease-in-out duration-200" aria-current="page">Home</NavLink>
      </li>
    
   
      <li>
      <NavLink to="/about" className="block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-white md:p-0 dark:text-white hover:bg-pink-600 hover:before:pl-2 rounded-md hover:after:pr-2 hover:shadow-xl transform hover:scale-125 transition ease-in-out duration-200">About Us</NavLink>
      </li>
      
      
      <li>
      <NavLink to="/blogs" className="block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-white md:p-0 dark:text-white hover:bg-pink-600 hover:before:pl-2 rounded-md hover:after:pr-2 hover:shadow-xl transform hover:scale-125 transition ease-in-out duration-200">Blog</NavLink>
      </li>
      
      
      
      <li>
      <NavLink to="/careers" className="block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-white md:p-0 dark:text-white hover:bg-pink-600 hover:before:pl-2 rounded-md hover:after:pr-2 hover:shadow-xl transform hover:scale-125 transition ease-in-out duration-200">Careers</NavLink>
      </li>
      
      
      
      <li>
      <NavLink to="/pricing" className="block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-white md:p-0 dark:text-white hover:bg-pink-600 hover:before:pl-2 rounded-md hover:after:pr-2 hover:shadow-xl transform hover:scale-125 transition ease-in-out duration-200">Pricing</NavLink>
      </li>
      
      
    </ul>
  </div>
  </div>
</nav>
    </section>


  )
}

export default Navbar