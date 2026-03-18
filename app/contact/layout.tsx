import type { Metadata } from "next"
import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact AlgoMinds LLC",
  description:
    "Contact AlgoMinds for AI development, custom software projects, and consultation requests. Response within 24 hours.",
  path: "/contact",
  keywords: ["contact software company", "AI consultation", "request software quote"],
})

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
