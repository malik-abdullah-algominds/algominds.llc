"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const solutions = [
  {
    title: "Retail & ecommerce",
    subtitle: "Turn abandoned carts into a 15% revenue stream.",
    description: "With our software development services, we build omnichannel platforms with AI-driven inventory and personalized checkout flows that actually convert.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
  },
  {
    title: "Entertainment",
    subtitle: "Boost viewer retention by 40% with immersive experiences.",
    description: "We create interactive platforms that engage audiences with AI-personalized content recommendations and live engagement features.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070",
  },
  {
    title: "Healthcare",
    subtitle: "Cut patient onboarding from 3 days to 20 minutes.",
    description: "Our digital health solutions streamline patient intake, telemedicine integration, and medical records management with HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1576091160550-112173e7d1c0?q=80&w=2070",
  },
  {
    title: "Social network",
    subtitle: "Launch a social network that grows 3x faster than the competition.",
    description: "We build scalable social platforms with real-time messaging, recommendation algorithms, and viral growth features.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
  },
]

export function SolutionsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % solutions.length)
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + solutions.length) % solutions.length)

  const activeSolution = solutions[activeIndex]

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url('${activeSolution.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 w-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Navigation Arrows */}
            <div className="mb-12 flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Previous solution"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Next solution"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Solution Content */}
            <div>
              <h2 className="mb-6 max-w-xl text-4xl font-bold text-white sm:text-5xl">
                {activeSolution.title}
              </h2>
              <p className="mb-6 max-w-xl text-xl font-semibold leading-tight text-white sm:text-2xl">
                {activeSolution.subtitle}
              </p>
              <p className="max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
                {activeSolution.description}
              </p>
            </div>
          </div>

          {/* Right Side - Other Solutions */}
          <div className="hidden lg:flex items-center">
            <div className="grid grid-cols-1 gap-6 w-full">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer transition-all rounded-xl p-6 backdrop-blur-sm ${
                    index === activeIndex
                      ? "bg-white/20 border border-white/30"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {solution.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2 lg:hidden">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to solution ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
