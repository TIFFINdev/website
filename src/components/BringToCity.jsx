import React, { useState } from "react";
import { Star } from "lucide-react";
import { MapPin } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import Animation from "./Animation";

const BringToCity = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async () => {
    const loadingToast = toast.loading("Submitting your feedback...", {
      position: "top-center",
    });

    try {
      const response = await axios.post("https://tiffin-backend.onrender.com/submit", {
        feedback,
        rating,
        email,
        city,
      });
      toast.update(loadingToast, {
        render: "Feedback submitted successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        position: "top-center",
      });
      setFeedback("");
      setRating(0);
      setEmail("");
      setCity("");
    } catch (error) {
      toast.update(loadingToast, {
        render: "Failed to submit feedback. Try again later.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 lg:py-12 lg:pt-20">
      {/* Animation Section */}
      <div className="w-full lg:w-[55%] mb-10 lg:mb-0 flex items-center justify-center lg:justify-between">
        <Animation />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col items-center lg:items-start justify-between">
        <h2 className="text-3xl lg:text-5xl font-bold mb-5 text-center lg:text-left">
          Bring <span className="text-yellow-400">TIFFIN</span> to Your City
        </h2>
        <p className="text-gray-700 mb-6 lg:mb-10 text-base lg:text-[22px] text-center lg:text-left">
          Register below to show interest in our work on a scale of 5
        </p>

        {/* Rating Stars */}
        <div className="flex gap-4 lg:gap-12 mb-6 lg:mb-10 justify-center lg:justify-start">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-8 h-8 lg:w-10 lg:h-10 cursor-pointer ${
                star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <p className="text-gray-500 mb-4 lg:mb-6 text-sm lg:text-[18px] text-center lg:text-left">
          Kindly take a moment to tell us what your expectations are.
        </p>

        {/* Input Fields */}
        <div className="flex flex-col lg:flex-row gap-4 mb-3 items-center w-full">
          <div className="relative w-full lg:w-[48%]">
            <input
              type="text"
              className="w-full pl-3 pr-4 py-3 border rounded-lg"
              placeholder="Mail Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative w-full lg:w-[48%]">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Bring TIFFIN to?"
              className="w-full pl-10 pr-4 py-3 border rounded-lg"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
        </div>

        <textarea
          className="w-full bg-gray-100 p-4 border rounded-lg mb-6 text-sm lg:text-[15px]"
          placeholder="Have anything on your mind?"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
          required
        />

        <button
          className="bg-purple-900 font-semibold text-white text-base lg:text-xl px-6 lg:px-12 py-3 lg:py-4 rounded-lg"
          onClick={handleSubmit}
        >
          Submit now
        </button>
      </div>
    </div>
  );
};

export default BringToCity;
