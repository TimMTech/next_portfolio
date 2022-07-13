import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h3 className="uppercase pb-3 text-md text-gray-500">
            Let us build something amazing together.
          </h3>
          <h1 className="pb-4 font-semibold tracking-wide text-gray-700">
            Hi, I am <span className="text-blue-500">Tim</span>
          </h1>
          <h1 className="pb-4 font-semibold tracking-wide text-gray-700">
            A Front/Back-End Web Developer
          </h1>
          <p className="sm:max-w-[75%] m-auto font-semibold text-gray-500 p-5 text-lg ">
            I am a front/back-end web developer currently with one year
            developing experience. Currently, I am focused on building
            server-side applications using Next.js for quick front-end/back-end
            integration.
          </p>
          <div className="flex justify-center items-center gap-5 absolute bottom-0 top-[70%] left-0 right-0 ">
            <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
              <AiFillFacebook size={60} />
            </div>
            <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
              <AiFillInstagram size={60} />
            </div>
            <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
              <AiFillLinkedin size={60} />
            </div>
            <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
              <AiOutlineMail size={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
