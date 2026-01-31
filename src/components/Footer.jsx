import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col branding">
                        <h3 className="footer-logo">Narriv</h3>
                        <p className="footer-desc">
                            Narriv is a global storytelling platform dedicated to making news accessible, understandable, and responsible through the power of animation.
                        </p>
                    </div>

                    <div className="footer-col disclaimer">
                        <h4>Editorial Disclaimer</h4>
                        <p>
                            Narriv is a news visualization service. While we strive for accuracy, our content is designed to summarize and contextualize events and does not replace primary on-the-ground journalism.
                        </p>
                    </div>

                    <div className="footer-col links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Ethical Charter</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Narriv. All rights reserved.</p>
                    <div className="bottom-links">
                        {/* Social icons or additional legal links could go here */}
                    </div>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: #050508;
          padding: 5rem 0 2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1.5fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .footer-col h4 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .links ul li {
          margin-bottom: 0.5rem;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 2rem;
          text-align: center;
          font-size: 0.8rem;
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
