import React, { useState } from 'react';
import { Twitter, Facebook } from 'lucide-react';

function SignUp() {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    agreeToTerms: false
  });

//   const handleSubmit = (e: React.FormEvent) => {
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <span className="text-2xl font-bold text-purple-600">Ti🍇in</span> */}
            <img src="/logo.png" alt="Logo" className="h-8 inline-block text-2xl font-bold text-purple-600" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
            <a href="#" className="text-purple-600 font-medium">Sign Up</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sign In Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Sign in</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-500">or continue with</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="flex gap-4 justify-center">
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Twitter className="w-6 h-6 text-[#1DA1F2]" />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Facebook className="w-6 h-6 text-[#1877F2]" />
                    </button>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      checked={formData.agreeToTerms}
                      onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                      I agree to terms and conditions
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Sign in
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-purple-600 hover:text-purple-700">
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block w-1/2 bg-yellow-300 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80"
            alt="Fresh Salad"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;