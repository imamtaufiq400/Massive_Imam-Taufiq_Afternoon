import React from "react";
import { easeIn, easeOut, motion } from "framer-motion";
import imamTaufiq from "../assets/imamtaufiq.png";

const Skils = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  const fadeOut = {
    hidden: { opacity: 0, y: [-50] },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex items-center justify-center p-4" id="Skils">
      <div className="container mx-auto my-28">
        <div className="flex flex-col gap-y-2 lg:gap-x-14 lg:flex-row lg:items-right lg:mx-16">
          <div className="justify-center">
            <img src={imamTaufiq} className="w-56 h-96" />
          </div>
          <div className="my-4 max-w-lg text-justify">
            <h1 className="w-full text-3xl font-bold my-3 text-indigo-600 flex">
              About Me
            </h1>
            <h2 className="text-2xl font-semibold text-left flex justify-start">
              I'm a UIUX Designer Enthusiast and New to Front-End Developer
            </h2>
            <p className="mt-1">
              I am a 6th semester student majoring in Financial Management at
              Semarang State University. I am a person who is able to work
              individually or with a good team. I have good communication skills
              orally or in writing, able to be responsible, hardworking,
              disciplined, punctual, highly motivated, and have an interest in
              new things
            </p>
            <button className="btn bg-indigo-600 text-white px-4 py-2 mx-4 my-5 rounded-lg hover:bg-transparent hover:border-double hover:border-2 hover:border-indigo-600 hover:text-black lg:mx-8">
              Connect me In LinkedIn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
