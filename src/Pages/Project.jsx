import React from "react";
import { FaCameraRetro, FaReact, FaFigma, FaPeopleCarry } from "react-icons/fa";

const Project = () => {
  return (
    <section
      className="flex justify-center items-center my-20 bg-sky-200"
      id="Project"
    >
      <div className="flex flex-col gap-y-2 my-20 lg:gap-x-14 lg:flex-col lg:items-right lg:mx-16">
        <div className="my-4 max-w-lg text-center justify-center items-center">
          <h1 className="w-full text-3xl font-bold my-3 justify-center lg:justify-start text-indigo-600 flex">
            Skills and Experience
          </h1>
        </div>
        <div className="lg:flex lg:flex-row gap-x-8">
          <div>
            <h2 className="text-3xl font-bold mx-6 mb-8">Skills</h2>
            <div className="flex flex-col gap-x-6 text-4xl max-w-max mx-auto lg:mx-0 ">
              <div className="flex flex-col justify-center items-center gap-2 mb-6 lg:flex-row lg:mx-10 lg:justify-start">
                <a className="flex justify-center items-center  rounded-full bg-indigo-500 p-1 w-14 h-14">
                  <FaFigma />
                </a>
                <p className="text-xl font-medium text-black text-left">
                  Design UIUX
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 mb-6 lg:flex-row lg:mx-10 lg:justify-start">
                <a className="flex rounded-full bg-indigo-500 p-1 w-14 h-14 justify-center items-center ">
                  <FaReact />
                </a>
                <p className="text-xl font-medium text-black text-left">
                  Front-End Developer
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 mb-6 lg:flex-row lg:mx-10 lg:justify-start">
                <a className="flex rounded-full bg-indigo-500 p-1 w-14 h-14 justify-center items-center ">
                  <FaCameraRetro />
                </a>
                <p className="text-xl font-medium text-black text-left">
                  Photography
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 mb-6 lg:flex-row lg:mx-10 lg:justify-start">
                <a className="flex rounded-full bg-indigo-500 p-1 w-14 h-14 justify-center items-center ">
                  <FaPeopleCarry />
                </a>
                <p className="text-xl font-medium text-black text-left">
                  Team Work
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-xl">
            <h2 className="text-3xl font-bold mx-6 mb-8">Experience</h2>
            <div className="flex flex-row gap-10 mx-6 py-8 w-full border-y-2 border-indigo-500">
              <p className="text-lg font-medium">Sept 2020 - Present</p>
              <div className="flex-1">
                <p className="text-xl font-semibold">
                  Universitas Negeri Semarang
                </p>
                <span className="text-sm font-light">
                  Undergraduate Management Students
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-10 mx-6 py-8 w-full border-b-2 border-indigo-500">
              <p className="text-lg font-medium">Feb 2023 - Jun 2023</p>
              <div className="flex-1">
                <p className="text-xl font-semibold">
                  Web Development Mentee - Infinite Learning
                </p>
                <span className="text-sm font-light">
                  Independent Study Kampus Merdeka Batch 4
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-10 mx-6 py-8 w-full border-b-2 border-indigo-500">
              <p className="text-lg font-medium">Feb 2021 - Jan 2023</p>
              <div className="flex-1">
                <p className="text-xl font-semibold">
                  KSPM UNSSAF - Kelompok Studi Pasar Modal
                </p>
                <span className="text-sm font-light">
                  HR Department Professional Staff and Promoted to HR Department
                  Manager
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-10 mx-6 py-8 w-full border-b-2 border-indigo-500">
              <p className="text-lg font-medium">Feb 2021 - Jan 2022</p>
              <div className="flex-1">
                <p className="text-xl font-semibold">
                  MARCH UNNES - Marketing Club On Teaching
                </p>
                <span className="text-sm font-light">
                  Staff Professional Event Organizer Division
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-10 mx-6 py-8 w-full border-b-2 border-indigo-500">
              <p className="text-lg font-medium">Feb 2023 - Jun 2023</p>
              <div className="flex-1">
                <p className="text-xl font-semibold">
                  UKM CLIC UNNES - UKM Photography
                </p>
                <span className="text-sm font-light text-justify">
                  Permanent member of UKM and promoted to deputy chairman for
                  the 2022-2023 period
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
