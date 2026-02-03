"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, Brain, Cloud, ArrowRight, Badge } from "lucide-react"

const servicesCategories = [
  {
    category: "Core Engineering",
    icon: Code2,
    color: "from-blue-600 to-indigo-600",
    services: [
      { name: "Custom software development", featured: true },
      { name: "Web development" },
      { name: "Mobile app development" },
    ],
  },
  {
    category: "AI & Emerging Tech",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    services: [
      { name: "AI, ML & generative AI", featured: true },
      { name: "UI/UX design" },
      { name: "Quality assurance" },
    ],
  },
  {
    category: "Cloud & Scale",
    icon: Cloud,
    color: "from-cyan-600 to-blue-600",
    services: [
      { name: "DevOps & cloud engineering", featured: true },
      { name: "Cloud services" },
      { name: "AR/VR, Blockchain & Big data" },
      { name: "CTO as a service" },
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl -z-10" />

      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-balance text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Custom software development that drives real business outcomes
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Description & CTA */}
          <div className="flex flex-col justify-start">
            <div className="space-y-6">
              <p className="text-lg font-semibold text-slate-900">
                We don't just assign a project manager — you get a dedicated CTO who ensures every technical decision aligns with your business goals.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                From web and mobile development to AI, cloud, and big data, we deliver full-stack solutions built to scale. Whether you're a startup or enterprise, we have the expertise to drive innovation.
              </p>
            </div>

            {/* Trust Signal */}
            <div className="mt-10 p-4 rounded-lg bg-white/60 border border-slate-200/50 backdrop-blur-sm">
              <p className="text-sm font-semibold text-slate-900">✓ Trusted by 100+ companies worldwide</p>
              <p className="text-xs text-slate-600 mt-1">15+ years of delivering high-impact solutions</p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 space-y-3">
              <Link href="/contact" className="block">
                <Button 
                  size="lg"
                  className="w-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services" className="block">
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full border-slate-300 hover:bg-slate-50 rounded-lg transition-all duration-300"
                >
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Service Categories */}
          <div className="lg:col-span-2 space-y-6">
            {servicesCategories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.category}
                  className="group relative p-6 rounded-xl bg-white border border-slate-200/50 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${cat.color} rounded-xl pointer-events-none transition-opacity duration-300`} />

                  {/* Header with Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${cat.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Services Grid */}
                  <div className="space-y-3">
                    {cat.services.map((service) => (
                      <Link
                        key={service.name}
                        href="/services"
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                      >
                        <div className={`flex-shrink-0 h-2 w-2 rounded-full ${service.featured ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-slate-300'} mt-2 group-hover/item:scale-150 transition-transform duration-300`} />
                        <div className="flex-1 min-w-0">
                          <span className="text-base font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors inline-flex items-center gap-2">
                            {service.name}
                            {service.featured && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-xs font-bold text-amber-700">
                                <Badge className="h-3 w-3" />
                                Popular
                              </span>
                            )}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all duration-300 flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200">
          <div className="text-center py-4">
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">100+</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Active Projects</p>
          </div>
          <div className="text-center py-4">
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">15+</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Years Experience</p>
          </div>
          <div className="text-center py-4">
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">200+</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Engineers</p>
          </div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  )
}
