"use client"
import Link from 'next/link';
import { HiOutlineDownload } from "react-icons/hi";
import { useState } from 'react';

export const Navbar = () => {
  // State to manage the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#E2F1E7] z-50 sticky top-0'>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-bold hover:text-[#6f8e83]">Qazi.Portfolio</span>
          </a>
          
          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden flex items-center ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 hover:text-[#6f8e83] focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Desktop & Mobile Navigation Links */}
          <nav className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center ${isOpen ? 'block' : 'hidden'} md:block`}>
            <Link href={"#"} className="mr-14 hover:text-[#243642] hover:underline text-black cursor-pointer">HOME</Link>
            <Link href={"#about"} className="mr-14 hover:text-[#243642] hover:underline text-black cursor-pointer">ABOUT ME</Link>
            <Link href={"#project"} className="mr-14 hover:text-[#243642] hover:underline text-black cursor-pointer">PROJECT</Link>
            <Link href={"#skills"} className="mr-14 hover:text-[#243642] hover:underline text-black cursor-pointer">SKILLS</Link>
            <Link href={"#contact"} className="mr-14 hover:text-[#243642] hover:underline text-black cursor-pointer">CONTACT</Link>
          </nav>

          {/* Download CV Button */}
          <Link href={"assets/cv.png.pdf"} target='_blank'>
            <button className="inline-flex items-center bg-[#87aea3] border-0 py-2 px-3 text-black focus:outline-none hover:bg-[#6f8e83] rounded text-base mt-4 md:mt-0">
              Download Cv
              <HiOutlineDownload className='text-2xl ml-2'/>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
export default Navbar