import React from 'react';
import Image from 'next/image';
import { ClientData } from '../services/payload';

type ClientSectionProps = {
  clientData: ClientData | null;
};

export default function ClientSection({ clientData }: ClientSectionProps) {
  if (!clientData || !clientData.image?.url) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            {clientData.title || 'Our Clients'}
          </h2>
          {clientData.subtitle && (
            <p className="text-blue-800 font-medium mb-2 uppercase tracking-wider">{clientData.subtitle}</p>
          )}
          {clientData.description && (
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {clientData.description}
            </p>
          )}
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg shadow-lg">
            <Image 
              src={clientData.image.url}
              alt={clientData.image.alt || "Our clients"}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
