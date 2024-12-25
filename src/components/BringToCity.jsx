import React, { useState } from 'react';
import { Star } from 'lucide-react';

const BringToCity = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-center justify-between px-8 py-12 bg-gray-50">
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=500"
          alt="City illustration"
          className="w-full h-auto"
        />
      </div>
      
      <div className="w-1/2 pl-12">
        <h2 className="text-4xl font-bold mb-4">
          Bring <span className="text-yellow-400">TIFFIN</span> to Your City
        </h2>
        <p className="text-gray-600 mb-4">
          Register below to show interest in our work and share feedback
        </p>
        
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-6 h-6 cursor-pointer ${
                star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        
        <textarea
          className="w-full p-4 border rounded-lg mb-4"
          placeholder="Kindly take a moment to tell us what are your expectations"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
        />
        
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">
          Submit now
        </button>
      </div>
    </div>
  );
};

export default BringToCity;