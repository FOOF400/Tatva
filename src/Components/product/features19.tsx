import React from 'react';
import './product.css';

interface Features19Props {
    feature1Title?: string;
    feature1Slogan?: string;
    feature1ImageSrc?: string;
    feature1ImageAlt?: string;
    feature1Description?: string;
  }
  
  const Features19: React.FC<Features19Props> = (props) => {
    return (
      <div className="features17-layout349 thq-section-padding">
        <div className="features17-max-width thq-section-max-width">
          <div className="features17-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-16-9"
            />
          </div>
          <div className="features17-content">
            <div className="features17-section-title">
              <span className="thq-body-small text-gray-500">{props.feature1Slogan}</span>
              <div className="features17-content1">
                <h2 className="thq-heading-2 font-bavro">{props.feature1Title}</h2>
                <p className="thq-body-large">{props.feature1Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
    );
  }
  
  Features19.defaultProps = {
    feature1Title: 'Happy homes, happy gnomes',
    feature1Slogan: 'Microbe Magic for Your Garden',
    feature1ImageSrc: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    feature1ImageAlt: 'Sustainable Waste Management Image',
    feature1Description: "Within 25-30 days, the produce is transformed into highly nutritious, dark-colored organic compost. This compost is then packaged and delivered directly to our customers, ensuring they receive a premium product for their agricultural and gardening needs.",
  };
  
  export default Features19;
  
  