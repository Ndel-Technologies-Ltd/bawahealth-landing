import React from "react";
import mobileapp from "../assets/contact.png";
import { MobilePromoDownloadButton } from "./MobilePromoDownloadButton";

export const MobileAppPromo: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0f2d34] mb-16">
          Get to use our Mobile App
        </h2>

        <div className="bg-[#f2f7f9] rounded-[30px] overflow-hidden flex flex-col md:flex-row items-center border border-gray-50">
          <div className="w-full md:w-[45%] aspect-[4/3] overflow-hidden">
            <img
              src={mobileapp}
              alt="Happy doctor with phone"
              className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
            />
          </div>

          <div className="w-full md:w-[55%] p-10 md:p-16">
            <p className="text-[#0f2d34] text-xl leading-relaxed mb-12 font-medium opacity-90">
              Download and use our mobile app for easy access to medical services,
              booking appointments, managing profiles, chatting, and full control
              all in one place. Apps are available for patients, doctors, and
              hospital administrators.
            </p>

            <MobilePromoDownloadButton
              links={{
                playStore: "https://play.google.com/store/apps/details?id=your.app",
                appStore: "https://apps.apple.com/app/id123456789",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
