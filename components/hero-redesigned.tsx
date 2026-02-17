'use client'

import { useRef } from 'react'
import Link from 'next/link'

export function HeroRedesigned() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
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
          src="https://origamistudios.us/wp-content/uploads/2026/01/Redefine-scale-and-multiply.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight text-white mb-4 sm:mb-6 md:mb-8 tracking-tight">
              Redefine, scale, and multiply your business potential
            </h1>

            {/* Subheading */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-12 max-w-2xl leading-relaxed">
              AlgoMinds: Your AI-driven software development partner for maximum impact with maximum efficiency.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 font-bold text-sm sm:text-base rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-white/20 max-w-fit"
            >
              Book your strategy session
            </Link>
          </div>
        </div>

        {/* Bottom Section with Featured Clients and Awards */}
        <div className="relative z-10 bg-gradient-to-t from-black/70 md:from-black/60 to-transparent px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16">
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
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
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
