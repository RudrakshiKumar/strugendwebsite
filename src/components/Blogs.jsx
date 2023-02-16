import React from 'react'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'



const Blogs = () => {
    useEffect(() => {
       
       }, []); 
  return (
    <section className='scrollbar overflow-x: hidden;'>
    <div className= "bg-gradient-to-r from-sky-500 to-indigo-500 rounded-br-extraLarge rounded-bl-extraLarge">
    {/* <h1 className="animate-pulse bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent text-6xl text-center font-black">
        Blogs
          </h1> */}
          <h1 className=" text-white  text-6xl text-center font-black py-20 drop-shadow-xl font-poppins">
        Blogs
          </h1>
          </div>
          <section className="bg-white">
          
  <div className=" px-4 mx-auto max-w-screen-xl pt-10">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
       
      </div> 
      <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400  rounded-lg border border-gray-200 shadow-md ">
              <div className="flex justify-between items-center mb-5 text-white">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                      Tutorial
                  </span>
                  <span className="text-sm">10 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "><a href="#">
Lorem ipsum dolor sit amet, consectetur adipiscing.</a></h2>
              <p className="mb-5 font-light text-gray-700">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ultrices diam. Donec tristique ut est id euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                      <span className="font-medium ">
                          John Doe
                      </span>
                  </div>
                 
                 <NavLink to="/blog1" className="inline-flex items-center font-medium text-primary-600 ">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
               
                  </NavLink>
                 
              </div>
          </article> 
          <article className="p-6 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400  rounded-lg border border-gray-200 shadow-md ">
              <div className="flex justify-between items-center mb-5 text-white">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Article
                  </span>
                  <span className="text-sm">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "><a href="#">
Lorem ipsum dolor sit amet, consectetur adipiscing.</a></h2>
              <p className="mb-5 font-light text-gray-700 ">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ultrices diam. Donec tristique ut est id euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                      <span className="font-medium ">
                          Jane Doe
                      </span>
                  </div>
                
                <NavLink to="/blog2" className="inline-flex items-center font-medium text-primary-600 ">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                 
                  </NavLink>
              </div>
          </article>                  
      </div>  
  </div>
</section>
<section className="bg-white">
  <div className=" px-4 mx-auto max-w-screen-xl pt-1 pb-24">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
       
      </div> 
      <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400  rounded-lg border border-gray-200 shadow-md ">
              <div className="flex justify-between items-center mb-5 text-white">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                      Tutorial
                  </span>
                  <span className="text-sm">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "><a href="#">
Lorem ipsum dolor sit amet, consectetur adipiscing.</a></h2>
              <p className="mb-5 font-light text-gray-700">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ultrices diam. Donec tristique ut est id euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                      <span className="font-medium ">
                         John Doe
                      </span>
                  </div>
                
                  <NavLink  to="/blog3" className="inline-flex items-center font-medium text-primary-600 ">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
               
                  </NavLink>
                 
              </div>
          </article> 
          <article className="p-6 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400  rounded-lg border border-gray-200 shadow-md ">
              <div className="flex justify-between items-center mb-5 text-white">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                      <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Article
                  </span>
                  <span className="text-sm">10 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "><a href="#">
Lorem ipsum dolor sit amet, consectetur adipiscing.</a></h2>
              <p className="mb-5 font-light text-gray-700 ">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ultrices diam. Donec tristique ut est id euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                      <span className="font-medium ">
                          Jane Doe
                      </span>
                  </div>
                  
                  <NavLink to="/blog4" className="inline-flex items-center font-medium text-primary-600 ">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </NavLink>
                 
              </div>
          </article>                  
      </div>  
  </div>
</section>

      
       <div>
       
        {/* <div className='w-96 h-96 bg-[url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fbloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblogging&tbnid=ri5XFUIE3yxlEM&vet=12ahUKEwjr6Ov8qYP9AhWVCLcAHW75ArwQMygAegUIARDhAQ..i&docid=6NIofCso2OoybM&w=390&h=280&q=blog%20pics&ved=2ahUKEwjr6Ov8qYP9AhWVCLcAHW75ArwQMygAegUIARDhAQ)]'> 
          Author <br /> John Doe <br /> Lorem ipsum dolor sit amet.
        </div> */}
        
       </div>
       <div className="flex justify-center pb-20">
              <button className="py-4 px-5 w-[20%]  text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-gradient-to-r from-sky-500 to-indigo-500 transform hover:scale-105 transition ease-in-out duration-200" type="button" onClick={()=> loadMore()}> Load More Blogs</button>
            </div>

       <Footer/>
</section>
  )
}

export default Blogs