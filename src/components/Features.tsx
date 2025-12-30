import React from 'react';
import { ShieldCheck, Lock, History, Globe, Zap, HeartPulse } from 'lucide-react';

export const Features: React.FC = () => {
  const cards = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Certified Experts",
      text: "Every doctor undergoes a rigorous 5-step verification process including credentials and field experience check.",
      color: "bg-blue-500"
    },
    {
      icon: <Lock size={24} />,
      title: "Privacy First",
      text: "Bank-grade encryption for all your health records. We never share your data with third parties.",
      color: "bg-purple-500"
    },
    {
      icon: <History size={24} />,
      title: "Full History",
      text: "Your entire medical journey in one place. Lab results, prescriptions, and session history sync automatically.",
      color: "bg-[#127c93]"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Reach",
      text: "Access your healthcare team from anywhere in the world, across time zones, without compromise.",
      color: "bg-teal-500"
    },
    {
      icon: <Zap size={24} />,
      title: "Instant Booking",
      text: "Say goodbye to waiting rooms. Book, confirm, and start your session within minutes.",
      color: "bg-amber-500"
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Holistic Care",
      text: "From general practice to mental health and dietetics, we cover all aspects of your wellbeing.",
      color: "bg-rose-500"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 bg-[#0f2d34] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#127c93] rounded-full blur-[160px] opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#127c93] rounded-full blur-[160px] opacity-10 -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#127c93] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Core Values</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Built for trust & reliability</h2>
          <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">We combine cutting-edge technology with compassionate medical care to deliver a platform that puts human health first.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-10 hover:bg-white/10 transition-all duration-300 group">
              <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-8 text-white shadow-xl group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-sm">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};