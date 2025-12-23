import React from 'react';
import { StoreBadge } from './StoreBadge';
import { AudienceSectionProps } from './types';

export const AudienceSection: React.FC<AudienceSectionProps> = ({ 
  title, 
  description, 
  imageSrc, 
  isReversed = false,
}) => {
  const targetName = title.toLowerCase().replace('for ', '');
  
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center py-4`}>
      <div className="flex-1 w-full relative">
        <div className="rounded-3xl overflow-hidden shadow-xl aspect-[16/10]">
             <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className="flex-1 w-full">
        <h3 className="text-3xl font-bold text-[#0f2d34] mb-6">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">{description}</p>
        
        <div>
          <p className="text-sm font-bold text-[#0f2d34] mb-4">
            Download the mobile app for {targetName} below
          </p>
          <div className="flex flex-wrap gap-4">
            <StoreBadge type="google" />
            <StoreBadge type="apple" />
          </div>
        </div>
      </div>
    </div>
  );
};