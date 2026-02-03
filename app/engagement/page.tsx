import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Engagement Models | Algominds LLC",
  description: "Flexible engagement models including dedicated teams, staff augmentation, project outsourcing, and CTO as a Service.",
}

const models = [
  {
    title: "Dedicated Teams",
    description: "A fully dedicated team working exclusively on your project with long-term collaboration and full control over resources.",
    benefits: ["Full-time dedicated resources", "Direct team communication", "Long-term collaboration", "Complete project control"],
    ideal: "Long-term projects requiring consistent team involvement",
    color: "bg-[#3B5BDB]",
  },
  {
    title: "Staff Augmentation",
    description: "Extend your in-house team with skilled professionals who integrate seamlessly with your existing workflow.",
    benefits: ["Flexible scaling", "Quick onboarding", "Specialized skills on demand", "Cost-effective expansion"],
    ideal: "Teams needing specific expertise or temporary scaling",
    color: "bg-[#37B5B6]",
  },
  {
    title: "Project Outsourcing",
    description: "End-to-end project delivery managed entirely by us, from planning to deployment.",
    benefits: ["Fixed cost & timeline", "Reduced management overhead", "Complete accountability", "Risk mitigation"],
    ideal: "Well-defined projects with clear requirements",
    color: "bg-[#B197FC]",
  },
  {
    title: "CTO as a Service",
    description: "Strategic technology leadership for startups and growing companies without full-time executive costs.",
    benefits: ["Expert technical guidance", "Strategic planning", "Technology roadmap", "Vendor management"],
    ideal: "Startups and SMEs needing strategic tech leadership",
    color: "bg-[#AE3EC9]",
  },
]

const businessSizes = [
  {
    title: "Startups",
    description: "Agile teams and flexible engagement to help you build and scale fast with minimal overhead.",
  },
  {
    title: "SMEs",
    description: "Balanced solutions that optimize cost while delivering enterprise-grade quality and reliability.",
  },
  {
    title: "Enterprise",
    description: "Robust teams and comprehensive solutions for complex, large-scale transformation projects.",
  },
]

export default function EngagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3B5BDB] via-[#5F3DC4] to-[#AE3EC9] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Flexible Ways to Work Together
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Choose the engagement model that best fits your needs. Whether you need a dedicated team, 
              want to augment your staff, or prefer end-to-end project delivery, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {models.map((model) => (
              <div
                key={model.title}
                className="group flex flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <div className={`mb-6 h-2 w-16 rounded-full ${model.color}`} />
                <h3 className="mb-3 text-2xl font-bold text-foreground">{model.title}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {model.description}
                </p>
                <div className="mb-6 space-y-3">
                  {model.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ideal for</p>
                  <p className="mt-1 font-medium text-foreground">{model.ideal}</p>
                </div>
                <Button className="mt-6 w-fit rounded-full bg-primary" asChild>
                  <Link href="/contact" className="gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Sizes */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Solutions Scaled to Your Needs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              No matter the size of your business, we have the right engagement model for you.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {businessSizes.map((size) => (
              <div
                key={size.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <h3 className="mb-4 text-xl font-bold text-foreground">{size.title}</h3>
                <p className="text-muted-foreground">{size.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How we work with you
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our engagement process is designed to be transparent, collaborative, and results-driven. 
                From the initial consultation to project delivery and beyond, we maintain open communication 
                and ensure alignment with your business goals.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Initial consultation to understand your needs",
                  "Custom proposal tailored to your requirements",
                  "Transparent pricing with no hidden costs",
                  "Regular progress updates and milestone reviews",
                  "Dedicated account manager for seamless communication",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
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
            Not Sure Which Model Fits?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Our team can help you choose the right engagement model based on your project requirements and business goals.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-full bg-white px-8 text-foreground hover:bg-white/90"
            asChild
          >
            <Link href="/contact" className="gap-2">
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
