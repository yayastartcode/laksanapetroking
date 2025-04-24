import React from 'react';
import { FooterData } from '../services/payload';

type FooterProps = {
  footer: FooterData | null;
};

export default function Footer({ footer }: FooterProps) {
  // Default values if no data is provided
  const businessName = footer?.businessName || 'PT Laksana Prima Mulia';
  const address = footer?.address || 'Jakarta, Indonesia';
  const phone = footer?.phone || '+62 123 456 7890';
  const email = footer?.email;
  const copyright = footer?.copyright || `© ${new Date().getFullYear()} ${businessName}. All rights reserved.`;

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">{businessName}</h3>
          
          <div className="mb-4">
            <p className="mb-1">{address}</p>
            <p className="mb-1">{phone}</p>
            {email && <p className="mb-1">{email}</p>}
          </div>
          
          <div className="text-gray-400 text-sm mt-8">
            <p>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
