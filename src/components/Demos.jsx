import React from "react";
import COMUNICATE from "../assets/imgs/com.jpg";
import SPOTIFY from "../assets/imgs/spotify.jpg";
import METEO from "../assets/imgs/meteo.jpg";

const Demos = () => {
  return (
    <div name="demos" className="pt-1 lg:pt-0 xl:h-screen">
      <div className="w-full my-24 sm:my-16 md:py-16 lg:py-28">
        <div className="max-w-[1000px] w-3/4 mx-auto p-4 flex flex-col justify-center h-full sm:mt-0">
          <div className="pb-8">
            <p className="text-white font-bold text-3xl border-b-4 w-36 border-sky-800 hover:text-4xl hover:w-56 duration-500">
              My Work
            </p>
            <p className="py-4 text-xl text-gray-400">
              Check out some of my work
            </p>
          </div>

          {/* container for projects */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div
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
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href="https://comuni-cate.netlify.app/" target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
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
                       bg-white text-gray-700 font-bold text-lg"
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
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
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
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href="https://my-meteo-app.netlify.app/" target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;
