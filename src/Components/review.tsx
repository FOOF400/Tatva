import React, { useState } from "react";
import './review.css';
import Contact from "../Components/contact";
import instagram from "/instagram.png";
import whatsapp from "/whatsapp.png";
import feedback_completed from '../../public/feedback_completed.jpeg';

const ReviewPage: React.FC = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phoneNumber: "",
    review: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwvKr22glCor8Fx77FXLB3mjSuKTbUg1qsuglVWON49v4RJNSEvdJGeeYgyqrydkrc1GA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams(formData as any).toString() 
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        setIsSubmitted(true); 
        console.log(result);
      } else {
        setError("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      setError("There was an error submitting the form. Please try again.");
    }
    finally {
      setIsLoading(false); 
    }
  };

  const openWhatsApp = () => {
    const inviteLink = 'https://chat.whatsapp.com/E1MNVRiTjbdCvs6dspn0u0'; // Your group invite link
    window.open(inviteLink, '_blank');
};

  return (
    <div className="review-page">
      <div className="topSection">
      <div className="story-section">
  <div className="bg-blur"></div>
  <div className="content">
    <p>
      Welcome to Tatva Essence, a pioneering company dedicated to transforming discarded produce into high-quality organic aged compost.
      <br /><br />
      Based in Delhi NCR, we partner with local vendors and large suppliers to convert potential waste into valuable resources. By leveraging advanced technology and sustainable practices, we aim to create a greener future while fostering economic resilience in our communities. With a focus on innovation and collaboration, Tatva Essence is redefining waste management and setting new standards for sustainability in the industry.
      <br /><br />
      At Tatva Essence, our journey began with a simple yet profound realization. Driven by a shared passion for sustainability, we discovered heaps of wasted produce in local mandis. This blatant disregard for resources ignited a spark within us, compelling us to take action.
    </p>
  </div>
</div>
      </div>
      <div className="review-part">
      
      <div className="interaction-section">
       <div className="left">
       {!isSubmitted ? (
              <form className="review-form font-bebas" onSubmit={handleSubmit}>
                <h1>Share Your Experience</h1>
                <div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required
                    value={formData.Name}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <textarea
                    name="review"
                    placeholder="Review"
                    required
                    value={formData.review}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                <button type="submit" className="btn-review" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            ) : (
              <div className="done-div">
              <p className="font-bebas done">Thank you for submitting your review!</p>
              <img src={feedback_completed} alt="feedback completed Image" className="feedback-image"/>
              <div className="whatsapp-div">
              <button className="whatsapp-community" onClick={openWhatsApp}>Join our Community</button>
              </div>
              </div>
            )}
            {error && <p className="error-message">{error}</p>}
            <br />
          </div>
        <div className="right font-bebas">
        <div className="review-card">
          <div className="review-card-header">
            <div className="review-card-section">
              <h4 className="review-card-heading">Name</h4>
              <p>TATVA ESSENCE LLP</p>
            </div><br />
            <div className="review-card-section">
              <h4>Address</h4>
              <p>OFFICE NO. 204 V4, Mayur Plaza - II<br />
                 Mayur Vihar Phase 1<br />
                 New Delhi - 110091<br />
                 India</p>
            </div><br />
          </div>
          </div>
          <div className="review-card-section">
              <h4>Follow US</h4>
              <div className="social-media">
              <div className="row">
              <button className="btn1" onClick={() => window.location.href = 'https://www.instagram.com/tatvaessence?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}><img src={instagram} alt="logo" className="h-12 w-12 mr-3" /></button>
              <button className="btn1" onClick={() => window.location.href = 'https://wa.me/9205047819'}><img src={whatsapp} alt="logo" className="h-12 w-12 mr-3" /></button>
              </div>
              </div>
            </div>
         
        </div>
        
      </div>
      </div><br /><br /><br /><br />
      <section id="contact" className="h-fit bg-hover-green contact-us-review">
        <div className="home-contact10" id="contact">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default ReviewPage;
