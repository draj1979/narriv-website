import React from 'react';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container text-center">
                <h2 className="cta-title">Change How You See the World.</h2>
                <p className="cta-subtitle">Join thousands of early adopters stepping away from the noise and into clarity.</p>

                <div className="cta-buttons">
                    <button className="btn btn-primary">Start Watching Now</button>
                    <button className="btn btn-secondary">Follow Daily Updates</button>
                </div>
            </div>

            <style>{`
        .cta-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, #0e0e1a 100%);
          padding: 6rem 0;
        }
        
        .cta-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .cta-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        @media (max-width: 600px) {
          .cta-title {
            font-size: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default CTA;
