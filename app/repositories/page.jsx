"use client";

import Sidebar from "@/components/Sidebar";
import { repositories } from "@/data/repositories";
import { useState } from "react";
import { RefreshCw, Plus, Archive } from "lucide-react";

export default function Repositories() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter repositories based on the search term
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to refresh the page
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-60 flex-1 p-4">
        {/* Header */}
        <header className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Repositories</h1>
            <div className="flex items-center gap-2">
              <button
                className="flex items-center gap-2 text-gray-700 border px-4 py-2 rounded hover:bg-gray-100"
                onClick={handleRefresh}
              >
                <RefreshCw size={16} />
                Refresh All
              </button>
              <button
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => alert("Add Repository clicked")}
              >
                <Plus size={16} />
                Add Repository
              </button>
            </div>
          </div>
          {/* Total Repositories */}
          <p className="text-gray-600 mt-2">{repositories.length} total repositories</p>
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
                className="p-4 bg-gray-50 border rounded flex justify-between items-center"
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
                    <span className='text-blue-700 font-bold text-2xl mx-2'>•</span>
                    <span className="flex items-center gap-1">
                      <Archive size={14} className="text-gray-500" />
                      {repo.size}
                    </span>
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
