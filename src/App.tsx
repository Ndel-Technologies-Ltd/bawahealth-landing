import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { AudienceSection } from './components/AudienceSection';
import { Features } from './components/Features';
import { MobileAppPromo } from './components/MobileAppPromo';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#127c93] selection:text-white">
      {/* Background Hero Layer */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[850px] bg-gradient-to-br from-[#cbf3f9] to-white curve-bg" />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      <HowItWorks />

      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="space-y-24">
          <AudienceSection 
            title="For Patients"
            description="Get to have quick help in times of emergencies, get to have your health profile and records uploaded and as well get to book for an appointment with a doctor of your choice."
            imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
            storeLinks={{ playStore: '#', appStore: '#' }}
          />
          
          <AudienceSection 
            title="For Doctors"
            description="Get to book for a session with a patient, get to have a patient's record and as well get to have a profile for your hospital and specialty."
            imageSrc="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1200"
            isReversed={true}
            storeLinks={{ playStore: '#', appStore: '#' }}
          />
          
          <AudienceSection 
            title="For Hospitals"
            description="Get to register your hospital and as well get to have a profile for your hospital and specialty and as well get to have a profile for your hospital and specialty."
            imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
            storeLinks={{ playStore: '#', appStore: '#' }}
          />
        </div>
      </section>

      <Features />
      <MobileAppPromo />
      <Footer />
    </div>
  );
};

export default App;
