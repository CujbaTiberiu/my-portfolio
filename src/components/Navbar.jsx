import React, { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 text-white px-4">
      <h1 className="w-full text-3xl font-bold text-emerald-700">Portfolio</h1>
      <ul className="flex hidden md:flex">
        <li className="p-4 flex">
          {" "}
          <RiPagesLine className="mt-1 mx-1" /> Resume
        </li>
        <a href="https://github.com/CujbaTiberiu">
          <li className="p-4 flex">
            {" "}
            <AiFillGithub className="mt-1 mx-1" /> GitHub
          </li>
        </a>
        <a href="https://www.linkedin.com/in/tiberiu-stefan-cujba/">
          <li className="p-4 flex">
            <AiFillLinkedin className="mt-1 mx-1" /> Linkedin
          </li>
        </a>
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {!nav ? <ImMenu4 size={30} /> : <ImMenu3 size={30} />}
      </div>
      <div
        className={
          !nav
            ? "fixed right-0 top-0 w-[35%] h-[60%] border-l border-l-teal-700 mt-24 ease-in-out duration-500"
            : "fixed right-[-100%]"
        }
      >
        <ul className="mt-4 uppercase">
          <li className="p-4 border-b border-b-teal-700 w-32 m-2 flex">
            <RiPagesLine className="mt-1 mx-1" /> Resume
          </li>
          <a href="https://github.com/CujbaTiberiu">
            <li className="p-4 border-b border-b-teal-700 w-32 m-2 flex">
              <AiFillGithub className="mt-1 mx-1" /> GitHub
            </li>
          </a>
          <a href="https://www.linkedin.com/in/tiberiu-stefan-cujba/">
            <li className="p-4 border-b border-b-teal-700 w-32 m-2 flex">
              <AiFillLinkedin className="mt-1 mx-1" /> Linkedin
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
