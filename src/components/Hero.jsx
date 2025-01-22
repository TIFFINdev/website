import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';

const Hero = () => {
  const [location, setLocation] = useState("");
  const availableCities_delivery = [];
  const availableCities_pickup = [];
  const checkAvailability = () => {
    if (location.trim() === "") {
      toast.error("Input cannot be empty!", {
        position: "top-center",
      });
    }
    else {
      if (deliveryType == "delivery") {
        if (availableCities_delivery.includes(location.toLowerCase())) {
          toast.success(`Hey, We are delivering in ${location.toLowerCase()}!`, {
            position: "top-center",
          });
        } else {
          toast.error(`Sorry, we are not delivering in ${location.toLowerCase()}!`, {
            position: "top-center",
          });
        }
      }
      else {
        if (availableCities_pickup.includes(location.toLowerCase())) {
          toast.success(`We provide pickup in ${location.toLowerCase()}!`, {
            position: "top-center",
          });
        } else {
          toast.error(`Sorry, we are not available in ${location.toLowerCase()}!`, {
            position: "top-center",
          });
        }
      }
    }
  };

  const [deliveryType, setDeliveryType] = useState("delivery");
  const targetDate = new Date("2025-04-26T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col lg:flex-row min-h-[90%]  w-full items-center justify-between p-4">
      <div className="relative w-full lg:w-1/2 h-full items-center justify-center">
        {/* Optional image or other content */}
        <div className="lg:hidden flex items-center justify-end pt-8">
          <img src="/plate.png" alt="" className="w-[300px]" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-stretch justify-center">
        <div className="text-center lg:text-right justify-between">
          <h1 className="text-4xl lg:text-[60px] lg:pr-10 font-bold mb-5">
            Customize your
          </h1>
          <h1 className="text-4xl lg:text-[60px] lg:pr-10 font-bold mb-5">
            own Diet
          </h1>
          <p className="text-gray-500 lg:pr-10 text-xl lg:text-2xl font-bold mb-6 lg:mb-10">
            Tiffin Your AI-Powered Meal solution
          </p>
        </div>

        <div className="bg-gray-100 mx-4 lg:mr-10 rounded-2xl p-4 lg:p-5 mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row text-lg lg:text-xl mb-8 lg:mb-12 mt-4 justify-center gap-4 sm:gap-5">
            <button
              className={`px-8 lg:px-14 py-3 rounded-lg ${deliveryType === "delivery"
                ? "bg-purple-200 text-purple-700"
                : "bg-white"
                }`}
              onClick={() => setDeliveryType("delivery")}
            >
              🛵 Delivery
            </button>
            <button
              className={`px-8 lg:px-14 py-3 rounded-lg ${deliveryType === "pickup"
                ? "bg-purple-200 text-purple-700"
                : "bg-white"
                }`}
              onClick={() => setDeliveryType("pickup")}
            >
              🏪 Pickup
            </button>
          </div>

          <div className="relative text-base lg:text-lg mb-2 mx-2 lg:mx-4">
            <MapPin className="absolute left-2 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Your Location"
              className="w-full pl-10 pr-24 sm:pr-32 py-3 border rounded-lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button
              onClick={checkAvailability}
              className="absolute top-[3px] right-[3px] bg-purple-600 text-white px-2 sm:px-4 py-3 rounded-lg text-sm sm:text-base"
            >
              Check Availability
            </button>
          </div>
        </div>

        {/* Countdown Timer Section */}
        <div className="z-100">
          <div className="hidden lg:flex absolute bottom-0 right-0 text-[15px] bg-yellow-200 rounded-tl-full items-end w-[60%] h-[100px]">
            <div className="px-10 py-5 flex h-[100px] flex-col items-end justify-center w-[35%]">
              <p className="text-center text-black font-bold text-2xl">Please wait</p>
              <p className="text-center text-black font-bold text-[20px]">
                Cooking Takes Time!!
              </p>
            </div>
            <div className="absolute bottom-0 right-0 h-[110px] flex rounded-l-[36px] items-center w-[65%] bg-yellow-400 justify-center gap-8 text-black font-bold ml-2">
              <TimeBox label="days" value={timeLeft.days} />
              <span className="text-4xl">:</span>
              <TimeBox label="hours" value={timeLeft.hours} />
              <span className="text-4xl">:</span>
              <TimeBox label="minutes" value={timeLeft.minutes} />
              <span className="text-4xl">:</span>
              <TimeBox label="seconds" value={timeLeft.seconds} />
            </div>
          </div>
          <div className="flex lg:hidden fixed bottom-0 right-0 left-0 text-[15px] bg-yellow-200 flex-col items-center justify-center w-full h-auto z-50">
            <div className="px-4 py-3 flex flex-col items-center justify-center w-full ">
              <p className="text-center text-black font-bold text-xl">Please wait</p>
              <p className="text-center text-black font-bold text-lg">
                Cooking Takes Time!!
              </p>
            </div>
            <div className="w-full h-[80px] flex items-center justify-center bg-yellow-400 gap-4 text-black font-bold ">
              <TimeBox label="days" value={timeLeft.days} />
              <span className="text-2xl">:</span>
              <TimeBox label="hours" value={timeLeft.hours} />
              <span className="text-2xl">:</span>
              <TimeBox label="minutes" value={timeLeft.minutes} />
              <span className="text-2xl">:</span>
              <TimeBox label="seconds" value={timeLeft.seconds} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl lg:text-3xl">{value}</span>
    <span className="text-base lg:text-lg">{label}</span>
  </div>
);

export default Hero;