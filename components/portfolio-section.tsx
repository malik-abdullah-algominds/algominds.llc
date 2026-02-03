"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Empowering enterprises with Adovvy's actionable AI",
    client: "Adovvy",
    tag: "AI",
    metric: "94%",
    metricLabel: "Improved customer satisfaction",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070",
  },
  {
    title: "Transforming OT cybersecurity with OTNexus",
    client: "OTNexus",
    tag: "Cybersecurity",
    metric: "95%",
    metricLabel: "Improved security posture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034",
  },
  {
    title: "Revolutionizing healthcare with smart patient management",
    client: "HealthTech",
    tag: "Healthcare",
    metric: "40%",
    metricLabel: "Reduced wait times",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
  },
]

export function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Work that speaks for itself
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              We engineer mobile apps and offer software development services that drive high-end growth by use of AI 
              innovations and select the best infrastructure and technical platforms. Explore how we have helped 
              startups, SMEs, and global leaders turn vision into market success.
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Button variant="outline" className="rounded-full bg-transparent" asChild>
              <Link href="/portfolio">View all</Link>
            </Button>
            <button
              onClick={prevProject}
              className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextProject}
              className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.title}
              className="group relative h-[500px] overflow-hidden rounded-2xl"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Tag */}
              <div className="absolute right-4 top-4">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground">
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                
                <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-white/80">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-2xl font-bold text-white">{project.metric}</span>
                      <p className="text-xs text-white/70">{project.metricLabel}</p>
                    </div>
                    <button className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20">
                      <Download className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="mt-8 flex items-center justify-center gap-3 sm:hidden">
          <Button variant="outline" className="rounded-full bg-transparent" asChild>
            <Link href="/portfolio">View all</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
