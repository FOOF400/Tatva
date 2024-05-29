import React, { useEffect, useRef, useState } from "react";
import "./product.css";

import Features17 from "./features17";
import Features18 from "./features18";
import Features19 from "./features19";
// import Features20 from "./features20";

const ProductInfo: React.FC = () => {
  const productImageRef = useRef<HTMLImageElement>(null);
  const [isBlurred, setIsBlurred] = useState(true);
  const blurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationDelay = 200; // Adjust this value to change the wait time before the animation starts

  useEffect(() => {
    const handleScroll = () => {
      if (productImageRef.current) {
        const rect = productImageRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          // Image is in view
          if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
          blurTimeoutRef.current = setTimeout(
            () => setIsBlurred(false),
            animationDelay
          );
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
          className={`sm:w-1/2 md:w-1/5 lg:w-1/5 transition-filter duration-1000 ${
            isBlurred ? "opacity-100 blur-lg" : "opacity-100 blur-none"
          }`}
          ref={productImageRef}
        />
      </div>

      <div
        className={`flex justify-center transition-filter duration-1000 ${
          isBlurred ? "opacity-100 blur-lg" : "opacity-100 blur-none"
        }`}
      >
        <div className="thq-flex-row">
          <div className="product-pointer-card">
            <svg
              width="20%"
              height="20%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1153 15.3582C16.8446 15.6642 16.5606 15.9665 16.2635 16.2635C11.9678 20.5593 6.58585 22.1422 4.2427 19.7991C2.6363 18.1926 2.8752 15.158 4.56847 12.0242M6.88967 8.72526C7.17138 8.40495 7.46772 8.08875 7.77824 7.77824C12.074 3.48247 17.4559 1.89956 19.7991 4.2427C21.4066 5.85021 21.1662 8.88795 19.4698 12.024M16.2635 7.77824C20.5593 12.074 22.1422 17.4559 19.7991 19.7991C17.4559 22.1422 12.074 20.5593 7.77824 16.2635C3.48247 11.9678 1.89956 6.58585 4.2427 4.2427C6.58585 1.89956 11.9678 3.48247 16.2635 7.77824ZM13.0001 12C13.0001 12.5523 12.5523 13 12.0001 13C11.4478 13 11.0001 12.5523 11.0001 12C11.0001 11.4477 11.4478 11 12.0001 11C12.5523 11 13.0001 11.4477 13.0001 12Z"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2 className="product-pointer-title">Sustainable</h2>
            {/* <p className="product-pointer-body">
              Biodegradable packaging
            </p> */}
          </div>

          <div className="product-pointer-card">
            <svg
              width="20%"
              height="20%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 11.5H14.5L13 14.5L11 8.5L9.5 11.5H8.5M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.75009 14.4724 8.97129 18.311 10.948 20.0749C11.3114 20.3991 11.4931 20.5613 11.7058 20.6251C11.8905 20.6805 12.0958 20.6805 12.2805 20.6251C12.4932 20.5613 12.6749 20.3991 13.0383 20.0749C15.015 18.311 19.2362 14.4724 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2 className="product-pointer-title">Enriching</h2>
            {/* <p className="product-pointer-body">
              Boosts nutrient cycling
            </p> */}
          </div>

          <div className="product-pointer-card">
            <svg
              width="20%"
              height="20%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2 className="product-pointer-title">Affordable</h2>
            {/* <p className="product-pointer-body">
              Reasonably priced
            </p> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
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
        </div>
        <br />
      </div>
    </div>
  );
};

export default ProductInfo;
