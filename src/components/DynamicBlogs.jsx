import React, {useState} from 'react'
import data from '../data'
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import TutorialIcon from './TutorialIcon';


const DynamicBlogs = () => {
    const [noOfElement, setnoOfElement] = useState(2);
    const slice = data.cardData.slice(0, noOfElement);

    const loadMore = () => {
        setnoOfElement(noOfElement + 2);
    }

  return (
    <section>
     <div className= "bg-gradient-to-r from-sky-500 to-indigo-500 rounded-br-extraLarge rounded-bl-extraLarge pt-20">
   
          <h1 className=" text-white  text-6xl text-center font-black py-20 drop-shadow-xl font-poppins">
        Blogs
          </h1>
          </div>
          <div className=" px-4 mx-auto max-w-screen-xl pt-10">
          <div className="grid gap-8 lg:grid-cols-2">
    {slice.map((item, index) => {
        return(
            <article className=" p-6 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400  rounded-lg border border-gray-200 shadow-md ">
              <div className="flex justify-between items-center mb-5 text-white">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                      <TutorialIcon/>
                      {item.format}
                  </span>
                  <span className="text-sm"> {item.duration}</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "><a href="#">
{item.title}</a></h2>
              <p className="mb-5 font-light text-gray-700">
{item.desc}</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src={item.img} alt="Jese Leos avatar" />
                      <span className="font-medium ">
                         {item.author}
                      </span>
                  </div>
                 
                 <NavLink to="/blog1" className="inline-flex items-center font-medium text-primary-600 ">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
               
                  </NavLink>
                 
              </div>
          </article> 
        )
    })}
    
</div>
          </div>

<div className="flex justify-center py-20">
              <button className="py-4 px-5 w-[20%]  text-white font-semibold rounded-xl  bg-gradient-to-r from-sky-500 to-indigo-500 transform hover:scale-105 transition ease-in-out duration-200" type="button" onClick={()=> loadMore()}> Load More Blogs</button>
            </div>
            <Footer/>
    </section>
    
  )
}

export default DynamicBlogs