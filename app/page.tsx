import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroRedesigned } from "@/components/hero-redesigned"
import { WhyChoose } from "@/components/why-choose"
import { ServicesSection } from "@/components/services-section"
import { SolutionsCarousel } from "@/components/solutions-carousel"
import { ProcessSection } from "@/components/process-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { Footer } from "@/components/footer"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "AI Development & Custom Software Solutions",
  description:
    "AlgoMinds LLC builds AI-powered, scalable software products for startups, SMEs, and enterprises.",
  path: "/",
  keywords: [
    "AI development company",
    "custom software development services",
    "web application development",
    "digital transformation services",
  ],
})

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AlgoMinds LLC",
            url: "https://algominds.live",
            potentialAction: {
              "@type": "ContactAction",
              target: "https://algominds.live/contact",
            },
          }),
        }}
      />
      <Navigation />
      <HeroRedesigned />
      <WhyChoose />
      <ServicesSection />
      <SolutionsCarousel />
      <ProcessSection />
      <PortfolioSection />
      <Footer />
    </main>
  )
}
