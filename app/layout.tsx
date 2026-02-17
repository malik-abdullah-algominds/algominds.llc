import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Algominds LLC - AI Solutions',
  description: 'Algominds LLC delivers cutting-edge software, AI-powered solutions, and digital transformation services that help businesses innovate faster and grow smarter.',
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
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
