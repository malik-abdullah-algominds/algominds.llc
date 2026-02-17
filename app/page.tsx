import { Navigation } from "@/components/navigation"
import { HeroRedesigned } from "@/components/hero-redesigned"
import { StatsSection } from "@/components/stats-section"
import { WhyChoose } from "@/components/why-choose"
import { ServicesSection } from "@/components/services-section"
import { SolutionsCarousel } from "@/components/solutions-carousel"
import { ProcessSection } from "@/components/process-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroRedesigned />
      <StatsSection />
      <WhyChoose />
      <ServicesSection />
      <SolutionsCarousel />
      <ProcessSection />
      <PortfolioSection />
      <Footer />
    </main>
  )
}
