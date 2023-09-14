import React, { useRef } from "react";
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
import NEXT from "../assets/imgs/next.png";
import { useScroll, motion, useTransform } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <div name="skills" className="py-2 lg:pt-0 bg-slate-900 xxl:h-screen">
      <div className="w-full my-24 sm:my-16 md:py-12 lg:py-28">
        <motion.div
          ref={ref}
          style={{ scale: scaleProgress, opacity: scrollYProgress }}
          className="mx-auto p-4 flex flex-col justify-center w-3/4 h-full"
        >
          <div className="text-white">
            <p className="font-bold text-3xl border-b-4 w-20 border-sky-800 sm:w-20 hover:text-4xl hover:w-48 duration-500">
              Skills
            </p>
            <p className="text-xl text-gray-400">
              Technologies that I have experience with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img className="w-20 mx-auto pt-4" src={HTML} alt="html logo" />
              <p className="text-white py-2">HTML</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img className="w-20 mx-auto pt-4" src={CSS} alt="css logo" />
              <p className="text-white py-2">CSS</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img className="w-20 mx-auto pt-4" src={JS} alt="js logo" />
              <p className="text-white py-2">JS</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img className="w-20 mx-auto pt-4" src={REACT} alt="react logo" />
              <p className="text-white py-2">REACT</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img className="w-20 mx-auto pt-4" src={NEXT} alt="nextjs logo" />
              <p className="text-white py-2">Next</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto pt-4"
                src={BOOTSTRAP}
                alt="bootstrap logo"
              />
              <p className="text-white pt-5">BOOTSTRAP</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img className="w-20 mx-auto pt-4" src={SASS} alt="sass logo" />
              <p className="text-white py-2">SASS</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto pt-4"
                src={TAILWIND}
                alt="tailwind logo"
              />
              <p className="text-white py-2">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img className="w-20 mx-auto pt-4" src={JAVA} alt="java logo" />
              <p className="text-white pt-2">JAVA</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto pt-4"
                src={SPRING}
                alt="spring logo"
              />
              <p className="text-white pt-2">SPRING</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto pt-4"
                src={HIBERNATE}
                alt="hibernate logo"
              />
              <p className="text-white pt-8">HIBERNATE</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto pt-4"
                src={POSTGRE}
                alt="postgresql logo"
              />
              <p className="text-white py-2">POSTGRESQL</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img className="w-20 mx-auto pt-4" src={GIT} alt="git logo" />
              <p className="text-white py-2">GIT</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto pt-4"
                src={GITHUB}
                alt="github logo"
              />
              <p className="text-white py-2">GITHUB</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img className="w-20 mx-auto pt-4" src={VSC} alt="vsc logo" />
              <p className="text-white py-2">VSCODE</p>
            </div>
            <div className="shadow-md shadow-sky-800 hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto pt-4"
                src={ECLIPSE}
                alt="eclipse logo"
              />
              <p className="text-white py-2">ECLIPSE</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
