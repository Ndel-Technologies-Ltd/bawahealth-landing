import React from 'react';
import { GetAppButton } from './GetAppButton';
import logo from "../assets/logo.svg";
export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 text-[#127c93] font-bold text-xl">
    
        <div className="leading-none flex flex-col text-[#0f2d34]">
          <img
            src={logo}
            alt="Bawa Health Logo"
            className="h-10 w-auto"
          />
        </div>
      </div>
        
        {/* Navigation & Actions Group */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
          {/* Scrollable Links - Compact on mobile */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-[#0f2d34] font-bold text-[10px] sm:text-[11px] md:text-sm whitespace-nowrap py-1">
            <a href="#" className="hover:text-[#127c93] transition-colors">Home</a>
            <a href="#" className="hover:text-[#127c93] transition-colors">About</a>
            <a href="#" className="hover:text-[#127c93] transition-colors">Contact</a>
          </div>

          {/* Static Buttons Group */}
          <div className="flex items-center gap-2 shrink-0">
            <button className="hidden sm:block border border-gray-200 text-[#0f2d34] px-4 md:px-5 py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-gray-50 transition-colors">
              Partner With Us
            </button>
            <GetAppButton variant="teal" iconTheme="white" />

          </div>
        </div>
      </div>
    </nav>
  );
};