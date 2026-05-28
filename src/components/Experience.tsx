import React from 'react';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/portfolioData';
import './Experience.css';

const riskProject = {
  title: "Risk Analytics — Fraud Detection Model",
  type: "Enterprise Analytics Project",
  highlights: [
    "Deployed supervised ML models (Logistic Regression, Random Forest, Decision Tree) for financial fraud detection",
    "Achieved 12% improvement in detection accuracy through feature engineering and model optimization",
    "Applied EDA and OneHotEncoder for categorical variable transformation across large transaction datasets",
    "Evaluated model performance using precision, recall, F1-score, AUC-ROC, and confusion matrix analysis",
    "Presented findings and methodology directly to clients in project review meetings"
  ]
};

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <div className={`experience__header fade-in ${inView ? 'visible' : ''}`}>
          <p className="section-label">Professional Experience</p>
          <h2 className="experience__heading display-heading">
            Applied analytics,<br /><em>client-facing delivery.</em>
          </h2>
        </div>

        <div className={`experience__grid fade-in fade-in-delay-1 ${inView ? 'visible' : ''}`}>

          {/* Main Work Experience */}
          {experience.map((job) => (
            <div key={job.company} className="experience__job">
              <div className="experience__job-header">
                <div>
                  <h3 className="experience__role">{job.role}</h3>
                  <p className="experience__company">{job.company}</p>
                </div>
                <span className="experience__period">{job.period}</span>
              </div>
              <ul className="experience__highlights">
                {job.highlights.map((h, i) => (
                  <li key={i} className="experience__highlight">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Risk Analytics Project */}
          <div className="experience__project">
            <div className="experience__project-badge">
              {riskProject.type}
            </div>
            <h3 className="experience__project-title">{riskProject.title}</h3>
            <ul className="experience__highlights">
              {riskProject.highlights.map((h, i) => (
                <li key={i} className="experience__highlight">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
