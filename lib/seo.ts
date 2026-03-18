import type { Metadata } from "next"

const DEFAULT_OG_IMAGE = "/android-chrome-512x512.png"

type BuildPageMetadataArgs = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: BuildPageMetadataArgs): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 512,
          height: 512,
          alt: "AlgoMinds LLC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
