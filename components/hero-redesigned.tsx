'use client'

import { useRef } from 'react'
import Link from 'next/link'

export function HeroRedesigned() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative flex w-full min-h-[100svh] flex-col overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61%2F696ecc1f3ff5304a4fb2789b_Hero-video%20%281%29_mp4.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Main Content */}
        <div className="flex flex-1 flex-col justify-start px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 md:justify-center md:px-8 md:py-16 lg:px-12">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:mb-6 sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl">
              Redefine, scale, and multiply your business potential
            </h1>

            {/* Subheading */}
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-white/90 sm:mb-8 sm:text-lg md:mb-12 md:text-xl">
              AlgoMinds: Your AI-driven software development partner for maximum impact with maximum efficiency.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex max-w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-indigo-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20 sm:px-8 sm:py-4 sm:text-base"
            >
              Book your strategy session
            </Link>
          </div>
        </div>

        {/* Bottom Section with Featured Clients and Awards */}
        <div className="relative z-10 bg-gradient-to-t from-black/70 to-transparent px-4 py-8 sm:px-6 sm:py-10 md:from-black/60 md:px-8 md:py-12 lg:px-12 lg:py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Featured Clients */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <p className="text-white/70 text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-6">
                Featured Clients
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {/* Client logos - replace with your actual logos */}
                <div className="text-white text-xs sm:text-sm opacity-75">UNICEF</div>
                <div className="text-white text-xs sm:text-sm opacity-75">University</div>
                <div className="text-white text-xs sm:text-sm opacity-75">Nordstrom</div>
              </div>
            </div>

            {/* Awards & Partnerships */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:text-right">
              <p className="text-white/70 text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-6">
                Awards & Partnerships
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 lg:justify-end">
                {/* Award logos - replace with your actual logos */}
                <div className="text-white text-xs sm:text-sm opacity-75">ISO Certified</div>
                <div className="text-white text-xs sm:text-sm opacity-75">Award Winner</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrow - Optional */}
      <div className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce sm:bottom-6 md:bottom-8 md:block">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
