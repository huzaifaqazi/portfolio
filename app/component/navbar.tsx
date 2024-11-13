import Link from 'next/link';
import React from 'react'
import { HiOutlineDownload } from "react-icons/hi";

export const Navbar = () => {
  return (
    <div className='bg-[#E2F1E7]'>
        <header className="text-gray-600 body-font sticky">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl font-bold  hover:text-[#6f8e83] ">Qazi.Portfolio</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={""} className="mr-14 hover:text-[#243642] hover:underline text-black cursor-pointer">HOME</Link>
      <Link href={"#about"} className="mr-14 hover:text-[#243642] hover:underline text-black cursor-pointer">ABOUT ME</Link>
      <Link href={""} className="mr-14 hover:text-[#243642] hover:underline text-black cursor-pointer">PROJECT</Link>
      <Link href={""} className="mr-14 hover:text-[#243642] hover:underline text-black cursor-pointer">SKILLS</Link>
      <Link href={""} className="mr-14 hover:text-[#243642] hover:underline text-black cursor-pointer">CONTACT</Link>
    </nav>
    <Link href={"assets/cv.png.pdf"} target='_blank'>
    <button className="inline-flex items-center bg-[#87aea3] border-0 py-2 px-3  text-black focus:outline-none hover:bg-[#6f8e83] rounded text-base mt-4 md:mt-0">
      Download Cv
      <HiOutlineDownload className='text-2xl ml-2'/>
      </button>
      </Link>
  </div>
</header>

    </div>
  )
}
