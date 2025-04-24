"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { HeroData } from '../services/payload';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type HeroProps = {
  hero?: HeroData | null;
};

export default function Hero({ hero }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  // Default settings if no data is provided
  const autoplaySpeed = hero?.settings?.autoplaySpeed || 5000;
  const showThumbnails = hero?.settings?.showThumbnails !== false; // Default to true
  const showCounter = hero?.settings?.showCounter !== false; // Default to true

  // Sort slides by order if they exist, or use default slides
  const slides = hero?.slides?.sort((a, b) => (a.order || 0) - (b.order || 0)) || [
    {
      id: '1',
      image: {
        url: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        alt: 'Industrial oil platform'
      },
      title: 'Welcome to our industrial oil platform',
      description: 'Duis aute irucillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      buttonText: 'Details',
      buttonLink: '/details',
      order: 1
    },
    {
      id: '2',
      image: {
        url: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        alt: 'Offshore drilling technology'
      },
      title: 'Advanced offshore drilling technology',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
      buttonText: 'Our Services',
      buttonLink: '/services',
      order: 2
    },
    {
      id: '3',
      image: {
        url: 'https://images.unsplash.com/photo-1471513671800-b09c87e1497c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: 'Sustainable energy solutions'
      },
      title: 'Sustainable energy solutions',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
      buttonText: 'Learn More',
      buttonLink: '/about',
      order: 3
    }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: autoplaySpeed, disableOnInteraction: false }}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Slide Image with Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.image?.url || ''})` }}
            ></div>
            
            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="container mx-auto px-4 md:px-12 lg:px-24">
                <div className="max-w-2xl text-white slide-content">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl mb-8">{slide.description}</p>
                  <a 
                    href={slide.buttonLink} 
                    className="inline-block bg-red-500 text-white px-8 py-3 font-medium hover:bg-red-600 transition"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Thumbnails - Only show if enabled in settings */}
      {showThumbnails && (
        <div className="absolute bottom-8 right-8 z-10 hidden md:flex">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`w-28 h-20 mx-2 cursor-pointer overflow-hidden border-2 ${activeIndex === index ? 'border-red-500' : 'border-transparent'}`}
              onClick={() => swiper?.slideTo(index)}
            >
              {slide.image?.url ? (
                <Image 
                  src={slide.image.url} 
                  alt={slide.image.alt || `Thumbnail ${index + 1}`}
                  width={112}
                  height={80}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">No image</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Slide Counter - Only show if enabled in settings */}
      {showCounter && (
        <div className="absolute bottom-8 left-8 z-10 text-white font-medium">
          <span className="text-red-500 text-2xl">{(activeIndex + 1).toString().padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{slides.length.toString().padStart(2, '0')}</span>
        </div>
      )}
    </section>
  );
}
