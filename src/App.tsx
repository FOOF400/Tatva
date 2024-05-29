import React from "react";
import Header from "./Components/header";
import AboutUs from "./Components/about";
import Footer from "./Components/footer";
import Tagline from "./Components/tagline";
import Contact from "./Components/contact";
import FAQ from "./Components/faq";
import ProductInfo from "./Components/product/product";
// import Testimonials from "./Components/testimonials";
import Testimonials from "./Components/test";
import index from "./index.json";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className=" bg-hover-green">
      <Header />

      <div className="pt-20 bg-hover-green">
        <section
          id="home"
          className="relative p-10 pt-20"
          style={{ height: "calc(100vh / 2)" }}
        >
          <Tagline />
        </section>

        {/* Padding to push content below fixed navbar */}
        <section id="aboutus" className="h-fit p-10 pt-20">
          <AboutUs/>
        </section>

        <section id="section3" className="h-fit p-10 pt-20">
          <ProductInfo />
        </section>

        <section id="section2" className="h-fit p-10 pt-20">
          <Testimonials />
        </section>

        {/* <section id="contact" className="p-10 pt-2 h-auto">
            Contact Us
          </section> */}

        <section id="faq" className="h-fit p-10 pt-20">
        <div className="home-faq9">
          <FAQ />
        </div>
        </section>

        <section id="contact" className="h-fit p-10 pt-20">
        <div className="home-contact10" id="contact">
          <Contact />
        </div>
        </section>
      </div>
    </div>
  );
};

export default App;
