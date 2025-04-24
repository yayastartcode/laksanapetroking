"use client";

import React from 'react';

type BrandSectionProps = {
  title: string;
  description: string;
  brands: {
    name: string;
    logoUrl: string;
    width: string;
  }[];
};

export default function BrandSection({ title, description, brands }: BrandSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-10">
          {brands.map((brand, index) => (
            <div key={index} className={`${brand.width} h-20 relative`}>
              <img 
                src={brand.logoUrl} 
                alt={`${brand.name} Logo`} 
                className="object-contain w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  if (brand.name === "Viking") {
                    target.src = "https://www.vikingsprinkler.com/sites/default/files/2019-10/viking-logo.png";
                  } else if (brand.name === "NFPA") {
                    target.src = "https://www.nfpa.org/-/media/Images/Header/NFPA-Logo.ashx";
                  } else if (brand.name === "FM Global") {
                    target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/FM_Global_logo.svg/1200px-FM_Global_logo.svg.png";
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
