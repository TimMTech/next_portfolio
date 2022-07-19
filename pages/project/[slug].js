import { data } from "../../portfolioData/data";
import NextImage from "next/image";
import {FaCog} from "react-icons/fa"


const project = ({ projects }) => {
  return (
    <div className="w-full">
      {projects.map((project, index) => {
        const {
          projectName,
          type,
          projectImage,
          tech: { framework, database, style, backend, backendFramework },
        } = project;
        return (
          <div key={index} className="w-screen relative h-[50vh]">
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10" />
            <div className=" h-[50vh]">
              <NextImage
                src={projectImage}
                quality={100}
                objectFit="cover"
                layout="fill"
              />
            </div>

            <div className="absolute bottom-0 left-0 text-white z-10 p-6">
              <h2>{projectName}</h2>
              <h3>
                {framework} / {database} / {style}
              </h3>
            </div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 py-8">
              <div className="p-2 col-span-4">
                <h2 className="text-blue-500 font-bold">Overview</h2>
                <p className="py-4 font-semibold">
                  Lorem ipsum dolor sit amet. Quo delectus explicabo et mollitia
                  dolorem qui sunt beatae non autem quia id vero deserunt 33
                  ullam necessitatibus et minus labore! Eos necessitatibus nemo
                  ut reprehenderit iure sed dicta fugiat ut nemo impedit quo
                  soluta facilis vel nobis quidem. Non aperiam dolores ut nulla
                  natus ut vitae soluta aut nesciunt aperiam ea voluptatibus
                  modi aut impedit vitae sit similique rerum? Ut molestias omnis
                  33 itaque accusamus quo expedita consequatur sit pariatur
                  sunt. Est illum quod est modi deserunt sit omnis laborum 33
                  officia laboriosam ea impedit libero.
                </p>

                <button className="bg-blue-500 px-8 m-3 py-2 rounded-md text-white text-lg">
                  Code
                </button>
                <button className="bg-blue-500 px-8 m-3 py-2 rounded-md text-white text-lg">
                  Live
                </button>
              </div>
              <div className="col-span-4  md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 m-1">
                <div className="p-2">
                  <p className="text-center text-xl pb-2 font-bold ">
                    Technologies
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-1">
                    <div className="text-gray-600 py-2 flex items-center gap-2">
                      <FaCog />
                      {framework}
                    </div>
                    <div className="text-gray-600 py-2 flex items-center gap-2">
                      <FaCog />
                      {database}
                    </div>
                    <div className="text-gray-600 py-2 flex items-center gap-2">
                      <FaCog />
                      {style}
                    </div>
                    <div className="text-gray-600 py-2 flex items-center gap-2">
                      <FaCog />
                      {backend}
                    </div>
                    <div className="text-gray-600 py-2 flex items-center gap-2">
                      <FaCog />
                      {backendFramework}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default project;

export const getStaticPaths = async () => {
  const paths = data.projects.map((project) => {
    return {
      params: { slug: project.projectName },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const projectName = context.params.slug;
  const filteredProject = data.projects.filter(
    (project) => project.projectName === projectName
  );
  return {
    props: { projects: filteredProject },
  };
};
