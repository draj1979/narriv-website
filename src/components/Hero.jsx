import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    See the World Clearly.<br />
                    <span className="text-accent">Understand the News in Minutes.</span>
                </h1>
                <p className="hero-subtitle">
                    Daily global events transformed into short, responsibly crafted animated stories. Experience clarity, neutrality, and speed without the noise.
                </p>
                <div className="hero-cta">
                    <button className="btn btn-primary">Watch Today’s Stories</button>
                </div>
            </div>

            <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: radial-gradient(circle at center, #1a1a2e 0%, var(--bg-primary) 70%);
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          z-index: 2;
          max-width: 800px;
        }
        
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
