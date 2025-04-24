import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ShippingPolicy() {
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
            <h1 className="mb-6 text-3xl font-bold md:text-4xl">Shipping and Delivery Policy</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                <strong>Effective Date:</strong> 25-04-2025
              </p>

              <p className="text-gray-300">
                Srjan primarily operates as a digital platform. Most of our services are offered online. However, there
                may be instances where physical items (e.g.,  merchandise, startup kits) are offered.
              </p>

              <h2 className="mt-8 text-xl font-bold">1. Digital Services</h2>
              <p className="text-gray-300">
                All mentorships, startup submissions, resources, and events are conducted online. You will receive
                confirmation and access details via email.
              </p>

              <h2 className="mt-8 text-xl font-bold">2. Physical Shipping (if applicable)</h2>
              <p className="text-gray-300">If you purchase merchandise or receive startup kits:</p>

              <ul className="list-disc pl-6 text-gray-300">
                <li>Orders will be processed within 3-5 business days.</li>
                <li>Estimated delivery within 5–7 business days, depending on your location.</li>
                <li>Tracking details will be provided once the shipment is dispatched.</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold">3. Delays and Issues</h2>
              <p className="text-gray-300">
                We are not responsible for delays due to courier services or incorrect address details provided by the
                user. In case of issues, please email build@srjan.fun
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
