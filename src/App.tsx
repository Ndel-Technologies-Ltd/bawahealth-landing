import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { AudienceSection } from './components/AudienceSection';
import { Features } from './components/Features';
import { MobileAppPromo } from './components/MobileAppPromo';
import { Footer } from './components/Footer';
import patient from "./assets/patients.jpg";
import doctor from "./assets/doctors.jpg";
import hospitalImage from "./assets/hospitals.jpg";
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#127c93] selection:text-white">
      {/* Background Hero Layer */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#cbf3f9] to-white rounded-b-[100px]"/>
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      <HowItWorks />

      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-[#0f2d34] mb-4">Anybody can be a part of BawaHealth</h2>
        </div>
          <AudienceSection 
            title="For Patients"
            description="Get to have quick help in times of emergencies, get to have your health profile and records uploaded and as well get to book for an appointment with a doctor of your choice."
            imageSrc={patient}
            storeLinks={{ playStore: '#', appStore: '#' }}
          />
          
          <AudienceSection 
            title="For Doctors"
            description="Get to book for a session with a patient, get to have a patient's record and as well get to have a profile for your hospital and specialty."
            imageSrc={doctor}
            isReversed={true}
            storeLinks={{ playStore: '#', appStore: '#' }}
          />
          
          <AudienceSection 
            title="For Hospitals"
            description="Get to register your hospital and as well get to have a profile for your hospital and specialty and as well get to have a profile for your hospital and specialty."
            imageSrc={hospitalImage}
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
