"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, Accessibility } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About AES", href: "/about" },
  { name: "Mission, Vision, & Values", href: "/mission-vision-values" },
  { name: "Ways to Get Involved", href: "/get-involved" },
  { name: "Staff Directory", href: "/staff" },
  { name: "Contact us", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="h-12 w-12 relative">
                <Image
                  src="/logo.png"
                  alt="Arab Episcopal School Logo"
                  width={48}
                  height={48}
                  priority
                />
              </div>
            </Link>
            <div className="hidden md:block ml-4">
              <h1 className="text-xl font-display font-bold text-navy-900">
                Arab Episcopal School
              </h1>
              <p className="text-sm text-navy-600">Since 2003</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Primary">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-navy-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-navy-200">
              <button
                aria-label="Toggle high contrast mode"
                className="p-2 text-navy-700 hover:text-primary-600 transition-colors"
              >
                <Accessibility size={20} />
              </button>
              <button
                aria-label="Toggle language"
                className="flex items-center space-x-1 p-2 text-navy-700 hover:text-primary-600 transition-colors"
              >
                <Globe size={20} />
                <span className="text-sm font-medium">EN</span>
              </button>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-navy-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-navy-200">
          <nav className="px-4 py-4 space-y-4" role="navigation" aria-label="Mobile">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-navy-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
