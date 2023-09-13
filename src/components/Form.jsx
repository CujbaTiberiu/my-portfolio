import React from "react";
import { motion } from "framer-motion";

const Form = () => {
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

  const fadeInAnimationUp = {
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
    <div name="form" className="pt-12 lg:pt-0 xl:h-screen">
      <div className="w-full my-18 sm:py-8 md:py-6 lg:py-28 flex justify-center items-center p-4">
        <form
          method="POST"
          action="https://getform.io/f/c37b66e7-3ea0-4d89-b54c-d206b9ed8b5c"
          className="flex flex-col max-w-[600px] w-full"
        >
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            custom={0.2}
            className="pb-8"
          >
            <p className="my-4 text-white font-bold text-3xl border-b-4 w-44 border-sky-800 sm:w-32 hover:text-4xl hover:w-48 duration-500">
              Contact
            </p>
            <p className="text-xl text-gray-400">Submit the form below</p>
          </motion.div>
          <motion.input
            variants={fadeInAnimationRight}
            initial="initial"
            whileInView="animate"
            custom={0.3}
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <motion.input
            variants={fadeInAnimationRight}
            initial="initial"
            whileInView="animate"
            custom={0.4}
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <motion.textarea
            variants={fadeInAnimationRight}
            initial="initial"
            whileInView="animate"
            custom={0.5}
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></motion.textarea>
          <motion.button
            variants={fadeInAnimationUp}
            initial="initial"
            whileInView="animate"
            custom={0.6}
            className="text-white animate-bounce border-2 border-sky-800 hover:bg-sky-800 hover:translate-y-[-0.5rem] duration-500 px-4 py-3 my-8 mx-auto flex items-center"
          >
            Write Me
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Form;
