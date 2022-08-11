import NextImage from "next/image";
import contactImage from ".//../public/assets/contact/contactImage.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { handleEmailjs } from "../emailjs/emailjsConfig";

const Contact = () => {
  const [contactValues, setContactValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "contacts"), contactValues)
      .then(
        setContactValues({
          fullName: "hi",
          phone: "",
          email: "",
          message: "",
        })
      )
      .then(() => handleEmailjs(contactValues))
      .then(alert("Message sent!"))
      .catch(() => alert("Message Failed"));
  };

  return (
    <div id="contact" className="w-full p-2">
      <div className="h-full mx-auto px-2 p-16">
        <p className="uppercase tracking-widest text-blue-500 font-black text-2xl">
          Contact
        </p>
        <p className="text-4xl pb-2 text-gray-700">Get In Touch</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <NextImage
            src={contactImage}
            className="rounded-t-none md:rounded-xl md:rounded-r-none"
            objectFit="cover"
          />

          <form
            onSubmit={handleContactSubmit}
            className="grid grid-cols-1 gap-3 shadow-xl shadow-gray-400 rounded-b-xl md:rounded-xl md:rounded-l-none md:shadow-none p-6 text-2xl bg-white "
          >
            <div className="flex justify-center items-center gap-10 ">
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
            </div>
            <div className="border-b-2 text-center text-sm p-3">OR</div>
            <div className="flex items-center gap-2">
              <div className="w-full">
                <p className="text-gray-600">Name</p>
                <input
                  name="fullName"
                  type="text"
                  className="w-full border-2"
                  value={contactValues.fullName}
                  onChange={(e) => handleContactChange(e)}
                  required
                />
              </div>
              <div className="w-full">
                <p className="text-gray-600">Phone</p>
                <input
                  name="phone"
                  type="text"
                  className="w-full border-2"
                  value={contactValues.phone}
                  onChange={(e) => handleContactChange(e)}
                  required
                />
              </div>
            </div>

            <div>
              <p className="text-gray-600">Email</p>
              <input
                name="email"
                type="email"
                className="w-full border-2"
                value={contactValues.email}
                onChange={(e) => handleContactChange(e)}
                required
              />
            </div>
            <div>
              <p className="text-gray-600">Message</p>
              <textarea
                name="message"
                cols="30"
                rows="5"
                className="w-full border-2"
                value={contactValues.message}
                onChange={(e) => handleContactChange(e)}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className=" bg-blue-500 w-full py-2 text-white font-bold rounded-md"
              >
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
