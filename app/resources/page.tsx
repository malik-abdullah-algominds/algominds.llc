"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight } from "lucide-react"

const featuredArticles = [
  {
    id: 1,
    title: "Legacy Application Challenges: Hidden Barrier to Business Growth",
    excerpt: "Legacy systems can quietly hold your business back with growing technical debt, slow performance, and resistance to change. But modernization doesn't have to mean starting from scratch.",
    author: "Ethan Brooks",
    role: "QA Engineer",
    date: "02 Oct 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
  },
]

const allArticles = [
  {
    id: 1,
    title: "How Lean Product Development Accelerates SaaS Startup Success",
    excerpt: "This is the era of technology: ideas are plentiful, yet successful launches are...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    category: "Product Development",
  },
  {
    id: 2,
    title: "How AI and Machine Learning Are Transforming iOS App Development",
    excerpt: "Artificial Intelligence and Machine Learning are among the most rapidly evolving technologies that...",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
    category: "AI/ML",
  },
  {
    id: 3,
    title: "How to Choose the Right iOS App Development Company in the USA",
    excerpt: "In this digital-first world, it is important to become more of a necessity to build iOS applications...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    category: "App Development",
  },
  {
    id: 4,
    title: "Swift vs Flutter for iOS Development: Which is Better?",
    excerpt: "In this technological landscape, businesses and developers need to remain on top of...",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
    category: "Development",
  },
  {
    id: 5,
    title: "How 48-hour gap Connected FMS to WMS by Killing the Clipboard",
    excerpt: "In the manufacturing and field service industry, the biggest cost isn't always raw...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    category: "Case Study",
  },
  {
    id: 6,
    title: "Legacy Application Challenges: Hidden Barrier to Business Growth",
    excerpt: "Legacy systems can quietly hold your business back with growing technical debt, slow...",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
    category: "Modernization",
  },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSlide, setActiveSlide] = useState(0)

  const filteredArticles = allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl max-w-2xl">
            Blogs & articles
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Check out the latest in web design and development, stay up to date with Algominds blogs and updates, and find inspiration for your next project.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
            Featured articles
          </h2>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Article Content */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6 max-w-xl">
                {featuredArticles[0].title}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {featuredArticles[0].excerpt}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                    <span className="text-xs font-bold">EB</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{featuredArticles[0].author}</p>
                  <p className="text-sm text-muted-foreground">{featuredArticles[0].role}</p>
                </div>
              </div>

              <div className="flex gap-6 text-sm text-muted-foreground">
                <span>{featuredArticles[0].readTime}</span>
                <span>Published date: {featuredArticles[0].date}</span>
              </div>

              <Button className="mt-8 rounded-full bg-[#5B5BFF] hover:bg-[#4a4aff] text-white" asChild>
                <Link href="#">Read more</Link>
              </Button>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 overflow-hidden rounded-xl">
              <Image
                src={featuredArticles[0].image}
                alt={featuredArticles[0].title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-foreground">Featured articles</h3>
            <div className="flex gap-4">
              <button className="rounded-full bg-gray-100 p-3 hover:bg-gray-200">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="rounded-full bg-gray-100 p-3 hover:bg-gray-200">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Blogs Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              All blogs
            </h2>
            <div className="w-full sm:w-96">
              <Input
                type="search"
                placeholder="Search blogs, articles"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full bg-white border-gray-200"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href="#"
                className="group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-[#5B5BFF] mb-2">
                    {article.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#5B5BFF] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-[#5B5BFF]">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to scale your business with expert software solutions?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Connect with our experts to learn more about our software development services and get a quote within 24 hours.
              </p>
              <Button className="rounded-full bg-[#5B5BFF] hover:bg-[#4a4aff] text-white px-8" asChild>
                <Link href="/contact">Get consultation</Link>
              </Button>
            </div>
            <div className="relative h-96 overflow-hidden rounded-xl bg-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                alt="Consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
