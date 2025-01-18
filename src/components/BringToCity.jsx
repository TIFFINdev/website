import React, { useState } from "react";
import { Star } from "lucide-react";
import Animation from "./Animation";
const BringToCity = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-center justify-between px-8 py-12 bg-gray-50">
      <div className="w-[55%] flex items-center justify-between">
        
        <Animation/>
      </div>

      <div className="w-1/2 pl-12 flex flex-col items-between justify-between mt-5">
        <h2 className="text-5xl font-bold mb-5 ">
          Bring <span className="text-yellow-400">TIFFIN</span> to Your City
        </h2>
        <p className="text-gray-600 mb-10 text-[22px]">
          Register below to show interest in our work and share feedback
        </p>

        <div className="flex gap-12 mb-10 ">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-10 h-10 cursor-pointer ${
                star <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <p className="text-gray-600 mb-6 text-[22px]">
          Kindly take a moment to tell us what are your expectations
        </p>

        <textarea
          className="w-full bg-gray-200 p-4 border rounded-lg mb-10 text-[18px] "
          placeholder=""
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
        />

        <button className="bg-purple-900 font-semibold text-white text-xl px-12 py-4 rounded-lg">
          Submit now
        </button>
      </div>
    </div>
  );
};

export default BringToCity;
