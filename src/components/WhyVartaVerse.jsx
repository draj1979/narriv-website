import React from 'react';

const CheckIcon = () => (
  <svg className="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhyVartaVerse = () => {
  return (
    <section className="why-vartaverse">
      <div className="container">
        <h2 className="section-title text-center">The Smartest Way to Watch the News.</h2>

        <div className="comparison-table">
          <div className="comparison-row header-row">
            <div className="col benefit">Benefit</div>
            <div className="col vartaverse">VartaVerse</div>
            <div className="col traditional">Traditional News</div>
          </div>

          <div className="comparison-row">
            <div className="col benefit">Time Required</div>
            <div className="col vartaverse highlight">
              <CheckIcon />
              <span>2 Minutes</span>
            </div>
            <div className="col traditional">20+ Minutes</div>
          </div>

          <div className="comparison-row">
            <div className="col benefit">Understanding</div>
            <div className="col vartaverse highlight">
              <CheckIcon />
              <span>Visual & Intuitive</span>
            </div>
            <div className="col traditional">Text-Heavy & Dense</div>
          </div>

          <div className="comparison-row">
            <div className="col benefit">Bias</div>
            <div className="col vartaverse highlight">
              <CheckIcon />
              <span>Neutral Facts</span>
            </div>
            <div className="col traditional">Opinion & Spin</div>
          </div>
          <div className="comparison-row">
            <div className="col benefit">Mental Impact</div>
            <div className="col vartaverse highlight">
              <CheckIcon />
              <span>Clarity</span>
            </div>
            <div className="col traditional">Anxiety</div>
          </div>
        </div>

        <p className="section-closing text-center">VartaVerse isn't just a news app; it's a tool for a better-informed society.</p>
      </div>

      <style>{`
        .why-vartaverse {
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
        
        .col.vartaverse {
          color: var(--accent-primary);
          font-weight: 600;
        }
        
        .highlight {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
        }
        
        .check-icon {
          width: 20px;
          height: 20px;
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        
        .check-icon path {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: check-draw 0.6s ease-out forwards;
        }
        
        @keyframes check-draw {
          from {
            stroke-dashoffset: 30;
            opacity: 0;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
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
        
        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .check-icon path {
            animation: none;
            stroke-dasharray: unset;
            stroke-dashoffset: unset;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyVartaVerse;
