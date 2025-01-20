import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black pt-10">
      <div className="container mx-auto px-20 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* About Us Section */}
        <div>
          <h4 className="text-lg font-bold mb-5">ABOUT US</h4>
          <img src="/logo2.png" alt="" className='w-[80px] rounded-xl mb-2' />
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
            <a href="mailto:support@tiffinindia.in" className="hover:text-black">
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
        {/* Social Links and App Download */}
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg font-bold mb-5">Social Links</h4>
          <div className="flex space-x-3 mb-4">
            <a href="#" className="text-xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-xl"><i className="fab fa-telegram"></i></a>
            <a href="#" className="text-xl"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-xl"><i className="fab fa-linkedin"></i></a>
          </div>

          {/* <h4 className="text-lg font-bold mb-2">For Better Experience</h4> */}
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

      <div className="bg-yellow-400 text-black py-8 px-8 mt-10">
        <div className="container mx-auto px-4 flex justify-between">
          <p className="text-sm">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, and Content Policies.
            All trademarks are properties of respective owners 2024.
          </p>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                alt="India Flag"
                className="h-4"
              />
              <p>India</p>
            </div>
            <div className="flex items-center space-x-1 gap-5">
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
