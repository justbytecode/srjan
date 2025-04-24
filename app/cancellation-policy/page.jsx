import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CancellationPolicy() {
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
            <h1 className="mb-6 text-3xl font-bold md:text-4xl">Cancellation and Refund Policy</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                <strong>Effective Date:</strong> [Insert Date]
              </p>

              <p className="text-gray-300">
                Srjan offers digital services, mentorship programs, and collaborative team-building experiences. Our
                cancellation and refund policy is designed to be fair to both our users and our team.
              </p>

              <h2 className="mt-8 text-xl font-bold">1. Program Cancellation</h2>
              <p className="text-gray-300">
                You may cancel your enrollment in any mentorship, workshop, or cohort program.
              </p>

              <p className="text-gray-300">
                Cancellation must be done at least 48 hours prior to the start of the session or event to be eligible
                for a refund (if applicable).
              </p>

              <h2 className="mt-8 text-xl font-bold">2. Refund Policy</h2>
              <p className="text-gray-300">
                Refunds will be issued for eligible cancellations within 5-7 business days.
              </p>

              <p className="text-gray-300">Refunds are not applicable for:</p>

              <ul className="list-disc pl-6 text-gray-300">
                <li>Completed mentorship or sessions.</li>
                <li>Missed attendance without prior notice.</li>
                <li>Voluntary team exits or dropped projects.</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">3. Exceptions</h2>
              <p className="text-gray-300">
                Special cases will be reviewed individually. Contact <span className="font-extrabold">build@srjan.fun</span> with your query and reason for
                cancellation.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
