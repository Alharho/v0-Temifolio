import type { Metadata } from 'next'
import { Inter, Space_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'Temitope Olalere | Creative Designer & Brand Strategist',
  description: 'Highly creative Graphic Designer with 5+ years of experience delivering brand-focused designs, digital marketing campaigns and cross-industry visual storytelling.',
  keywords: ['Graphic Designer', 'Brand Strategist', 'Visual Design', 'Digital Marketing', 'Lagos', 'Nigeria'],
  authors: [{ name: 'Temitope Olalere' }],
  openGraph: {
    title: 'Temitope Olalere | Creative Designer & Brand Strategist',
    description: 'Highly creative Graphic Designer with 5+ years of experience delivering brand-focused designs.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/temi-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${spaceMono.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
