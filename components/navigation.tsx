"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown, X } from "lucide-react"

const expertiseItems = [
  { href: "/services#custom-software", label: "Custom software development" },
  { href: "/services#ai-ml", label: "AI, ML & generative AI" },
  { href: "/services#web", label: "Web development" },
  { href: "/services#mobile", label: "Mobile app development" },
  { href: "/services#uiux", label: "UI/UX design" },
  { href: "/services#devops", label: "DevOps & cloud engineering" },
  { href: "/services#qa", label: "Quality assurance" },
  { href: "/services#blockchain", label: "Blockchain" },
  { href: "/services#bigdata", label: "Big data" },
]

const engagementItems = [
  { href: "/engagement#dedicated-teams", label: "Dedicated Teams" },
  { href: "/engagement#staff-augmentation", label: "Staff Augmentation" },
  { href: "/engagement#project-outsourcing", label: "Project Outsourcing" },
  { href: "/engagement#cto-service", label: "CTO as a Service" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1220]/95 backdrop-blur-xl shadow-2xl shadow-[#00E0C6]/10 border-b border-[#00E0C6]/20"
          : "bg-gradient-to-b from-[#0B1220]/80 via-[#0F1A2E]/70 to-[#0B1220]/60 backdrop-blur-lg border-b border-[#00E0C6]/10"
      }`}
    >
      {/* Animated gradient background for futuristic AI feel */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00E0C6]/10 to-transparent blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#00E0C6]/5 to-transparent blur-3xl rounded-full" />
      </div>

      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="Algomind - Mind Over Market"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* Expertise Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-[#00E0C6] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]">
                Expertise
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00E0C6] to-[#00E0C6]/50 transition-all duration-300 group-hover:w-full rounded-full" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-full max-w-3xl border-[#00E0C6]/20 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/30 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 rounded-xl overflow-hidden p-0"
            >
              {/* Multi-column content */}
              <div className="flex">
                {/* Left Column - Services */}
                <div className="flex-1 p-6 border-r border-gray-200">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Services</h3>
                  <div className="space-y-3">
                    {expertiseItems.slice(0, 5).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-700 hover:text-[#00E0C6] transition-colors duration-200 font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Column - More Services */}
                <div className="flex-1 p-6">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">More Services</h3>
                  <div className="space-y-3">
                    {expertiseItems.slice(5).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-700 hover:text-[#00E0C6] transition-colors duration-200 font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Footer */}
              <div className="bg-gradient-to-r from-[#D946EF] to-[#EC4899] px-6 py-4 flex items-center justify-between">
                <span className="text-white font-semibold">Ready to transform your business?</span>
                <Link
                  href="/contact"
                  className="bg-white text-[#D946EF] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Portfolio Link */}
          <Link
            href="/portfolio"
            className="group relative rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-[#00E0C6] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            Portfolio
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00E0C6] to-[#00E0C6]/50 transition-all duration-300 group-hover:w-full rounded-full" />
          </Link>

          {/* Engagement Models Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-[#00E0C6] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]">
                Engagement models
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00E0C6] to-[#00E0C6]/50 transition-all duration-300 group-hover:w-full rounded-full" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-full max-w-2xl border-[#00E0C6]/20 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/30 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 rounded-xl overflow-hidden p-0"
            >
              {/* Content */}
              <div className="flex">
                <div className="flex-1 p-6">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Engagement Models</h3>
                  <div className="space-y-3">
                    {engagementItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-700 hover:text-[#00E0C6] transition-colors duration-200 font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Footer */}
              <div className="bg-gradient-to-r from-[#00E0C6] to-[#00A89B] px-6 py-4 flex items-center justify-between">
                <span className="text-[#0B1220] font-semibold">Choose the right engagement model for your project</span>
                <Link
                  href="/contact"
                  className="bg-[#0B1220] text-[#00E0C6] px-4 py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Solutions Link */}
          <Link
            href="/solutions"
            className="group relative rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-[#00E0C6] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            Solutions
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00E0C6] to-[#00E0C6]/50 transition-all duration-300 group-hover:w-full rounded-full" />
          </Link>

          {/* Company Link */}
          <Link
            href="/about"
            className="group relative rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-[#00E0C6] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            Company
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00E0C6] to-[#00E0C6]/50 transition-all duration-300 group-hover:w-full rounded-full" />
          </Link>

          {/* Resources Link */}
          <Link
            href="/resources"
            className="group relative rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-[#00E0C6] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            Resources
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00E0C6] to-[#00E0C6]/50 transition-all duration-300 group-hover:w-full rounded-full" />
          </Link>

          {/* Contact CTA Button */}
          <Link
            href="/contact"
            className="ml-4 rounded-lg bg-gradient-to-r from-[#00E0C6] to-[#00A89B] px-6 py-2 text-sm font-semibold text-[#0B1220] transition-all duration-300 hover:shadow-lg hover:shadow-[#00E0C6]/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#00E0C6]"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          {/* Mobile Menu Content */}
          <SheetContent
            side="right"
            className="w-80 border-l border-[#00E0C6]/20 bg-gradient-to-b from-[#0B1220] to-[#0F1A2E] p-0"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between border-b border-[#00E0C6]/20 px-6 py-4">
                <Image
                  src="/logo.png"
                  alt="Algomind"
                  width={100}
                  height={30}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-[#00E0C6] transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
                {/* Mobile Expertise Section */}
                <div className="space-y-2">
                  <p className="px-2 text-xs font-semibold text-[#00E0C6] uppercase tracking-wider">
                    Expertise
                  </p>
                  {expertiseItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-white/80 transition-all duration-300 hover:bg-[#00E0C6]/10 hover:text-[#00E0C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Portfolio */}
                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/80 transition-all duration-300 hover:bg-[#00E0C6]/10 hover:text-[#00E0C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6]"
                >
                  Portfolio
                </Link>

                {/* Mobile Engagement Models Section */}
                <div className="space-y-2 pt-2">
                  <p className="px-2 text-xs font-semibold text-[#00E0C6] uppercase tracking-wider">
                    Engagement Models
                  </p>
                  {engagementItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-white/80 transition-all duration-300 hover:bg-[#00E0C6]/10 hover:text-[#00E0C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Solutions */}
                <Link
                  href="/solutions"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/80 transition-all duration-300 hover:bg-[#00E0C6]/10 hover:text-[#00E0C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6]"
                >
                  Solutions
                </Link>

                {/* Mobile Company */}
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/80 transition-all duration-300 hover:bg-[#00E0C6]/10 hover:text-[#00E0C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6]"
                >
                  Company
                </Link>

                {/* Mobile Resources */}
                <Link
                  href="/resources"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/80 transition-all duration-300 hover:bg-[#00E0C6]/10 hover:text-[#00E0C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C6]"
                >
                  Resources
                </Link>
              </div>

              {/* Mobile CTA Button */}
              <div className="border-t border-[#00E0C6]/20 px-6 py-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-lg bg-gradient-to-r from-[#00E0C6] to-[#00A89B] px-6 py-3 text-center font-semibold text-[#0B1220] transition-all duration-300 hover:shadow-lg hover:shadow-[#00E0C6]/50"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
