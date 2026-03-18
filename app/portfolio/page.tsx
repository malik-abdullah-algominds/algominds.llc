import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio & Case Studies",
  description:
    "Explore case studies and portfolio projects delivered by AlgoMinds across AI, healthcare, social platforms, and enterprise systems.",
  path: "/portfolio",
  keywords: ["software portfolio", "AI case studies", "custom app success stories"],
})

const projects = [
  {
    title: "Co-creating a groundbreaking menstrual health platform for UNICEF",
    client: "UNICEF",
    category: "Education / Public Health",
    description: "OKY is a groundbreaking menstrual health platform developed for UNICEF. We created the world's first period tracker app for girls, providing comprehensive period education and health support.",
    image: "https://via.placeholder.com/600x400?text=UNICEF+Project",
  },
  {
    title: "Building a connected fitness community",
    client: "FitTogether",
    category: "Social Networking",
    description: "Founded by Scott Bowen, FitTogether is a fitness social network that connects athletes and wellness enthusiasts worldwide.",
    image: "https://via.placeholder.com/600x400?text=FitTogether+Project",
  },
  {
    title: "Revolutionizing pregnancy & parenthood connections",
    client: "Bumpdate",
    category: "Social Networking / Health & Wellness",
    description: "Gabrielle Iorio Sylk envisioned a private social network connecting mothers. We brought Bumpdate to life—a comprehensive pregnancy and parenthood platform.",
    image: "https://via.placeholder.com/600x400?text=Bumpdate+Project",
  },
  {
    title: "Secure HIPAA-Compliant Operations for Healthcare",
    client: "Healthcare Provider",
    category: "Manufacturing & Field Services",
    description: "A comprehensive healthcare logistics and operations management system ensuring HIPAA compliance and field service optimization.",
    image: "https://via.placeholder.com/600x400?text=Healthcare+Project",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://origamistudios.us/wp-content/uploads/2025/10/Customers-page.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:mb-6 sm:text-5xl md:mb-8 md:text-6xl lg:text-8xl">
              Bringing vision to life
            </h1>

            {/* Subheading */}
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/90 sm:mb-12 sm:text-lg md:mb-16 md:text-2xl">
              Step into a galaxy of 10+ groundbreaking projects—AI marvels, app innovations, and cloud conquests that propel startups, supercharge SMEs, and empower enterprises.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold text-base rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl max-w-fit"
            >
              Schedule a discovery call
            </Link>
          </div>
        </div>

        {/* Bottom Section with Featured Clients and Awards */}
        <div className="relative z-10 bg-gradient-to-t from-black/80 to-transparent px-4 py-8 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:px-6 sm:py-16 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
            {/* Featured Clients */}
            <div>
              <p className="text-white/70 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6">
                Featured Clients
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-white text-sm sm:text-base opacity-75 font-medium">UNICEF</span>
                <span className="text-white text-sm sm:text-base opacity-75 font-medium">University of Michigan</span>
                <span className="text-white text-sm sm:text-base opacity-75 font-medium">Domino's</span>
                <span className="text-white text-sm sm:text-base opacity-75 font-medium">Nestlé</span>
              </div>
            </div>

            {/* Awards & Partnerships */}
            <div className="sm:text-right">
              <p className="text-white/70 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6">
                Awards & Partnerships
              </p>
              <div className="flex flex-wrap gap-4 sm:justify-end">
                <span className="text-white text-sm sm:text-base opacity-75 font-medium">ISO Certified</span>
                <span className="text-white text-sm sm:text-base opacity-75 font-medium">Award Winner</span>
                <span className="text-white text-sm sm:text-base opacity-75 font-medium">Industry Partner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrow */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce sm:bottom-20 sm:block">
          <svg
            className="w-6 h-6 text-white"
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

      {/* Projects Grid Section */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Latest Work
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl">
              Explore how we've helped startups, SMEs, and global leaders turn vision into market success.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={index}
                href="#"
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-black/40" />
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                
                {/* Category Tag */}
                <div className="absolute right-4 top-4 z-10">
                  <span className="rounded-full bg-white/15 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-semibold text-white border border-white/30">
                    {project.category}
                  </span>
                </div>

                {/* Content Container */}
                <div className="relative p-8 sm:p-10 h-full min-h-96 flex flex-col justify-end">
                  {/* Client Badge */}
                  <div className="mb-4">
                    <p className="text-xs text-white/60 uppercase tracking-widest font-semibold">{project.client}</p>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/80 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="border-t border-white/20 pt-4 flex items-center justify-between">
                    <span className="text-xs text-white/60">View Project</span>
                    <svg className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10">
            Let's discuss how we can help transform your vision into market success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-blue-600 font-bold text-lg hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
