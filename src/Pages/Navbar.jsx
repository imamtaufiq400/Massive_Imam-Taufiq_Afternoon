import React, { useState } from "react";
import { BiHome, BiUser } from "react-icons/bi";
import { BsClipboard, BsBriefcase } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-full-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white">
          <Link
            to="About"
            activeClass="active"
            smooth={true}
            spy={true}
            className="rounded-full"
          >
            <div className="w-12 h-12 flex justify-center items-center hover:bg-indigo-600/30 hover:rounded-full active:bg-indigo-500 focus:bg-blue-600">
              <BiHome className="cursor-pointer w-8 h-8 flex" />
            </div>
          </Link>
          <Link
            to="Skils"
            activeClass="active"
            smooth={true}
            spy={true}
            className="rounded-full"
          >
            <div className="w-12 h-12 flex justify-center items-center hover:bg-indigo-600/30 hover:rounded-full active:bg-indigo-500 focus:bg-blue-600">
              <BiUser className="cursor-pointer w-8 h-8 flex items-center justify-self-center" />
            </div>
          </Link>
          <Link
            to="Project"
            activeClass="active"
            smooth={true}
            spy={true}
            className="rounded-full"
          >
            <div className="w-12 h-12 flex justify-center items-center hover:bg-indigo-600/30  hover:rounded-full active:bg-indigo-500 focus:bg-blue-600">
              <BsClipboard className="cursor-pointer w-8 h-8 flex items-center justify-center" />
            </div>
          </Link>
          <Link
            to="tot"
            activeClass="active"
            smooth={true}
            spy={true}
            className="rounded-full"
          >
            <div className="w-12 h-12 flex justify-center items-center hover:bg-indigo-600/30  hover:rounded-full active:bg-indigo-500 focus:bg-blue-600">
              <BsBriefcase className="cursor-pointer w-8 h-8 flex items-center justify-center" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
