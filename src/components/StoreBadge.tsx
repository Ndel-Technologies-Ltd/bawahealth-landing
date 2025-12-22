import React from 'react';
import { ChevronDown } from 'lucide-react';

interface StoreBadgeProps {
  type: 'google' | 'apple';
  showChevron?: boolean;
}

export const StoreBadge: React.FC<StoreBadgeProps> = ({ type, showChevron = false }) => {
  const isGoogle = type === 'google';
  
  return (
    <button className="flex items-center bg-[#0d1b1e] text-white px-5 py-2.5 rounded-xl hover:bg-black transition-all border border-transparent min-w-[185px] shadow-lg group">
      <div className="mr-3 flex-shrink-0 flex items-center justify-center">
        {isGoogle ? (
          <svg viewBox="0 0 512 512" width="24" height="24">
            <path fill="#00f0ff" d="M12,12.4V499.6L343.8,256Z" />
            <path fill="#00ff9e" d="M343.8,256,432,167.8,14.6,12.4,343.8,256Z" />
            <path fill="#ff3064" d="M343.8,256,14.6,499.6,432,344.2,343.8,256Z" />
            <path fill="#ffc000" d="M432,167.8,343.8,256l88.2,88.2,67.4-88.2L432,167.8Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 384 512" width="24" height="24" fill="white">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.8-42.3 0-82.7 24.3-104.2 62-44.1 76.4-11.3 190.1 31.5 252.1 21 30.2 46.1 63.9 76.6 63.9 29.1 0 40.5-18 75.8-18s46 18 76.6 18c31.1 0 52.8-30.5 73.6-61.1 24.2-35.2 34.1-69.3 34.3-71-.8-.3-65.7-25.2-65.9-102.5zM232.5 86.5c16-19.4 26.8-46.4 23.8-73.4-23.2 1-51.4 15.5-68.1 35.1-15 17.5-28.2 45.1-24.6 71.3 25.8 2 52.9-13.6 68.9-33z"/>
          </svg>
        )}
      </div>
      <div className="flex flex-col items-start text-left flex-grow">
        <span className="text-[10px] opacity-80 leading-tight uppercase font-medium tracking-tight">
          {isGoogle ? 'GET IT ON' : 'Download on the'}
        </span>
        <span className="text-base font-bold leading-tight -mt-0.5">
          {isGoogle ? 'Google Play' : 'App Store'}
        </span>
      </div>
      {showChevron && <ChevronDown size={20} className="ml-3 text-white opacity-60 group-hover:opacity-100 transition-opacity" />}
    </button>
  );
};