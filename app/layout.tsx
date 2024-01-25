import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar';
import Footerpage from './components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Ritesh',
  description: 'This is the portfolio site of Ritesh Poudel',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode

}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footerpage />
        </body>
    </html>
  )
}
