"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with Image and Text */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Image
                src="/WordWave.jpg" // Replace with your image path
                alt="WordWave Logo"
                width={40} // Adjust logo size as needed
                height={40}
                className="h-10 w-10 object-contain" // Maintain aspect ratio
              />
              <span className="text-2xl font-bold tracking-wide hidden sm:block">WordWave</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 font-medium text-lg items-center">
            <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
            <Link href="/about" className="hover:text-yellow-300 transition">About Us</Link>
            <Link href="/blog" className="hover:text-yellow-300 transition">Blog</Link>
            <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
            <Link href="/write" className="hover:text-yellow-300 transition">Write</Link>
            <Link href="/signup" className="hover:bg-white hover:text-purple-600 px-4 py-1 rounded-md bg-yellow-400 text-purple-800 transition">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col space-y-3 text-lg font-medium">
            <Link href="/" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/blog" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/write" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Write</Link>
            <Link href="/signup" className="bg-yellow-400 text-purple-800 px-4 py-1 rounded-md hover:bg-white hover:text-purple-600 transition text-center" onClick={() => setIsOpen(false)}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}