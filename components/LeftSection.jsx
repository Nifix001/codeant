import Image from "next/image";
import Logo from "@/public/logo.jpg";

export default function LeftSection() {
    return (
      <div className="relative flex flex-col items-start justify-center h-full bg-white p-10">
        {/* Top Card */}
        <div className="w-4/5 bg-white shadow-lg rounded-2xl p-4 flex flex-col space-y-4 relative">
          <div className="flex items-center space-x-2">
            {/* Icon */}
            <div className="rounded-full">
            <Image src={Logo} alt="CodeAnt AI Logo" width={30} height={30} />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              AI to Detect & Autofix Bad Code
            </h2>
          </div>
          <hr />
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">30+</p>
              <p className="text-sm text-gray-600">Language Support</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">10K+</p>
              <p className="text-sm text-gray-600">Developers</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">100K+</p>
              <p className="text-sm text-gray-600">Hours Saved</p>
            </div>
          </div>
  
          {/* Bottom Card */}
          <div className="absolute bottom-[-110px] right-[-10px] w-72 bg-white shadow-lg rounded-xl p-4">
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className="bg-purple-100 text-purple-500 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 12V6a1 1 0 011-1h1a1 1 0 011 1v6h2l-3 3-3-3h2z"
                  />
                </svg>
              </div>
              {/* Content */}
              <div>
                <p className="text-sm text-gray-600">Issues Fixed</p>
                <p className="text-2xl font-semibold text-gray-800">500K+</p>
              </div>
            </div>
            {/* Growth */}
            <div className="mt-4 text-sm text-green-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7M5 10h14"
                />
              </svg>
              <span className="ml-1">14% this week</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  