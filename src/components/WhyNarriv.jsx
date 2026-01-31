import React from 'react';

const WhyNarriv = () => {
    return (
        <section className="why-narriv">
            <div className="container">
                <h2 className="section-title text-center">The Smartest Way to Watch the News.</h2>

                <div className="comparison-table">
                    <div className="comparison-row header-row">
                        <div className="col benefit">Benefit</div>
                        <div className="col narriv">Narriv</div>
                        <div className="col traditional">Traditional News</div>
                    </div>

                    <div className="comparison-row">
                        <div className="col benefit">Time Required</div>
                        <div className="col narriv highlight">2 Minutes</div>
                        <div className="col traditional">20+ Minutes</div>
                    </div>

                    <div className="comparison-row">
                        <div className="col benefit">Understanding</div>
                        <div className="col narriv highlight">Visual & Intuitive</div>
                        <div className="col traditional">Text-Heavy & Dense</div>
                    </div>

                    <div className="comparison-row">
                        <div className="col benefit">Bias</div>
                        <div className="col narriv highlight">Neutral Facts</div>
                        <div className="col traditional">Opinion & Spin</div>
                    </div>
                    <div className="comparison-row">
                        <div className="col benefit">Mental Impact</div>
                        <div className="col narriv highlight">Clarity</div>
                        <div className="col traditional">Anxiety</div>
                    </div>
                </div>

                <p className="section-closing text-center">Narriv isn't just a news app; it's a tool for a better-informed society.</p>
            </div>

            <style>{`
        .why-narriv {
          background-color: var(--bg-secondary);
        }
        
        .comparison-table {
          max-width: 800px;
          margin: 3rem auto;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          padding: 1rem;
        }
        
        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          padding: 1.5rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .comparison-row:last-child {
          border-bottom: none;
        }
        
        .header-row {
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        .col.narriv {
          color: var(--accent-primary);
          font-weight: 600;
        }
        
        .highlight {
          position: relative;
        }
        
        .highlight::before {
          content: '✓';
          margin-right: 8px;
        }
        
        .section-closing {
          font-size: 1.25rem;
          margin-top: 3rem;
          font-weight: 500;
        }
        
        @media (max-width: 600px) {
          .comparison-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            text-align: center;
          }
          .header-row {
            display: none;
          }
          .col.benefit {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
          }
        }
      `}</style>
        </section>
    );
};

export default WhyNarriv;
