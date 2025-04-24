"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set active link based on current path
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#mentorship", label: "Mentorship" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? " bg-black/90 backdrop-blur-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <motion.div className="flex items-center" initial="hidden" animate="visible" variants={logoVariants}>
            {/* Animated Logo */}
           

            {/* सृजन Text */}
            <div className="flex">
              <motion.span className="text-2xl font-bold text-purple-500" variants={letterVariants}>
              सृ
              </motion.span>
              
              <motion.span className="text-2xl font-bold text-white" variants={letterVariants}>
                ज
              </motion.span>
              <motion.span className="text-2xl font-bold text-white" variants={letterVariants}>
                न
              </motion.span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              transition={{ delay: index * 0.1 }}
              custom={index}
            >
              <Link
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-purple-400",
                  activeLink === link.href ? "text-purple-400" : "text-white",
                )}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-purple-500"
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Button
              variant="outline"
              className="  bg-transaparent text-white hover:bg-purple-500/20 hover:text-white transition-all duration-300"
            >
              Sign In
            </Button>
          </motion.div>

        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="container mx-auto px-4 pb-4 md:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col space-y-4 pt-2">
              {navLinks.map((link, index) => (
                <motion.div key={link.href} variants={mobileItemVariants} transition={{ delay: index * 0.1 }}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-base font-medium transition-all",
                      activeLink === link.href
                        ? "bg-purple-900/30 text-purple-400"
                        : "text-white hover:bg-purple-900/20",
                    )}
                    onClick={() => {
                      setActiveLink(link.href)
                      setIsMenuOpen(false)
                    }}
                  >
                    {link.label}
                    {activeLink === link.href && (
                      <motion.span
                        className="ml-2 h-1.5 w-1.5 rounded-full bg-purple-500"
                        layoutId="activeMobileIndicator"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div className="flex flex-col space-y-2 pt-2" variants={mobileItemVariants}>
                <Button
                  variant="outline"
                  className="w-full  text-white hover:bg-purple-500/20 bg-transparent hover:text-white"
                >
                  Sign In
                </Button>
                
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
