import './index.css'
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformSection } from './components/PlatformSection';
import { SecuritySection } from './components/SecuritySection';
import { DisclaimerSection } from './components/DisclaimerSection';
import { DPCSection } from './components/DPCSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#127c93]/30">
      <Navbar />
      <Hero />
      <PlatformSection />
      <SecuritySection />
      <DisclaimerSection />
      <DPCSection />
      <Footer />
    </div>
  );
};

export default App;