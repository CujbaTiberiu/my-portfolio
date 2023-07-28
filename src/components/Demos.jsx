import React from "react";
import COMUNICATE from "../assets/imgs/com.jpg";

const Demos = () => {
  return (
    <div name="demos" className="w-full xs:my-44 sm:my-44 md:my-36">
      <div className="max-w-[1000px] w-3/4 mx-auto p-4 flex flex-col justify-center h-full xs:mt-56 sm:mt-0">
        <div className="pb-8">
          <p className="text-white font-bold text-3xl border-b-4 w-36 border-teal-700 hover:text-4xl hover:w-56 duration-500">
            My Work
          </p>
          <p className="py-6 text-xl text-gray-400">
            Check out some of my work
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2  gap-4">
          <div
            style={{ backgroundImage: `url(${COMUNICATE})` }}
            className="shadow-lg shadow-teal-700 group container rounded-md
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
                <a href="" target="_blank">
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
            style={{ backgroundImage: `url(${COMUNICATE})` }}
            className="shadow-lg shadow-teal-700 group container rounded-md
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
                <a href="" target="_blank">
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
            style={{ backgroundImage: `url(${COMUNICATE})` }}
            className="shadow-lg shadow-teal-700 group container rounded-md
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
                <a href="" target="_blank">
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
            style={{ backgroundImage: `url(${COMUNICATE})` }}
            className="shadow-lg shadow-teal-700 group container rounded-md
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
                <a href="" target="_blank">
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
  );
};

export default Demos;

//   return (
//     <div name="demos" className="w-full md:h-screen text-white">
//       <div className="flex flex-col w-3/4 h-full justify-center mx-auto">
//         <div className="pb-8">
//           <p className="my-4 font-bold text-3xl border-b-4 w-36 border-teal-700 hover:text-4xl hover:w-56 duration-500">
//             My Work
//           </p>
//           <p className="text-xl text-gray-400">Check out some of my work</p>
//         </div>

//         <div
//           style={{
//             backgroundImage: `url(${COMUNICATE})`,
//           }}
//           className="bg-no-repeat bg-cover w-[100%] h-96 grid sm:grid-cols-2 md:grid-cols-4 gap-4 shadow-lg  shadow-teal-700 rounded-md"
//         >
//           <div className="group flex justify-center items-center w-[100%]">
//             <div className="text-teal-700 opacity-0 group-hover:opacity-100">
//               <span className="text-2xl font-bold text-teal-700 tracking-wider text-center">
//                 React Js Application
//               </span>
//               <div className="">
//                 <a href="http://" target="_blank" rel="noopener noreferrer">
//                   <button>Demo</button>
//                 </a>
//                 <a href="http://" target="_blank" rel="noopener noreferrer">
//                   <button>Code</button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Demos;
