import React from "react";
import "./contact4.css";

interface ContactProps {
  email1?: string;
  content2?: string;
  address1?: string;
  heading1?: string;
  content1?: string;
  phone1?: string;
  content3?: string;
  content4?: string;
  content5?: string;
}

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <div className="contact4-contact20 thq-section-padding">
      <div className="contact4-max-width thq-section-max-width">
        <div className="contact4-section-title">
          {/* <span className="thq-body-small">{props.content2}</span> */}
          <div className="contact4-content">
            <h2 className="thq-heading-2 font-bavro">{props.heading1}</h2>
            <p className="contact4-text2 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact4-row">
          <div className="contact4-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact4-contact-info">
              <div className="contact4-content2">
                <h3 className="contact4-text3 thq-heading-3">Email</h3>
                <p className="contact4-text4 thq-body-large">
                  {props.content3}
                </p>
              </div>
              <span className="contact4-email thq-body-small">
                {props.email1}
              </span>
            </div>
          </div>
          <div className="contact4-content3">
            <svg
              viewBox="0 0 1024 1024"
              className="contact4-icon2 thq-icon-medium"
            >
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact4-contact-info1">
              <div className="contact4-content4">
                <h3 className="contact4-text5 thq-heading-3">Phone</h3>
                <p className="contact4-text6 thq-body-large">
                  {props.content4}
                </p>
              </div>
              <span className="contact4-phone thq-body-small">
                {props.phone1}
              </span>
            </div>
          </div>
          <div className="contact4-content5">
            <svg
              className="contact4-icon4 thq-icon-medium"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z"
                clip-rule="evenodd"
              />
            </svg>

            <div className="contact4-contact-info2">
              <div className="contact4-content6">
                <h3 className="contact4-text7 thq-heading-3">Socials</h3>
                <p className="contact4-text8 thq-body-large">
                  {props.content5}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/company/tatva-essence/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                  >
                    <img
                      src={"/linkedin.png"}
                      alt="logo"
                      className="h-8 w-8 mr-3"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/tatvaessence?igsh=MWl4dmZnMHY4dTFtNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                  >
                    <img
                      src={"/instagram.png"}
                      alt="logo"
                      className="h-8 w-8 mr-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.defaultProps = {
  email1: "tatvaessence@gmail.com",
  content2: "We are available via email or phone during business hours.",
  heading1: "Contact us",
  content1:
    "We are dedicated to providing exceptional service and support. For orders, inquiries, or assistance, please reach out to us through the following channels:",
  phone1: "+91-9310187504, +91-9205047819",
  content3: "Email us for inquiries or feedback.",
  content4: "Call us directly for orders or queries.",
  content5: "Follow us for latest updates and news.",
};

export default Contact;
