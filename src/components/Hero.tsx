import React from 'react';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading with Frame - No Left Border */}
        <div className="flex justify-center mb-16">
          <div className="relative border-y-2 border-r-2 border-white border-l-0 rounded-r-[60px] px-12 py-10 md:px-24">
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0f2d34] leading-[1.1] text-center">
              Enjoy Healthcare at <br /> 
              your <span className="text-[#127c93]">Fingertips</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content - Straight Overlapping Images */}
          <div className="relative h-[400px] w-full max-w-md mx-auto lg:mx-0">
            {/* Back Image (Straight) */}
            <div className="absolute top-0 left-0 w-[75%] h-[85%] rounded-[32px] overflow-hidden border-[5px] border-[#127c93] shadow-xl z-20">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                alt="Doctor with clipboard" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Front Image (Straight) */}
            <div className="absolute -bottom-10 -right-24 w-[75%] h-[85%] rounded-[32px] overflow-hidden border-[5px] border-[#127c93] shadow-2xl z-10 bg-white">
               <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                alt="Doctor checking patient" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content - Avatars and CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center -space-x-3 mb-10">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/150?u=doc${i}`}
                  alt="Doctor avatar"
                  className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm"
                />
              ))}
            </div>

            <p className="text-xl text-[#0f2d34] mb-10 max-w-lg font-medium leading-relaxed">
              Connect with certified doctors, book appointments, and manage your health journey with BawaHealth TeleMed's trusted platform.
            </p>

            <button className="flex items-center gap-3 bg-[#127c93] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0e6375] transition-all shadow-xl hover:shadow-2xl group">
              Get Started
              <Play size={22} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};