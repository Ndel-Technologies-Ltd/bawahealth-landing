import React from 'react';
import { ShieldCheck, Lock, History } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-2 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0f2d34] mb-20">Why Choose BawaHealth TeleMed?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border-2 border-[#bfeef7] rounded-[32px] p-10 flex flex-col items-center text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#f0fbfe] flex items-center justify-center mb-8 border border-[#bfeef7]">
              <ShieldCheck className="text-[#127c93]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#127c93] mb-4">Certified Doctors</h3>
            <p className="text-gray-600 leading-relaxed font-semibold">
              Connect with licensed medical professionals who are verified and experienced in their specialty areas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-[#bfeef7] rounded-[32px] p-10 flex flex-col items-center text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#f0fbfe] flex items-center justify-center mb-8 border border-[#bfeef7]">
              <Lock className="text-[#127c93]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#127c93] mb-4">Secure & Private</h3>
            <p className="text-gray-600 leading-relaxed font-semibold">
              Your health information is protected with end-to-end encryption and meets all healthcare privacy standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-2 border-[#bfeef7] rounded-[32px] p-10 flex flex-col items-center text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#f0fbfe] flex items-center justify-center mb-8 border border-[#bfeef7]">
              <History className="text-[#127c93]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#127c93] mb-4">Health Records</h3>
            <p className="text-gray-600 leading-relaxed font-semibold">
              Access and manage your complete medical history, prescriptions, and health data in one secure platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};