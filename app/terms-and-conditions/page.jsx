import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-12">
          <Link href="/" className="mb-8 inline-flex items-center text-purple-400 hover:text-purple-300">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="mx-auto max-w-4xl rounded-xl bg-gray-900/50 p-8 backdrop-blur-sm">
            <h1 className="mb-6 text-3xl font-bold md:text-4xl">Terms and Conditions</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                <strong>Effective Date:</strong> 25-04-2025
              </p>

              <p className="text-gray-300">
                These Terms and Conditions ("Terms") govern your use of the Srjan platform. By accessing our website and
                services, you agree to comply with and be bound by these Terms.
              </p>

              <h2 className="mt-8 text-xl font-bold">1. Use of Platform</h2>
              <p className="text-gray-300">
                Srjan is a platform for startup idea submission, team-building, mentorship, and real-world experience in
                building startups.
              </p>

              <p className="text-gray-300">You agree to:</p>

              <ul className="list-disc pl-6 text-gray-300">
                <li>Use the platform for lawful and constructive purposes.</li>
                <li>Not infringe on the intellectual property or privacy of others.</li>
                <li>Not post any harmful, misleading, or plagiarized content.</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">2. Intellectual Property</h2>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Your startup idea belongs to you.</li>
                <li>Any content submitted must be original or properly attributed.</li>
                <li>Srjan may feature ideas or projects for promotional purposes with your permission.</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">3. Collaborations</h2>
              <p className="text-gray-300">
                Users may form teams. Srjan is not responsible for interpersonal disputes, IP ownership agreements, or
                co-founder conflicts. It is your responsibility to establish clear communication and agreements.
              </p>

              <h2 className="mt-8 text-xl font-bold">4. Mentorship and Guidance</h2>
              <p className="text-gray-300">
                While we provide mentorship and startup-building tools, we do not guarantee startup success, funding, or
                employment outcomes.
              </p>

              <h2 className="mt-8 text-xl font-bold">5. Termination</h2>
              <p className="text-gray-300">
                We reserve the right to suspend accounts that violate these Terms or engage in malicious activity.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
