"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectData } from '../services/payload';

type ProjectGalleryProps = {
  projects: ProjectData[] | null;
  title: string;
  subtitle: string;
  description: string;
};

export default function ProjectGallery({ projects, title, subtitle, description }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!projects || projects.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-blue-800 font-medium mb-2 uppercase tracking-wider">{subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id || index} 
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square relative overflow-hidden">
                {project.image?.url ? (
                  <Image 
                    src={project.image.url}
                    alt={project.title || 'Project image'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">No image</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    {project.description && (
                      <p className="text-white/80 text-sm mt-1 line-clamp-2">{project.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 text-white z-10 bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Previous button */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors"
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next button */}
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors"
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative max-w-4xl max-h-[80vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
                {projects[selectedImageIndex]?.image?.url && (
                  <div className="relative w-full h-full">
                    <Image 
                      src={projects[selectedImageIndex].image.url}
                      alt={projects[selectedImageIndex].title || 'Project image'}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                {/* Caption */}
                {projects[selectedImageIndex]?.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                    <h3 className="font-semibold text-lg">{projects[selectedImageIndex].title}</h3>
                    {projects[selectedImageIndex]?.description && (
                      <p className="text-white/80 text-sm mt-1">{projects[selectedImageIndex].description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
