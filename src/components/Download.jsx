import React from 'react';

const Download = () => {
  return (
    <div className="flex items-center justify-between px-8 py-12">
      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-4">Download to use effectively!!</h2>
        <div className="flex gap-4 mb-4">
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            className="h-16"
          />
          <img
            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
            alt="Download on App Store"
            className="h-16"
          />
        </div>
        <div className="w-32 h-32">
          {/* QR code would go here - using a placeholder */}
          <div className="w-full h-full border-2 border-black grid place-items-center">
            QR Code
          </div>
        </div>
      </div>
      
      <div className="w-1/2 flex justify-end gap-4">
        <img
          src="https://images.unsplash.com/photo-1580654843061-8c90a9585fdf?auto=format&fit=crop&q=80&w=300"
          alt="App screenshot 1"
          className="w-64 rounded-3xl shadow-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1580654843061-8c90a9585fdf?auto=format&fit=crop&q=80&w=300"
          alt="App screenshot 2"
          className="w-64 rounded-3xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Download;