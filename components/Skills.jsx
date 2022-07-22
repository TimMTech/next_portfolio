import { data } from "../portfolioData/data";
import NextImage from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-4 pt-20">
      <div className="mx-auto flex flex-col justify-center h-full">
        <p className="uppercase tracking-widest text-blue-500 font-black text-2xl">Skills</p>
        <p className="text-4xl pb-2 text-gray-700">What I can do...</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.skills.map((skill, index) => {
            const { tech, imgUrl } = skill;
            return (
              <div
                key={index}
                className="grid grid-cols-2 justify-center items-center shadow-2xl"
              >
                <div className="m-auto p-6">
                  <NextImage
                    src={imgUrl}
                    height="64px"
                    width="64px"
                    quality={100}
                  />
                </div>
                <h2 className="text-2xl">{tech}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
