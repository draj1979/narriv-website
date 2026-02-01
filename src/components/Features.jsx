import React from 'react';

// SVG Icon Components
const ClockIcon = () => (
  <svg className="icon icon-clock" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="icon icon-globe" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MobileIcon = () => (
  <svg className="icon icon-mobile" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BrainIcon = () => (
  <svg className="icon icon-brain" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5Z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 4.5v15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Features = () => {
  const features = [
    {
      title: "Daily Animated Briefs",
      desc: "World-shaping events condensed into 2-minute visual stories. Catch up on your commute or coffee break.",
      icon: <ClockIcon />
    },
    {
      title: "Global Perspective",
      desc: "From Technology and Science to Business and World Affairs, get a balanced view of what matters across the globe.",
      icon: <GlobeIcon />
    },
    {
      title: "Mobile-First Experience",
      desc: "Vertical, high-definition animations built for seamless viewing on your phone.",
      icon: <MobileIcon />
    },
    {
      title: "Smart Context Filtering",
      desc: "Understand the 'Why' and 'How' behind the news, not just the 'What.'",
      icon: <BrainIcon />
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
          margin-bottom: 1.5rem;
          display: inline-block;
          background: rgba(0, 240, 255, 0.05);
          padding: 1.5rem;
          border-radius: 50%;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-icon:hover {
          transform: translateY(-3px) scale(1.05);
        }
        
        .icon {
          width: 48px;
          height: 48px;
          color: var(--accent-primary);
          display: block;
        }
        
        .icon path,
        .icon circle,
        .icon rect {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: stroke-draw 0.8s ease-out forwards;
        }
        
        .icon circle:nth-child(1) {
          animation-delay: 0s;
        }
        
        .icon path:nth-child(2),
        .icon rect:nth-child(1) {
          animation-delay: 0.2s;
        }
        
        .icon path:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes stroke-draw {
          from {
            stroke-dashoffset: 100;
            opacity: 0;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        
        .feature-item h3 {
          margin-bottom: 0.75rem;
        }
        
        .feature-item p {
          color: var(--text-secondary);
          max-width: 300px;
          margin: 0 auto;
        }
        
        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .icon path,
          .icon circle,
          .icon rect {
            animation: none;
            stroke-dasharray: unset;
            stroke-dashoffset: unset;
            opacity: 1;
          }
          
          .feature-icon:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
