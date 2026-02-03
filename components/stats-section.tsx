"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "300M", suffix: "+", label: "Client revenue influenced", description: "$300M+" },
  { value: "22", suffix: "+", label: "Months average engagement", description: "Avg. 22+" },
  { value: "100", suffix: "+", label: "Active & past clients", description: "100+" },
  { value: "25K", suffix: "+", label: "Engineering hours delivered", description: "25K+" },
  { value: "200", suffix: "+", label: "Elite engineers onboarded", description: "200+" },
]

const partners = [
  { name: "UNICEF", initials: "UN" },
  { name: "Smart Dubai", initials: "SD" },
  { name: "TÜV Austria", initials: "TV" },
  { name: "Nordstrom", initials: "NS" },
  { name: "Dexcom", initials: "DX" },
]

// Stat Counter Component
function StatCounter({ targetValue, suffix, label }: { targetValue: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let current = 0
          const increment = targetValue / 50
          const timer = setInterval(() => {
            current += increment
            if (current >= targetValue) {
              setCount(targetValue)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 30)
        }
      },
      { threshold: 0.3 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [targetValue, hasAnimated])

  return (
    <div ref={countRef} className="space-y-3 transition-all duration-500">
      <div className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
        {count}
        <span className="text-3xl sm:text-4xl ml-1">{suffix}</span>
      </div>
      <p className="text-sm text-white/70 leading-relaxed">{label}</p>
    </div>
  )
}

// Partner Logo Component
function PartnerLogo({ partner }: { partner: (typeof partners)[0] }) {
  return (
    <div
      className="flex items-center justify-center h-16 px-6 rounded-lg bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25 transition-all duration-300 transform hover:scale-110"
      title={partner.name}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-sm font-semibold text-white/80">{partner.initials}</span>
        <span className="text-xs text-white/50 mt-0.5">{partner.name.split(" ")[0]}</span>
      </div>
    </div>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-24 sm:py-32"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(79, 70, 229, 0.9) 50%, rgba(126, 34, 206, 0.9) 100%),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255, 255, 255, 0.02) 35px,
            rgba(255, 255, 255, 0.02) 70px
          )
        `,
      }}
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`flex flex-col gap-8 lg:gap-12 lg:flex-row lg:items-start lg:justify-between mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left Content */}
          <div className="max-w-2xl flex-1">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-white tracking-tight mb-4">
              Trusted by startups and enterprises to build AI-driven products at scale.
            </h2>
            <p className="text-base text-white/80 leading-relaxed max-w-xl">
              15+ years of delivering reliable, high-impact digital solutions that drive innovation.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col sm:items-end gap-6 flex-1">
            <p className="text-base text-white/90 leading-relaxed">
              Our partners reduce development cost by up to{" "}
              <span className="font-semibold text-white">$250,000 annually</span> through smarter engineering.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-white hover:bg-white/95 text-indigo-600 font-semibold px-8 py-3 h-auto shadow-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 border-t border-white/15 pt-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Divider for non-mobile */}
              {index > 0 && index % 2 !== 0 && <div className="hidden md:block absolute left-0 top-0 h-full w-px bg-white/10 -ml-3 sm:-ml-4" />}
              {index > 0 && index % 5 !== 0 && <div className="hidden lg:block absolute left-0 top-0 h-full w-px bg-white/10 -ml-3 sm:-ml-4" />}

              <StatCounter
                targetValue={parseInt(stat.value)}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className={`mt-20 sm:mt-28 border-t border-white/15 pt-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-white/70 mb-8 uppercase tracking-wider">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
