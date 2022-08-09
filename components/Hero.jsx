import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import NextLink from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="w-full h-full mx-auto flex justify-center items-center">
        <div>
          <h3 className="uppercase pb-3 text-md text-gray-500">
            Let us build something amazing together.
          </h3>
          <h1 className="pb-4 font-black tracking-wide text-gray-700">
            Hi, I am <span className="text-blue-500">Tim</span>
          </h1>
          <h1 className="pb-4 font-black tracking-wide text-gray-700">
            A Front/Back-End Web Developer
          </h1>
          <p className="sm:max-w-[75%] m-auto font-semibold text-gray-500 p-5 text-lg ">
            I am a front/back-end web developer currently with one year
            developing experience. Currently, I am focused on building
            server-side applications using Next.js for quick front-end/back-end
            integration.
          </p>
          <div className="flex justify-center items-center gap-3 ">
            <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
              <a
                href="https://www.facebook.com/tim.mukhamedov"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook size={60} />
              </a>
            </div>
            <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
              <a
                href="https://www.instagram.com/forevertech93/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram size={60} />
              </a>
            </div>
            <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/timur-mukhamedov-50b3b6221/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin size={60} />
              </a>
            </div>
            <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
              <a href={"/#contact"}>
                <AiOutlineMail size={60} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
