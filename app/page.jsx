import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesShowcase } from "@/components/features-showcase"
import { AnimatedBackground } from "@/components/animated-background"
import { WaveAnimation } from "@/components/wave-animation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />

          <section className="container mx-auto px-4 py-20">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Why Choose <span className="text-purple-500">सृजन</span>
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                We help student developers transform their ideas into successful SaaS products with expert mentorship,
                resources, and a supportive community.
              </p>
            </div>

            <FeaturesShowcase />
          </section>

          <WaveAnimation />

          <section className="container mx-auto px-4 py-20">
            <div className="rounded-2xl bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-8 backdrop-blur-sm md:p-12">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <div>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to build your SaaS?</h2>
                  <p className="mb-6 text-gray-300">
                    Join our community of student developers and get the support you need to turn your ideas into
                    reality. Our mentors and resources are here to help you succeed.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-purple-900/50 p-4 backdrop-blur-sm">
                      <h3 className="mb-2 text-xl font-bold">50+</h3>
                      <p className="text-sm text-gray-300">Successful Projects</p>
                    </div>
                    <div className="rounded-lg bg-indigo-900/50 p-4 backdrop-blur-sm">
                      <h3 className="mb-2 text-xl font-bold">30+</h3>
                      <p className="text-sm text-gray-300">Expert Mentors</p>
                    </div>
                    <div className="rounded-lg bg-indigo-900/50 p-4 backdrop-blur-sm">
                      <h3 className="mb-2 text-xl font-bold">200+</h3>
                      <p className="text-sm text-gray-300">Student Developers</p>
                    </div>
                    <div className="rounded-lg bg-purple-900/50 p-4 backdrop-blur-sm">
                      <h3 className="mb-2 text-xl font-bold">24/7</h3>
                      <p className="text-sm text-gray-300">Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
