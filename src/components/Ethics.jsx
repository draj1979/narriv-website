import React from 'react';

const Ethics = () => {
    return (
        <section className="ethics">
            <div className="container">
                <div className="ethics-content">
                    <h2 className="section-title">Our Responsibility Standard.</h2>
                    <h3 className="ethics-subtitle">We draw the line where others click.</h3>

                    <p className="ethics-intro">At Narriv, we believe news should inform, not harm. We strictly adhere to a <strong>Non-Animation Policy</strong> for sensitive events.</p>

                    <div className="guardrails-grid">
                        <div className="guardrail">
                            <h4>No Graphic Violence</h4>
                            <p>We never animate acts of terror, extreme suffering, or graphic violence.</p>
                        </div>
                        <div className="guardrail">
                            <h4>Respectful Summaries</h4>
                            <p>Tragedies are handled with static, non-visual context to prevent trivialization.</p>
                        </div>
                        <div className="guardrail">
                            <h4>Human Oversight</h4>
                            <p>Every story undergoes rigorous review by human editors alongside our AI tools to ensure cultural sensitivity and factual accuracy.</p>
                        </div>
                        <div className="guardrail">
                            <h4>Neutral Tone</h4>
                            <p>We strip away emotional adjectives to let the facts speak for themselves.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .ethics {
          background: linear-gradient(to right, #0a0a0f, #151520);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .ethics-subtitle {
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        
        .ethics-intro {
          max-width: 700px;
          margin-bottom: 3rem;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }
        
        .guardrails-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .guardrail {
          border-left: 3px solid var(--accent-secondary);
          padding-left: 1.5rem;
        }
        
        .guardrail h4 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        
        .guardrail p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
      `}</style>
        </section>
    );
};

export default Ethics;
