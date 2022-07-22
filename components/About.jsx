import NextImage from "next/image";
import NextLink from "next/link"
import aboutImage from ".//../public/assets/about/about.png";

const About = () => {
  return (
    <div id='about' className="w-full p-4 lg:h-screen pt-20">
      <div className="flex flex-col justify-center h-full mx-auto">
        <p className="uppercase tracking-widest text-blue-500 font-black text-2xl">
          About
        </p>
        <p className="text-4xl pb-2 text-gray-700">Who I Am...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="font-semibold">
            <p className="text-gray-700 pb-2">
              I am a junior developer trying to break into the software engineering field.  I graduated from Queens College with a bachelors during year 2016.  Right after college, my uncle connected me with a friend of his who owns a start-up, LED manufacturing company.  During the two years I was employed at VONN Lighting, I had the responsibility of website admin, lead customer service specialist, inventory/warehouse and return lead and more of a senior role as web admin once the company relocated from NY to Florida.  Since this was a start-up, I had to wear many hats during my time employed at VONN.  Once I moved back to NY in 2018-19, I obtained a Real Estate Agent Liscense and conducted rental/sales agreements between clients.  I am currently a Real Estate Agent at NestSeekers International. 
            </p>
            <p className="text-gray-700 pb-2">
              About one year ago, I decided to pick up programming as new career path to pursue.  I picked up Python as my first language with advice from my uncle, who is also a software engineer and has been for about 15 years.  I have created small scale projects like small mini-games and a banking replica system via Tkinter GUI library.  However, I wanted to see my work displayed and viewed by people everywhere, so I decided to pick up Full-Stack web development.  I instantly fell in love with it.  Picking up Javascript was much easier than learning Python for the fist time.  Maybe it is because I understood the basics of a programming language and how it is a tool to use to build an idea from the ground-up which transitioned from learning Python to Javascript.  Now for the past 8 months, I have build and building full stack applications with front-end frameworks with integrated back-end technologies.  
            </p>
            <p className="pt-4 text-violet-400 underline">
              <NextLink href={"/#projects"}>
                Check out the projects I have built!
              </NextLink>
            </p>
          </div>

          <NextImage
            src={aboutImage}
            className="rounded-xl"
            
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
