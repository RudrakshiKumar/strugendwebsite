import React from 'react'
import Footer from './Footer'
import OurProcess from './OurProcess'
import OurTeam from './OurTeam'

const AboutUs = () => {
  return (
    <section className=''>
    <div className= "bg-gradient-to-r from-sky-500 to-indigo-500 rounded-br-extraLarge rounded-bl-extraLarge pt-20">
    <h1 className=" text-white  text-6xl text-center font-black pt-20 drop-shadow-xl">
        About Us
          </h1>
          {/* <h1 className='font-poppins font-semibold text-5xl text-white text-center'>Lets Think about End of Struggle</h1> */}
          <p className=' text-gray-200 font-poppins text-[18px] leading-[30.8px] max-w-[50%] mx-auto pt-10'>At Strugend, we offer personalized, high-end software designing services that are reliable and affordable. We understand what’s best for our client, and offer just that. What’s more? We are constantly innovating and improving our services to satisfy our clients’ needs.</p>
          <p className=' text-gray-200 font-poppins text-[18px] leading-[30.8px] max-w-[50%] mx-auto pt-10'>Strugend has a team of experienced engineers who can tailor our services to your specific needs. Software is our art, and we strive towards creating masterpieces solely for you. With our scalable services, you can always count on us to support your growing business. </p>
       <p className=' text-gray-200 font-poppins text-[18px] leading-[30.8px] max-w-[50%] mx-auto pt-10'>We know your time is valuable. So why waste it browsing through countless design services websites? Let us find the perfect fit. </p>
       <p className=' text-gray-200 font-poppins text-[18px] leading-[30.8px] max-w-[50%] mx-auto pt-10 pb-10'>So what are you waiting for? Get in touch with us today and see how we can help you out! </p>
       </div>
     

   

 

      


<OurProcess/>
<OurTeam/>
    <Footer/>
    </section>
    
  )
}

export default AboutUs


{/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
		<defs>
			<linearGradient id="bg">
				<stop offset="0%" style="stop-color:rgba(130, 158, 249, 0.06)"></stop>
				<stop offset="50%" style="stop-color:rgba(76, 190, 255, 0.6)"></stop>
				<stop offset="100%" style="stop-color:rgba(115, 209, 72, 0.2)"></stop>
			</linearGradient>
			<path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
		</defs>
		<g>
			<use xlink:href='#wave' opacity=".3">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="10s"
          calcMode="spline"
          values="270 230; -334 180; 270 230"
          keyTimes="0; .5; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlink:href='#wave' opacity=".6">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="8s"
          calcMode="spline"
          values="-270 230;243 220;-270 230"
          keyTimes="0; .6; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlink:href='#wave' opacty=".9">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="6s"
          calcMode="spline"
          values="0 230;-140 200;0 230"
          keyTimes="0; .4; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
		</g>
	</svg> */}