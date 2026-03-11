'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Boxes,
  Code2,
  Rocket,
  ShieldCheck,
} from 'lucide-react'

const expertise = [
  { icon: BrainCircuit, label: 'Artificial intelligence & data' },
  { icon: Code2, label: 'Software development & QA' },
  { icon: BriefcaseBusiness, label: 'Strategy & business consulting' },
  { icon: Boxes, label: 'Enterprise platform implementation' },
  { icon: Rocket, label: 'New product innovation' },
  { icon: ShieldCheck, label: 'Cloud & security' },
]

const heroSlides = [
  {
    title: 'AI-Powered Global Digital Engineering Partner',
    subtitle: 'Product Development • Digital Transformation • Agile Teams',
  },
  {
    title: 'Build Future-Ready Digital Products Faster',
    subtitle: 'MVP Engineering • Full-Scale Delivery • Continuous Innovation',
  },
  {
    title: 'Modernize Legacy Systems with Confidence',
    subtitle: 'Cloud Migration • Platform Re-Architecture • Performance at Scale',
  },
  {
    title: 'Scale Dedicated Teams That Deliver Outcomes',
    subtitle: 'Top Engineering Talent • Flexible Engagement • Predictable Velocity',
  },
  {
    title: 'Design Intelligent Experiences Customers Love',
    subtitle: 'UX Strategy • AI Personalization • Omnichannel Journeys',
  },
  {
    title: 'Accelerate Enterprise Transformation with AI',
    subtitle: 'Data Platforms • Automation • Measurable Business Impact',
  },
]

export function HeroRedesigned() {
  const [activeSlide, setActiveSlide] = useState(0)

  const goToPreviousSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  const goToNextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const currentSlide = heroSlides[activeSlide]

  return (
    <section className="relative overflow-hidden bg-[#07080D] pt-20 text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61%2F696ecc1f3ff5304a4fb2789b_Hero-video%20%281%29_mp4.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(74,30,120,0.2),transparent_45%),radial-gradient(circle_at_85%_50%,rgba(45,140,145,0.26),transparent_50%)]" />
      <div className="absolute -right-24 top-0 h-full w-[55%] opacity-55 [background:repeating-radial-gradient(circle_at_center,rgba(125,231,238,0.34)_0,rgba(125,231,238,0.34)_2px,transparent_8px,transparent_30px)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div className="relative min-h-[430px] border-b border-white/10 pb-10 pt-10 sm:min-h-[480px] sm:pt-14 lg:pb-12 lg:pt-16">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goToPreviousSlide}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/30 p-2.5 text-white/90 transition hover:bg-white/10 lg:inline-flex"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/30 p-2.5 text-white/90 transition hover:bg-white/10 lg:inline-flex"
          >
            <ArrowRight className="h-6 w-6" />
          </button>

          <div className="mx-auto w-full max-w-4xl lg:mx-20">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              {currentSlide.title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-white/85 sm:text-2xl">
              {currentSlide.subtitle}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-xl border border-white/50 px-7 py-3 text-lg font-medium text-white transition hover:bg-white hover:text-black"
            >
              Let&apos;s connect
            </Link>

            <div className="mt-10 flex items-center gap-4 sm:justify-center lg:mt-12">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeSlide}
                  className={`h-3 w-3 rounded-full transition ${
                    index === activeSlide ? 'bg-lime-400' : 'bg-white/85 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-10">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Our expertise</h2>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {expertise.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="group rounded-lg border border-white/10 bg-white/[0.02] p-4 transition hover:border-lime-400/50 hover:bg-white/[0.05]">
                  <Icon className="h-9 w-9 text-lime-400" />
                  <p className="mt-4 text-base leading-snug text-white/90 underline decoration-white/30 underline-offset-4 group-hover:text-white">
                    {item.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
