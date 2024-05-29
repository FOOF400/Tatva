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
        <br /><br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        vestibulum lectus lectus, at dignissim orci consequat a. Proin eget
        pellentesque erat, vitae vestibulum diam. Pellentesque tincidunt nibh
        ipsum, eget blandit libero tempor lobortis. Etiam ultrices viverra nisl,
        sodales tempus lectus imperdiet ac. Morbi hendrerit facilisis diam quis
        ultricies. Pellentesque eu nunc ac ante posuere posuere eu vitae tellus.
        Maecenas pellentesque justo vel tellus condimentum, vitae sodales enim
        congue. Etiam vestibulum sollicitudin augue quis mattis. Quisque
        tincidunt mi a ante ultrices efficitur. Fusce ut eleifend tortor.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Nulla ante ante, pretium maximus pellentesque sed,
        imperdiet sit amet purus. Maecenas sit amet ligula eu turpis ullamcorper
        imperdiet. Nulla dictum velit ac cursus cursus. Ut in eros sit amet
        mauris volutpat euismod.
      </h1>
    </div>
  );
};

export default AboutUs;
