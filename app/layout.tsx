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
        url: '/algomindslogo.png',
        type: 'image/png',
      },
      {
        url: '/algomind-tab.png',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        <link rel="icon" href="/algomindslogo.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/algomindslogo.png?v=2" />
        <link rel="apple-touch-icon" href="/algomindslogo.png?v=2" />
        <link rel="shortcut icon" href="/algomindslogo.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AlgoMinds LLC",
              url: "https://algominds.live",
              logo: "https://algominds.live/algomindslogo.png",
              sameAs: [
                "https://www.linkedin.com/company/algominds",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
