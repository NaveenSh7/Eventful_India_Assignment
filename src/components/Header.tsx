"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // uses lucide icons (you can swap or skip icons)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="backdrop-blur-md bg-white/40 border-b border-white/20 sticky top-0 z-50 px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-blue-600">Artistly.com</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 text-sm font-bold text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/artists">Explore Artists</Link>
          <Link href="/onboard">Onboard Artist</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <nav className="md:hidden mt-2 flex flex-col gap-2 text-sm font-bold text-gray-700">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/artists" onClick={() => setIsOpen(false)}>Explore Artists</Link>
          <Link href="/onboard" onClick={() => setIsOpen(false)}>Onboard Artist</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
        </nav>
      )}
    </header>
  );
}
