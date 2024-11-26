import '../catalog/catalog.css';
import instagram from "/instagram-filling.png";
import whatsapp from "/whatsapp-filling.png";
import internet from "/internet.png";
import compost from "/compost.png";
import mud from "/mud.png";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const openWhatsApp = () => {
    const inviteLink = 'https://chat.whatsapp.com/E1MNVRiTjbdCvs6dspn0u0'; // Your group invite link
    window.open(inviteLink, '_blank');
};
  return (

    <div className="catalog-container">
      <div className="left-section">
      <img src={compost} alt="compost" className='product-image' loading="lazy" />
      <img src={mud} alt="mud" className='mud-image' loading="lazy" />
      </div>
      <div className="right-section">
        <div className="info-card">
          <h2>Our Journey Towards A Green Tomorrow</h2>
          <p>
          Welcome to Tatva Essence, a pioneering company dedicated to transforming discarded produce into high-quality organic aged compost. By leveraging advanced technology and sustainable practices, we aim to create a greener future while fostering economic resilience in our communities. With a focus on innovation and collaboration, Tatva. Essence is redefining waste management and setting new standards for sustainability in the industry.
          </p>
          <h3>Connect with us</h3>
          <div className="social-icons">
            <button className="btn1" onClick={() => navigate("/")}><img src={internet} alt="LinkedIn" className="icon wgap" /></button>
            <button className="btn1" onClick={() => window.location.href = 'https://wa.me/9205047819'}><img src={whatsapp} alt="WhatsApp" className="icon wgap" /></button>
            <button className="btn1" onClick={() => window.location.href = 'https://www.instagram.com/tatvaessence?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}><img src={instagram} alt="Instagram" className="icon wgap" /></button>
            <button className="btn1" onClick={() => window.location.href = 'https://wa.me/9205047819'}><img src={"/linkedin.png"} alt="LinkedIn" className="icon wgap" /></button>
          </div>
          <div className="community-box-catalog">
            <div className="column-box">
            <div className="community-box-left"></div>
            <button className='community-join-btn' onClick={openWhatsApp}>Be A Part Of Our Community</button>
            </div>
            <div className="community-box-right">
            <h2>Our Community</h2>
            <p>
            At Tatva Essence, we are building a passionate community dedicated to waste management, sustainability, and chemical-free gardening. Our goal is to create a healthier planet by promoting eco-friendly practices and fostering a greener lifestyle. 
            <br />If you share our passion for sustainability and want to make a meaningful impact, we invite you to be part of this journey. Together, we can exchange ideas, learn, and create solutions for a cleaner and greener future.
            </p>
            </div>
            
          </div>
          <br />
          
        </div>
      </div>
    </div>
  );
};

export default Catalog;
