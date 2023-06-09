import React from "react";

const Beranda = () => {
  return (
    <header className="py-8" id="Beranda">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-black font-bold text-3xl ml-10 flex flex-col gap-1 lg:flex-row lg:text-4xl">
            Imam <span className="text-indigo-600">Taufiq</span>
          </h1>
          <button className="btn btn-sm border-double border-2 border-black py-2 px-4 rounded-2xl hover:bg-sky-300/80">
            Contact Me!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Beranda;
