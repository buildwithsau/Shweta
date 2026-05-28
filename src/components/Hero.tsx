import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-pattern" />

      <div className="hero__container container">
        <div className={`hero__content ${loaded ? 'hero__content--loaded' : ''}`}>
          <p className="section-label hero__label">Finance &amp; Analytics Professional</p>

          <h1 className="hero__heading display-heading">
            <span className="hero__heading-line">Turning financial data</span>
            <span className="hero__heading-line hero__heading-line--accent">into strategic insight.</span>
          </h1>

          <p className="hero__sub">
            {personalInfo.subTagline}
          </p>

          <p className="hero__description">
            {personalInfo.about}
          </p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" onClick={() => scrollTo('#project')}>
              View Research
            </button>
            <button className="hero__btn hero__btn--secondary" onClick={() => scrollTo('#contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className={`hero__stats ${loaded ? 'hero__stats--loaded' : ''}`}>
          <div className="hero__stat">
            <span className="hero__stat-number">5+</span>
            <span className="hero__stat-label">Years Academic &amp; Professional Finance</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">15+</span>
            <span className="hero__stat-label">Financial Ratios Modeled</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">85%</span>
            <span className="hero__stat-label">Forecasting Accuracy Achieved</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" onClick={() => scrollTo('#about')}>
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
