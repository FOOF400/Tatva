import React from "react";

const Tagline: React.FC = () => {
    return (
        <>
        <div className="absolute inset-0 pb-20">
        <img
          src="/dirtmound.jpeg"
          alt="Home Background"
          className="w-full absolute"
          style={{ height: "calc(100vh / 2)", objectFit: "cover", objectPosition: ""}}
        />
         <img 
          src="/moundForeground.png"
          alt="Home Background"
          className="w-full absolute z-10"
          style={{ height: "calc(100vh / 2)", objectFit: "cover", objectPosition: ""}}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center h-fit text-white text-center"
      style={{top: "3rem"}}>
        <h1 className="font-bebas tracking-widest lg:text-9xl md:text-8xl sm:text-8xl text-7xl text-hover-green">Organically <br/> Yours.</h1>
      </div>
      </>
    );
  };
  
  export default Tagline;
  