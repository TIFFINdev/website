import React, { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className="relative lg:bg-cover min-w-screen bg-center  min-h-screen bg-no-repeat "
      style={{ backgroundImage: "url('../../images/bg_img_landpg.png')" }}
    >
      <div className="absolute bg-[rgb(0,0,0,0.35)] h-screen w-screen">
        <main className="flex flex-col items-start justify-start text-left px-4 lg:px-20">
          <div className="mt-[200px] lg:mt-[150px] border-l-[6px] lg:border-l-8 border-[#FFCD29] rounded-lg pl-6 py-4 w-full max-w-3xl">
            <h1 className="text-white text-[52px] lg:text-[100px] font-bold mb-4">
              Welcome Eliza!
            </h1>
            <p className="text-[#FFCB25] text-[36px] lg:text-[42px]">
              Basic Plan Selected
            </p>
          </div>

          <div className="mt-[180px] space-x-6 lg:space-x-10 flex">
            <div className="flex w-[400px] lg:w-[1200px]">
              <input
                type="text"
                className="flex-grow p-4 lg:text-3xl lg:px-10 text-lg lg:h-[76px] rounded-l-[22px] placeholder-[#828282]"
                placeholder="What was on your mind today?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="bg-[#FFCD29] text-white px-10 py-4 lg:px-20 rounded-r-[22px] font-semibold"></button>
            </div>
            <button className="flex-grow w-[100px] lg:w-44 bg-gradient-to-r from-[#5100F0] to-[#9465F2] text-white rounded-[22px] p-4 text-[16px] lg:text-[22px] font-[700]">
              AI DIET
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
