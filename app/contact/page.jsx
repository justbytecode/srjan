import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-12">
          <Link href="/" className="mb-8 inline-flex items-center text-purple-400 hover:text-purple-300">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="mx-auto max-w-5xl">
            <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">Contact Us</h1>
            <p className="mb-12 text-center text-gray-300">We are here to support, collaborate, and build together.</p>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-gray-900/50 p-8 backdrop-blur-sm">
                <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>

                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="border-purple-900/50 bg-gray-800/50 backdrop-blur-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="border-purple-900/50 bg-gray-800/50 backdrop-blur-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      className="border-purple-900/50 bg-gray-800/50 backdrop-blur-sm"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      className="border-purple-900/50 bg-gray-800/50 backdrop-blur-sm"
                    />
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
                </form>
              </div>

              <div className="rounded-xl bg-gray-900/50 p-8 backdrop-blur-sm">
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

                <div className="mb-8 space-y-6">
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-purple-500" />
                    <div>
                      <h3 className="mb-1 font-medium">Email</h3>
                      <p className="text-gray-300">contact@srjan.fun</p>
                    
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 text-purple-500" />
                    <div>
                      <h3 className="mb-1 font-medium">Phone</h3>
                      <p className="text-gray-300">+91 XXXXX XXXXX</p>
                    </div>
                  </div> */}

                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 text-purple-500" />
                    <div>
                      <h3 className="mb-1 font-medium">Location</h3>
                      <p className="text-gray-300">
                      सृजन Co-working Hub
                        <br />
                        Bengaluru | Noida | Hyderabad | Mumbai | Kanpur
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-medium">Business Hours</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
