"use client";

import { cn } from "../lib/utils";

interface PageHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function PageHeading({ title, subtitle, align = "left", className = "" }: PageHeadingProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h1
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4",
          align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left",
          "text-navy-900"
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl text-navy-600 leading-relaxed",
            align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left",
            "max-w-3xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
