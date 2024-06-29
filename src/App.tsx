import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import AboutUs from "./Components/about";
import Tagline from "./Components/tagline";
import Contact from "./Components/contact";
import FAQ from "./Components/faq";
import ProductInfo from "./Components/product/product";
import Testimonials from "./Components/test";
import Vision from "./Components/vision";
import ReviewPage from "./Components/review";
import "./index.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-slate-100">
        <Header />
        <div className="pt-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section
                    id="home"
                    className="relative p-10 pt-20"
                    style={{ height: "calc(100vh / 2)" }}
                  >
                    <Tagline />
                  </section>
                  <section id="aboutus" className="h-fit p-10 pt-20 pb-20">
                    <AboutUs />
                    <Vision />
                  </section>
                  <section
                    id="product"
                    className="h-fit sm:px-5 md:px-10 lg:px-10 px-5 py-5 md:py-10 lg:py-10"
                  >
                    <ProductInfo />
                  </section>
                  <section id="reviews" className="h-fit">
                    <Testimonials />
                  </section>
                  <section id="faq" className="h-fit py-10">
                    <div className="home-faq9">
                      <FAQ />
                    </div>
                  </section>
                  <section id="contact" className="h-fit bg-hover-green">
                    <div className="home-contact10" id="contact">
                      <Contact />
                    </div>
                  </section>
                </>
              }
            />
            <Route path="/review" element={<ReviewPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
