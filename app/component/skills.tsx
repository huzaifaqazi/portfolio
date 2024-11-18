import { FaCheck } from "react-icons/fa";

export const Skills = () => {
  return (
    <div className="bg-slate-200" id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              This is My Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
              SKILLS
            </h1>
          </div>

          {/* Skill cards: Use Tailwind's grid system */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* Skill 1 - HTML */}
            <div className="p-4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-gray-100 flex-shrink-0">
                    <FaCheck className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">HTML</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="w-full h-1 bg-blue-500"></div>
                    <p className="text-right font-mono text-blue-500">100%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill 2 - CSS */}
            <div className="p-4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-gray-100 flex-shrink-0">
                    <FaCheck className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">CSS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="w-[80%] h-1 bg-blue-500"></div>
                    <p className="text-right font-mono text-blue-500">80%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill 3 - JavaScript */}
            <div className="p-4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-gray-100 flex-shrink-0">
                    <FaCheck className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">JAVASCRIPT</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="w-[70%] h-1 bg-blue-500"></div>
                    <p className="text-right font-mono text-blue-500">70%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill 4 - TypeScript */}
            <div className="p-4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-gray-100 flex-shrink-0">
                    <FaCheck className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">TYPESCRIPT</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="w-[70%] h-1 bg-blue-500"></div>
                    <p className="text-right font-mono text-blue-500">70%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill 5 - NextJS */}
            <div className="p-4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-gray-100 flex-shrink-0">
                    <FaCheck className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">NEXTJS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="w-[60%] h-1 bg-blue-500"></div>
                    <p className="text-right font-mono text-blue-500">60%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill 6 - Tailwind CSS */}
            <div className="p-4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-gray-100 flex-shrink-0">
                    <FaCheck className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">TAILWIND CSS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="w-[50%] h-1 bg-blue-500"></div>
                    <p className="text-right font-mono text-blue-500">50%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
