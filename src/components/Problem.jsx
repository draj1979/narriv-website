import React from 'react';

const Problem = () => {
    return (
        <section className="problem">
            <div className="container">
                <h2 className="section-title text-center">Why is Staying Informed So Exhausting?</h2>
                <p className="section-subtitle text-center">In a world overflowing with information, finding the truth feels like a full-time job.</p>

                <div className="grid grid-cols-3 gap-4 problem-grid">
                    <div className="card">
                        <div className="icon">⚠️</div>
                        <h3>Information Overload</h3>
                        <p>Thousands of headlines, but little understanding. It's impossible to keep up.</p>
                    </div>
                    <div className="card">
                        <div className="icon">🧩</div>
                        <h3>Complexity & Jargon</h3>
                        <p>Long, dense articles that bury the lead and overuse technical language.</p>
                    </div>
                    <div className="card">
                        <div className="icon">🛑</div>
                        <h3>Sensationalism</h3>
                        <p>Clickbait and emotional triggers replacing verified facts.</p>
                    </div>
                </div>
            </div>

            <style>{`
        .problem {
          background-color: var(--bg-secondary);
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .card {
          background: rgba(255, 255, 255, 0.03);
          padding: 2rem;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
        }
        
        .icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        
        .card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 0;
        }
      `}</style>
        </section>
    );
};

export default Problem;
