import Image from "next/image";
import project1 from "../../public/assets/project1.png";
import project2 from "../../public/assets/project2.png";
import project3 from "../../public/assets/project3.png";

export const Project = () => {
  return (
    <div className="bg-slate-100 min-h-screen" id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-11">
            <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900">
              PROJECTS
            </h1>
            <p className="lg:w-2/3 mx-auto text-blue-500 leading-relaxed text-base">
              Must check below...
            </p>
          </div>
          {/* Using flex-wrap for responsiveness */}
          <div className="flex flex-wrap -m-4">
            {/* Project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Facebook clone project"
                  className="absolute inset-0 w-full h-full drop-shadow-xl object-cover object-center"
                  src={project1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 cursor-pointer border-gray-300 bg-gray-100 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Project 1
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Facebook Clone
                  </h1>
                  <p className="leading-relaxed">
                    This is my first project. A Facebook clone built using Next.js and Tailwind CSS.
                  </p>
                  <a href="https://clone-nextjs-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <p className="text-blue-500">Click here...</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Amazon clone project"
                  className="absolute inset-0 w-full h-full drop-shadow-xl object-cover object-center"
                  src={project2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Project 2
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Amazon Clone
                  </h1>
                  <p className="leading-relaxed">
                    A clone of Amazon built using core HTML and CSS.
                  </p>
                  <a href="https://amazon-clone-tawny-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <p className="text-blue-500">Click here...</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Resume builder project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project3}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Project 3
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume Builder
                  </h1>
                  <p className="leading-relaxed">
                    This Resume Builder is based on HTML, CSS, and TypeScript. It allows users to create shareable and editable resumes.
                  </p>
                  <a href="https://shareable-resume-milestone5-by-huzaifa.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <p className="text-blue-500">Click here...</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
