import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'
import Blogs from './components/Blogs'
import Careers from './components/Careers'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Error from './components/Error'
import Blog1 from './components/Blog1'
import Blog2 from './components/Blog2'
import Blog3 from './components/Blog3'
import Blog4 from './components/Blog4'
import DynamicBlogs from './components/DynamicBlogs'
import WithoutNav from './components/WithoutNav'
import WithNav from './components/WithNav'


// import { Navigate } from 'react-router-dom'

function App() {
return <Fragment>
<Router>

{/* <Navbar/> */}
    <Routes>
    <Route element={<WithoutNav />}>
    <Route path = "*" element={<Error/>}/>
        </Route>
        <Route element={<WithNav />}>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<AboutUs/>}/>
        <Route path = "/blogs" element={<DynamicBlogs/>}/>
        <Route path = "/careers" element={<Careers/>}/>
        <Route path = "/pricing" element={<Pricing/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/blog1" element={<Blog1/>}/>
        <Route path = "/blog2" element={<Blog2/>}/>
        <Route path = "/blog3" element={<Blog3/>}/>
        <Route path = "/blog4" element={<Blog4/>}/>
        </Route>
        
      
        {/* <Route path="/404" element={<Error />} />
       <Route path="*" element={<Navigate to="/404" />} /> */}
    </Routes>
    
 </Router>

</Fragment>



}

// function App() {
//   return (
//     <div>
// <Navbar/>
// <Home/>
// <Features/>
// <Testimonials/>
// <CTA/>
// <Footer/>
//     </div>

//   )
// }

export default App



 

