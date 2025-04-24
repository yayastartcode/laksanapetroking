"use client";

import React from 'react';
import Image from 'next/image';
import { AboutUsData } from '../services/payload';

type AboutUsProps = {
  aboutUs?: AboutUsData | null;
};

export default function AboutUs({ aboutUs }: AboutUsProps) {
  // Default values if no data is provided from Payload
  const title = aboutUs?.title || "We are leaders in the building sector";
  const subtitle = aboutUs?.subtitle || "WHO WE ARE";
  const description = aboutUs?.description || "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.";
  const buttonText = aboutUs?.buttonText || "About Us";
  const buttonLink = aboutUs?.buttonLink || "/about";
  const imageSrc = aboutUs?.image?.url || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80";
  
  // Extract features from Payload data or use defaults
  const features = aboutUs?.features?.map(item => item.feature) || [
    "Individual approach",
    "Technical architecture",
    "Customer support"
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[500px] md:h-[600px]">
              <Image 
                src={imageSrc}
                alt="Professional in hard hat with tablet"
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="max-w-lg">
              <p className="text-blue-800 font-medium mb-4 uppercase tracking-wider">{subtitle}</p>
              <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">{title}</h2>
              <p className="text-gray-600 mb-8 text-lg">{description}</p>
              
              {/* Feature List */}
              <ul className="mb-8 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <a 
                href={buttonLink}
                className="inline-block bg-red-500 text-white px-8 py-3 font-medium hover:bg-red-600 transition rounded-sm"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
