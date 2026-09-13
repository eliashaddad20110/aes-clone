"use client";

import { useState, useEffect } from "react";
import { Users, Mail, MapPin } from "lucide-react";
import { StaffMember } from "../types";
import { API_URL } from "../lib/utils";
import LoadingSpinner from "../components/LoadingSpinner";
import Image from "next/image";

const demoStaff: StaffMember[] = [
  {
    id: "s1",
    name: "Rev. Samir Esaid",
    position_en: "Founder & Director",
    category: "administration",
    bio_en: "Co-founder of the Arab Episcopal School and tireless advocate for inclusive education in northern Jordan.",
    photo_url: "https://picsum.photos/seed/samir/400/400",
    email: "director@aeschool.org",
    display_order: 1,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "s2",
    name: "Mrs. Sabah Zurikat",
    position_en: "Founder & Kindergarten Head",
    category: "administration",
    bio_en: "Co-founder passionate about early childhood education and inclusion for blind and low-vision children.",
    photo_url: "https://picsum.photos/seed/sabah/400/400",
    email: "kindergarten@aeschool.org",
    display_order: 2,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "s3",
    name: "Khaled Haddad",
    position_en: "Primary School Teacher",
    category: "teachers",
    bio_en: "Experienced educator specializing in adaptive literacy and numeracy for visually impaired students.",
    photo_url: "https://picsum.photos/seed/khaled/400/400",
    email: "khaled@aeschool.org",
    display_order: 3,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "s4",
    name: "Lina Khoury",
    position_en: "Braille Instructor",
    category: "teachers",
    bio_en: "Certified Braille instructor supporting students to read, write, and thrive through tactile literacy.",
    photo_url: "https://picsum.photos/seed/lina/400/400",
    email: "lina@aeschool.org",
    display_order: 4,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "s5",
    name: "Omar Younes",
    position_en: "Administrative Coordinator",
    category: "staff",
    bio_en: "Keeps the school running smoothly by coordinating operations, events, and family communication.",
    photo_url: "https://picsum.photos/seed/omar/400/400",
    email: "omar@aeschool.org",
    display_order: 5,
    created_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "s6",
    name: "Dr. Nadia Shaheen",
    position_en: "School Board Member",
    category: "board",
    bio_en: "Board member bringing expertise in special education policy and community development.",
    photo_url: "https://picsum.photos/seed/nadia/400/400",
    email: "nadia@aeschool.org",
    display_order: 6,
    created_at: "2026-01-01T00:00:00Z",
  },
];

export default function StaffPage() {
  const [staff, setStaff] = useState<StaffMember[]>(demoStaff);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const fetchStaff = async () => {
      try {
        const response = await fetch(`${API_URL}/staff`);
        if (active && response.ok) {
          const data = await response.json();
          if (data.staff?.length) setStaff(data.staff);
        }
      } catch {
        // keep demo data
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchStaff();
    return () => {
      active = false;
    };
  }, []);

  const categories = [
    { id: "all", label: "All Staff", icon: Users },
    { id: "administration", label: "Administration", icon: Users },
    { id: "teachers", label: "Teachers", icon: Users },
    { id: "staff", label: "Support Staff", icon: Users },
    { id: "board", label: "School Board", icon: Users },
  ];

  const filteredStaff =
    selectedCategory === "all"
      ? staff
      : staff.filter((member) => member.category === selectedCategory);

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

          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : filteredStaff.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-navy-300 mx-auto mb-4" />
              <p className="text-navy-600 text-lg">No staff members found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStaff.map((member) => (
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