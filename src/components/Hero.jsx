import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [deliveryType, setDeliveryType] = useState('delivery');

  return (
    <div className="flex items-center justify-between mb-10">
      <div className="relative w-1/2">
        <img
            src='/VisualImage.png'
            alt='Visual Sample'
            className=''
        />
        {/* <img 
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500"
          alt="Healthy meal"
          className="rounded-full w-[400px] h-[400px] object-cover"
        />
        <img 
          src="https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&q=80&w=100"
          alt="Lemon"
          className="absolute top-0 right-0 w-24 h-24 object-cover"
        />
        <img 
          src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&q=80&w=100"
          alt="Tomatoes"
          className="absolute bottom-0 left-0 w-24 h-24 object-cover"
        /> */}
      </div>
      
      <div className="w-1/2 px-10">
        <h1 className="text-6xl text-right font-bold mb-4">Customize your<br/> own Diet</h1>
        <p className="text-gray-500 text-right font-bold mb-8">Tiffin Your AI-Powered Meal solution</p>
        
        <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
          <div className="flex gap-4 mb-4 justify-center">
            <button
              className={`px-4 py-2 rounded-lg ${
                deliveryType === 'delivery' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100'
              }`}
              onClick={() => setDeliveryType('delivery')}
            >
              🛵 Delivery
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                deliveryType === 'pickup' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100'
              }`}
              onClick={() => setDeliveryType('pickup')}
            >
              🏪 Pickup
            </button>
          </div>
          
          <div className="relative">
            <MapPin className="absolute left-2 top-2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter Your Location"
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="absolute top-1 right-1 bg-purple-600 text-white px-4 py-1 rounded-lg">
              Check Availability
            </button>
          </div>
        </div>

        <div className="mt-8 bg-yellow-400 rounded-l-full flex items-center">
        <div className="bg-yellow-200 rounded-l-full px-5 py-5 flex h-auto flex-col items-center justify-center ">
            <p className="mb-1 text-lg text-center text-black font-medium">Please wait</p>
            <p className="text-center text-base text-black font-medium">Cooking Takes Time!!</p>
        </div>
        <div className="flex justify-center gap-8 text-black font-medium ml-6">
            <TimeBox label="days" value="27" />
            <span className="text-3xl">:</span>
            <TimeBox label="hours" value="14" />
            <span className="text-3xl">:</span>
            <TimeBox label="minutes" value="09" />
            <span className="text-3xl">:</span>
            <TimeBox label="seconds" value="59" />
        </div>
        </div>
      </div>
    </div>
  );
};

const TimeBox = ({ label, value }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl">{value}</span>
      <span className="text-sm">{label}</span>
    </div>
);
  

export default Hero;