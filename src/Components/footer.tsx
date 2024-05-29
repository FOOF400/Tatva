import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-green text-white p-8 mt-10" id="contact">
      <div className="container mx-auto text-center">
        <h2 className=" font-bebas tracking-wider mb-4 text-5xl">Contact Us</h2>
        <p className="mb-4 flex" style={{ paddingLeft: 'calc(100vw / 5)', paddingRight: 'calc(100vw / 5)'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <p className="mb-2">+91-9310187504  +91-9205047819</p>
          <p>tatvaessence@gmail.com</p>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
          <a href="https://www.linkedin.com/company/tatva-essence/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <img src={"/linkedin.png"} alt="logo" className="h-8 w-8 mr-3" />
          </a>
          <a href="https://www.instagram.com/tatvaessence?igsh=MWl4dmZnMHY4dTFtNw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
             <img src={"/instagram.png"} alt="logo" className="h-8 w-8 mr-3" />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
