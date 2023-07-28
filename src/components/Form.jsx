import React from "react";

const Form = () => {
  return (
    <div
      name="form"
      className="w-full xs:my-44 sm:my-44 md:my-36 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/c37b66e7-3ea0-4d89-b54c-d206b9ed8b5c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="my-4 text-white font-bold text-3xl border-b-4 w-44 border-teal-700 sm:w-32 hover:text-4xl hover:w-48 duration-500">
            Contact
          </p>
          <p className="text-xl text-gray-400">Submit the form below</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 border-teal-700 hover:bg-teal-700 hover:translate-y-[-0.5rem] duration-500 px-4 py-3 my-8 mx-auto flex items-center">
          Write Me
        </button>
      </form>
    </div>
  );
};

export default Form;
