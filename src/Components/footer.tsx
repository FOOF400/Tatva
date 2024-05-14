import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-10" id="contact">
      <div className="container mx-auto text-center">
        <h2 className=" font-bebas tracking-wider mb-4 text-5xl">Contact Us</h2>
        <p className="mb-4 flex" style={{ width: 'calc(100vw / 2)' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <p className="mb-2">Phone: +91-234-567-890</p>
          <p>Email: tatvaessence@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
