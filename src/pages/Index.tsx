import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { TracksSection } from "@/components/tracks-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlobalPlayer } from "@/components/global-player"

export default function Index() {
  return (
    <div className="dark pb-20">
      <Navbar />
      <main>
        <Hero3D />
        <FeaturesSection />
        <TracksSection />
        <ApplicationsTimeline />
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
      <GlobalPlayer />
    </div>
  )
}