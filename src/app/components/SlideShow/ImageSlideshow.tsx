'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageSlideshow({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <p className="text-center text-gray-500">No images for this product</p>
    );
  }

  return (
    <div className="relative w-full aspect-[4/3] h-48 sm:h-64">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            loading="lazy"
            className="rounded-lg object-cover"
            src={image}
            alt={`${alt} - view ${index + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      ))}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-6 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Previous image"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-8 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Next image"
      >
        &gt;
      </button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            } focus:outline-none focus:ring-2 focus:ring-accent`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
