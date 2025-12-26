import React, { useState, useRef, useEffect } from "react";
import appStoreLogo from "../assets/appstore.png";
import playStoreLogo from "../assets/playstore.png";

interface StoreLinks {
  playStore?: string;
  appStore?: string;
}

interface MobilePromoDownloadButtonProps {
  links: StoreLinks;
}

export const MobilePromoDownloadButton: React.FC<MobilePromoDownloadButtonProps> = ({ links }) => {
  const [open, setOpen] = useState(false);
  const [activeOption, setActiveOption] = useState<null | "doctor" | "patient" | "admin">(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const ua = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(ua);
  const isAndroid = /android/.test(ua);

  const handleDownload = (role: "doctor" | "patient" | "admin") => {
    let url: string | undefined;

    switch (role) {
      case "doctor":
      case "patient":
        url = isIOS ? links.appStore : links.playStore;
        break;
      case "admin":
        url = isIOS
          ? "https://apps.apple.com/app/id_admin_portal"
          : "https://play.google.com/store/apps/details?id=admin_portal";
        break;
    }

    if (!url) return;

    if (isIOS || isAndroid) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }

    setOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dropdown button class helper
  const getButtonClass = (option: "doctor" | "patient" | "admin") => `
    w-full text-left px-4 py-2 
    hover:bg-[#001f4d] hover:text-white 
    focus:bg-[#001f4d] focus:text-white 
    active:bg-[#001f4d] active:text-white
    ${activeOption === option ? "bg-[#001f4d] text-white" : ""}
  `;

  return (
    <div className="relative inline-block w-full lg:w-auto text-left" ref={dropdownRef}>
      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-4 w-full lg:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-black text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-95"
      >
        <img src={appStoreLogo} alt="App Store" className="h-6 w-auto object-contain" />
        <span className="hidden lg:block h-6 w-px bg-white/40" />
        <img src={playStoreLogo} alt="Play Store" className="h-6 w-auto object-contain" />
        <span className="ml-2 font-semibold text-base tracking-tight whitespace-nowrap">
          Download App
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`
            absolute z-20 overflow-hidden rounded-md shadow-lg
            bg-white text-black
            w-full lg:w-56
            left-0 top-0 lg:left-full lg:top-0 lg:ml-2
            transform -translate-y-full lg:translate-y-0
          `}
        >
          {/* Doctor */}
          <button
            onClick={() => handleDownload("doctor")}
            onTouchStart={() => setActiveOption("doctor")}
            onTouchEnd={() => setActiveOption(null)}
            className={getButtonClass("doctor")}
          >
            Doctor
          </button>

          {/* Patient */}
          <button
            onClick={() => handleDownload("patient")}
            onTouchStart={() => setActiveOption("patient")}
            onTouchEnd={() => setActiveOption(null)}
            className={getButtonClass("patient")}
          >
            Patient
          </button>

          {/* Admin */}
          <button
            onClick={() => handleDownload("admin")}
            onTouchStart={() => setActiveOption("admin")}
            onTouchEnd={() => setActiveOption(null)}
            className={getButtonClass("admin")}
          >
            Hospital Admin Portal
          </button>
        </div>
      )}
    </div>
  );
};
