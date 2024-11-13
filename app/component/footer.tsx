
import { FaYoutube , FaLinkedin, FaTiktok   } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className='bg-[#E2F1E7] h-[200px] p-11'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-xl">QAZI</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Huzaifa Qazi —
      <a
        href=""
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
       hqazi6167@gmail.com
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
      <a href='https://www.youtube.com/@huzaifa785' target='_blank' className="text-gray-500 text-5xl hover:text-[#ff0033]">
      < FaYoutube />
      </a>
      <a href='https://www.linkedin.com/in/huzaifa-qazi-5b79502ba/' target='_blank' className="ml-3 text-gray-500 text-5xl hover:text-[#0a66c2]">
      <FaLinkedin />
      </a>
      <a href='https://www.tiktok.com/@huzaifaqazi78?lang=en' target='_blank' className="ml-3 text-gray-500 text-4xl hover:text-black my-1">
      <FaTiktok />
      </a>
    </span>
  </div>
</footer>

    </div>
  )
}
export default Footer