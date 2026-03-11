import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://algominds.live"),
  title: {
    default: "AlgoMinds LLC | AI Development & Custom Software Company",
    template: "%s | AlgoMinds LLC",
  },
  description:
    "AlgoMinds LLC provides AI solutions, custom software development, web development, Shopify development, and digital transformation services for businesses worldwide.",
  keywords: [
    "AI Development Company",
    "Custom Software Development",
    "Web Development Services",
    "Shopify Development",
    "Hire AI Developers",
    "Digital Transformation",
  ],
  authors: [{ name: "AlgoMinds LLC" }],
  creator: "AlgoMinds LLC",
  publisher: "AlgoMinds LLC",
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
  openGraph: {
    title: "AlgoMinds LLC | AI & Software Solutions",
    description:
      "AI solutions, web development, custom software, and digital transformation services.",
    url: "https://algominds.live",
    siteName: "AlgoMinds LLC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AlgoMinds LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlgoMinds LLC",
    description:
      "AI Development, Custom Software, and Web Solutions for modern businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AlgoMinds LLC",
              url: "https://algominds.live",
              logo: "https://algominds.live/favicon-32x32.png",
              sameAs: [
                "https://www.linkedin.com/company/algominds",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
