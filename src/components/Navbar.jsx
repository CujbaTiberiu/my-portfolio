import React, { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiPagesLine, RiUserVoiceFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 w-full flex justify-between items-center h-20 text-white px-4 shadow-md shadow-teal-700 bg-black">
      <Typed
        className="w-[19%] text-3xl font-bold text-emerald-700 bg-[#000300]"
        strings={["Welcome to", "My Portfolio"]}
        typeSpeed={200}
        backSpeed={50}
        loop
      />
      {/* <h1 className="w-full text-3xl font-bold text-emerald-700">Portfolio</h1> */}
      <ul className="flex hidden lg:flex">
        <Link to="hero" smooth={true} duration={500}>
          <li className="p-4 flex hover:border-b border-b-teal-700 hover:text-teal-700 duration-100">
            {" "}
            <RiUserVoiceFill className="mt-1 mx-1" /> About me
          </li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className="p-4 flex hover:border-b border-b-teal-700 hover:text-teal-700 duration-100">
            {" "}
            <GiSkills className="mt-1 mx-1" /> Skills
          </li>
        </Link>
        <Link to="demos" smooth={true} duration={500}>
          <li className="p-4 flex hover:border-b border-b-teal-700 hover:text-teal-700 duration-100">
            {" "}
            <MdOutlineDeveloperMode className="mt-1 mx-1" /> My Work
          </li>
        </Link>
        <Link to="certificate" smooth={true} duration={500}>
          <li className="p-4 flex hover:border-b border-b-fuchsia-800 hover:text-fuchsia-800 duration-100">
            {" "}
            <RiPagesLine className="mt-1 mx-1" /> Certificate
          </li>
        </Link>
        <Link to="form" smooth={true} duration={500}>
          <li className="p-4 flex hover:border-b border-b-yellow-500 hover:text-yellow-500 duration-100">
            {" "}
            <TiContacts className="mt-1 mx-1" /> Contact
          </li>
        </Link>
        <li className="p-4 hover:border-b border-b-gray-700 hover:text-gray-700 duration-100">
          <a href="https://github.com/CujbaTiberiu" className="flex">
            {" "}
            <AiFillGithub className="mt-1 mx-1" /> GitHub
          </a>
        </li>
        <li className="p-4 hover:border-b border-b-sky-600 hover:text-sky-600 duration-100">
          <a
            href="https://www.linkedin.com/in/tiberiu-stefan-cujba/"
            className="flex"
          >
            <AiFillLinkedin className="mt-1 mx-1" /> Linkedin
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="lg:hidden">
        {!nav ? <ImMenu4 size={30} /> : <ImMenu3 size={30} />}
      </div>
      <div
        className={
          !nav
            ? "fixed right-[-100%]"
            : "fixed right-0 top-0 w-[40%] xs:w-[70%] sm:w-[35%] md:w-[25%] h-[100%] bg-black border-l border-l-teal-700 mt-[82px] ease-in-out duration-500 first-letter:"
        }
      >
        <ul className="mt-4 uppercase">
          <Link to="hero" smooth={true} duration={500}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-b-teal-700 w-36 m-2 flex hover:w-44 duration-200  hover:text-teal-700"
            >
              <RiUserVoiceFill className="mt-1 mx-1" /> About me
            </li>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-b-teal-700 w-36 m-2 flex hover:w-44 duration-200  hover:text-teal-700"
            >
              <GiSkills className="mt-1 mx-1" /> Skills
            </li>
          </Link>
          <Link to="demos" smooth={true} duration={500}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-b-teal-700 w-36 m-2 flex hover:w-44 duration-200  hover:text-teal-700"
            >
              <MdOutlineDeveloperMode className="mt-1 mx-1" /> My Work
            </li>
          </Link>
          <Link to="certificate" smooth={true} duration={500}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-b-teal-700 w-36 m-2 flex hover:w-44 duration-200  hover:text-fuchsia-800"
            >
              <RiPagesLine className="mt-1 mx-1" /> Certificate
            </li>
          </Link>
          <Link to="form" smooth={true} duration={500}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-b-teal-700 w-36 m-2 flex hover:w-44 duration-200  hover:text-yellow-500"
            >
              <TiContacts className="mt-1 mx-1" /> Contact
            </li>
          </Link>
          <a href="https://github.com/CujbaTiberiu">
            <li
              onClick={handleNav}
              className="p-4 border-b border-b-teal-700 w-36 m-2 flex hover:w-44 duration-200 hover:text-gray-700"
            >
              <AiFillGithub className="mt-1 mx-1" /> GitHub
            </li>
          </a>
          <a href="https://www.linkedin.com/in/tiberiu-stefan-cujba/">
            <li
              onClick={handleNav}
              className="p-4 border-b border-b-teal-700 w-36 m-2 flex hover:w-44 duration-200 hover:text-sky-600"
            >
              <AiFillLinkedin className="mt-1 mx-1" /> Linkedin
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
