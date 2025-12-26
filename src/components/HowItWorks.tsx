import React from 'react';
import { Calendar, Video, MessageSquare} from 'lucide-react';
import health from "../assets/health.mp4";

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-[#0f2d34] mb-4">How it works</h2>
        </div>
        
        <div className="mb-8">
          <p className="text-gray-500 text-xl font-medium">Simple steps to get the care you need</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Steps List */}
          <div className="space-y-6">
            {/* Step 1 - Appointment */}
            <div className="flex rounded-[20px] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
              <div className="flex-shrink-0 w-24 h-32 bg-[#ef4463] text-white flex items-center justify-center">
                <Calendar size={40} strokeWidth={1.5} />
              </div>
              <div className="flex-grow bg-[#fdf2f4] p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#0f2d34] mb-2">Book Appointment</h3>
                <p className="text-gray-700 font-medium leading-snug">Schedule consultations with certified doctors at your convenience</p>
              </div>
            </div>

            {/* Step 2 - Consultation */}
            <div className="flex rounded-[20px] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
              <div className="flex-shrink-0 w-24 h-32 bg-[#ffc35d] text-white flex items-center justify-center">
                <Video size={40} strokeWidth={1.5} />
              </div>
              <div className="flex-grow bg-[#fffbeb] p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#0f2d34] mb-2">Video Consultation</h3>
                <p className="text-gray-700 font-medium leading-snug">Connect face-to-face with healthcare providers from anywhere</p>
              </div>
            </div>

            {/* Step 3 - Messaging */}
            <div className="flex rounded-[20px] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
              <div className="flex-shrink-0 w-24 h-32 bg-[#00d09c] text-white flex items-center justify-center">
                <MessageSquare size={40} strokeWidth={1.5} />
              </div>
              <div className="flex-grow bg-[#f0fdf9] p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#0f2d34] mb-2">Secure Messaging</h3>
                <p className="text-gray-700 font-medium leading-snug">Secure, private messaging with your healthcare team</p>
              </div>
            </div>
          </div>

          {/* Video Area */}
         <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-100">
          <video 
          src={health} // Correct prop
          className="w-full h-full object-cover"
          autoPlay
          muted   // required for autoplay
          loop
          controls // optional, adds play/pause controls
        />

          {/* YouTube Style Play Button */}
          
        </div>

        </div>
      </div>
    </section>
  );
};