"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Binoculars, Users, Rocket, TrendingUp, ArrowRight } from "lucide-react"

const steps = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    icon: Binoculars,
    description: "Deep dive into your vision, challenges, and competitive landscape",
    details: "Our experts analyze your product goals and create detailed user journeys with actionable project plans. We ensure every technical decision starts with a clear blueprint aligned to your business.",
    color: "from-blue-600 to-indigo-600",
    accentColor: "bg-blue-600",
  },
  {
    id: "dream-team",
    number: "02",
    title: "Dream Team",
    icon: Users,
    description: "Assemble the perfect team tailored to your project needs",
    details: "We hand-pick senior engineers, designers, and strategists with proven expertise in your industry. Your dedicated team works exclusively to deliver excellence.",
    color: "from-cyan-600 to-blue-600",
    accentColor: "bg-cyan-600",
  },
  {
    id: "launch",
    number: "03",
    title: "Launch",
    icon: Rocket,
    description: "Roll out your digital product with end-to-end support",
    details: "Whether it's a mobile app, custom platform, or web portal, our launch team provides comprehensive support until your users are completely satisfied.",
    color: "from-purple-600 to-pink-600",
    accentColor: "bg-purple-600",
  },
  {
    id: "scale",
    number: "04",
    title: "Scale",
    icon: TrendingUp,
    description: "Optimize, iterate, and scale based on real user data",
    details: "Post-launch, we continuously monitor performance, gather user feedback, and implement optimizations to ensure sustainable growth and market leadership.",
    color: "from-indigo-600 to-purple-600",
    accentColor: "bg-indigo-600",
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const currentStep = steps[activeStep]
  const Icon = currentStep.icon

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Our Proven Product Delivery Process
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            A strategic, 4-phase approach that ensures your software delivers business impact, on time and on budget.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Left - Steps Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-3 sticky top-8">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.color} shadow-xl shadow-blue-500/20`
                      : "bg-white/10 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-bold ${activeStep === index ? "text-white" : "text-white/50"}`}>
                      {step.number}
                    </span>
                    <div>
                      <h3 className={`font-bold text-base transition-colors ${activeStep === index ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs transition-colors ${activeStep === index ? "text-white/90" : "text-white/50"}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Active Step Detail */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Detail Card */}
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300">
                {/* Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${currentStep.color}`} />

                {/* Step Number and Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className={`text-6xl font-bold bg-gradient-to-r ${currentStep.color} bg-clip-text text-transparent mb-2`}>
                      {currentStep.number}
                    </p>
                    <h3 className="text-3xl font-bold text-white">
                      {currentStep.title}
                    </h3>
                  </div>
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${currentStep.color} text-white shadow-lg`}>
                    <Icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/90 text-lg font-semibold mb-4">
                  {currentStep.description}
                </p>

                {/* Details */}
                <p className="text-white/70 leading-relaxed text-base">
                  {currentStep.details}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    activeStep === 0 ? "Clear roadmap & vision alignment" : activeStep === 1 ? "Dedicated expert resources" : activeStep === 2 ? "Seamless market entry" : "Sustainable competitive advantage",
                    activeStep === 0 ? "Competitive analysis" : activeStep === 1 ? "Industry expertise" : activeStep === 2 ? "Full customer support" : "Continuous optimization",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-white/80">
                      <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${currentStep.color}`} />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated transition indicator */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeStep === idx ? "w-8 bg-blue-500" : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Steps View (Mobile/Tablet) */}
        <div className="lg:hidden mt-12 pb-8 border-b border-white/10">
          <div className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 w-40 p-4 rounded-lg text-center transition-all duration-300 snap-center ${
                  activeStep === index
                    ? `bg-gradient-to-b ${step.color} shadow-lg`
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <p className="text-sm font-semibold text-white/70 mb-2">{step.number}</p>
                <h4 className="font-bold text-white text-sm">{step.title}</h4>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <Link href="/contact">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              Build Smarter Solutions with AlgoMinds
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
