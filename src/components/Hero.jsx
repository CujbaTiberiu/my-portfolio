import React from "react";
import Me from "../assets/imgs/me3.jpg";

const Hero = () => {
  return (
    <div name="hero" className="w-full xs:py-44 sm:py-44 md:py-36">
      <div className="text-white h-full">
        <div className="w-full grid lg:grid-cols-2">
          <div className="flex justify-center">
            <div>
              <p className="mx-4 text-teal-700">Hi, my name is</p>
              <h1 className="mx-4 text-2xl">Cujba Tiberiu Stefan</h1>
              <h2 className="mx-4 text-2xl text-gray-400">
                I'm a Full Stack Developer
              </h2>
            </div>
          </div>
        </div>
        <div className="py-4 w-full grid lg:grid-cols-2">
          <div className="flex justify-center">
            <div>
              <div className="mx-4">
                <p className="my-4 font-bold text-3xl border-b-4 w-40 border-teal-700  hover:text-4xl hover:w-60 duration-500 ">
                  Backround
                </p>
              </div>
              <div className="mx-4 my-2 gap-4 hover:text-teal-700">
                <p>Jannuary 2011 - July 2016</p>
                <p>Economics & Bussines High School</p>
              </div>
              <div className="mx-4 my-2 gap-4 hover:text-teal-700">
                <p>March 2016 - December 2020</p>
                <p>Depot Picker</p>
              </div>
              <div className="mx-4 my-2 gap-4 hover:text-teal-700">
                <p>December 2020 - December 2022</p>
                <p>Depot Squad Leader</p>
              </div>
              <div className="mx-4 my-2 gap-4 hover:text-teal-700">
                <p>Jannuary 2023 - August 2023</p>
                <p>
                  Full Stack Course at{" "}
                  <a
                    className="hover:text-fuchsia-800"
                    href="https://epicode.com/it/?utm_source=adwords&utm_campaign=Brand&utm_adgroup=brandexact&utm_term=epicode&utm_medium=ppc&hsa_acc=1246633295&hsa_cam=11897141170&hsa_grp=115607542236&hsa_ad=639941169967&hsa_src=g&hsa_tgt=kwd-1083842420863&hsa_kw=epicode&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwq4imBhBQEiwA9Nx1Bi8lRPf7RQTdeyeOoQ44guNWS_CWH_Ti-pr_aJdjz6qSvRfYd9xtmhoCpL4QAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Epicode
                  </a>
                </p>
              </div>
            </div>
          </div>
          <img
            src={Me}
            alt="foto of myself"
            className="xs:w-[80%] sm:w-[60%] md:w-[40%] rounded-3xl mx-auto lg:mt-[-20%] lg:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
