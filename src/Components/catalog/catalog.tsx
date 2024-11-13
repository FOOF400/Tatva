import '../catalog/catalog.css';
import instagram from "/instagram-filling.png";
import whatsapp from "/whatsapp-filling.png";
import compost from "/compost.png";
import mud from "/mud.png";
import React from 'react';

const Catalog: React.FC = () => {
  return (

    <div className="catalog-container">
      <div className="left-section">
      <img src={compost} alt="compost" className='product-image'/>
      <img src={mud} alt="mud" className='mud-image'/>
      </div>
      <div className="right-section">
        <div className="info-card">
          <h2>About</h2>
          <p>
          Welcome to Tatva Essence, a pioneering company dedicated to transforming discarded produce into high-quality organic aged compost.

          Based in Delhi NCR, we partner with local vendors and large suppliers to convert potential waste into valuable resources. By leveraging advanced technology and sustainable practices, we aim to create a greener future while fostering economic resilience in our communities. With a focus on innovation and collaboration, Tatva Essence is redefining waste management and setting new standards for sustainability in the industry.

          At Tatva Essence, our journey began with a simple yet profound realization. Driven by a shared passion for sustainability, we discovered heaps of wasted produce in local mandis. This blatant disregard for resources ignited a spark within us, compelling us to take action.
          </p>
          <div className="contact-info">
            <button className='contact-info-btn'>Website</button><br />
            <button className='contact-info-btn'>Contact</button><br />
            <button className='contact-info-btn'>Address</button>
          </div>
          <div className="social-icons">
            <img src={whatsapp} alt="WhatsApp" className="icon" />
            <img src={instagram} alt="Instagram" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
