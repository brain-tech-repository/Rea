"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Sidebar() {
  const [search, setSearch] = useState("");

  return (
    <div className="fixed top-0 left-0 h-screen w-72 bg-stone-200 text-gray-900 flex flex-col shadow-lg">
      {/* Search Box */}
      <div className="p-4">
        <div className="flex items-center bg-white rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            className="bg-transparent outline-none w-full placeholder-gray-500 text-sm"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-auto">
        <ul className="space-y-1 px-4">
          <li className="hover:bg-stone-300 rounded px-3 py-3 cursor-pointer">New Chat</li>
          <li className="hover:bg-stone-300 rounded px-3 py-3 cursor-pointer">History</li>
          <li className="hover:bg-stone-300 rounded px-3 py-3 cursor-pointer">Settings</li>
          <li className="hover:bg-stone-300 rounded px-3 py-3 cursor-pointer">Help</li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-stone-300 text-xs text-gray-600">
        © 2025 MyApp
      </div>
    </div>
  );
}
