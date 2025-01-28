import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
// import ServiceCard from "./layouts/ServiceCard";
import Doctors from "./Components/Doctors";
import Blogs from "./Components/Blog";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <div id="home">
          <Home />

        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="doctors">
          <Doctors />
        </div>
        <div id="blog">
          <Blogs />
        </div>


      </main>

      <Footer />
    </>
  )
}
export default App;