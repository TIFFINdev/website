import React from 'react';
import { Instagram, Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 px-8 py-12">
      <div className="grid grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-4">ABOUT US</h3>
          <p>Learn More About us...</p>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2">
            <li>Meal Plans</li>
            <li>Nutrition Tracking</li>
            <li>Goal Setting</li>
            <li>Subscription Planning</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">CONTACT US</h3>
          <p>+91 98765 43678</p>
          <p>support@tiffindiet.in</p>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">LEGALS</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Food Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-8 border-t border-black/10">
        <div className="flex gap-4">
          <Instagram className="w-6 h-6 cursor-pointer" />
          <Twitter className="w-6 h-6 cursor-pointer" />
          <Youtube className="w-6 h-6 cursor-pointer" />
          <Facebook className="w-6 h-6 cursor-pointer" />
          <Linkedin className="w-6 h-6 cursor-pointer" />
        </div>
        
        <div className="flex items-center gap-4">
          <span>For Better Experience</span>
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            className="h-8"
          />
          <img
            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
            alt="Download on App Store"
            className="h-8"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded">
            🌍 India
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded">
            🌐 English
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;