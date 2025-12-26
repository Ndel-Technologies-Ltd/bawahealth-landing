import React from "react";
import appStoreLogo from "../assets/appstore.png";
import playStoreLogo from "../assets/playstore.png";

interface StoreLinks {
  playStore?: string;
  appStore?: string;
}

interface UnifiedDownloadButtonProps {
  links: StoreLinks;
}

export const UnifiedDownloadButton: React.FC<UnifiedDownloadButtonProps> = ({
  links,
}) => {
  const ua = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(ua);
  const isAndroid = /android/.test(ua);

  const handleDownload = () => {
    if (isIOS && links.appStore) {
      window.location.href = links.appStore;
      return;
    }

    if (isAndroid && links.playStore) {
      window.location.href = links.playStore;
      return;
    }

    // Desktop fallback
    if (links.playStore) {
      window.open(links.playStore, "_blank");
    } else if (links.appStore) {
      window.open(links.appStore, "_blank");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full
                 transition-all duration-300 shadow-lg hover:shadow-xl
                 hover:scale-[1.02] active:scale-95"
    >
      {/* App Store Logo */}
      <img
        src={appStoreLogo}
        alt="Download on the App Store"
        className="h-6 w-auto object-contain"
      />

      {/* Separator */}
      <span className="h-6 w-px bg-white/40" />

      {/* Play Store Logo */}
      <img
        src={playStoreLogo}
        alt="Get it on Google Play"
        className="h-6 w-auto object-contain"
      />

      <span className="ml-2 font-semibold text-base tracking-tight whitespace-nowrap">
        Download App
      </span>
    </button>
  );
};
