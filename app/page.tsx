import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/stats-section"
import { WhyChoose } from "@/components/why-choose"
import { ServicesSection } from "@/components/services-section"
import { SolutionsCarousel } from "@/components/solutions-carousel"
import { ProcessSection } from "@/components/process-section"
import { AwardsSection } from "@/components/awards-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StatsSection />
      <WhyChoose />
      <ServicesSection />
      <SolutionsCarousel />
      <ProcessSection />
      <AwardsSection />
      <PortfolioSection />
      <Footer />
    </main>
  )
}
