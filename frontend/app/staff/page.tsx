"use client";

import { useState, useEffect } from "react";
import { Users, Mail, Phone, MapPin } from "lucide-react";
import { StaffMember } from "../types";
import { API_URL } from "../lib/utils";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import Image from "next/image";

export default function StaffPage() {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        setLoading(true);
        const url = selectedCategory === "all" 
          ? `${API_URL}/staff` 
          : `${API_URL}/staff?category=${selectedCategory}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch staff");
        const data = await response.json();
        setStaff(data.staff || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, [selectedCategory]);

  const categories = [
    { id: "all", label: "All Staff", icon: Users },
    { id: "administration", label: "Administration", icon: Users },
    { id: "teachers", label: "Teachers", icon: Users },
    { id: "staff", label: "Support Staff", icon: Users },
    { id: "board", label: "School Board", icon: Users },
  ];

  return (
    <main className="min-h-screen">
      <div className="pt-20 pb-12 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Staff Directory</h1>
          <p className="text-xl text-navy-100">Meet our dedicated educators and administrators</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-navy-50 text-navy-700 hover:bg-navy-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {error && (
            <ErrorMessage 
              message={error} 
              onRetry={() => setSelectedCategory(selectedCategory)} 
              onClose={() => setError(null)}
            />
          )}

          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : staff.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-navy-300 mx-auto mb-4" />
              <p className="text-navy-600 text-lg">No staff members found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staff.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  {member.photo_url && (
                    <div className="relative h-64 overflow-hidden bg-navy-100">
                      <Image
                        src={member.photo_url}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-3">{member.position_en}</p>

                    {member.bio_en && (
                      <p className="text-navy-600 text-sm mb-4 line-clamp-3">{member.bio_en}</p>
                    )}

                    <div className="space-y-2">
                      {member.email && (
                        <div className="flex items-center text-navy-600 text-sm">
                          <Mail className="h-4 w-4 mr-2 text-primary-600" />
                          <a href={`mailto:${member.email}`} className="hover:text-primary-600">
                            {member.email}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center text-navy-600 text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-primary-600" />
                        <span className="capitalize">{member.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
