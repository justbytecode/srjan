import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <span className="text-2xl font-bold text-white">
                <span className="text-purple-500">सृ</span>जन
              </span>
            </Link>
            <p className="mb-4 text-gray-400">
              Empowering student developers to build successful SaaS products through mentorship, resources, and
              community support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-purple-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#mentorship" className="text-gray-400 hover:text-purple-500">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-purple-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-purple-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="text-gray-400 hover:text-purple-500">
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-gray-400 hover:text-purple-500">
                  Shipping & Delivery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-purple-500" />
                <span className="text-gray-400">contact@srjan.in</span>
              </li>
              {/* <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-purple-500" />
                <span className="text-gray-400">+91 XXXXX XXXXX</span>
              </li> */}
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-purple-500" />
                <span className="text-gray-400">सृजन Co-working Hub, Bengaluru | Noida | Hyderabad</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-bold">Subscribe to Our Newsletter</h3>
              <div className="flex max-w-md gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-purple-900/50 bg-gray-900/50 backdrop-blur-sm"
                />
                <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
              </div>
            </div>
            <div className="flex items-end justify-start md:justify-end">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} सृजन. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
