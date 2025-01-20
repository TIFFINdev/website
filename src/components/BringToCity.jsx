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
    const loadingToast = toast.loading("Submitting your feedback...",{
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
      // Hide loading toast and show error message
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
    <div className="flex items-center justify-between px-8 py-12 bg-gray-50">
      <div className="w-[55%] flex items-center justify-between">
        <Animation />
      </div>

      <div className="w-1/2 pl-12 flex flex-col items-between justify-between mt-5">
        <h2 className="text-5xl font-bold mb-5 ">
          Bring <span className="text-yellow-400">TIFFIN</span> to Your City
        </h2>
        <p className="text-gray-700 mb-10 text-[22px]">
          Register below to show interest in our work on scale of 5
        </p>

        <div className="flex gap-12 mb-10 ">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-10 h-10 cursor-pointer ${
                star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <p className="text-gray-500 mb-6 text-[18px]">
          Kindly take a moment to tell us what are your expectations
        </p>

        <div className="flex mb-3 items-center justify-center">
          <input
            type="text"
            className="w-[48%] pl-3 pr-4 py-3 border rounded-lg"
            placeholder="Mail Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MapPin className="relative left-8 top-0 text-gray-400 z" />
          <input
            type="text"
            placeholder="Bring TIFFIN to ?"
            className="w-[48%] pl-10 pr-4 py-3 border rounded-lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <textarea
          className="w-full bg-gray-100 p-4 border rounded-lg mb-6 text-[15px] "
          placeholder="Have anything on your mind?"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
        />

        <button
          className="bg-purple-900 font-semibold text-white text-xl px-12 py-4 rounded-lg"
          onClick={handleSubmit}
        >
          Submit now
        </button>
      </div>
    </div>
  );
};

export default BringToCity;
