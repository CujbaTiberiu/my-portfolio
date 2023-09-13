import { useState } from "react";
import COMUNICATE from "../assets/imgs/com.jpg";
import SPOTIFY from "../assets/imgs/spotify.jpg";
import METEO from "../assets/imgs/meteo.jpg";
import SHOPSTER from "../assets/imgs/Shopster.png";
import SHOPSTERVideo from "../assets/vids/Shopster.mp4";
import { motion } from "framer-motion";

const Demos = () => {
  const [showVideo, setShowVideo] = useState(false);

  const fadeInAnimation = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (seconds) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: seconds,
      },
    }),
  };
  const fadeInAnimationRight = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (seconds) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: seconds,
      },
    }),
  };

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div name="demos" className="pt-1 lg:pt-0 xxl:h-screen">
      <div className="w-full my-24 sm:my-16 md:py-16 lg:py-28">
        <div className="max-w-[1000px] w-3/4 mx-auto p-4 flex flex-col justify-center h-full sm:mt-0">
          <div className="pb-8">
            <motion.p
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={0.1}
              className="text-white font-bold text-3xl border-b-4 w-36 border-sky-800 hover:text-4xl hover:w-56 duration-500"
            >
              My Work
            </motion.p>
            <motion.p
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={0.2}
              className="py-4 text-xl text-gray-400"
            >
              Check out some of my work
            </motion.p>
          </div>

          {/* container for projects */}
          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={0.5}
              style={{ backgroundImage: `url(${COMUNICATE})` }}
              className="shadow-lg shadow-sky-800 group container rounded-md
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  ComuniCate
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a
                    href="https://github.com/CujbaTiberiu/CapstoneProjectReact"
                    target="_blank"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-cyan-700 hover:text-white hover:translate-y-[-0.5rem] ease-in-out duration-500"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href="https://comuni-cate.netlify.app/" target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg hover:bg-cyan-700 hover:text-white hover:translate-y-[-0.5rem] ease-in-out duration-500"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationRight}
              initial="initial"
              whileInView="animate"
              custom={0.5}
              style={{ backgroundImage: `url(${SPOTIFY})` }}
              className="shadow-lg shadow-sky-800 group container rounded-md
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  Spotify clone
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a
                    href="https://github.com/CujbaTiberiu/react-spotify.git"
                    target="_blank"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg hover:bg-cyan-700 hover:text-white hover:translate-y-[-0.5rem] ease-in-out duration-500"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a
                    href="https://my-spotify-clone-epicode.netlify.app/"
                    target="_blank"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg hover:bg-cyan-700 hover:text-white hover:translate-y-[-0.5rem] ease-in-out duration-500"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={0.5}
              style={{ backgroundImage: `url(${METEO})` }}
              className="shadow-lg shadow-sky-800 group container rounded-md
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  EpiMeteo
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a
                    href="https://github.com/CujbaTiberiu/meteo-website.git"
                    target="_blank"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg hover:bg-cyan-700 hover:text-white hover:translate-y-[-0.5rem] ease-in-out duration-500"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href="https://my-meteo-app.netlify.app/" target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg hover:bg-cyan-700 hover:text-white hover:translate-y-[-0.5rem] ease-in-out duration-500"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationRight}
              initial="initial"
              whileInView="animate"
              custom={0.5}
              style={{
                backgroundImage: `url(${SHOPSTER})`,
                position: "relative",
              }}
              className="shadow-lg shadow-sky-800 group container rounded-md
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Video Preview */}
              {showVideo && (
                <video
                  onClick={toggleVideo}
                  autoPlay
                  loop
                  playsInline
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                >
                  <source src={SHOPSTERVideo} type="video/mp4" />{" "}
                </video>
              )}
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  Shopster E-commerce
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a
                    href="https://github.com/CujbaTiberiu/Shopster"
                    target="_blank"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg hover:bg-cyan-700 hover:text-white hover:translate-y-[-0.5rem] ease-in-out duration-500"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <button
                    onClick={toggleVideo}
                    className="text-center rounded-lg px-4 py-3 m-2
                    bg-white text-gray-700 font-bold text-lg hover:bg-cyan-700 hover:text-white hover:translate-y-[-0.5rem] ease-in-out duration-500"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;
