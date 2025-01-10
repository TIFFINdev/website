import React, { useState } from "react";
import { Star } from "lucide-react";

const BringToCity = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-start justify-between px-8 py-12 bg-gray-50">
      <div className="w-1/2">
        <img
          src="/loc-image.png"
          alt="City illustration"
          className="w-full h-auto"
        />
      </div>

      <div className="w-1/2 pl-12 ">
        <h2 className="text-7xl font-bold mb-16 ">
          Bring <span className="text-yellow-400">TIFFIN</span> to Your City
        </h2>
        <p className="text-gray-600 mb-16 text-[27px]">
          Register below to show interest in our work and share feedback
        </p>

        <div className="flex gap-12 mb-16 ">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-12 h-12 cursor-pointer ${
                star <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <p className="text-gray-600 mb-6 text-[27px]">
          Kindly take a moment to tell us what are your expectations
        </p>

        <textarea
          className="w-full bg-gray-200 p-4 border rounded-lg mb-10 text-[27px] "
          placeholder=""
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
        />

        <button className="bg-purple-900 font-semibold text-white text-2xl px-12 py-4 rounded-lg">
          Submit now
        </button>
      </div>
    </div>
  );
};

export default BringToCity;
