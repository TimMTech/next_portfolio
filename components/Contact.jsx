import NextImage from "next/image";
import contactImage from ".//../public/assets/contact/contactImage.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full p-2 lg:h-screen"
    >
      <div className="h-full mx-auto px-2 p-16">
        <p className="uppercase tracking-widest text-blue-500 font-black text-2xl">
          Contact
        </p>
        <p className="text-4xl pb-2 text-grey-700">Get In Touch</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <NextImage
            src={contactImage}
            className="rounded-t-none md:rounded-xl md:rounded-r-none"
            objectFit="cover"
          />

          <form className="grid grid-cols-1 gap-3 shadow-xl shadow-gray-400 rounded-b-xl md:rounded-xl md:rounded-l-none md:shadow-none p-6 text-2xl bg-white ">
            <div className="flex justify-center items-center gap-10 ">
              <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
                <AiFillFacebook size={35} />
              </div>
              <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
                <AiFillInstagram size={35} />
              </div>
              <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
                <AiFillLinkedin size={35} />
              </div>
            </div>
            <div className="border-b-2 text-center text-sm p-3">OR</div>
            <div className="flex items-center gap-2">
              <div className="w-full">
                <p className="text-gray-600">Name</p>
                <input type="text" className="w-full border-2" />
              </div>
              <div className="w-full">
                <p className="text-gray-600">Phone</p>
                <input type="text" className="w-full border-2" />
              </div>
            </div>

            <div>
              <p className="text-gray-600">Email</p>
              <input type="email" className="w-full border-2" />
            </div>
            <div>
              <p className="text-gray-600">Message</p>
              <textarea cols="30" rows="5" className="w-full border-2" />
            </div>
            <div>
              <button className=" bg-blue-500 w-full py-2 text-white font-bold rounded-md">
                Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
