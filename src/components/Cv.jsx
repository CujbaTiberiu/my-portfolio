import React from "react";
import Pdf from "../assets/imgs/Cv-Cujba-webDev.pdf";
//import { Document, Page } from "react-pdf";

const Cv = () => {
  return (
    <div>
      <a href={Pdf} target="_blank" rel="noopener noreferrer">
        <button className="text-white animate-pulse border-2 border-sky-800 hover:bg-sky-800 hover:translate-y-[-0.5rem] duration-500 px-4 py-3 my-8 mx-4">
          See my CV
        </button>
      </a>
      {/* <Document file={Pdf} className="w-1/2 ">
        <Page pageNumber={1} />
      </Document> */}
    </div>
  );
};
export default Cv;
