"use client";

import { ReactNode, useState } from "react";
import { LogOut, Menu, X, Home, FileText, Users, Image, MessageSquare, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

interface AdminLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "News Management", href: "/admin/news", icon: FileText },
  { name: "Staff Directory", href: "/admin/staff", icon: Users },
  { name: "Gallery", href: "/admin/gallery", icon: Image },
  { name: "Contact Submissions", href: "/admin/contact", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];
export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-navy-50">
      <div className="flex">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
            "lg:translate-x-0 lg:static lg:inset-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-16 px-4 border-b border-navy-200">
              <h1 className="text-xl font-display font-bold text-navy-900">AES Admin</h1>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2" role="navigation" aria-label="Admin navigation">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href === "/admin" && pathname === "/admin");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-lg transition-all font-medium",
                      isActive
                        ? "bg-primary-50 text-primary-700 border-l-4 border-primary-600"
                        : "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                    )}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-navy-200">
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-navy-600 hover:bg-navy-50 hover:text-navy-900 rounded-lg transition-colors"
              >
                <Home className="h-5 w-5 mr-3" />
                View Website
              </Link>
              <button className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        <main className="flex-1 lg:ml-64">
          <header className="bg-white shadow-sm border-b border-navy-200 sticky top-0 z-40">
            <div className="flex items-center justify-between h-16 px-4 lg:px-8">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 text-navy-600 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                aria-label="Toggle sidebar"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="flex-1 ml-4 lg:ml-0">
                <h1 className="text-xl font-display font-bold text-navy-900">
                  {navigation.find((item) => item.href === pathname)?.name || "Dashboard"}
                </h1>
              </div>
            </div>
          </header>

          <div className="p-4 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
