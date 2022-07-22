import NextLink from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const menu = {
  visible: { x: "0" },
  hidden: { x: "-100%" },
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(false);

  const handleNav = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const changeNav = () => {
      if (
        document.body.scrollTop >= 70 ||
        document.documentElement.scrollTop >= 70
      ) {
        setBackgroundColor(true);
      } else {
        setBackgroundColor(false);
      }
    };
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, [backgroundColor]);

  return (
    <nav
      className={
        backgroundColor
          ? "fixed top-0 p-5 w-screen bg-transparent transition-colors duration-500 shadow-xl z-[100]"
          : "fixed top-0 p-5 w-screen bg-white transition-colors duration-500 shadow-xl z-[100]"
      }
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-blue-500 italic font-black tracking-widest">
          <NextLink href={"/"}>TM Portfolio</NextLink>
        </h1>
        <ul className="gap-5 items-center hidden md:flex">
          <li className="hover:scale-110 transition-all duration-500">
            <NextLink href={"/"}>Home</NextLink>
          </li>
          <li className="hover:scale-110 transition-all duration-500">
            <NextLink href={"/#about"}>About</NextLink>
          </li>
          <li className="hover:scale-110 transition-all duration-500">
            <NextLink href={"/#skills"}>Skills</NextLink>
          </li>
          <li className="hover:scale-110 transition-all duration-500">
            <NextLink href={"/#projects"}>Projects</NextLink>
          </li>

          <li className="hover:scale-110 transition-all duration-500">
            <NextLink href={"/#contact"}>Contact</NextLink>
          </li>
        </ul>
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="md:hidden fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75"
            />
            <motion.div
              variants={menu}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white"
            >
              <div className="flex justify-between items-center p-5">
                <h1 className="text-4xl text-blue-500 italic font-black tracking-widest">
                  TM Portfolio
                </h1>
                <div
                  className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer"
                  onClick={handleClose}
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="border-b-2 w-[75%] m-4 py-4 ">
                <p className="text-lg text-blue-500 font-bold">
                  Lets build something amazing together!
                </p>
              </div>
              <ul className="flex flex-col items-start p-4 text-[2rem] gap-2 ">
                <li className="hover:scale-110 transition-all duration-500">
                  <NextLink href={"/"}>Home</NextLink>
                </li>
                <li className="hover:scale-110 transition-all duration-500">
                  <NextLink href={"/#about"}>About</NextLink>
                </li>
                <li className="hover:scale-110 transition-all duration-500">
                  <NextLink href={"/#skills"}>Skills</NextLink>
                </li>

                <li className="hover:scale-110 transition-all duration-500">
                  <NextLink href={"/#projects"}>Projects</NextLink>
                </li>

                <li className="hover:scale-110 transition-all duration-500">
                  <NextLink href={"/#contact"}>Contact</NextLink>
                </li>
              </ul>
              <div className="flex justify-center items-center gap-3 absolute bottom-0 top-[70%] left-0 right-0 ">
                <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
                  <a
                    href="https://www.facebook.com/tim.mukhamedov"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillFacebook size={35} />
                  </a>
                </div>
                <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
                  <a
                    href="https://www.instagram.com/forevertech93/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram size={35} />
                  </a>
                </div>
                <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/timur-mukhamedov-50b3b6221/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin size={35} />
                  </a>
                </div>
                <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
                  <NextLink href={"/#contact"}>
                    <AiOutlineMail size={35} />
                  </NextLink>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
