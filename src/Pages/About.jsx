import React from "react";
import Image from "../assets/ImamTaufiq.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { easeIn, easeOut, motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  const fadeOut = {
    hidden: { opacity: 0, y: [-50] },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="flex items-center justify-center my-8 py-20 bg-sky-200"
      id="About"
    >
      <div className="container mx-auto  bg-sky-200">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-12 lg:my-32">
          <div className="flex-1 text-center lg:text-left lg:mx-20">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeIn}
              transition={{ ease: easeIn, duration: 1 }}
              className="text-3xl font-bold leading-[1] lg:text-4xl"
            >
              IMAM TAUFIQ
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              transition={{ ease: easeIn, duration: 1.2 }}
              className="mb-4 text-2xl lg:text-3xl font-semibold uppercase leading-1"
            >
              <span className="text-black mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  2000,
                  "UIUX Designer",
                  2000,
                  "Photographer",
                  2000,
                ]}
                speed={30}
                className="text-indigo-600"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeIn}
              transition={{ ease: easeIn, duration: 1.3 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I am one of the web development mentee at infinite learning. Just
              learned about Front-End Developers and also UIUX Research. Let's
              connect with each other through social media. If you are
              interested in me, please click the contact me button on the right
              corner of the screen
            </motion.p>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              transition={{ ease: easeIn, duration: 1.4 }}
              className="flex gap-x-6 text-2xl max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeOut}
            transition={{ ease: easeOut, duration: 1.5 }}
            className="hidden lg:flex flex-1 max-w-xs lg:max-w-xs"
          >
            <img
              src={Image}
              alt="Foto Profile"
              className="w-56 h-80 rounded-full border-double border-2 border-indigo-600"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
