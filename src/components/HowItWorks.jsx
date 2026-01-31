import React from 'react';

const HowItWorks = () => {
    const steps = [
        { num: '01', title: 'Curate', desc: 'We monitor verified global sources to identify the day\'s most impactful stories.' },
        { num: '02', title: 'Verify', desc: 'Our editorial team fact-checks data and cross-references multiple outlets for accuracy.' },
        { num: '03', title: 'Create', desc: 'Complex events are scripted and turned into clear, data-driven animations.' },
        { num: '04', title: 'Publish', desc: 'Daily updates drop directly to your feed, ready to watch, share, and understand.' }
    ];

    return (
        <section className="how-it-works">
            <div className="container">
                <h2 className="section-title text-center">From Breaking News to Your Screen.</h2>

                <div className="steps-container">
                    <div className="steps-line"></div>
                    {steps.map((step, index) => (
                        <div className="step-item" key={index}>
                            <div className="step-number">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .how-it-works {
          background-color: var(--bg-primary);
        }
        
        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 4rem;
          position: relative;
        }
        
        .steps-line {
          position: absolute;
          top: 25px;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 0;
        }
        
        .step-item {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        
        .step-number {
          width: 50px;
          height: 50px;
          background: var(--bg-primary);
          border: 2px solid var(--accent-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          font-weight: bold;
          color: var(--accent-primary);
        }
        
        .step-item p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .steps-container {
            grid-template-columns: 1fr;
            text-align: left;
          }
          .steps-line {
            width: 2px;
            height: 100%;
            left: 24px;
            top: 0;
          }
          .step-item {
            padding-left: 60px; /* Space for the line/number */
            text-align: left;
           }
          .step-number {
            position: absolute;
            left: 0;
            top: 0;
            margin: 0;
          }
        }
      `}</style>
        </section>
    );
};

export default HowItWorks;
