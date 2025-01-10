import React from "react";
import { Instagram, Twitter, Youtube, Facebook, Linkedin } from "lucide-react";
import { BsTelegram } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" ">
      <div className="px-8 py-12 grid grid-cols-5 gap-8 mb-8">
        <div>
          <h3 className="font-semibold mb-4 text-2xl">ABOUT US</h3>
          <p>Learn More About us...</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-2xl">SERVICES</h3>
          <ul className="space-y-2">
            <li>Meal Plans</li>
            <li>Nutrition Tracking</li>
            <li>Goal Setting</li>
            <li>Subscription Planning</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-2xl">CONTACT US</h3>
          <p>+91 98765 43678</p>
          <p>support@tiffindiet.in</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-2xl">LEGALS</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Food Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl">Social Links</p>
          <div className="flex justify-between items-center py-8 ">
            <div className="flex gap-4">
              <div className="bg-black rounded-3xl h-9 w-9 flex items-center justify-center ">
                <Instagram className="w-6 h-6 cursor-pointer text-white " />
              </div>
              <div className="bg-black rounded-3xl h-9 w-9 flex items-center justify-center ">
                <Twitter className="w-6 h-6 cursor-pointer text-white fill-white " />
              </div>

              <BsTelegram className="w-9 h-9 cursor-pointer  " />

              <div className="bg-black rounded-3xl h-9 w-9 flex items-center justify-center ">
                <Youtube className="w-6 h-6 cursor-pointer text-white " />
              </div>
              <div className="bg-black rounded-3xl h-9 w-9 flex items-center justify-center ">
                <Linkedin className="w-6 h-6 cursor-pointer text-white " />
              </div>
            </div>
          </div>
          <span className="text-2xl">For Better Experience</span>
          <div className="flex items-center py-8 gap-4">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-11"
            />
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="Download on App Store"
              className="h-8"
            />
          </div>
        </div>
      </div>
      <div className="flex w-screen items-center gap-4 justify-between pl-8 pr-28 py-6 bg-yellow-400">
        <div>
          <p>
            By continuing past this page, you agree to or Terms of Service,
            Cookie Policy and Content Policies. All trademarks are properties of
            respective owners 2024.
            <br />
            2024 Tiffin Ltd. All rights reserved
          </p>
        </div>
        <div className="flex gap-12">
          <button className="flex bg-white  shadow-2xl shadow-black font-semibold items-center gap-2 px-4 py-2 border rounded">
            🌍 India <FaChevronDown />
          </button>
          <button className="flex  bg-white  shadow-2xl shadow-slate-950 font-semibold items-center gap-2 px-4 py-2 border rounded">
            🌐 English <FaChevronDown />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
