import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';


const Hero = () => {
  const [location, setLocation] = useState("");
  const availableCities_delivery = [];
  const availableCities_pickup = [];
  const checkAvailability = () => {
    if (location.trim() === "") {
      // Input is empty
      toast.error("Input cannot be empty!", {
        position: "top-center",
      });
    }
    else {
      if (deliveryType == "delivery") {
        if (availableCities_delivery.includes(location.toLowerCase())) {
          // City is in the available cities array
          toast.success(`Wow, We are delivering in ${location.toLowerCase()}!`, {
            position: "top-center",
          });
        } else {
          // City is not in the array
          toast.error(`Sorry, we are not available in ${location.toLowerCase()}!`, {
            position: "top-center",
          });
        }
      }
      else {
        if (availableCities_pickup.includes(location.toLowerCase())) {
          // City is in the available cities array
          toast.success(`We provide pickup in ${location.toLowerCase()}!`, {
            position: "top-center",
          });
        } else {
          // City is not in the array
          toast.error(`Sorry, we are not available in ${location.toLowerCase()}!`, {
            position: "top-center",
          });
        }
      }
    }
  };

  const [deliveryType, setDeliveryType] = useState("delivery");
  const targetDate = new Date("2025-04-26T00:00:00"); // Example target date

  // State to store the remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Effect to calculate time remaining and update every second
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
        // Stop countdown when target date is reached
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Update the countdown every second
    const interval = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex h-full items-start justify-between">
      <div className="relative h-full w-1/2">
        {/* Optional image or other content */}
      </div>

      <div className="w-1/2 flex flex-col items-stretch justify-center mt-3">
        <div>
          <h1 className="text-[60px] pr-10 text-right font-bold mt-3">
            Customize your
          </h1>
          <h1 className="text-[60px] pr-10 text-right font-bold">
            own Diet
          </h1>
          <p className="text-gray-500 pr-10 text-2xl text-right font-bold mb-10">
            Tiffin Your AI-Powered Meal solution
          </p>
        </div>

        <div className="bg-gray-100 mr-10 rounded-2xl p-5 mb-12">
          <div className="flex text-xl mb-12 mt-4 justify-center">
            <button
              className={`px-14 py-3 rounded-lg mr-5 ${deliveryType === "delivery"
                ? "bg-purple-200 text-purple-700"
                : "bg-white"
                }`}
              onClick={() => setDeliveryType("delivery")}
            >
              🛵 Delivery
            </button>
            <button
              className={`px-14 py-3 rounded-lg ${deliveryType === "pickup"
                ? "bg-purple-200 text-purple-700"
                : "bg-white"
                }`}
              onClick={() => setDeliveryType("pickup")}
            >
              🏪 Pickup
            </button>
          </div>

          <div className="relative text-lg mb-2 mx-4">
            <MapPin className="absolute left-2 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter Your Location"
              className="w-full pl-10 pr-4 py-3 border rounded-lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button
              onClick={checkAvailability} // Call the function on click
              className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-3 rounded-lg"
            >
              Check Availability
            </button>
          </div>
        </div>

        {/* Countdown Timer Section */}
        <div className="absolute bottom-0 right-0 text-[15px] bg-yellow-200 rounded-tl-full flex item-end w-[60%] h-[100px]">
          <div className="px-10 py-5 flex h-[100px] flex-col items-end justify-center w-[35%]">
            <p className="text-center text-black font-bold text-2xl">
              Please wait
            </p>
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
      </div>
      <ToastContainer />
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-3xl">{value}</span>
    <span className="text-lg">{label}</span>
  </div>
);

export default Hero;
