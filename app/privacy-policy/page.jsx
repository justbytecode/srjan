import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
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
            <h1 className="mb-6 text-3xl font-bold md:text-4xl">Privacy Policy</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                <strong>Effective Date:</strong> 25-04-2025
                {/* <br />
                <strong>Last Updated:</strong> [Insert Date] */}
              </p>

              <p className="text-gray-300">
                Srjan ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy outlines how
                we collect, use, disclose, and safeguard your personal information when you visit or interact with our
                website srjan.in or any of our services.
              </p>

              <h2 className="mt-8 text-xl font-bold">1. Information We Collect</h2>
              <p className="text-gray-300">We may collect the following types of information:</p>

              <ul className="list-disc pl-6 text-gray-300">
                <li>
                  <strong>Personal Identifiers:</strong> Name, email address, phone number, location, and professional
                  profile.
                </li>
                <li>
                  <strong>Startup Submission Details:</strong> Startup ideas, pitches, documents, and team information
                  you choose to share.
                </li>
                <li>
                  <strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on site.
                </li>
                <li>
                  <strong>Communication Records:</strong> Emails, messages, or support chats between you and Srjan.
                </li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">2. How We Use Your Information</h2>
              <p className="text-gray-300">We use the information for:</p>

              <ul className="list-disc pl-6 text-gray-300">
                <li>Verifying and creating your user account.</li>
                <li>Matching you with mentors, team members, and resources.</li>
                <li>Providing access to startup-building resources and co-working environments.</li>
                <li>Analyzing platform usage to improve performance and user experience.</li>
                <li>Sending you updates, newsletters, and service-related announcements.</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">3. Sharing Your Information</h2>
              <p className="text-gray-300">
                We do not sell your personal data. Your startup idea remains your intellectual property. We only share
                data:
              </p>

              <ul className="list-disc pl-6 text-gray-300">
                <li>With mentors or team members upon your consent.</li>
                <li>
                  With third-party tools or services essential for Srjan's functionality (e.g., analytics, cloud
                  storage).
                </li>
                <li>When required by law or legal obligation.</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">4. Data Security</h2>
              <p className="text-gray-300">
                We use industry-standard security protocols to protect your data. However, no method of transmission
                over the Internet is 100% secure.
              </p>

              <h2 className="mt-8 text-xl font-bold">5. Your Rights</h2>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Request access to your data.</li>
                <li>Request deletion or correction of your data.</li>
                <li>Opt-out of marketing communications at any time.</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">6. Contact Us</h2>
              <p className="text-gray-300">For questions or data access requests, email build@srjan.fun</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
