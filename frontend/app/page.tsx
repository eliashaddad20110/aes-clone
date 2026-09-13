"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Users, BookOpen, Heart, Award, Play, Pause } from "lucide-react";
import NewsCard from "./components/NewsCard";
import ImageGallery from "./components/ImageGallery";
import { NewsPost, GalleryImage } from "./types";
import { fetcher, API_URL } from "./lib/utils";

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  const [newsData, setNewsData] = useState<{ news: NewsPost[] } | null>(null);
  const [galleryData, setGalleryData] = useState<{ images: GalleryImage[] } | null>(null);
  const [newsError, setNewsError] = useState<string | null>(null);
  const [galleryError, setGalleryError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsRes = await fetch(`${API_URL}/news`);
        if (newsRes.ok) {
          setNewsData(await newsRes.json());
        } else {
          setNewsError('Failed to load news');
        }
      } catch (err) {
        setNewsError('Failed to load news');
      }

      try {
        const galleryRes = await fetch(`${API_URL}/gallery`);
        if (galleryRes.ok) {
          setGalleryData(await galleryRes.json());
        } else {
          setGalleryError('Failed to load gallery');
        }
      } catch (err) {
        setGalleryError('Failed to load gallery');
      }
    };

    fetchData();
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const heroContent = {
    en: {
      title: "Welcome to Arab Episcopal School",
      subtitle: "Where inclusion meets excellence - educating blind and visually impaired students alongside their sighted peers since 2003",
      cta: "Discover Our Story",
    },
    de: {
      title: "Willkommen an der Arab Episcopal School",
      subtitle: "Wo Inklusion auf Exzellenz trifft - wir bilden blinde und sehbehinderte Schüler alongside seit 2003",
      cta: "Entdecken Sie unsere Geschichte",
    },
  };

  const stats = [
    { icon: Users, value: "2,117", label: "Students", color: "text-navy-600" },
    { icon: BookOpen, value: "17", label: "Blind Students", color: "text-primary-600" },
    { icon: BookOpen, value: "17", label: "Low Vision Students", color: "text-green-600" },
    { icon: Award, value: "141", label: "Sighted Students", color: "text-purple-600" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative gradient-hero text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                {heroContent[language].title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                {heroContent[language].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {heroContent[language].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button
                  onClick={togglePlay}
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/30"
                >
                  {isPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
                  {isPlaying ? 'Pause' : 'Play'} Our Story
                </button>
              </div>
            </div>

            <div className="w-full lg:w-5/12 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:scale-110">
                <Image
                  src="/students-classroom.jpg"
                  alt="AES students in classroom"
                  width={600}
                  height={400}
                  className="w-full h-auto"
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
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-navy-100"
              >
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
              Stay updated with our latest news, events, and student achievements
            </p>
          </div>

          {newsError ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600">Failed to load news. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData?.news?.slice(0, 6).map((news) => (
                <NewsCard key={news.id} news={news} language={language} viewMode="grid" />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/news"
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
              Capturing the beauty of education, learning, and community at AES
            </p>
          </div>

          {galleryError ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600">Failed to load gallery. Please try again later.</p>
            </div>
          ) : (
            <ImageGallery images={galleryData?.images || []} language={language} />
          )}

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Full Gallery
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
                Whether you're a prospective student, parent, volunteer, or partner, we welcome you to be part of our inclusive education family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Support Our Mission
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/30"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-display font-bold mb-6">Subscribe to Our Newsletter</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-navy-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-navy-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}