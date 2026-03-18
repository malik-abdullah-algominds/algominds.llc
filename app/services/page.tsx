import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Software Development Services",
  description:
    "Explore AlgoMinds software development services including AI/ML, web, mobile, DevOps, cloud, and quality engineering.",
  path: "/services",
  keywords: [
    "software development services",
    "AI ML development",
    "mobile app development company",
    "DevOps consulting services",
  ],
})

const servicesLeft = [
  {
    title: "Custom software development",
    description: "Tailor-made software solutions designed to match your business needs with scalable architecture and secure systems.",
  },
  {
    title: "AI, ML & generative AI",
    description: "AI-driven systems that automate processes, unlock insights, and enable smarter decision-making.",
  },
  {
    title: "Web development",
    description: "Modern, responsive, and high-performance web applications that are fast, SEO-optimized, and scalable.",
  },
  {
    title: "Mobile app development",
    description: "Native and cross-platform apps for iOS and Android with user-friendly design and high performance.",
  },
  {
    title: "UI/UX design",
    description: "Designs that enhance usability, boost engagement, and improve conversions with consistent branding.",
  },
  {
    title: "Quality assurance",
    description: "Comprehensive testing to ensure flawless performance, bug-free releases, and security validation.",
  },
]

const servicesRight = [
  {
    title: "DevOps & cloud engineering",
    description: "Scalable cloud solutions with reduced downtime, cost optimization, and secure infrastructure.",
  },
  {
    title: "Cloud services",
    description: "AWS, Azure, and Google Cloud expertise to build and manage your cloud infrastructure.",
  },
  {
    title: "AR/VR",
    description: "Immersive digital experiences using AR & VR for enhanced engagement and interactive storytelling.",
  },
  {
    title: "Blockchain",
    description: "Decentralized and secure blockchain applications with transparency and trustless systems.",
  },
  {
    title: "Big data",
    description: "Transform data into actionable insights with real-time analytics and business intelligence.",
  },
  {
    title: "CTO as a service",
    description: "Strategic technology leadership without full-time cost for expert guidance and faster innovation.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3B5BDB] via-[#5F3DC4] to-[#AE3EC9] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Custom software development services that drive results
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              We do not just assign a project manager. You get a CTO ensuring your technical decisions 
              are always business led. From web development services to big data services, we offer a 
              full-stack technology solution for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-12">
              {servicesLeft.map((service) => (
                <div key={service.title} className="group">
                  <Link href="/contact" className="block">
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {servicesRight.map((service) => (
                <div key={service.title} className="group">
                  <Link href="/contact" className="block">
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Button className="rounded-full bg-primary px-8" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How we deliver our software development services
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                At Algominds, we have modeled a collaborative process that delivers web, mobile and 
                custom software development services that not only performs beyond your expectations, 
                it ensures timely delivery and within the agreed budget.
              </p>
              <div className="mt-8">
                <Button className="rounded-full bg-primary px-8" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {["Discovery", "Dream team", "Launch", "Scale"].map((step, index) => (
                <div key={step} className="rounded-xl bg-white p-6 shadow-sm">
                  <div
                    className={`mb-3 h-1 w-12 rounded-full ${
                      index === 0
                        ? "bg-[#3B5BDB]"
                        : index === 1
                          ? "bg-[#37B5B6]"
                          : index === 2
                            ? "bg-[#B197FC]"
                            : "bg-[#3B5BDB]"
                    }`}
                  />
                  <h3 className="text-lg font-bold text-foreground">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3B5BDB] via-[#5F3DC4] to-[#AE3EC9] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Let&apos;s discuss how our services can help you achieve your goals. Get in touch for a free consultation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 text-foreground hover:bg-white/90"
              asChild
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white bg-transparent px-8 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/engagement">View Engagement Models</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
