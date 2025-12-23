import React from 'react';
import {Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import logo from "../assets/f-logo.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        
        {/* Logo Column */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 text-[#127c93] font-bold text-3xl">
            
            <div className="leading-[1.1] flex flex-col text-white">
              <img
                          src={logo}
                          alt="Bawa Health Logo"
                          className="h-20 w-auto"
                        />
            </div>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col">
            <p className="text-lg mb-8 text-gray-300 font-medium">Subscribe to our Mailing list to get our community updates</p>
            <div className="flex flex-col gap-5">
                <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-transparent border border-gray-700 rounded-full px-8 py-4 text-md text-white focus:outline-none focus:border-[#127c93] w-full"
                />
                <button className="bg-[#127c93] text-white rounded-full px-12 py-4 text-lg font-bold hover:bg-[#0e6375] transition-colors w-full">
                    Subscribe
                </button>
            </div>
        </div>

        {/* Socials Column */}
        <div className="flex flex-col lg:items-end">
            <div className="w-full lg:w-48">
              <h4 className="font-bold text-2xl mb-8">Visit Our Socials</h4>
              <div className="space-y-6">
                  <a href="#" className="flex items-center gap-5 text-gray-400 hover:text-white transition-colors">
                      <Linkedin size={24} />
                      <span className="text-lg font-medium">LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center gap-5 text-gray-400 hover:text-white transition-colors">
                      <Facebook size={24} />
                      <span className="text-lg font-medium">Facebook</span>
                  </a>
                  <a href="#" className="flex items-center gap-5 text-gray-400 hover:text-white transition-colors">
                      <Instagram size={24} />
                      <span className="text-lg font-medium">Instagram</span>
                  </a>
                  <a href="#" className="flex items-center gap-5 text-gray-400 hover:text-white transition-colors">
                      <Youtube size={24} />
                      <span className="text-lg font-medium">Instagram</span>
                  </a>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
};