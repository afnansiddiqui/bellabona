import type { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function constructMetadata({
  title = "BellaBona | Your Lunch at work",
  description = "B2B office lunch delivery service.",
  image = "/logo-bellabona.svg",
  url = "https://bellabona.com"
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ],
      url,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
      languages: {
        'en': url,
        'de': `${url}/de`, // Awareness of DE/EN bilingual setup as per requirement
      },
    },
  }
}
