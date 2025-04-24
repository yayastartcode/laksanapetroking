"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { ServicesData, ServiceItem } from '../services/payload';

type OurServicesProps = {
  services?: ServicesData | null;
};

export default function OurServices({ services }: OurServicesProps) {
  // Default values if no data is provided from Payload
  const title = services?.title || "Our services";
  const subtitle = services?.subtitle || "WHAT WE OFFER";
  const description = services?.description || "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.";
  
  // Default service items if none are provided from Payload
  const defaultServiceItems: Array<{
    id: number;
    title: string;
    description: string;
    link: string;
    icon?: {
      url: string;
      alt?: string;
    };
  }> = [
    {
      id: 1,
      title: "Offshore drilling",
      description: "Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.",
      link: "#"
    },
    {
      id: 2,
      title: "Crude oil extraction",
      description: "Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.",
      link: "#"
    },
    {
      id: 3,
      title: "Oil transport",
      description: "Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.",
      link: "#"
    },
    {
      id: 4,
      title: "Petroleum production",
      description: "Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.",
      link: "#"
    }
  ];
  
  // Use service items from Payload or default ones
  const serviceItems = (services && 'serviceItems' in services && Array.isArray(services.serviceItems) && services.serviceItems.length > 0) ? 
    [...services.serviceItems].sort((a, b) => ((a.order || 0) - (b.order || 0))) : 
    defaultServiceItems;
  const [activeSlide, setActiveSlide] = useState(0);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % serviceItems.length);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + serviceItems.length) % serviceItems.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Header Column */}
          <div className="w-full md:w-1/3">
            <p className="text-blue-800 font-medium mb-4 uppercase tracking-wider">{subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">{title}</h2>
            <p className="text-gray-600 mb-8">{description}</p>
            
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4 mt-4">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Previous service"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Next service"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceItems.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white text-gray-800 p-8 rounded-md shadow-sm transition-all duration-300 hover:bg-red-500 hover:text-white group"
              >
                <div className="mb-6">
                  {/* Use icon from Payload if available, otherwise use placeholder */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    {'icon' in service && service.icon?.url ? (
                      <Image 
                        src={service.icon.url}
                        alt={service.icon.alt || service.title || 'Service icon'}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />}
                        {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                        {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />}
                        {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />}
                      </svg>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="mb-6 text-gray-600 group-hover:text-white/80 transition-colors">{service.description}</p>
                <a href={service.link || '#'} className="flex items-center">
                  <span className="mr-2">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform duration-300 translate-x-0 hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
