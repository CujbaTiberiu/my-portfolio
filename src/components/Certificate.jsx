import React from "react";
import CERTIFICATE from "../assets/imgs/epicode-fullStack-certification.jpg";

const Certificate = () => {
  return (
    <div name="certificate" className="w-full xs:my-44 sm:my-44 md:my-36">
      <div className="max-w-[1000px] w-3/4 mx-auto p-4 flex flex-col justify-center h-full xs:mt-56 sm:mt-0">
        <div className="pb-8">
          <p className="text-white font-bold text-3xl border-b-4 w-40 border-teal-700 hover:text-4xl hover:w-56 duration-500">
            Certificate
          </p>
          <p className="py-4 text-xl text-gray-400">Epicode Full Stack</p>
        </div>
        <img
          className="shadow-lg shadow-teal-700 hover:scale-110 duration-500"
          src={CERTIFICATE}
          alt="certificate img"
        />
      </div>
    </div>
  );
};

export default Certificate;
