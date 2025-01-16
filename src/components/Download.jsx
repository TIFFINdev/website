import React from "react";

const Download = () => {
  return (
    <div className="flex items-center justify-between px-28 py-12">
      <div className=" w-1/2">
        <h2 className="text-4xl font-bold mb-4">
          Download to use effectively!!
        </h2>
        <div className="flex pt-8 gap-16">
          <div className=" gap-4 mb-4">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-32"
            />
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="Download on App Store"
              className="h-20  w-[115%]"
            />
          </div>
          <div className=" flex w-40 h-52 pt-12 ">
            {/* QR code would go here - using a placeholder */}
            <div className="w-full h-full border-2 border-black grid place-items-center">
              QR Code
            </div>
          </div>
        </div>
      </div>

      <img
        src="src\assets\app-screenshot.png"
        alt="App screenshot 2"
        className="w-128 rounded-3xl "
      />
    </div>
  );
};

export default Download;
