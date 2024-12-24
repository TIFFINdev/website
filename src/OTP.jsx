import React, { useState } from 'react';

function OTPPage() {
  const [otp, setOtp] = useState('');
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP submitted:', otp);
  };

  const handleResend = () => {
    console.log('OTP resent');
    setIsResendDisabled(true);
    setTimeout(() => setIsResendDisabled(false), 30000); // Enable resend after 30 seconds
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8 inline-block text-2xl font-bold text-purple-600" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* OTP Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Enter OTP</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      One-Time Password
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      className={`text-sm font-medium text-purple-600 hover:text-purple-700 ${isResendDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={handleResend}
                      disabled={isResendDisabled}
                    >
                      Resend OTP
                    </button>
                    {isResendDisabled && <span className="text-sm text-gray-500">Wait 30 seconds</span>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Verify OTP
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Didn't receive the OTP? <a href="#" className="text-purple-600 hover:text-purple-700">Contact support</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block w-1/2 relative overflow-hidden">
          <img
            src="/OTPImg.jpg"
            alt="Verification Illustration"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
}

export default OTPPage;
