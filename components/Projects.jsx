import { data } from "../portfolioData/data";
import NextImage from "next/image";
import template from ".//../public/assets/projects/nexttemplate.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2">
      <div className="h-full mx-auto px-2 p-16">
        <p className="uppercase tracking-widest text-gray-700">Projects</p>
        <p className="text-4xl">What I have built...</p>
        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => {
            const {
              projectName,
              type,
              tech: { framework, database, backend, backendFramework, style },
              link,
            } = project;
            return (
              <div
                key={index}
                className="relative grid grid-cols-1 justify-center items-center"
              >
                <NextImage src={template} layout="responsive" quality={100} />
                <div className="hover:opacity-100 absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex flex-col items-center justify-evenly opacity-0 transition-all duration-500">
                  <h1>{projectName}</h1>
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
