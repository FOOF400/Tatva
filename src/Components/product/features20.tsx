import React from 'react';
import './product.css';

interface Features20Props {
  feature1ImageSrc?: string;
  feature1ImageAlt?: string;
  feature1Slogan?: string;
  feature1Title?: string;
  feature1Description?: string;
}

const Features20: React.FC<Features20Props> = (props) => {
  return (
    <div className="features18-layout349 thq-section-padding">
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content">
          <div className="features18-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="features18-content1">
              <h2 className="thq-heading-2 font-bavro">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
        <div className="features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  );
}

Features20.defaultProps = {
  feature1ImageSrc: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  feature1ImageAlt: 'Organically made',
  feature1Slogan: 'Turning waste into gold',
  feature1Title: 'Organically made',
  feature1Description: 'Made from high-quality produce waste, our compost supports sustainable practices and ensures your garden is free from harmful chemicals and synthetic additives.',
};

export default Features20;
