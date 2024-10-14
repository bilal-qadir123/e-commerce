

import React from 'react'
import { assets } from '../assets/frontend_assets/assets'; 
import Title from '../components/Title'; 
import NewsLetterBox from '../components/NewsLetterBox'; 
function About() {
  return ( 
    <> 
    <div className="text-2xl text-center pt-8 border-t">
    <Title text1={"ABOUT"} text2={"US"} />
  </div>

  <div className="my-10 flex flex-col md:flex-row gap-16">
    <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />

    <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
    <p>Meowlish was born out of a passion for innovation and a desire to revolutionize the industry. We believe that every product deserves to be enjoyed. Our team is dedicated to pushing the boundaries of what's possible, ensuring that our offerings not only meet but exceed the expectations of our diverse customer base. </p>

    <p>Since our inception, we've worked tirelessly to curate a diverse selection of products that cater to various tastes and preferences. Our commitment to excellence is evident in every item we offer, and we take pride in our ability to bring unique and innovative solutions to our customers. </p>

    <b className="text-gray-800">Our Mission</b>
    <p>Our mission at Meowlish is to empower customers with choice, convenience, and exceptional quality. We believe that every product deserves to be enjoyed, and we are dedicated to providing an unparalleled shopping experience. The Meowlish collection is a testament to our unwavering commitment to quality and innovation. </p>

    </div>
  </div>

  <div className="text-xl py-4">
    <Title text1="WHY" text2="CHOOSE US?" />
  </div> 
  <div className="flex flex-col md:flex-row text-sm mb-20">
    <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance:</b>
        <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our high standards of quality.</p>
    </div>
    <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience:</b>
        <p className="text-gray-600">With our user-friendly interface and hassle-free checkout process, shopping has never been easier.</p>
    </div>
    <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service:</b>
        <p className="text-gray-600">Our team of dedicated professionals is here to assist you with any questions or concerns.</p>
    </div>
  </div> 
  <NewsLetterBox /> 
  </> 
  )
 } 

export default About; 