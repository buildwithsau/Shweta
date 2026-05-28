import React from 'react';
import { useInView } from 'react-intersection-observer';
import { competencies } from '../data/portfolioData';
import './Competencies.css';

const Competencies: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="competencies" className="competencies section" ref={ref}>
      <div className="container">
        <div className={`competencies__header fade-in ${inView ? 'visible' : ''}`}>
          <p className="section-label">Core Competencies</p>
          <h2 className="competencies__heading display-heading">
            Finance first.<br /><em>Technology enabled.</em>
          </h2>
          <p className="competencies__sub">
            A framework built on quantitative rigor, applied through modern analytical tools — 
            always in service of financial understanding.
          </p>
        </div>

        <div className="competencies__grid">
          {competencies.map((group, i) => (
            <div
              key={group.category}
              className={`competencies__card fade-in fade-in-delay-${i + 1} ${inView ? 'visible' : ''}`}
            >
              <div className="competencies__card-header">
                <span className="competencies__card-number">0{i + 1}</span>
                <h3 className="competencies__card-title">{group.category}</h3>
              </div>
              <ul className="competencies__skill-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="competencies__skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
