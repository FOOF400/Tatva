import React from 'react';
import './product.css';

interface Features18Props {
  feature1ImageSrc?: string;
  feature1ImageAlt?: string;
  feature1Slogan?: string;
  feature1Title?: string;
  feature1Description?: string;
}

const Features18: React.FC<Features18Props> = (props) => {
  return (
    <div className="features18-layout349 thq-section-padding">
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content">
          <div className="features18-section-title">
            <span className="thq-body-small text-gray-500">{props.feature1Slogan}</span>
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

Features18.defaultProps = {
  feature1ImageSrc: 'https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjQ3NDY5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Organically made',
  feature1Slogan: 'Turning waste into gold',
  feature1Title: 'Organic Magic',
  feature1Description: 'The collected produce is then shredded and undergoes decomposition through a patented process provided by our collaboration with industry leader Omega Ecotech. This advanced technology ensures efficient and effective composting.',
};

export default Features18;
