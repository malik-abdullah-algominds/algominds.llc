import type { Metadata } from "next"
import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Resources, Blogs & Insights",
  description:
    "Read the latest software engineering, AI, and digital product insights from the AlgoMinds team.",
  path: "/resources",
  keywords: ["software blog", "AI insights", "technology articles"],
})

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return children
}
