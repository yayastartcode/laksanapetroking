"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductData } from '../services/payload';

type ProductGalleryProps = {
  products: ProductData[] | null;
};

export default function ProductGallery({ products }: ProductGalleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(products && products.length > 0 ? products[0] : null);

  // If no products, show placeholder
  if (!products || products.length === 0) {
    return (
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">No products available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Main large image on the left */}
      <div className="w-full md:w-3/4 relative">
        <div className="relative w-full h-[500px] bg-white rounded-lg overflow-hidden border border-gray-100">
          {selectedProduct?.image?.url ? (
            <>
              <Image
                src={selectedProduct.image.url}
                alt={selectedProduct.title || 'Product image'}
                fill
                className="object-contain p-4"
                priority
              />
              {selectedProduct.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h2 className="text-white text-xl font-semibold">{selectedProduct.title}</h2>
                </div>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">No image selected</p>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnails on the right */}
      <div className="w-full md:w-1/4">
        <div className="grid grid-cols-2 gap-3 h-[500px] overflow-y-auto pr-2">
          {products.map((product, index) => (
            <div 
              key={product.id || index}
              className={`relative w-full aspect-square rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                selectedProduct?.id === product.id 
                  ? 'border-blue-500 shadow-md' 
                  : 'border-transparent hover:border-gray-300'
              }`}
              onClick={() => setSelectedProduct(product)}
            >
              {product.image?.url ? (
                <Image
                  src={product.image.url}
                  alt={product.title || 'Product thumbnail'}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <p className="text-xs text-gray-500">No image</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
