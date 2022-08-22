import { data } from "../portfolioData/data";
import NextImage from "next/image";
import NextLink from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2">
      <div className="h-full mx-auto px-2 p-16">
        <p className="uppercase tracking-widest  text-blue-500 font-black text-2xl">
          Projects
        </p>
        <p className="text-4xl pb-2 text-gray-700">What I have built...</p>
        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => {
            const {
              projectName,
              projectImage,
              tech: { framework },
              inDevelopment
            } = project;
            return (
              <div
                key={index}
                className="relative flex justify-center items-center"
              >
                <NextImage
                  className="rounded-xl"
                  src={projectImage}
                  quality={100}
                  
                />
                <div className="hover:opacity-100 absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#5651e5]/90 to-[#709dff]/90 text-white flex items-center justify-around opacity-0 transition-all duration-500 rounded-xl">
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-3xl">{projectName}</h3>
                    <p className="text-xl">{framework}</p>
                    <button className="hover:scale-110 transition-all duration-500 text-center tracking-wide px-3 py-2 mt-3 rounded-lg bg-white text-black font-bold text-lg cursor-pointer">
                      <NextLink href={`/project/${projectName}`}>More Info</NextLink>
                    </button>
                    <p className="text-xl">{inDevelopment ? "In Development" : null}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
