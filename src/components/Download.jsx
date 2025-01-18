import React from "react";

const Download = () => {
  return (
    <div className="flex items-center justify-between px-28 py-12">
      <div className=" w-1/2">
        <h2 className="text-4xl font-bold mb-4">
          Comming soon on your Device
        </h2>
        <div className="flex pt-8 gap-16">
          <div className="flex flex-col justify-end gap-5">
            <img
              src="/applestore.png"
              alt="Get it on Google Play"
              className="h-20"
            />
            <img
              src="/playstore.png"
              alt="Download on App Store"
              className="h-20 ml-[2px]"
            />
          </div>
          <div className=" flex w-40 h-52 pt-12 ">
            {/* QR code would go here - using a placeholder */}
            <div className="w-full h-full  place-items-center">
              {/* QR Code */}
            </div>
          </div>
        </div>
      </div>

      <img
        src="\demo.png"
        alt="App screenshot 2"
        className="w-128 rounded-3xl w-[600px]" 
      />
    </div>
  );
};

export default Download;
