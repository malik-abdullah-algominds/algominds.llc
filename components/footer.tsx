"use client"

import Link from "next/link"
import { Linkedin, Instagram, Facebook } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const footerColumns = {
  engineering: [
    { label: "Software development", href: "/services" },
    { label: "Web development", href: "/services" },
    { label: "Mobile app development", href: "/services" },
    { label: "UI/UX design", href: "/services" },
    { label: "Quality assurance", href: "/services" },
    { label: "DevOps", href: "/services" },
    { label: "Cloud services", href: "/services" },
  ],
  ai: [
    { label: "Generative AI", href: "/services" },
    { label: "AI Agents", href: "/services" },
    { label: "Machine learning services", href: "/services" },
    { label: "AI-enabled product development", href: "/services" },
    { label: "AI consulting & advisory", href: "/services" },
    { label: "AI training & support", href: "/services" },
  ],
  engagement: [
    { label: "Staff augmentation", href: "/engagement" },
    { label: "Dedicated teams", href: "/engagement" },
    { label: "Project outsourcing", href: "/engagement" },
    { label: "Solutions for startups", href: "/solutions" },
    { label: "Solutions for enterprise", href: "/solutions" },
    { label: "CTO as a service", href: "/engagement" },
  ],
  about: [
    { label: "Technologies", href: "/services" },
    { label: "Company", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact us", href: "/contact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer 
      className={`relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 50%, rgba(15, 23, 42, 0.9) 100%),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(148, 163, 184, 0.03) 35px,
            rgba(148, 163, 184, 0.03) 70px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 35px,
            rgba(148, 163, 184, 0.02) 35px,
            rgba(148, 163, 184, 0.02) 70px
          )
        `,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1">
          {/* Engineering */}
          <div className="transition-transform duration-500 hover:translate-y-[-2px]">
            <h4 className="mb-8 text-xs font-semibold tracking-widest text-white/90 uppercase">Engineering</h4>
            <ul className="space-y-4">
              {footerColumns.engineering.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-all duration-300 hover:text-white hover:pl-1 inline-flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Artificial Intelligence */}
          <div className="transition-transform duration-500 hover:translate-y-[-2px]">
            <h4 className="mb-8 text-xs font-semibold tracking-widest text-white/90 uppercase">Artificial Intelligence</h4>
            <ul className="space-y-4">
              {footerColumns.ai.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-all duration-300 hover:text-white hover:pl-1 inline-flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engagement Models */}
          <div className="transition-transform duration-500 hover:translate-y-[-2px]">
            <h4 className="mb-8 text-xs font-semibold tracking-widest text-white/90 uppercase">Engagement Models</h4>
            <ul className="space-y-4">
              {footerColumns.engagement.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-all duration-300 hover:text-white hover:pl-1 inline-flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="transition-transform duration-500 hover:translate-y-[-2px]">
            <h4 className="mb-8 text-xs font-semibold tracking-widest text-white/90 uppercase">About</h4>
            <ul className="space-y-4">
              {footerColumns.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-all duration-300 hover:text-white hover:pl-1 inline-flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="transition-transform duration-500 hover:translate-y-[-2px]">
            <h4 className="mb-2 text-xs font-semibold tracking-widest text-white/90 uppercase">Subscribe</h4>
            <p className="mb-6 text-xs text-white/70">Get exclusive insights.</p>
            <div className="space-y-3 mb-10">
              <Input
                type="email"
                placeholder="Email"
                className="rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 h-11 text-sm focus:bg-white/15 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 backdrop-blur-sm"
              />
              <Button 
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-11 text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
              >
                Subscribe for offers
              </Button>
            </div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-white/90 uppercase">Follow us:</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="rounded-full bg-white/10 p-2.5 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 border border-white/10 hover:border-white/20"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} AlgoMinds LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
