import React from 'react';
import { useInView } from 'react-intersection-observer';
import { personalInfo, education, certifications } from '../data/portfolioData';
import './About.css';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <div className={`about__grid ${inView ? 'visible' : ''}`}>

          {/* Left: Text */}
          <div className="about__text fade-in">
            <p className="section-label">About</p>
            <h2 className="about__heading display-heading">
              A finance professional<br />
              <em>built for complexity.</em>
            </h2>
            <p className="about__body">
              {personalInfo.about}
            </p>
            <p className="about__body">
              {personalInfo.aboutExtended}
            </p>

            <div className="about__certifications">
              <p className="about__cert-label section-label">Certifications</p>
              <ul className="about__cert-list">
                {certifications.map((cert) => (
                  <li key={cert} className="about__cert-item">
                    <span className="about__cert-dot" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Education */}
          <div className="about__education fade-in fade-in-delay-2">
            <p className="section-label">Education</p>
            <div className="about__edu-list">
              {education.map((edu, i) => (
                <div key={i} className="about__edu-item">
                  <div className="about__edu-year">{edu.year}</div>
                  <div className="about__edu-content">
                    <h3 className="about__edu-degree">{edu.degree}</h3>
                    <p className="about__edu-institution">{edu.institution}</p>
                    <p className="about__edu-highlight">{edu.highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__quant-box">
              <p className="about__quant-label section-label">Quantitative Foundation</p>
              <div className="about__quant-tags">
                {['OLS Regression', 'ARIMA', 'SARIMA', 'Hypothesis Testing', 'Multicollinearity', 'Heteroscedasticity', 'Time Series', 'Exponential Smoothing'].map(tag => (
                  <span key={tag} className="about__quant-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
