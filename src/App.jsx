import React from "react";
import Nav from "./Pages/Navbar";
import Beranda from "./Pages/Beranda";
import About from "./Pages/About";
import Skils from "./Pages/Skils";
import Project from "./Pages/Project";
import Kontak from "./Pages/Kontak";

const App = () => {
  return (
    <div>
      <Nav className="m-96" />
      <Beranda className="m-96" />
      <About className="m-96" />
      <Skils className="m-96" />
      <Project className="m-96" />
      <Kontak className="m-96" />
    </div>
  );
};

export default App;
