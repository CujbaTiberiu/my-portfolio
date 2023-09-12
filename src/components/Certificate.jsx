import React from "react";
import CERTIFICATE from "../assets/imgs/epicode-fullStack-certification.jpg";

const Certificate = () => {
  return (
    <div name="certificate" className="lg:py-10 bg-slate-900 xxl:h-screen">
      <div className="w-full my-20 xs:h-screen sm:my-10 md:py-36 lg:py-28">
        <div className="max-w-[1000px] w-3/4 mx-auto p-4 flex flex-col justify-center h-full xs:mt-56 sm:mt-0">
          <div className="pb-8">
            <p className="text-white font-bold text-3xl border-b-4 w-40 border-sky-800 hover:text-4xl hover:w-56 duration-500">
              Certificate
            </p>
            <p className="py-4 text-xl text-gray-400">Epicode Full Stack</p>
          </div>
          <img
            className="shadow-lg shadow-sky-800 hover:scale-110 duration-500"
            src={CERTIFICATE}
            alt="certificate img"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
