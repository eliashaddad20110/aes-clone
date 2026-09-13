"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, BookOpen, Award, Heart } from "lucide-react";
import NewsCard from "./components/NewsCard";
import ImageGallery from "./components/ImageGallery";
import { NewsPost, GalleryImage } from "./types";
import { API_URL } from "./lib/utils";

const demoNews: NewsPost[] = [
  {
    id: "zero-project",
    title_en: "AES Wins Zero-Project Award",
    title_de: "AES gewinnt Zero-Project Auszeichnung",
    content_en:
      "Our school has been honored for our photovoltaic installation and commitment to sustainability. The Zero-Project recognizes schools that reduce their environmental footprint while educating students about renewable energy.",
    content_de: "",
    excerpt_en:
      "Honored for our photovoltaic installation and commitment to sustainability and renewable energy education.",
    excerpt_de: "",
    image_url: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1600&q=80",
    author_id: "demo",
    published: true,
    created_at: "2026-05-12T09:00:00Z",
    updated_at: "2026-05-12T09:00:00Z",
  },
  {
    id: "autumn-newsletter",
    title_en: "Autumn Newsletter 2019",
    title_de: "Herbst-Newsletter 2019",
    content_en:
      "The first two months of the new school year have brought a number of events with them. Take a look at our Autumn Newsletter to learn about Life at AES.",
    content_de: "",
    excerpt_en:
      "Take a look at our Autumn Newsletter to learn about the first events of this school year.",
    excerpt_de: "",
    image_url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80",
    author_id: "demo",
    published: true,
    created_at: "2026-04-03T09:00:00Z",
    updated_at: "2026-04-03T09:00:00Z",
  },
  {
    id: "christmas-celebration",
    title_en: "Weihnachtsfeier - Christmas Celebration",
    title_de: "Weihnachtsfeier",
    content_en:
      "AES had its Christmas party on December 21. Each class level and the kindergarten group prepared a small program, which mostly consisted of singing and dancing.",
    content_de: "",
    excerpt_en:
      "Each class level and the kindergarten group prepared a program of singing and dancing.",
    excerpt_de: "",
    image_url: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1600&q=80",
    author_id: "demo",
    published: true,
    created_at: "2026-03-10T09:00:00Z",
    updated_at: "2026-03-10T09:00:00Z",
  },
  {
    id: "nursing-home",
    title_en: "School Trip to a Nursing Home",
    title_de: "Ausflug ins Altenheim",
    content_en:
      "Who is not happy about visitors, especially in old age? With this in mind, some students made their way to Amman to a nursing home to dance with the residents and talk to them.",
    content_de: "",
    excerpt_en:
      "Students visited a nursing home in Amman to dance with residents and share time together.",
    excerpt_de: "",
    image_url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
    author_id: "demo",
    published: true,
    created_at: "2026-02-18T09:00:00Z",
    updated_at: "2026-02-18T09:00:00Z",
  },
  {
    id: "health-day",
    title_en: "Health Day at AES",
    title_de: "Gesundheitstag an der AES",
    content_en:
      "As every year, a team of Caritas doctors came to examine all the students free of charge. The teachers were also given the opportunity to do so.",
    content_de: "",
    excerpt_en:
      "A team of Caritas doctors examined all students free of charge, as every year.",
    excerpt_de: "",
    image_url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
    author_id: "demo",
    published: true,
    created_at: "2026-01-22T09:00:00Z",
    updated_at: "2026-01-22T09:00:00Z",
  },
  {
    id: "disguise-day",
    title_en: "Disguise Day",
    title_de: "Verkleidungstag",
    content_en:
      "Instead of Halloween, we celebrated the so-called Disguise Day. Students and staff came dressed up in creative and colorful costumes.",
    content_de: "",
    excerpt_en:
      "Instead of Halloween, we celebrated a creative Disguise Day with colorful costumes.",
    excerpt_de: "",
    image_url: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=1600&q=80",
    author_id: "demo",
    published: true,
    created_at: "2025-12-15T09:00:00Z",
    updated_at: "2025-12-15T09:00:00Z",
  },
];

