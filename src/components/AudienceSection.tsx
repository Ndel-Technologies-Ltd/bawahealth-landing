import React from "react";
import { UnifiedDownloadButton } from "./StoreBadge";

export interface AudienceSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  isReversed?: boolean;
  storeLinks: {
    playStore?: string;
    appStore?: string;
  };
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({
  title,
  description,
  imageSrc,
  isReversed = false,
  storeLinks,
}) => {
  const targetName = title.replace(/^for\s+/i, "").toLowerCase();

  return (
    <section
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12 lg:gap-24 py-12`}
    >
      {/* Image Section */}
      <div className="flex-1 w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/10] bg-gray-50">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Text + CTA Section */}
      <div className="flex-1 w-full">
        <h3 className="mb-6 text-3xl font-bold text-[#0f2d34]">
          {title}
        </h3>

        <p className="mb-8 text-lg font-medium leading-relaxed text-gray-600">
          {description}
        </p>

        <div>
          <p className="mb-4 text-sm font-bold text-[#0f2d34]">
            Get the {targetName} app
          </p>

          <UnifiedDownloadButton links={storeLinks} />
        </div>
      </div>
    </section>
  );
};
