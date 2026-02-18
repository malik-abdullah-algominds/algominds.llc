"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, CheckCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Main Contact Section with Video Background */}
      <section className="relative min-h-screen pt-24 pb-24 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 -z-10">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://origamistudios.us/wp-content/uploads/2025/11/Contact.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Gradient Overlay - lighter for better video visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/40" />
          
          {/* Additional overlay only on left side for text readability */}
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start min-h-screen">
            {/* Left Side - Content */}
            <div className="pt-16">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Ready to scale your business with expert software solutions?
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Connect with our experts to learn more about our software development services and get a quote within 24 hours.
              </p>

              {/* Next Steps */}
              <div className="mt-12">
                <p className="font-semibold text-white mb-8">Next steps:</p>
                <div className="flex items-start gap-6 flex-col md:flex-row">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B5BFF] text-white font-bold text-lg">1</div>
                    <p className="text-sm text-white/70 text-center">Expert call setup</p>
                  </div>
                  <div className="hidden md:block h-px w-8 bg-white/30 mt-6" />
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B5BFF] text-white font-bold text-lg">2</div>
                    <p className="text-sm text-white/70 text-center">NDA, if required</p>
                  </div>
                  <div className="hidden md:block h-px w-8 bg-white/30 mt-6" />
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B5BFF] text-white font-bold text-lg">3</div>
                    <p className="text-sm text-white/70 text-center">Detailed proposal</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#5B5BFF] flex-shrink-0" />
                  <a href="mailto:careers@algominds.live" className="text-white/80 hover:text-white transition-colors">
                    careers@algominds.live
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#5B5BFF] flex-shrink-0" />
                  <a href="tel:03007197859" className="text-white/80 hover:text-white transition-colors">
                    0300 7197859
                  </a>
                </div>
                <div className="flex gap-3 pt-4">
                  <svg className="h-5 w-5 text-[#5B5BFF] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80 text-sm">Johar Town Rd, near Ayub Chowk, Trade Centre Block R Phase 2 Aitchison Society, Lahore, 54700</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="rounded-3xl bg-[#1a1a1a]/80 backdrop-blur-xl p-8 sm:p-12 text-white sticky top-24 border border-white/10 shadow-2xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Message Sent!</h3>
                  <p className="text-white/70">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button 
                    className="mt-6 rounded-full bg-white text-[#1a1a1a] hover:bg-white/90"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="mb-2 text-3xl font-bold text-white">Get an expert consultation in 24 hours.</h2>
                  <p className="mb-8 text-white/70">Connect with our team to discuss your project needs.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Input
                        name="name"
                        placeholder="Full name"
                        required
                        className="rounded-full bg-white text-[#1a1a1a] placeholder:text-[#999] border-0 h-12 focus:ring-2 focus:ring-[#5B5BFF] focus:ring-offset-2 focus:ring-offset-[#1a1a1a] font-medium"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="rounded-full bg-white text-[#1a1a1a] placeholder:text-[#999] border-0 h-12 focus:ring-2 focus:ring-[#5B5BFF] focus:ring-offset-2 focus:ring-offset-[#1a1a1a] font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <Textarea
                        name="message"
                        placeholder="How can we help you?"
                        rows={4}
                        required
                        className="rounded-2xl bg-white text-[#1a1a1a] placeholder:text-[#999] border-0 focus:ring-2 focus:ring-[#5B5BFF] focus:ring-offset-2 focus:ring-offset-[#1a1a1a] font-medium resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gap-2 rounded-full bg-[#5B5BFF] hover:bg-[#4a4aff] h-12 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#5B5BFF]/50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Contact Us
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Badges */}
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded bg-white">
                            <span className="text-xs font-bold text-[#1a1a1a]">MS</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Microsoft</p>
                          <p className="text-xs text-white/70">AI Cloud Partner</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded bg-white">
                            <span className="text-xs font-bold text-[#1a1a1a]">★★★★★</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Reviewed on Clutch</p>
                          <p className="text-xs text-white/70">56 REVIEWS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
