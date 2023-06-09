import React from "react";

const Kontak = () => {
  return (
    <section className="flex items-center justify-center py-12 pb-96" id="tot">
      <div className="container mx-auto my-28">
        <div>
          <h2 className="text-center text-3xl font-bold text-indigo-600">
            Contact Me If You Need
          </h2>
          <div className="gap-y-5 mt-6">
            <div className="flex flex-row flex-wrap justify-items-start mx-10 lg:mx-80">
              <div className="flex flex-row justify-center items-center gap-4 mb-6 lg:flex-row lg:mx-10 lg:justify-start">
                <a className="flex justify-center items-center  rounded-full bg-indigo-500 p-1 w-14 h-14">
                  <img
                    width="36"
                    height="36"
                    src="https://img.icons8.com/color/48/gmail--v1.png"
                    alt="gmail--v1"
                  />
                </a>
                <p className="text-lg font-medium text-black text-left">
                  imamtaufiq400@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-items-start mx-10 lg:mx-80 ">
              <div className="flex flex-row justify-center items-center gap-4 mb-6 lg:flex-row lg:mx-10 lg:justify-start">
                <a className="flex justify-center items-center  rounded-full bg-indigo-500 p-1 w-14 h-14">
                  <img
                    width="36"
                    height="36"
                    src="https://img.icons8.com/fluency/48/linkedin.png"
                    alt="linkedin"
                  />
                </a>
                <p className="text-lg font-medium text-black text-left">
                  linkedin.com/in/ImamTaufiq400
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
