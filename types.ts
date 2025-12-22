import React from 'react';

export interface StoreLinks {
  playStore?: string;
  appStore?: string;
}

export interface AudienceSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  isReversed?: boolean;
  storeLinks: StoreLinks;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
