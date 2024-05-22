import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";

const App: React.FC = () => {
  return (
    <div className=" bg-hover-green">
      <Header />

      <div className="pt-20 bg-hover-green">
        <section id="home" className="relative p-10 pt-20" style={{height: 'calc(100vh / 2)'}}>
          <div className="absolute inset-0">
            <img
              src="/dirtmound.jpeg"
              alt="Home Background"
              className="w-full"
              style={{ height: "calc(100vh / 2)", objectFit: "cover", objectPosition: ""}}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
            {/* Black overlay with 50% opacity */}
          </div>
          <div className="relative flex items-center justify-center h-full text-white text-center">
            <h1 className="text-5xl font-bold">Organically Yours</h1>
          </div>
        </section>
        {/* Padding to push content below fixed navbar */}
        <section id="section1" className="h-screen p-10 pt-20">
          Section 1 Content
        </section>
        <section id="section2" className="h-screen p-10 pt-20">
          Section 2 Content
        </section>
        <section id="section3" className="h-screen p-10 pt-20">
          Section 3 Content
        </section>
        {/* <section id="contact" className="p-10 pt-2 h-auto">
            Contact Us
          </section> */}
      </div>

      <Footer />
    </div>
  );
};

export default App;
