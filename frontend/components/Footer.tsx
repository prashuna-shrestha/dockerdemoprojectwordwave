"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/WordWave.jpg"
                alt="WordWave Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
              <span className="text-2xl font-bold tracking-wide">WordWave</span>
            </div>
            <p className="text-gray-200">
              Unleash your creativity with our writing platform. Share stories, connect with readers, and find your voice.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-200 hover:text-yellow-300 transition-colors duration-200">Home</Link></li>
              <li><Link href="/about" className="text-gray-200 hover:text-yellow-300 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-200 hover:text-yellow-300 transition-colors duration-200">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-200 hover:text-yellow-300 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="border-t border-gray-500/50 mt-12 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            Built with passion by writers, for writers. Join thousands of storytellers building their legacy.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} WordWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}