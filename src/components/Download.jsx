import React from "react";

const Download = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:my-10 items-center justify-between px-6 md:px-28 py-12">
      {/* Left Section - Text and Store Buttons */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Coming Soon on Your Device
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center pt-8 gap-8">
          {/* Store Buttons */}
          <div className="flex flex-col gap-5">
            <a href="#">
              <img
                src="/applestore.png"
                alt="Download on the App Store"
                className="h-[73px] md:h-[91px]"
              />
            </a>
            <a href="#">
              <img
                src="/playstore.png"
                alt="Get it on Google Play"
                className="h-16 md:h-20"
              />
            </a>
          </div>

          {/* QR Code */}
          {/* <div className="flex items-center justify-center w-32 h-40 md:w-40 md:h-52 border border-gray-300 rounded-lg">
            <p className="text-gray-500 text-sm">
              QR Code Coming Soon
            </p>
          </div> */}
        </div>
      </div>

      {/* Right Section - App Screenshot */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="/demo.png"
          alt="App Screenshot"
          className="w-full max-w-md lg:max-w-lg rounded-3xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Download;
