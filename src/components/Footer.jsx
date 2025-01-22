import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black pt-10 sm:mb-0">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* About Us Section */}
        <div>
          <h4 className="text-lg font-bold mb-5">ABOUT US</h4>
          <img
            src="/logo2.png"
            alt="Logo"
            className="w-[80px] rounded-xl mb-2"
          />
          <p className="text-gray-600">Learn More About us.</p>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-lg font-bold mb-5">SERVICES</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Meal Plans</li>
            <li>Nutrition Tracking</li>
            <li>Goal Setting</li>
            <li>Subscriptions Planning</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="text-lg font-bold mb-5">CONTACT US</h4>
          <p className="text-gray-600">+91 98765 45678</p>
          <p className="text-gray-600">
            <a
              href="mailto:support@tiffinindia.in"
              className="hover:text-black"
            >
              support@tiffinindia.in
            </a>
          </p>
        </div>

        {/* Legals Section */}
        <div>
          <h4 className="text-lg font-bold mb-5">LEGALS</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Privacy Policy</li>
            <li>Food Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        {/* Social Links and App Download */}
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg font-bold mb-5">Social Links</h4>
          <div className="flex space-x-3 mb-4">
            <a href="#" className="text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <h4 className="text-lg font-bold mb-2">Dropping soon on</h4>
          <div className="flex flex-col items-center justify-center gap-5 w-full">
            <a href="#">
              <img
                src="/playstore.png"
                alt="Google Play"
                className="w-[70%] object-contain mx-auto"
              />
            </a>
            <a href="#">
              <img
                src="/applestore.png"
                alt="App Store"
                className="w-[70%] object-contain mx-auto"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="sm:bg-yellow-400 bg-yellow-200 text-black py-8 px-4 md:px-8 mt-20 pb-[165px] sm:py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, and Content Policies. All trademarks are properties
            of respective owners 2024.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                alt="India Flag"
                className="h-4"
              />
              <p>India</p>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-globe"></i>
              <p>English</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
