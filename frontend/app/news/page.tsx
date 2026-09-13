"use client";

import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { NewsPost } from "../types";
import { API_URL } from "../lib/utils";
import { demoNews } from "../lib/demo-data";

export default function NewsPage() {
  const [newsData, setNewsData] = useState<NewsPost[]>(demoNews);

  useEffect(() => {
    let active = true;
    const fetchNews = async () => {
      try {
        const response = await fetch(`${API_URL}/news`);
        if (active && response.ok) {
          const data = await response.json();
          if (data.news?.length) setNewsData(data.news);
        }
      } catch {
        // keep demo data
      }
    };
    fetchNews();
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="min-h-screen">
      <div className="pt-20 pb-12 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">School Life & News</h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            Stay up to date with the latest events, achievements, and stories from the Arab Episcopal School.
          </p>
        </div>
      </div>

      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <NewsCard key={news.id} news={news} viewMode="grid" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}