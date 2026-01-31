import React from 'react';

const Solution = () => {
    return (
        <section className="solution">
            <div className="container">
                <div className="content-wrapper">
                    <div className="text-content">
                        <h2 className="section-title">News That Respects Your Time and Intelligence.</h2>
                        <p className="lead">Narriv bridges the gap between deep reporting and instant understanding. We convert the day's most important global news into concise, factual animated narratives.</p>

                        <ul className="solution-list">
                            <li>
                                <span className="bullet"></span>
                                <div>
                                    <strong>Visual First</strong>
                                    <p>Grasp complex geopolitical and economic shifts through intuitive animations.</p>
                                </div>
                            </li>
                            <li>
                                <span className="bullet"></span>
                                <div>
                                    <strong>Fact-Based</strong>
                                    <p>No opinions, no spin. Just the verified events as they happened.</p>
                                </div>
                            </li>
                            <li>
                                <span className="bullet"></span>
                                <div>
                                    <strong>Ethically Driven</strong>
                                    <p>A commitment to responsible storytelling that informs without traumatizing.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="visual-content">
                        {/* Placeholder for an illustration or demo video */}
                        <div className="placeholder-visual">
                            Animations Demo
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .solution {
          position: relative;
        }
        
        .content-wrapper {
          display: flex;
          align-items: center;
          gap: 4rem;
        }
        
        .text-content {
          flex: 1;
        }
        
        .visual-content {
          flex: 1;
        }
        
        .lead {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        
        .solution-list li {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--accent-primary);
          margin-top: 6px;
          flex-shrink: 0;
          box-shadow: 0 0 10px var(--accent-primary);
        }
        
        .placeholder-visual {
          width: 100%;
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, #1a1a2e, #0e0e1a);
          border: 1px solid var(--accent-secondary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-secondary);
          font-weight: bold;
          letter-spacing: 2px;
        }
        
        @media (max-width: 900px) {
          .content-wrapper {
            flex-direction: column;
          }
        }
      `}</style>
        </section>
    );
};

export default Solution;
