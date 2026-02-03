import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

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
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070",
  },
  {
    title: "Transforming OT cybersecurity with OTNexus",
    client: "OTNexus",
    tag: "Cybersecurity",
    metric: "95%",
    metricLabel: "Improved security posture",
    description: "A comprehensive cybersecurity solution for operational technology environments.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034",
  },
  {
    title: "Revolutionizing healthcare with smart patient management",
    client: "HealthTech Pro",
    tag: "Healthcare",
    metric: "40%",
    metricLabel: "Reduced wait times",
    description: "Digital transformation of patient management systems for modern healthcare facilities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
  },
  {
    title: "Building the future of e-learning with EduSmart",
    client: "EduSmart",
    tag: "Education",
    metric: "3x",
    metricLabel: "Increase in engagement",
    description: "An adaptive learning platform with AI-powered personalization and progress tracking.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
  },
  {
    title: "Streamlining insurance claims with InsureFlow",
    client: "InsureFlow",
    tag: "Insurance",
    metric: "80%",
    metricLabel: "Automated claim processing",
    description: "AI-powered document processing and fraud detection for insurance operations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
  },
  {
    title: "Enhancing fan engagement for SportsFan Pro",
    client: "SportsFan Pro",
    tag: "Sports",
    metric: "2.5M",
    metricLabel: "Active monthly users",
    description: "A real-time analytics and fan engagement platform for sports organizations.",
    image: "https://images.unsplash.com/photo-1461896836934- voices-on-0?q=80&w=2070",
  },
]

const tags = ["All", "AI", "Cybersecurity", "Healthcare", "Education", "Insurance", "Sports"]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3B5BDB] via-[#5F3DC4] to-[#AE3EC9] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Work that speaks for itself
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              We engineer mobile apps and offer software development services that drive high-end growth 
              by use of AI innovations and select the best infrastructure and technical platforms. Explore 
              how we have helped startups, SMEs, and global leaders turn vision into market success.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  tag === "All"
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative h-[500px] overflow-hidden rounded-2xl"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Tag */}
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground">
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-white/80">{project.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-white/20" />
                      <span className="font-medium text-white">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-3xl font-bold text-white">{project.metric}</span>
                        <p className="text-sm text-white/70">{project.metricLabel}</p>
                      </div>
                      <button className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20">
                        <Download className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
            Let&apos;s discuss how we can help transform your vision into market success.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-full bg-white px-8 text-foreground hover:bg-white/90"
            asChild
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
