import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";

const App: React.FC = () => {
  return (
    <div className=" bg-light-yellow">
      <Header />

        <div className="pt-20 bg-light-yellow">
          <section id="home" className="h-screen p-10 pt-20">
            Home
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
