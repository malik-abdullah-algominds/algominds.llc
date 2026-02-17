import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Portfolio | Algominds LLC",
  description: "Explore our portfolio of successful projects across AI, cybersecurity, healthcare, and more.",
}

const projects = [
  {
    title: "Empowering enterprises with Adovvy's actionable AI",
    client: "Adovvy",
    tag: "AI",
    metric: "94%",
    metricLabel: "Improved customer satisfaction",
    description: "We built an AI-powered analytics platform that transforms raw data into actionable business insights.",
  },
  {
    title: "Transforming OT cybersecurity with OTNexus",
    client: "OTNexus",
    tag: "Cybersecurity",
    metric: "95%",
    metricLabel: "Improved security posture",
    description: "A comprehensive cybersecurity solution for operational technology environments.",
  },
  {
    title: "Revolutionizing healthcare with smart patient management",
    client: "HealthTech Pro",
    tag: "Healthcare",
    metric: "40%",
    metricLabel: "Reduced wait times",
    description: "Digital transformation of patient management systems for modern healthcare facilities.",
  },
  {
    title: "Building the future of e-learning with EduSmart",
    client: "EduSmart",
    tag: "Education",
    metric: "3x",
    metricLabel: "Increase in engagement",
    description: "An adaptive learning platform with AI-powered personalization and progress tracking.",
  },
  {
    title: "Streamlining insurance claims with InsureFlow",
    client: "InsureFlow",
    tag: "Insurance",
    metric: "80%",
    metricLabel: "Automated claim processing",
    description: "AI-powered document processing and fraud detection for insurance operations.",
  },
  {
    title: "Enhancing fan engagement for SportsFan Pro",
    client: "SportsFan Pro",
    tag: "Sports",
    metric: "2.5M",
    metricLabel: "Active monthly users",
    description: "A real-time analytics and fan engagement platform for sports organizations.",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
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
        <div className="absolute inset-0 bg-black/45 md:bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
            <div className="max-w-4xl">
              {/* Main Heading */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight text-white mb-4 sm:mb-6 md:mb-8 tracking-tight">
                Bringing vision to life
              </h1>

              {/* Subheading */}
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-12 max-w-3xl leading-relaxed">
                Step into a galaxy of 10+ groundbreaking projects—AI marvels, app innovations, and cloud conquests that propel startups, supercharge SMEs, and empower enterprises.
              </p>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 font-bold text-sm sm:text-base rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-white/20 max-w-fit"
              >
                Schedule a discovery call
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
                  <div className="text-white text-xs sm:text-sm opacity-75">UNICEF</div>
                  <div className="text-white text-xs sm:text-sm opacity-75">University of Michigan</div>
                  <div className="text-white text-xs sm:text-sm opacity-75">Domino's</div>
                  <div className="text-white text-xs sm:text-sm opacity-75">Nestlé</div>
                </div>
              </div>

              {/* Awards & Partnerships */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:text-right">
                <p className="text-white/70 text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-6">
                  Awards & Partnerships
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 lg:justify-end">
                  <div className="text-white text-xs sm:text-sm opacity-75">ISO Certified</div>
                  <div className="text-white text-xs sm:text-sm opacity-75">Award Winner</div>
                  <div className="text-white text-xs sm:text-sm opacity-75">Industry Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrow */}
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

      {/* Projects Grid Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Latest Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore how we've helped startups, SMEs, and global leaders turn vision into market success.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={index}
                href="/contact"
                className="group relative h-80 sm:h-96 overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 opacity-80" />
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Tag */}
                <div className="absolute right-4 top-4 z-10">
                  <span className="rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm font-semibold text-white border border-white/30">
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/80 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="border-t border-white/20 pt-4 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-medium text-white/80">{project.client}</span>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-bold text-white">{project.metric}</span>
                        <p className="text-xs text-white/70 leading-none">{project.metricLabel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3B5BDB] via-[#5F3DC4] to-[#AE3EC9] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Let's discuss how we can help transform your vision into market success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 rounded-full bg-white text-[#5F3DC4] font-bold hover:bg-white/90 transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
