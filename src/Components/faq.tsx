import React from 'react';
import './faq.css';

interface FAQProps {
  faq4Answer?: string;
  faq5Question?: string;
  action1?: string;
  faq1Question?: string;
  faq4Question?: string;
  faq3Answer?: string;
  faq3Question?: string;
  content1?: string;
  content2?: string;
  heading2?: string;
  heading1?: string;
  faq5Answer?: string;
  faq1Answer?: string;
  faq2Answer?: string;
  faq2Question?: string;
}

const FAQ: React.FC<FAQProps> = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2 font-bavro">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          {/* <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div> */}
          {/* <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div> */}
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        {/* <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

FAQ.defaultProps = {
    action1: 'Contact',
    content1: 'Have a question? Check out our FAQs below.',
    content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    faq1Answer: 'Tatva Essence manages produce waste from marketplaces to create high-quality compost.',
    faq1Question: 'What type of waste does Tatva Essence manage?',
    faq2Answer: 'Tatva Essence partners with waste management giant Omega Ecotech to ensure the production of high-quality and nutritious compost.',
    faq2Question: 'How does Tatva Essence ensure the quality of its compost?',
    faq3Answer: 'Tatva Essence envisions a sustainable future by efficiently managing produce waste and creating valuable compost.',
    faq3Question: "What is Tatva Essence's vision?",
    faq4Answer: 'Tatva Essence offers reliable and eco-friendly waste management services that contribute to a greener environment.',
    faq4Question: 'Why choose Tatva Essence for waste management solutions?',
    faq5Answer: 'To use our services and place orders, please contact us through the provided contact information.',
    faq5Question: 'How can I purchase compost from Tatva Essence?',
    heading1: 'FAQs',
    heading2: 'Still have a question?',
};

export default FAQ;
