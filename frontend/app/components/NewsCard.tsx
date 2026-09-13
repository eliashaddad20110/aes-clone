"use client";

import Image from "next/image";
import { Calendar, User, Clock } from "lucide-react";
import { cn } from "../lib/utils";
import { NewsPost } from "../types";

interface NewsCardProps {
  news: NewsPost;
  language?: "en" | "de";
  viewMode?: "grid" | "list";
}

export default function NewsCard({ news, language = "en", viewMode = "grid" }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "en" ? "en-US" : "de-DE", {
      year: 'numeric',
      month: language === "en" ? 'long' : 'short',
      day: 'numeric',
    });
  };

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  return (
    <article 
      className={cn(
        "group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden",
        viewMode === "list" ? "flex flex-col md:flex-row" : "flex flex-col"
      )}
      role="article"
    >
      {news.image_url && (
        <div className={cn(
          "relative overflow-hidden",
          viewMode === "list" ? "md:w-1/3" : "w-full"
        )}>
          <div className="aspect-video md:aspect-square">
            <Image
              src={news.image_url}
              alt={language === "en" ? news.title_en : news.title_de || news.title_en}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>
      )}

      <div className={cn(
        "p-6 flex flex-col flex-1",
        viewMode === "list" && news.image_url && "md:w-2/3"
      )}>
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
            <Calendar className="h-3 w-3 mr-1" />
            {formatDate(news.created_at)}
          </span>
          <span className="inline-flex items-center text-navy-500 text-sm">
            <Clock className="h-3 w-3 mr-1" />
            {getReadTime(language === "en" ? news.content_en : news.content_de || news.content_en)} min
          </span>
        </div>

        <h2 className="text-xl font-display font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">
            {language === "en" ? news.title_en : news.title_de || news.title_en}
        </h2>

        <p className="text-navy-600 mb-4 line-clamp-3">
          {language === "en" ? news.excerpt_en || news.content_en.substring(0, 150) + '...' : news.excerpt_de || news.content_de?.substring(0, 150) + '...'}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center text-sm text-navy-500">
            <User className="h-4 w-4 mr-1" />
            School Administrator
          </div>
          <span className="text-primary-600 font-medium inline-flex items-center">
            Read more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
