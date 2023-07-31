import React from "react";
import CSS from "../assets/imgs/css.png";
import JS from "../assets/imgs/javascript.png";
import BOOTSTRAP from "../assets/imgs/Bootstrap.png";
import SASS from "../assets/imgs/sass.png";
import TAILWIND from "../assets/imgs/tailwind.png";
import HTML from "../assets/imgs/HTML.png";
import REACT from "../assets/imgs/react.png";
import JAVA from "../assets/imgs/java.png";
import SPRING from "../assets/imgs/springboot.png";
import HIBERNATE from "../assets/imgs/Hibernate.png";
import POSTGRE from "../assets/imgs/Postgresql.png";
import GIT from "../assets/imgs/Git.png";
import GITHUB from "../assets/imgs/github.png";
import VSC from "../assets/imgs/vsc.png";
import ECLIPSE from "../assets/imgs/eclipse.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full xs:py-44 sm:py-44 md:py-36">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-3/4 h-full">
        <div className="text-white">
          <p className="font-bold text-3xl border-b-4 w-20 border-teal-700 sm:w-20 hover:text-4xl hover:w-48 duration-500">
            Skills
          </p>
          <p className="text-xl text-gray-400">
            Technologies that I have experience with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={HTML} alt="html logo" />
            <p className="text-white py-2">HTML</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={CSS} alt="html logo" />
            <p className="text-white py-2">CSS</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={JS} alt="html logo" />
            <p className="text-white py-2">JS</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={REACT} alt="html logo" />
            <p className="text-white py-2">REACT</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={BOOTSTRAP}
              alt="html logo"
            />
            <p className="text-white py-2">BOOTSTRAP</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={SASS} alt="html logo" />
            <p className="text-white py-2">SASS</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={TAILWIND} alt="html logo" />
            <p className="text-white py-2">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={JAVA} alt="html logo" />
            <p className="text-white mt-10">JAVA</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={SPRING} alt="html logo" />
            <p className="text-white mt-10">SPRING</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={HIBERNATE}
              alt="html logo"
            />
            <p className="text-white mt-8">HIBERNATE</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={POSTGRE} alt="html logo" />
            <p className="text-white py-2">POSTGRESQL</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={GIT} alt="html logo" />
            <p className="text-white py-2">GIT</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={GITHUB} alt="html logo" />
            <p className="text-white py-2">GITHUB</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={VSC} alt="html logo" />
            <p className="text-white py-2">VSCODE</p>
          </div>
          <div className="shadow-md shadow-teal-700 hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={ECLIPSE} alt="html logo" />
            <p className="text-white py-2">ECLIPSE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
