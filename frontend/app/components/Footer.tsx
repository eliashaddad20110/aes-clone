"use client";

import Link from "next/link";
import Image from "next/image";
import { Share2, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    about: [
      { name: "Our Story", href: "/about#story" },
      { name: "School Funding", href: "/about#funding" },
      { name: "What's New", href: "/about#news" },
    ],
    community: [
      { name: "Ways to Get Involved", href: "/get-involved" },
      { name: "Volunteer", href: "/get-involved#volunteer" },
      { name: "Tools and Materials", href: "/get-involved#tools" },
      { name: "Donate", href: "/donate" },
    ],
    staff: [
      { name: "Administration", href: "/staff?category=administration" },
      { name: "Teachers", href: "/staff?category=teachers" },
      { name: "Support Staff", href: "/staff?category=staff" },
      { name: "School Board", href: "/staff?category=board" },
    ],
    contact: [
      { name: "Contact Information", href: "/contact" },
      { name: "Send us a Message", href: "/contact#form" },
      { name: "Employment", href: "/contact#employment" },
    ],
  };

  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 relative mr-3">
                <Image
                  src="/logo.png"
                  alt="Arab Episcopal School Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h2 className="text-lg font-display font-bold">Arab Episcopal School</h2>
                <p className="text-sm text-navy-300">Since 2003</p>
              </div>
            </div>
            <p className="text-navy-300 mb-4">
              Integrating blind and low vision students with sighted students, providing all with the best educational opportunities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Share2 size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerNavigation.about.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-navy-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {footerNavigation.community.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-navy-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-navy-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-navy-300 text-sm">
                  P.O. Box 123, Irbid<br />
                  Jordan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-navy-400 mr-2 flex-shrink-0" />
                <a href="tel:+962-2-123456" className="text-navy-300 hover:text-white transition-colors">
                  +962-2-123456
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-navy-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@aeschool.org" className="text-navy-300 hover:text-white transition-colors">
                  info@aeschool.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-navy-300 text-sm">
            © {currentYear} Arab Episcopal School. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-navy-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-navy-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-navy-300 hover:text-white text-sm transition-colors">
              Accessibility Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
