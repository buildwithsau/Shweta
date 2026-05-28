import React from 'react';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <div className={`contact__inner fade-in ${inView ? 'visible' : ''}`}>
          <div className="contact__text">
            <p className="section-label">Get in Touch</p>
            <h2 className="contact__heading display-heading">
              Open to finance<br /><em>opportunities.</em>
            </h2>
            <p className="contact__body">
              I'm actively exploring roles in financial analysis, modeling, and consulting. 
              If you're looking for a finance professional who combines rigorous analytical 
              foundations with modern data capabilities, I'd love to connect.
            </p>
            <div className="contact__links">
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact__link contact__link--primary"
              >
                Send an Email
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact__link contact__link--secondary"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="contact__detail-col">
            <div className="contact__detail">
              <span className="contact__detail-label">Email</span>
              <a href={`mailto:${personalInfo.email}`} className="contact__detail-value">
                {personalInfo.email}
              </a>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Location</span>
              <span className="contact__detail-value">{personalInfo.location}</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Status</span>
              <span className="contact__detail-value contact__detail-value--available">
                <span className="contact__status-dot" />
                Open to Opportunities
              </span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Focus Areas</span>
              <span className="contact__detail-value">Financial Modeling · Equity Research · Analytics Consulting</span>
            </div>
          </div>
        </div>

        <div className={`contact__footer fade-in fade-in-delay-2 ${inView ? 'visible' : ''}`}>
          <p className="contact__footer-name">Shweta Sharma</p>
          <p className="contact__footer-copy">© 2025 · Finance & Analytics Professional</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
