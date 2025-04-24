import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import ProductGallery from './components/ProductGallery';
import BrandSection from './components/BrandSection';
import ProjectGallery from './components/ProjectGallery';
import ClientSection from './components/ClientSection';
import { getHeader, getHero, getAboutUs, getServices, getProducts, getBrands, getProjects, getClients } from './services/payload';

export default async function HomePage() {
  // Fetch all data from Payload collections
  const header = await getHeader();
  const hero = await getHero();
  const aboutUs = await getAboutUs();
  const services = await getServices();
  const products = await getProducts();
  const brands = await getBrands();
  const projects = await getProjects({ featured: true, limit: 8 });
  const clientData = await getClients();
  
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Header Section */}
      <Header header={header} />

      {/* Hero Section with Slider */}
      <Hero hero={hero} />

      {/* About Us Section */}
      <AboutUs aboutUs={aboutUs} />

      {/* Our Services Section */}
      <OurServices services={services} />

      {/* Product Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="text-blue-800 font-medium mb-2 uppercase tracking-wider">Product Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Produk Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our collection of high-quality products. Click on the thumbnails to view details.
            </p>
          </div>
          <ProductGallery products={products} />

        </div>
      </section>

      {/* Brand Guarantee Section */}
      <BrandSection 
        title="Garansi Keaslian dan Kualitas"
        description="Kami menjamin bahwa setiap produk yang kami supply adalah asli dan berkualitas tinggi, Kami juga berkomitmen untuk menyediakan layanan terbaik dalam setiap tahapan proyek."
        brands={brands?.map(brand => ({
          name: brand.name || '',
          logoUrl: brand.logo?.url || '',
          width: brand.width || 'w-32'
        })) || [
          { name: 'Viking', logoUrl: 'https://www.vikingsprinkler.com/sites/default/files/2019-10/viking-logo.png', width: 'w-40' },
          { name: 'NFPA', logoUrl: 'https://www.nfpa.org/-/media/Images/Header/NFPA-Logo.ashx', width: 'w-24' },
          { name: 'FM Global', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/FM_Global_logo.svg/1200px-FM_Global_logo.svg.png', width: 'w-24' }
        ]}
      />

      {/* Project Gallery Section */}
      {projects && projects.length > 0 && (
        <ProjectGallery 
          projects={projects}
          title="Proyek Kami"
          subtitle="PORTOFOLIO"
          description="Lihat beberapa proyek yang telah kami selesaikan. Klik pada gambar untuk melihat detail lebih lanjut."
        />
      )}
      
      {/* Client Section */}
      <ClientSection clientData={clientData} />
  
    </main>
  );
}
