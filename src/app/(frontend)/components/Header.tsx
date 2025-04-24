"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderData } from '../services/payload';

type HeaderProps = {
  header?: HeaderData | null;
};

export default function Header({ header }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Default values if no data is provided
  const logoText = header?.logo?.text || 'Fabrica';
  const logoIcon = header?.logo?.logoIcon || 'F';
  const logoImage = header?.logo?.image;
  
  // Sort navigation items by order if they exist
  const navigationItems = header?.navigation?.sort((a, b) => (a.order || 0) - (b.order || 0)) || [
    { id: '1', label: 'Home', link: '/', order: 1 },
    { id: '2', label: 'Pages', link: '/pages', order: 2 },
    { id: '3', label: 'Projects', link: '/projects', order: 3 },
    { id: '4', label: 'Blog', link: '/blog', order: 4 },
    { id: '5', label: 'Shop', link: '/shop', order: 5 },
    { id: '6', label: 'Contacts', link: '/contacts', order: 6 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold text-2xl flex items-center">
            {logoImage ? (
              <Image 
                src={logoImage.url} 
                alt={logoImage.alt || 'Logo'} 
                width={32} 
                height={32} 
                className="mr-2" 
              />
            ) : (
              <div className="w-8 h-8 bg-red-500 rounded-full mr-2 flex items-center justify-center">
                <span className="text-white font-bold">{logoIcon}</span>
              </div>
            )}
            {logoText}
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={item.link || '#'}
              className={`text-white font-medium hover:text-red-500 transition ${pathname === (item.link || '') ? 'text-red-500' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
 
      </div>
    </header>
  );
}
