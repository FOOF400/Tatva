import React from "react";
import "./product.css";

import Features17 from "./features17";
import Features18 from "./features18";
import Features19 from "./features19";
// import Features20 from "./features20";

const ProductInfo: React.FC = () => {
  
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
    <>
      {/* <div className="product-info-container">
        <div className="product-info-content">
          <div className="product-info-image">
            <img src={imageSrc} alt={name} className=" w-1/4" />
          </div>
          <div className="product-info-details">
            <h1>{name}</h1>
            <p className="product-info-description">{description}</p>
            <hr />
            <div className="product-info-specs">
              <p>
                <strong>Nutrient Rich:</strong> {Nutrients}
              </p>
              <p>
                <strong>Organic and Sustainable:</strong> {Organic}
              </p>
              <p>
                <strong>Improved Soil Structure:</strong> {Soil}
              </p>
              <p>
                <strong>Enhanced Microbial Activity:</strong> {Microbes}
              </p>
            </div>
          </div>
        </div>
      </div> */}

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
      <br/>
      <div className="thq-flex-column">
        <div className="faq1-content1">
          <h2 className="thq-heading-2">Sound Interesting?</h2>
          <p className="faq1-text3 thq-body-large">
            Contact us directly using the infromation below to get our product!
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
      </div>
    </>
  );
};

export default ProductInfo;
