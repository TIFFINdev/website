import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Award, ShieldCheck } from 'lucide-react';

const CertificateVerifier = () => {
  const [certificateId, setCertificateId] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (certificateId.trim()) {
      navigate(`/certificate/${certificateId.trim()}`);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl p-10 border border-gray-100">
        {/* Header Section */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#7842E4]/10 rounded-full">
              <ShieldCheck className="h-12 w-12 text-[#7842E4]" />
            </div>
          </div>
          
          <h2 className="text-3xl font-extrabold text-gray-900">
            Certificate Verification
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Verify the authenticity of your Tiffin certificate
          </p>
        </div>

        {/* Certificate ID Input */}
        <form onSubmit={handleSearch} className="space-y-6">
          <div>
            <label htmlFor="certificate-id" className="sr-only">
              Certificate ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="certificate-id"
                name="certificate-id"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#7842E4] focus:border-[#7842E4] focus:z-10 sm:text-sm"
                placeholder="Enter your Certificate ID"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#7842E4] hover:bg-[#6030D0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7842E4] transition duration-300 ease-in-out transform hover:scale-105"
            >
              Verify Certificate
            </button>
          </div>
        </form>

        {/* Additional Information */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            <span className="block mb-2">Can't find your certificate?</span>
            <a href="mailto:tiffin.india.official@gmail.com" className="text-[#7842E4] hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateVerifier;