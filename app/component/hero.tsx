import React from 'react'
import Image from 'next/image'
import mypic from "../../public/assets/Image .jpg"

export const Hero = () => {
  return (
    <div className='bg-[#d3e1d8] h-[750px]'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold  font-mono text-gray-900">
       I am
        <br className="hidden lg:inline-block" />
        Frontend Developer
      </h1>
      <p className="mb-8 leading-relaxed">
       I am currently enrolled in Governor Initiative ARTIFICIAL INTELLIGENCE course...
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#87aea3] border-0 -my-5 py-2 px-6 focus:outline-none hover:bg-[#6f8e83] rounded text-lg">
          Contact Me
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        height={200}
        width={320}
        src={mypic}
      />
    </div>
  </div>
</section>

    </div>
  )
}
export default Hero