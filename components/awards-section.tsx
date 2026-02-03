import Image from "next/image"

const awards = [
  { name: "Top Developers 2024", org: "Clutch", icon: "🏆" },
  { name: "Software Company", org: "GoodFirms", icon: "⭐" },
  { name: "Clutch 1000", org: "Clutch", icon: "🎖️" },
  { name: "Top Software Developers", org: "TechReviewer", icon: "👑" },
]

const partners = [
  { name: "AWS", logo: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Microsoft", logo: "MS", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Stripe", logo: "Stripe", icon: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Google Cloud", logo: "GCP", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Google_Cloud_Platform_logo.svg" },
]

export function AwardsSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Awards Section */}
        <div className="mb-20">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl">
                Recognized for our excellence
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#666]">
                Our accreditations affirm our position as a trusted provider and top practitioner 
                of industry best practices and capabilities.
              </p>
            </div>

            {/* Awards Grid */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {awards.map((award) => (
                <div
                  key={award.name}
                  className="flex flex-col items-center justify-center rounded-xl bg-[#f5f5f5] p-6 text-center h-40"
                >
                  <div className="mb-3 text-3xl">{award.icon}</div>
                  <p className="text-xs font-medium text-[#999]">{award.org}</p>
                  <p className="mt-2 text-xs font-semibold text-[#1a1a1a] leading-tight">{award.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnerships Section */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">
          {/* Partnerships Content */}
          <div className="lg:col-span-2 lg:order-last">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Partnerships
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#666]">
              We work with AWS, Azure, Google Cloud, and Stripe to forge creative and bespoke AI and API solutions.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:order-first">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center rounded-xl bg-[#f5f5f5] p-8 h-40 border-l-4 border-[#5B5BFF]"
              >
                <Image
                  src={partner.icon}
                  alt={partner.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
