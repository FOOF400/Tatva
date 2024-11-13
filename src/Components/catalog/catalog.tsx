import '../catalog/catalog.css';
import instagram from "/instagram-filling.png";
import whatsapp from "/whatsapp-filling.png";
import compost from "/compost.png";
import mud from "/mud.png";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Catalog: React.FC = () => {
  const navigate = useNavigate();

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
            <button className='contact-info-btn' onClick={() => navigate("/")}>Website</button><br />
          </div>
          <hr className='catalog-line'/>
          <h3>Follow us</h3>
          <div className="social-icons">
            <button className="btn1" onClick={() => window.location.href = 'https://wa.me/9205047819'}><img src={whatsapp} alt="WhatsApp" className="icon wgap" /></button>
            <button className="btn1" onClick={() => window.location.href = 'https://www.instagram.com/tatvaessence?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}><img src={instagram} alt="Instagram" className="icon" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
