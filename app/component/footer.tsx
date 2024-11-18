import { FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#E2F1E7] p-8 sm:p-11">
      <footer className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-8">
          {/* Logo and Email */}
          <a className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 sm:mb-0">
            <span className="ml-3 text-xl">QAZI</span>
          </a>
          <p className="text-sm text-gray-500">
            © 2024 Huzaifa Qazi —
            <a
              href="mailto:hqazi6167@gmail.com"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              hqazi6167@gmail.com
            </a>
          </p>

          {/* Social Icons */}
          <span className="flex justify-center sm:justify-start mt-4 sm:mt-0">
            <a
              href="https://www.youtube.com/@huzaifa785"
              target="_blank"
              className="text-gray-500 text-3xl sm:text-5xl hover:text-[#ff0033] mx-2"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/huzaifa-qazi-5b79502ba/"
              target="_blank"
              className="text-gray-500 text-3xl sm:text-5xl hover:text-[#0a66c2] mx-2"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.tiktok.com/@huzaifaqazi78?lang=en"
              target="_blank"
              className="text-gray-500 text-3xl sm:text-5xl hover:text-black mx-2"
            >
              <FaTiktok />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
