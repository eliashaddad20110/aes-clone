"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "../lib/utils";
import { GalleryImage } from "../types";

interface ImageGalleryProps {
  images: GalleryImage[];
  language?: "en" | "de";
}

export default function ImageGallery({ images, language = "en" }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openLightbox(index);
              }
            }}
            aria-label={`${image.title || 'Gallery image'} - press to enlarge`}
          >
            <Image
              src={image.url}
              alt={image.alt_text || image.title || 'Gallery image'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-bg flex items-center justify-center">
              <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <p className="text-white text-sm font-medium line-clamp-2">{image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {isLightboxOpen && images.length > 0 && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center">
            <Image
              src={images[selectedImage].url}
              alt={images[selectedImage].alt_text || images[selectedImage].title || 'Gallery image'}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white px-4">
            <h3 className="text-lg font-semibold mb-1">{images[selectedImage].title}</h3>
            <p className="text-sm text-gray-300">
              {selectedImage + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
