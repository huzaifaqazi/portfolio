import React from 'react'
import Image from 'next/image'
import mypic from "../../public/assets/Image .jpg"
import Link from 'next/link'
export const About = () => {
  return (
    <div className='bg-[#e4ede7] h-screen ' id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        height={300}
        width={350}
        src={mypic}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
        ABOUT ME
      </h1>
      <p className="mb-8 leading-relaxed">
      I completed my Matriculation at MPA with a commendable 80%, followed by my Intermediate studies at National College, 
      where I secured a percentage of 63%. Currently, I am pursuing a Bachelor's degree in Artificial Intelligence at Sindh Madrassatul Islam University. I am passionate about 
      further developing my skills in the field of AI and am committed to achieving excellence in my academic and professional endeavors.
      </p>
      <div className="flex justify-center">
        <Link href={"assets/cv.png.pdf"} target='_blank'>
        <button className="inline-flex text-white bg-[#87aea3] border-0 py-2 px-6 -my-5 focus:outline-none hover:bg-[#6f8e83] rounded text-lg">
          View Cv
        </button>
        </Link>
    
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
export default About