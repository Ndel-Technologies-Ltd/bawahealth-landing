import React from 'react';
import { Bell} from 'lucide-react';
import logo from "../assets/logo.svg";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 bg-transparent relative z-20">
      <div className="flex items-center gap-2 text-[#127c93] font-bold text-xl">
    
        <div className="leading-none flex flex-col text-[#0f2d34]">
          <img
            src={logo}
            alt="Bawa Health Logo"
            className="h-10 w-auto"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-[#0f2d34] hover:text-[#127c93] transition-colors p-2">
          <Bell size={24} />
        </button>
        <button className="bg-[#127c93] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-[#0e6375] transition-colors shadow-lg">
          Sign In
        </button>
      </div>
    </nav>
  );
};