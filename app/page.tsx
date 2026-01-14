import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { WhatIsAxSection } from "@/components/sections/what-is-ax-section"
import { AiToolsSection } from "@/components/sections/ai-tools-section"
import { ArticlesSection } from "@/components/sections/articles-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { CommunitySection } from "@/components/sections/community-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatIsAxSection />
      <AiToolsSection />
      <ArticlesSection />
      <NewsletterSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
