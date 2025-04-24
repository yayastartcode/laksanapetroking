import React from 'react';
import { getProducts } from '../services/payload';
import ProductGallery from '../components/ProductGallery';
import Header from '../components/Header';
import { getHeader } from '../services/payload';

export default async function ProductsPage() {
  const products = await getProducts();
  const header = await getHeader();

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Header */}
      <Header header={header} />

      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of high-quality products. Click on the thumbnails to view details.
          </p>
        </div>

        {/* Product Gallery */}
        <ProductGallery products={products} />
      </div>
    </main>
  );
}
