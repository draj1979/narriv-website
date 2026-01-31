import React from 'react';
import './index.css';

// Components
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Ethics from './components/Ethics';
import HowItWorks from './components/HowItWorks';
import WhyNarriv from './components/WhyNarriv';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      {/* Navigation could go here */}
      <nav style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: '1.5rem', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Narriv</div>
        <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Login</button>
      </nav>

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Ethics />
        <HowItWorks />
        <WhyNarriv />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
