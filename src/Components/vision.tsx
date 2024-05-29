import React from "react";
import "./about.css";

const Vision: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse">
      <div
        className="w-fit font-coolvetica lg:pr-48 md:pr-24
      
      pb-5  lg:text-7xl md:text-7xl sm:text-5xl text-5xl md:text-right lg:text-right text-left"
      >
        <br />
        <br />
        VISION <br />
         FOR<br/>
        TOMORROW
      </div>

      <h1 className="thq-body-large md:pr-28 lg:pr-32 lg:pl-48 lg:text-justify">
        <div className="hidden md:block lg:block">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <br /><br />
        <br />
        </div>
        At Tatva Essence, we envision a world where every piece of
        wasted produce contributes to the cycle of regeneration rather than
        ending up in landfills. 
       
        
        Our goal is to significantly reduce unutilized
        organic waste in Delhi and neighboring states within five years. By
        becoming a premier manufacturer and supplier of organic aged compost in
        India, we aim to make a substantial impact on global sustainability
        efforts, promoting a healthier planet for future generations. <br/><br/> Moreover,
        through transforming these marketplaces into an equitable hub for all, we
        strive to empower communities and provide fair wages and compensation to
        all stakeholders.
      </h1>
    </div>
  );
};

export default Vision;
