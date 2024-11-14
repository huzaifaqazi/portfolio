import Image from "next/image"
import project1 from "../../public/assets/project1.png"
import project2 from "../../public/assets/project2.png"
import project3 from "../../public/assets/project3.png"
export const Project = () => {
  return (
    <div className="bg-slate-100 h-screen" id="project">
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
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full drop-shadow-xl  object-cover object-center"
            src={project1}
          />
          <div className="px-8 py-10 relative  z-10 w-full border-4 cursor-pointer border-gray-300 bg-gray-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Project 1
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Face book clone
            </h1>
            <p className="leading-relaxed">
             This is my first project face book clone is based on nextjs and tailwind css
            </p>
            <a href="https://clone-nextjs-six.vercel.app/" target="_blank">
                <p className="text-blue-500">Click here...</p>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full drop-shadow-xl object-cover object-center"
            src={project2}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Project 2
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Amazone clone
            </h1>
            <p className="leading-relaxed">
             This is clone of Amazone clone using core HTML and CSS
            </p>
            <a href="https://amazon-clone-tawny-kappa.vercel.app/" target="_blank">
                <p className="text-blue-500">Click here...</p>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={project3}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Project 3
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Resume builder
            </h1>
            <p className="leading-relaxed">
              This Resume builder is based on html , css and Typescript.this resume shareable and editable
             </p>
            <a href="https://shareable-resume-milestone5-by-huzaifa.vercel.app/">
                <p className="text-blue-500">Click here...</p>
            </a>
          </div>
        </div>
      </div>
   
    
    </div>
  </div>
</section>

    </div>
  )
}
export default Project
