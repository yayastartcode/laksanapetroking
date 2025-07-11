import React from 'react';
import { getProducts } from '../../services/payload';
import ProductGallery from '../../components/ProductGallery';
import Header from '../../components/Header';
import { getHeader } from '../../services/payload';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Next.js 15 uses Promise-based params and searchParams
type Params = Promise<{ id: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function ProductPage(props: {
  params: Params;
  searchParams?: SearchParams;
}) {
  // Await the params Promise to get the actual values
  const params = await props.params;
  const { id } = params;
  const products = await getProducts();
  const header = await getHeader();
  
  // Filter products to only show the selected one and related products
  const selectedProduct = products?.find(p => p.id === id);
  
  if (!selectedProduct) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Header */}
      <Header header={header} />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link href="/products" className="text-gray-700 hover:text-blue-600">
                    Products
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">{selectedProduct?.title || 'Product Details'}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Gallery */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{selectedProduct?.title}</h1>
          <ProductGallery products={products} />
        </div>
      </div>
    </main>
  );
}
