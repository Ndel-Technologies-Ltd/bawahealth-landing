import React from 'react';
import { StoreBadge } from './StoreBadge';

export const MobileAppPromo: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0f2d34] mb-16">Get to use our Mobile App</h2>
        
        <div className="bg-[#f2f7f9] rounded-[48px] overflow-hidden flex flex-col md:flex-row items-center border border-gray-50">
            <div className="w-full md:w-[45%] h-[480px]">
                <img 
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
                    alt="Happy doctor with phone" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-full md:w-[55%] p-10 md:p-16">
                <p className="text-[#0f2d34] text-xl leading-relaxed mb-12 font-medium opacity-90">
                    Get to download and use our mobile app from play store or app store for easy access to medical services, booking appointments, managing profiles, chatting and a full simplified control all within the app environment. We have apps to cover for patients, doctors and hospital administrators.
                </p>
                <div className="flex flex-wrap gap-6">
                    <StoreBadge type="google" showChevron={true} />
                    <StoreBadge type="apple" showChevron={true} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};