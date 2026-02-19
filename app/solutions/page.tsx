import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Solutions | Algominds LLC",
  description: "Industry-specific solutions for Retail, Healthcare, Education, Insurance, Travel, Social Platforms, and Sports.",
}

const solutions = [
  {
    industry: "Insurance",
    subtitle: "Automate 80% of claim processing",
    description: "We integrate AI-powered document processing and fraud detection to streamline your insurance operations and reduce manual work.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
  },
  {
    industry: "Travel & hospitality",
    subtitle: "Turn every guest into a repeat customer with frictionless journeys.",
    description: "We build integrated systems that remove pain points, from AI-powered booking engines that personalize offers to contactless check-in/out and smart concierge services.",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031",
  },
  {
    industry: "Sports & teams",
    subtitle: "Monetize your fanbase and unlock athlete performance with data.",
    description: "Our platforms enable real-time analytics, fan engagement tools, and performance optimization systems that drive revenue and results.",
    image: "https://images.unsplash.com/photo-1461896836934- voices-on-0?q=80&w=2070",
  },
  {
    industry: "Education",
    subtitle: "Elevate learning with our web and mobile apps",
    description: "We create immersive learning experiences with adaptive AI, gamification, and real-time progress tracking for modern education.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
  },
  {
    industry: "Retail & ecommerce",
    subtitle: "Turn abandoned carts into a 15% revenue stream.",
    description: "Our AI-powered recommendation engines and checkout optimization increase conversions and customer lifetime value significantly.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
  },
  {
    industry: "Healthcare",
    subtitle: "Improve patient outcomes with secure digital solutions",
    description: "Secure healthcare software & analytics that improve patient care, ensure compliance, and streamline operations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - full visible background image */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        {/* Background image - using background layer for consistent stacking */}
        <div className="absolute inset-0 -z-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('https://origamistudios.us/wp-content/uploads/2025/10/opt1-5-min.jpg')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
          />
        </div>

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-black/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Transform your industry with our solutions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Discover solutions crafted with Microsoft AI Cloud and AWS to empower your startup, SME, or enterprise.
            </p>
            <div className="mt-8">
              <Button size="lg" className="rounded-full bg-white text-[#0B1220] px-6 py-3">
                <Link href="/contact">Schedule a discovery call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.industry}
                className="group relative h-[400px] overflow-hidden rounded-2xl"
              >
                <img
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.industry}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white">{solution.industry}</h3>
                  <p className="mt-2 text-sm font-medium text-white/90">{solution.subtitle}</p>
                  <p className="mt-3 text-sm text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Industry expertise that delivers results
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our deep industry knowledge combined with cutting-edge technology expertise allows us 
                to deliver solutions that truly understand and address your specific challenges. We 
                don&apos;t just build software - we build competitive advantages.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Deep domain expertise in multiple industries",
                  "Proven track record with 100+ successful projects",
                  "AI-first approach to maximize efficiency",
                  "Scalable solutions built for growth",
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                alt="Team working"
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
            Don&apos;t See Your Industry?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            We work across many industries. Let&apos;s discuss how we can create a custom solution for your specific needs.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-full bg-white px-8 text-foreground hover:bg-white/90"
            asChild
          >
            <Link href="/contact">Get a Custom Solution</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
