import React from 'react'
import './styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { getHeader, getFooter } from './services/payload'

export const metadata = {
  description: 'PT Laksana Prima Mulia - Mechanical ,Electrical and Fire Protection Engineering Contractor  & Supply',
  title: 'PT Laksana Prima Mulia - Mechanical ,Electrical and Fire Protection Engineering Contractor  & Supply',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  
  // Fetch header and footer data from Payload
  const headerData = await getHeader()
  const footerData = await getFooter()

  return (
    <html lang="en">
      <body className="font-sans">
        {/* Pass header data to the Header component */}
        <Header header={headerData} />
        {children}
        <Footer footer={footerData} />
      </body>
    </html>
  )
}
