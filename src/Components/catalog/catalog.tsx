import '../catalog/catalog.css';
import instagram from "/instagram-filling.png";
import whatsapp from "/whatsapp-filling.png";
import compost from "/compost.png";
import mud from "/mud.png";

const Catalog = () => {
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
            blah
          </p>
          <div className="contact-info">
            <p>Website</p>
            <p>Contact</p>
            <p>Address</p>
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
