"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const navigation = [
  { name: "Home", href: "/", enKey: "nav.home", deKey: "nav.home" },
  { name: "About AES", href: "/about", enKey: "nav.about", deKey: "nav.about" },
  { name: "Mission, Vision, & Values", href: "/mission-vision-values", enKey: "nav.mission", deKey: "nav.mission" },
  { name: "Ways to Get Involved", href: "/get-involved", enKey: "nav.involved", deKey: "nav.involved" },
  { name: "Staff Directory", href: "/staff", enKey: "nav.staff", deKey: "nav.staff" },
  { name: "Contact us", href: "/contact", enKey: "nav.contact", deKey: "nav.contact" },
];

interface NavigationProps {
  language: "en" | "de";
  onLinkClick?: () => void;
}

export default function Navigation({ language, onLinkClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="space-y-2" role="navigation" aria-label="Secondary">
      {navigation.map((item) => {
        const isActive = pathname === item.href || (item.href === "/" && pathname === "/");
        const label = language === "en" ? item.name : item.name;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block py-2 px-4 rounded-lg transition-all font-medium",
              isActive
                ? "bg-primary-50 text-primary-700 border-l-4 border-primary-600"
                : "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
            )}
            onClick={onLinkClick}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