const demoGallery: GalleryImage[] = [
  { id: "g1", title: "Zumba", alt_text: "Zumba class", url: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=900&h=675&q=75", display_order: 1, created_at: "2026-01-01T00:00:00Z" },
  { id: "g2", title: "Petra Trip", alt_text: "Students in Petra", url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&h=675&q=75", display_order: 2, created_at: "2026-01-01T00:00:00Z" },
  { id: "g3", title: "Classroom Activity", alt_text: "Creative classroom activity", url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&h=675&q=75", display_order: 3, created_at: "2026-01-01T00:00:00Z" },
  { id: "g4", title: "Christmas Pageant", alt_text: "Kindergarten Christmas pageant", url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&h=675&q=75", display_order: 4, created_at: "2026-01-01T00:00:00Z" },
  { id: "g5", title: "Ajlun Trip", alt_text: "Field trip to Ajlun", url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&h=675&q=75", display_order: 5, created_at: "2026-01-01T00:00:00Z" },
  { id: "g6", title: "Blue Day", alt_text: "Blue Day celebration", url: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&h=675&q=75", display_order: 6, created_at: "2026-01-01T00:00:00Z" },
  { id: "g7", title: "Easter", alt_text: "Easter celebration", url: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=900&h=675&q=75", display_order: 7, created_at: "2026-01-01T00:00:00Z" },
  { id: "g8", title: "School Birthday", alt_text: "17th school birthday", url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&h=675&q=75", display_order: 8, created_at: "2026-01-01T00:00:00Z" },
];

export default function Home() {
  const [newsData, setNewsData] = useState<NewsPost[]>(demoNews);
  const [galleryData, setGalleryData] = useState<GalleryImage[]>(demoGallery);

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      try {
        const newsRes = await fetch(`${API_URL}/news`);
        if (active && newsRes.ok) {
          const data = await newsRes.json();
          if (data.news?.length) setNewsData(data.news);
        }
      } catch {
        // keep demo data
      }

      try {
        const galleryRes = await fetch(`${API_URL}/gallery`);
        if (active && galleryRes.ok) {
          const data = await galleryRes.json();
          if (data.images?.length) setGalleryData(data.images);
        }
      } catch {
        // keep demo data
      }
    };

    fetchData();
    return () => {
      active = false;
    };
  }, []);

  const stats = [
    { icon: Users, value: "17", label: "Blind Students", color: "text-navy-600" },
    { icon: BookOpen, value: "17", label: "Low Vision Students", color: "text-primary-600" },
    { icon: Users, value: "141", label: "Sighted Students", color: "text-green-600" },
    { icon: Award, value: "20+", label: "Years of Impact", color: "text-purple-600" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative gradient-hero text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Welcome to Arab Episcopal School
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                Where inclusion meets excellence - educating blind and visually impaired students alongside their sighted peers since 2003.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about/"
                  className="inline-flex items-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/30"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-5/12 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:scale-110 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
                  alt="AES students learning together"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-navy-100">
                <stat.icon className={`h-10 w-10 ${stat.color} mb-4`} />
                <h3 className="text-3xl font-bold text-navy-900 mb-2">{stat.value}</h3>
                <p className="text-navy-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Latest School Life
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
            <p className="mt-6 text-lg text-navy-600 max-w-3xl mx-auto">
              Stay updated with our latest news, events, and student achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(0, 6).map((news) => (
              <NewsCard key={news.id} news={news} viewMode="grid" />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/news/"
              className="inline-flex items-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Moments in Our Gallery
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
            <p className="mt-6 text-lg text-navy-600 max-w-3xl mx-auto">
              Capturing the beauty of education, learning, and community at AES.
            </p>
          </div>

          <ImageGallery images={galleryData} language="en" />

          <div className="text-center mt-12">
            <Link
              href="/about/#gallery"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Join Our Community Today
              </h2>
              <p className="text-lg mb-8 text-navy-100">
                Whether you are a prospective student, parent, volunteer, or partner, we welcome you to be part of our inclusive education family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate/"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Support Our Mission
                </Link>
                <Link
                  href="/get-involved/"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/30"
                >
                  Ways to Get Involved
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-display font-bold mb-6">Contact Us</h3>
                <p className="text-navy-100 mb-6">
                  We would love to hear from you. Reach out with any questions about our school, admissions, volunteering, or partnerships.
                </p>
                <Link
                  href="/contact/"
                  className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-center block"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}