import React from "react";
import Me from "../assets/imgs/me3.jpg";
import Cv from "./Cv";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (seconds) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: seconds,
      },
    }),
  };

  return (
    <div name="hero" className="pt-2 lg:pt-10 xl:h-screen">
      <div className="w-full mt-32 md:mt-20 lg:mt-32 xl:mt-48">
        <div className="text-white h-full">
          <div className="w-full grid lg:grid-cols-2">
            <div className="flex justify-center">
              <div>
                <motion.p
                  variants={fadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  custom={0.1}
                  // viewport={{ once: true }}
                  className="mx-4 text-sky-800"
                >
                  Hi, my name is
                </motion.p>
                <motion.h1
                  variants={fadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  // viewport={{ once: true }}
                  custom={0.2}
                  className="mx-4 text-2xl"
                >
                  Cujba Tiberiu Stefan
                </motion.h1>
                <motion.h2
                  variants={fadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  // viewport={{ once: true }}
                  custom={0.3}
                  className="mx-4 text-2xl text-gray-400"
                >
                  I'm a Full Stack Developer
                </motion.h2>
              </div>
            </div>
          </div>
          <div className="py-4 w-full grid lg:grid-cols-2">
            <div className="flex justify-center">
              <div>
                <div className="mx-4">
                  <motion.p
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={0.5}
                    className="my-4 font-bold text-3xl border-b-4 w-40 border-sky-800  hover:text-4xl hover:w-60 duration-500 "
                  >
                    Backround
                  </motion.p>
                </div>
                <div className="mx-4 my-2 gap-4 hover:text-sky-800">
                  <motion.p
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={0.6}
                  >
                    January 2023 - August 2023
                  </motion.p>
                  <motion.p
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={0.7}
                  >
                    Full Stack Course at{" "}
                    <motion.a
                      variants={fadeInAnimation}
                      initial="initial"
                      whileInView="animate"
                      custom={0.7}
                      className="hover:text-fuchsia-800"
                      href="https://epicode.com/it/?utm_source=adwords&utm_campaign=Brand&utm_adgroup=brandexact&utm_term=epicode&utm_medium=ppc&hsa_acc=1246633295&hsa_cam=11897141170&hsa_grp=115607542236&hsa_ad=639941169967&hsa_src=g&hsa_tgt=kwd-1083842420863&hsa_kw=epicode&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwq4imBhBQEiwA9Nx1Bi8lRPf7RQTdeyeOoQ44guNWS_CWH_Ti-pr_aJdjz6qSvRfYd9xtmhoCpL4QAvD_BwE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Epicode
                    </motion.a>
                  </motion.p>
                </div>
                <div className="mx-4 my-2 gap-4 hover:text-sky-800">
                  <motion.p
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={0.8}
                  >
                    December 2020 - December 2022
                  </motion.p>
                  <motion.p
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={0.9}
                  >
                    Depot Squad Leader
                  </motion.p>
                </div>
                <div className="mx-4 my-2 gap-4 hover:text-sky-800">
                  <motion.p
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={1}
                  >
                    March 2016 - December 2020
                  </motion.p>
                  <motion.p
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={1.1}
                  >
                    Depot Picker
                  </motion.p>
                </div>
                <div className="mx-4 my-2 gap-4 hover:text-sky-800">
                  <motion.p
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={1.2}
                  >
                    January 2011 - July 2016
                  </motion.p>
                  <motion.p
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={1.3}
                  >
                    Economics & Bussines High School
                  </motion.p>
                </div>
                <motion.div
                  variants={fadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  custom={1.4}
                >
                  <Cv />
                </motion.div>
              </div>
            </div>
            <motion.img
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              // viewport={{ once: true }}
              custom={0.4}
              src={Me}
              alt="foto of myself"
              className="xs:w-[80%] sm:w-[60%] md:w-[40%] rounded-3xl mx-auto lg:mt-[-20%] lg:w-[60%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
