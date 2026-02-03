"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const clients = ["HBL", "PTCL", "Daraz", "Jazz", "ICI Pakistan"]
const awards = ["Clutch Top Company", "AWS Partner"]

const VIDEO_URL = "https://origamistudios.us/wp-content/uploads/2025/11/AI-banner.mp4"
const FALLBACK_COLOR = "#0B1220"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Handle video autoplay on mobile and desktop
    const video = videoRef.current
    if (video) {
      // Attempt to play the video
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay prevented, video will play when user interacts
          console.log("Autoplay prevented - video will play on user interaction")
        })
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16" style={{ backgroundColor: FALLBACK_COLOR }}>
      {/* Video Background Container */}
      <div className="absolute inset-0 w-full h-full bg-[#0B1220]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            display: 'block',
            backgroundColor: FALLBACK_COLOR,
          }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
          {/* Fallback for non-HTML5 browsers */}
          Your browser does not support the video tag. Please use a modern browser.
        </video>
      </div>

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0B1220]/85 via-[#0B1220]/70 to-[#0B1220]/50 z-10" />

      {/* Optional: Animated Gradient Accent Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Subtle AI visualization circles */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#00E0C6]/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full bg-[#00E0C6]/3 blur-3xl" />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Top Content Section */}
        <div className="flex flex-1 items-center justify-start">
          <div className="w-full max-w-4xl">
            {/* Accent Line */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-[#00E0C6] to-[#00E0C6]/60 rounded-full" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#00E0C6] uppercase">
                Digital Excellence
              </span>
            </div>

            {/* Main Headline - Responsive */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
              We Build Scalable Digital Products That Power Business Growth
            </h1>

            {/* Subheading */}
            <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">
              AlgoMinds LLC is a global software development company helping startups and enterprises design, build, and scale high-performance web, mobile, and AI-powered solutions.
            </p>

            {/* CTA Buttons - Responsive */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-lg bg-[#00E0C6] px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base text-[#0B1220] font-semibold hover:bg-[#00E0C6]/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center sm:justify-start gap-2 shadow-lg shadow-[#00E0C6]/20 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Schedule a Discovery Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="rounded-lg border-2 border-[#00E0C6] bg-transparent px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base text-[#00E0C6] font-semibold hover:bg-[#00E0C6]/10 transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Trust Indicators - Responsive Grid */}
            <div className="mt-14 sm:mt-16 grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-2xl">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#00E0C6]">15+</div>
                <p className="mt-2 text-xs sm:text-sm text-gray-400">Years in Business</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#00E0C6]">200+</div>
                <p className="mt-2 text-xs sm:text-sm text-gray-400">Expert Engineers</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#00E0C6]">100+</div>
                <p className="mt-2 text-xs sm:text-sm text-gray-400">Successful Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Featured Clients & Awards */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-end lg:justify-between mt-8 sm:mt-0">
          {/* Featured Clients */}
          <div className="min-w-0">
            <p className="mb-4 text-xs font-medium tracking-wider text-gray-500 uppercase">Featured Clients</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {clients.map((client) => (
                <span key={client} className="text-xs sm:text-sm font-medium text-gray-300 truncate">
                  {client}
                </span>
              ))}
            </div>
          </div>

          {/* Awards & Partnerships */}
          <div className="min-w-0 lg:text-right">
            <p className="mb-4 text-xs font-medium tracking-wider text-gray-500 uppercase">Awards & Partnerships</p>
            <div className="flex flex-col gap-2 lg:items-end">
              {awards.map((award) => (
                <span key={award} className="text-xs sm:text-sm font-medium text-gray-300 truncate">
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
