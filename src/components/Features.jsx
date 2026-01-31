import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Daily Animated Briefs",
            desc: "World-shaping events condensed into 2-minute visual stories. Catch up on your commute or coffee break.",
            icon: "⏱️"
        },
        {
            title: "Global Perspective",
            desc: "From Technology and Science to Business and World Affairs, get a balanced view of what matters across the globe.",
            icon: "🌍"
        },
        {
            title: "Mobile-First Experience",
            desc: "Vertical, high-definition animations built for seamless viewing on your phone.",
            icon: "📱"
        },
        {
            title: "Smart Context Filtering",
            desc: "Understand the 'Why' and 'How' behind the news, not just the 'What.'",
            icon: "🧠"
        }
    ];

    return (
        <section className="features">
            <div className="container">
                <h2 className="section-title text-center">Designed for the Modern Mind.</h2>

                <div className="features-grid">
                    {features.map((item, index) => (
                        <div className="feature-item" key={index}>
                            <div className="feature-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .features {
          background-color: var(--bg-secondary);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }
        
        .feature-item {
          text-align: center;
          padding: 2rem;
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: inline-block;
          background: rgba(0, 240, 255, 0.05);
          padding: 1rem;
          border-radius: 50%;
        }
        
        .feature-item h3 {
          margin-bottom: 0.75rem;
        }
        
        .feature-item p {
          color: var(--text-secondary);
          max-width: 300px;
          margin: 0 auto;
        }
      `}</style>
        </section>
    );
};

export default Features;
