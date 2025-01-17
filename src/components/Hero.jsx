import React, { useState } from "react";
import { MapPin } from "lucide-react";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [deliveryType, setDeliveryType] = useState("delivery");

  return (
    <div className="flex  h-full items-end justify-between ">
      <div className="relative h-full w-1/2">
        <img
          src="/VisualImage.png"
          alt="Visual Sample"
          className="w-full absolute "
        />
      </div>

      <div className="w-1/2  flex flex-col items-stretch justify-center space-y-24">
        <div>
          <h1 className="text-[5rem] pr-10 text-right font-bold mb-8">
            Customize your
            <br /> own Diet
          </h1>
          <p className="text-gray-500 pr-10 text-2xl text-right font-bold mb-12">
            Tiffin Your AI-Powered Meal solution
          </p>
        </div>

        <div className="bg-gray-200 mr-10 rounded-2xl p-6 shadow-lg mb-16">
          <div className="flex text-2xl mb-12 mt-4 justify-center">
            <button
              className={`px-14 py-3 rounded-lg ${
                deliveryType === "delivery"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-gray-100"
              }`}
              onClick={() => setDeliveryType("delivery")}
            >
              🛵 Delivery
            </button>
            <button
              className={`px-14 py-3 rounded-lg ${
                deliveryType === "pickup"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-gray-100"
              }`}
              onClick={() => setDeliveryType("pickup")}
            >
              🏪 Pickup
            </button>
          </div>

          <div className="relative text-xl mb-6 mx-4">
            <MapPin className="absolute left-2 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter Your Location"
              className="w-full pl-10 pr-4 py-3 border rounded-lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-3 rounded-lg">
              Check Availability
            </button>
          </div>
        </div>
        <div className="mt-8 h-40 min-w-full text-2xl  rounded-tl-full  "></div>
        <div className="mt-8 absolute bottom-[-17px] right-0 w-2/3 text-2xl bg-yellow-200 rounded-tl-full justify-end  flex items-stretch ml-0 ">
          <div className="  px-4 py-12 flex h-auto flex-col items-center justify-center ">
            <p className="mb-1  text-center text-black font-medium">
              Please wait
            </p>
            <p className="text-center  text-black font-medium">
              Cooking Takes Time!!
            </p>
          </div>
          <div className="flex  rounded-l-[36px]  items-center w-2/3 bg-yellow-400 justify-center gap-8 text-black  ml-2 py-7">
            <TimeBox label="days" value="27" />
            <span className="text-4xl">:</span>
            <TimeBox label="hours" value="14" />
            <span className="text-4xl">:</span>
            <TimeBox label="minutes" value="09" />
            <span className="text-4xl">:</span>
            <TimeBox label="seconds" value="59" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-6xl">{value}</span>
    <span className="text-lg">{label}</span>
  </div>
);

export default Hero;
