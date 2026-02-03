import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | Algominds LLC",
  description: "Algominds LLC is a technology solutions company specializing in custom software development, artificial intelligence, and digital transformation.",
}

const values = [
  { title: "Quality & reliability", description: "We never compromise on the quality of our deliverables" },
  { title: "End-to-end solutions", description: "From ideation to deployment and beyond" },
  { title: "AI & emerging tech expertise", description: "Staying ahead with cutting-edge technologies" },
  { title: "US-focused & transparent", description: "Clear communication and honest partnerships" },
  { title: "Expert teams on-demand", description: "Access to top talent when you need it" },
  { title: "Scalable & flexible", description: "Solutions that grow with your business" },
]

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "200+", label: "Expert engineers" },
  { value: "100+", label: "Clients served" },
  { value: "$300M+", label: "Client value delivered" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3B5BDB] via-[#5F3DC4] to-[#AE3EC9] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Technology Solutions for the Modern Enterprise
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Algominds LLC is a technology solutions company specializing in custom software development, 
              artificial intelligence, and digital transformation. We partner with businesses to build 
              innovative, scalable, and secure digital products that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary sm:text-5xl">{stat.value}</div>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                To empower businesses with intelligent, reliable, and future-ready digital solutions 
                that drive measurable growth and innovation. We believe technology should be an enabler, 
                not a barrier, to your success.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Vision
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                To be a trusted global technology partner driving innovation through software and AI, 
                helping businesses thrive in the digital age. We envision a world where every business 
                has access to world-class technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why partner with Algominds
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Trusted by global enterprises, high-growth startups, and AI-driven innovators for 15+ years - 
              helping partners save over $250,000 annually through smarter, sustainable development.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Expert Team, Exceptional Results
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our team consists of experienced developers, designers, AI specialists, and project managers 
                committed to delivering high-impact digital solutions. We bring together diverse expertise 
                to tackle your most challenging technology problems.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We do not just assign a project manager. You get a CTO ensuring your technical decisions 
                are always business led. From web development services to big data services, we offer a 
                full-stack technology solution for businesses of all sizes.
              </p>
              <div className="mt-8">
                <Button className="rounded-full bg-primary px-8" asChild>
                  <Link href="/contact">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                alt="Team collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3B5BDB] via-[#5F3DC4] to-[#AE3EC9] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Let&apos;s discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-full bg-white px-8 text-foreground hover:bg-white/90"
            asChild
          >
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
