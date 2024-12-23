"use client";

import Sidebar from "@/components/Sidebar";
import { repositories } from "@/data/repositories";
import { useState } from "react";
import { RefreshCw, Plus, Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/logo.jpg";

export default function Repositories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filter repositories based on the search term
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to refresh the page
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" width={40} height={40} />
          <h1 className="text-xl font-bold">Repositories</h1>
        </div>
        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:fixed top-0 left-0 bg-white z-20 md:w-60 ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 w-full md:h-screen h-[50vh] transition-transform duration-300 ease-in-out`}
      >
        <Sidebar />
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:ml-60">
        {/* Header */}
        <header className="mb-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Repositories</h1>
            <div className="flex items-center gap-2">
              <button
                className="flex items-center gap-2 text-gray-700 border p-0 md:px-4 md:py-2 rounded hover:bg-gray-100"
                onClick={handleRefresh}
              >
                <RefreshCw size={16} />
                Refresh All
              </button>
              <button
                className="flex items-center gap-2 bg-blue-500 text-white p-0 md:px-4 md:py-2  rounded hover:bg-blue-600"
                onClick={() => alert("Add Repository clicked")}
              >
                <Plus size={16} />
                Add Repository
              </button>
            </div>
          </div>
          {/* Total Repositories */}
          <p className="text-gray-600">{repositories.length} total repositories</p>
        </header>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Repositories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full md:w-2/6 mb-6 rounded focus:outline-none"
        />

        {/* Repository List */}
        <div className="space-y-4">
          {filteredRepositories.length > 0 ? (
            filteredRepositories.map((repo) => (
              <div
                key={repo.id}
                className="p-4 bg-white border rounded flex justify-between items-center shadow-sm"
              >
                {/* Repository Details */}
                <div>
                  <h3 className="font-medium text-lg flex items-center gap-2">
                    {repo.name}
                    <span
                      className={`text-sm px-2 py-1 rounded-2xl font-normal ${
                        repo.type === "Public"
                          ? "bg-blue-100 text-blue-500"
                          : "bg-blue-100 text-blue-500"
                      }`}
                    >
                      {repo.type}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                    <span>{repo.language}</span>
                    <span className="text-blue-700 font-bold text-2xl mx-2">•</span>
                    <span>{repo.size}</span>
                    <span>Updated {repo.updatedAt}</span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No repositories found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
