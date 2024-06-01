import React from "react";
import "./about.css";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row">
      <div className="w-fit font-coolvetica pb-5 md:pr-28 lg:pr-32 lg:pl-48 lg:text-7xl md:text-7xl sm:text-5xl text-5xl">
        ABOUT
        <br /> OUR <br />
        COMPANY
      </div>

      <h1 className="thq-body-large lg:pr-48 md:pr-24 lg:text-justify">
        <div className="hidden md:block lg:block">
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        Welcome to Tatva Essence, a pioneering company dedicated to transforming
        discarded produce into high-quality organic aged compost. <br />
        <br /> Based in Delhi NCR, we partner with local vendors and large
        suppliers to convert potential waste into valuable resources. By
        leveraging advanced technology and sustainable practices, we aim to
        create a greener future while fostering economic resilience in our
        communities. With a focus on innovation and collaboration, Tatva Essence
        is redefining waste management and setting new standards for
        sustainability in the industry.
        <br />
        <br />
        At Tatva Essence, our journey began with a simple yet profound
        realization. Driven by a shared passion for sustainability, we
        discovered heaps of wasted produce in local mandis. This blatant
        disregard for resources ignited a spark within us, compelling us to take
        action.
      </h1>
    </div>
  );
};

export default AboutUs;
