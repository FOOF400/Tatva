import React from 'react';
import './product.css';

interface Features17Props {
    feature1Title?: string;
    feature1Slogan?: string;
    feature1ImageSrc?: string;
    feature1ImageAlt?: string;
    feature1Description?: string;
  }
  
  const Features17: React.FC<Features17Props> = (props) => {
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
              <span className="thq-body-small">{props.feature1Slogan}</span>
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
  
  Features17.defaultProps = {
    feature1Title: 'Nutrient-rich',
    feature1Slogan: 'Grow Strong, Grow Healthy',
    feature1ImageSrc: 'https://images.unsplash.com/photo-1654723011688-81cfe9039446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjQ3NDY4M3w&ixlib=rb-4.0.3&q=80&w=1080',
    feature1ImageAlt: 'Sustainable Waste Management Image',
    feature1Description: 'Packed with essential nutrients to provide a balanced diet for your plants, promoting robust growth and bountiful yields.',
  };
  
  export default Features17;
  
  