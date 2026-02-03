"use client"

import { CheckCircle2, Shield, Zap, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reasons = [
  {
    icon: CheckCircle2,
    title: "Quality & reliability",
    stat: "100+ successful engagements",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "End-to-end solutions",
    stat: "25K+ engineering hours delivered",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "AI & emerging tech expertise",
    stat: "15+ years industry leadership",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "US-focused & transparent",
    stat: "Direct team accountability",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CheckCircle2,
    title: "Expert teams on-demand",
    stat: "200+ elite engineers available",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Scalable & flexible",
    stat: "Adapts to your growth",
    color: "from-rose-500 to-red-500",
  },
]

export function WhyChoose() {
  return (
    <section className="relative bg-white py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 pointer-events-none" />
      
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="text-balance text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Why partner with AlgoMinds
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-12">
          {/* Left Column - Paragraph & CTA */}
          <div className="lg:col-span-1">
            <p className="text-lg leading-relaxed text-slate-700 font-medium">
              Trusted by global enterprises, fast-growing startups, and AI-driven innovators for 15+ years — helping partners reduce costs, accelerate delivery, and build scalable, future-ready software.
            </p>
            
            <p className="mt-5 text-base text-slate-600">
              <span className="font-semibold text-slate-900">Save up to $250,000 annually</span> through smarter engineering and strategic partnerships.
            </p>

            {/* CTA Button */}
            <Link href="/contact" className="inline-block mt-8">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right Column - Reasons Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason) => {
                const Icon = reason.icon
                return (
                  <div
                    key={reason.title}
                    className="group relative p-6 rounded-xl bg-white border border-slate-200/50 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
                  >
                    {/* Gradient accent on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-xl pointer-events-none transition-opacity" style={{backgroundImage: `linear-gradient(135deg, var(--color-start), var(--color-end))`}} />

                    {/* Icon */}
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${reason.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {reason.title}
                    </h3>

                    {/* Micro-stat */}
                    <p className="text-sm text-slate-600 font-medium">
                      {reason.stat}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom divider line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  )
}
