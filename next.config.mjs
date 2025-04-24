import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image domains
  images: {
    domains: ['images.unsplash.com', 'localhost', 'fabrica.ancorathemes.com'],
  }
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
