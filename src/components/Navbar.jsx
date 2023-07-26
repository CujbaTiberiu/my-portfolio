import React, { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import Typed from "react-typed";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 text-white px-4">
      <Typed
        className="w-full text-3xl font-bold text-emerald-700 bg-[#000300]"
        strings={["Welcome to", "My Portfolio"]}
        typeSpeed={200}
        backSpeed={50}
        loop
      />
      {/* <h1 className="w-full text-3xl font-bold text-emerald-700">Portfolio</h1> */}
      <ul className="flex hidden md:flex">
        <li className="p-4 flex hover:mb-2 hover:text-yellow-500 duration-100">
          {" "}
          <RiPagesLine className="mt-1 mx-1" /> Resume
        </li>
        <li className="p-4 hover:mb-2 hover:text-emerald-700 duration-100">
          <a href="https://github.com/CujbaTiberiu" className="flex">
            {" "}
            <AiFillGithub className="mt-1 mx-1" /> GitHub
          </a>
        </li>
        <li className="p-4 hover:mb-2 hover:text-sky-600 duration-100">
          <a
            href="https://www.linkedin.com/in/tiberiu-stefan-cujba/"
            className="flex"
          >
            <AiFillLinkedin className="mt-1 mx-1" /> Linkedin
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {!nav ? <ImMenu4 size={30} /> : <ImMenu3 size={30} />}
      </div>
      <div
        className={
          !nav
            ? "fixed right-[-100%]"
            : "fixed right-0 top-0 w-[35%] h-[60%] border-l border-l-teal-700 mt-24 ease-in-out duration-500"
        }
      >
        <ul className="mt-4 uppercase">
          <li className="p-4 border-b border-b-teal-700 w-32 m-2 flex hover:w-40 duration-200  hover:text-yellow-500">
            <RiPagesLine className="mt-1 mx-1" /> Resume
          </li>
          <a href="https://github.com/CujbaTiberiu">
            <li className="p-4 border-b border-b-teal-700 w-32 m-2 flex hover:w-40 duration-200 hover:text-emerald-700">
              <AiFillGithub className="mt-1 mx-1" /> GitHub
            </li>
          </a>
          <a href="https://www.linkedin.com/in/tiberiu-stefan-cujba/">
            <li className="p-4 border-b border-b-teal-700 w-32 m-2 flex hover:w-40 duration-200 hover:text-sky-600">
              <AiFillLinkedin className="mt-1 mx-1" /> Linkedin
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
