import React from "react";

const AboutUs: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row">
            <div className="w-1/2 font-bavro pb-5 lg:text-7xl md:text-7xl sm:text-5xl text-5xl">
              About Us
            </div>

            {/* <div className=""> */}
            {/* <h1 className="text-3xl tracking-wide mt-1 w-full md:w-1/2 lg:w-1/2 "> */}
            <h1 className="thq-body-large">
              Welcome to Tatva Essence, a pioneering company dedicated to
              transforming discarded produce into high-quality organic aged
              compost. <br />
              <br /> Based in North India, we partner with local vendors and
              large suppliers to convert potential waste into valuable
              resources. By leveraging advanced technology and sustainable
              practices, we aim to create a greener future while fostering
              economic resilience in our communities. With a focus on innovation
              and collaboration, Tatva Essence is redefining waste management
              and setting new standards for sustainability in the industry.
            </h1>
            {/* </div> */}
          </div>
    );
    }

export default AboutUs;

