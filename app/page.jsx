"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { IoKeySharp } from "react-icons/io5";
import Image from "next/image";
import Logo from "@/public/logo.jpg";
import LeftSection from "@/components/LeftSection";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("SAAS");
  const router = useRouter(); // Initialize the router

  const handleLoginClick = () => {
    router.push("/repositories"); // Navigate to the /repositories page
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="hidden md:block w-1/2 bg-gray-50">
        <LeftSection />
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-8 w-full md:w-1/2">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-6">
          <Image src={Logo} alt="CodeAnt AI Logo" width={60} height={60} />
          <h1 className="text-2xl font-medium mt-2">Welcome to CodeAnt AI</h1>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center mb-6 w-full">
          <button
            className={`px-6 py-2 rounded-lg w-1/2 ${
              activeTab === "SAAS"
                ? "bg-blue-500 text-white font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("SAAS")}
          >
            SAAS
          </button>
          <button
            className={`px-6 py-2 rounded-lg w-1/2 ${
              activeTab === "Self Hosted"
                ? "bg-blue-500 text-white font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("Self Hosted")}
          >
            Self Hosted
          </button>
        </div>

        {/* Login Options */}
        {activeTab === "SAAS" && (
          <div className="space-y-4 w-full">
            <button
              onClick={handleLoginClick}
              className="flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-200"
            >
              <FaGithub className="mr-4 text-gray-800" />
              <span className="text-black">Sign in with GitHub</span>
            </button>
            <button
              onClick={handleLoginClick}
              className="flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-200"
            >
              <FaBitbucket className="mr-4 text-blue-500" />
              <span className="text-black">Sign in with Bitbucket</span>
            </button>
            <button
              onClick={handleLoginClick}
              className="flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-200"
            >
              <VscAzure className="mr-4 text-blue-700" />
              <span className="text-black">Sign in with Azure DevOps</span>
            </button>
            <button
              onClick={handleLoginClick}
              className="flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-200"
            >
              <FaGitlab className="mr-4 text-orange-600" />
              <span className="text-black">Sign in with GitLab</span>
            </button>
          </div>
        )}

        {activeTab === "Self Hosted" && (
          <div className="space-y-4 w-full">
            <button
              onClick={handleLoginClick}
              className="flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-200"
            >
              <FaGitlab className="mr-4 text-orange-600" />
              <span className="text-black">Self Hosted GitLab</span>
            </button>
            <button
              onClick={handleLoginClick}
              className="flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-200"
            >
              <IoKeySharp className="mr-4 text-gray-600" />
              <span className="text-black">Sign in with SSO</span>
            </button>
          </div>
        )}

        {/* Privacy Notice */}
        <p className="text-center text-gray-500 text-sm mt-6">
          By signing up you agree to the{" "}
          <a href="/privacy-policy" className="text-black font-semibold hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
