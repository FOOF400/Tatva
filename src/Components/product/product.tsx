import React, { useEffect, useRef, useState } from "react";
import "./product.css";

import Features17 from "./features17";
import Features18 from "./features18";
import Features19 from "./features19";
// import Features20 from "./features20";


const ProductInfo: React.FC = () => {
  const productImageRef = useRef<HTMLImageElement>(null);
  const [isBlurred, setIsBlurred] = useState(true);
  const blurTimeoutRef = useRef<ReturnType<typeof setTimeout>| null>(null);
  const animationDelay = 200; // Adjust this value to change the wait time before the animation starts

  useEffect(() => {
    const handleScroll = () => {
      if (productImageRef.current) {
        const rect = productImageRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          // Image is in view
          if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
          blurTimeoutRef.current = setTimeout(() => setIsBlurred(false), animationDelay);
        } else {
          // Image is out of view
          if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
          setIsBlurred(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // Adjust this value to the height of your navbar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-hover-green rounded-xl w-full">
      <div className="w-full font-coolvetica pt-12 pb-5 lg:text-7xl md:text-7xl sm:text-5xl text-5xl text-center">
        WHAT WE DO
      </div>
      <span className="w-full text-center block thq-body-small px-4 text-gray-500">
        From local mandis to your garden, here's how we make it happen.
      </span>

      <div className="home-features5">
        <Features17 />
      </div>
      <div className="home-features6">
        <Features18 />
      </div>
      <div className="home-features5">
        <Features19 />
      </div>
      {/* <div className="home-features6">
        <Features20 />
      </div> */}
      <br />
      <h2 className="thq-heading-2 w-full flex justify-center text-center items-center font-bavro text-5xl">
        And it boils down to this
      </h2>

      <div className="flex justify-center items-center">
        <img
          src="/product_img.png"
          alt="product packaging"
          className={`sm:w-1/2 md:w-1/5 lg:w-1/5 transition-filter duration-1000 ${isBlurred ? "opacity-100 blur-lg" : "opacity-100 blur-none"}`}
          ref={productImageRef}
        />
      </div>

      <div className="thq-flex-column">
        <div className="faq1-content1">
          <h2 className="thq-heading-2">Sound Interesting?</h2>
          <p className="faq1-text3 w-full flex justify-center text-center items-center px-5">
            Contact us directly using the information below to get our product!
          </p>
        </div>
        <div className="faq1-container">
          <button
            onClick={() => scrollTo("contact")}
            className="thq-button-outline faq1-button"
          >
            <span className="thq-body-small">Contact</span>
          </button>
        </div>{" "}
        <br />
      </div>
    </div>
  );
};

export default ProductInfo;
