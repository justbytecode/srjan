"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, BookOpen, Code, Rocket, MessageSquare, Award, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: <Users className="h-10 w-10" />,
    title: "Expert Mentorship",
    description: "Get personalized guidance from industry professionals who have built successful SaaS products.",
    color: "from-purple-500 to-indigo-500",
    textColor: "text-purple-300",
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Learning Resources",
    description: "Access our comprehensive library of tutorials, guides, and case studies to accelerate your learning.",
    color: "from-indigo-500 to-blue-500",
    textColor: "text-indigo-300",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Technical Support",
    description: "Get help with coding, architecture, and technical challenges from our experienced developers.",
    color: "from-blue-500 to-violet-500",
    textColor: "text-blue-300",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Launch Strategy",
    description:
      "Learn how to effectively launch your SaaS product and acquire your first users with proven strategies.",
    color: "from-violet-500 to-fuchsia-500",
    textColor: "text-violet-300",
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Community Access",
    description:
      "Join our vibrant community of student developers and learn from each other's experiences and insights.",
    color: "from-fuchsia-500 to-pink-500",
    textColor: "text-fuchsia-300",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Recognition & Rewards",
    description: "Get recognized for your achievements and win prizes for outstanding projects and contributions.",
    color: "from-pink-500 to-purple-500",
    textColor: "text-pink-300",
  },
]

export function FeaturesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const containerRef = useRef(null)

  // Check screen size on mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  // Handle navigation
  const handlePrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1))
    setAutoplay(false)
  }

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1))
    setAutoplay(false)
  }

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isHovered) return

    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, isHovered])

  // Calculate indices for visible cards
  const getVisibleIndices = () => {
    const indices = []

    // Always show the active card
    indices.push(activeIndex)

    // For tablet and desktop, show additional cards
    if (!isMobile) {
      // Next card (to the right)
      const nextIndex = (activeIndex + 1) % features.length
      indices.push(nextIndex)

      // For desktop, also show previous card (to the left)
      if (!isTablet) {
        const prevIndex = activeIndex === 0 ? features.length - 1 : activeIndex - 1
        indices.push(prevIndex)
      }
    }

    return indices
  }

  const visibleIndices = getVisibleIndices()

  // Helper function to determine card position
  const getCardPosition = (index) => {
    if (index === activeIndex) return "center"

    const nextIndex = (activeIndex + 1) % features.length
    if (index === nextIndex) return "right"

    return "left"
  }

  return (
    <div
      ref={containerRef}
      className="relative py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`absolute h-40 w-40 rounded-full bg-gradient-radial ${features[activeIndex].color} opacity-20 blur-3xl`}
        ></div>
      </div>

      {/* Main carousel */}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="relative mx-auto h-[400px] md:h-[350px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            {features.map((feature, index) => {
              if (!visibleIndices.includes(index)) return null

              const position = getCardPosition(index)

              return (
                <motion.div
                  key={index}
                  custom={direction}
                  initial={getInitialPosition(position, direction)}
                  animate={getAnimatePosition(position)}
                  exit={getExitPosition(position, direction)}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className={cn(
                    "absolute h-full w-full md:w-[45%] lg:w-[30%]",
                    position === "center" ? "z-20 left-1/2 -translate-x-1/2" : "",
                    position === "left" ? "z-10 left-[5%] lg:left-[18%]" : "",
                    position === "right" ? "z-10 right-[5%] lg:right-[18%]" : "",
                  )}
                >
                  <div
                    className={cn(
                      "h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-lg transition-all duration-300",
                      position === "center" ? "scale-100 shadow-2xl" : "scale-90 opacity-70",
                      "hover:shadow-lg hover:shadow-purple-500/10",
                    )}
                  >
                    <div className="flex h-full flex-col">
                      <div
                        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} p-3`}
                      >
                        {feature.icon}
                      </div>

                      <h3 className="mb-2 text-2xl font-bold">{feature.title}</h3>

                      <p className={`mb-4 text-sm ${feature.textColor}`}>{feature.description}</p>

                      <div className="mt-auto">
                        <div className={`h-1 w-full rounded-full bg-gradient-to-r ${feature.color} opacity-50`}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition-all hover:border-purple-500 hover:bg-purple-500/20"
            aria-label="Previous feature"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1)
                  setActiveIndex(idx)
                  setAutoplay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex ? "w-8 bg-purple-500" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to feature ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition-all hover:border-purple-500 hover:bg-purple-500/20"
            aria-label="Next feature"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Helper functions for animations
function getInitialPosition(position, direction) {
  if (position === "center") {
    return { x: direction > 0 ? "100%" : "-100%", opacity: 0 }
  } else if (position === "left") {
    return { x: direction > 0 ? "-30%" : "-130%", opacity: 0 }
  } else {
    return { x: direction > 0 ? "130%" : "30%", opacity: 0 }
  }
}

function getAnimatePosition(position) {
  if (position === "center") {
    return { x: 0, opacity: 1 }
  } else if (position === "left") {
    return { x: "-30%", opacity: 0.7 }
  } else {
    return { x: "30%", opacity: 0.7 }
  }
}

function getExitPosition(position, direction) {
  if (position === "center") {
    return { x: direction > 0 ? "-100%" : "100%", opacity: 0 }
  } else if (position === "left") {
    return { x: direction > 0 ? "-130%" : "-30%", opacity: 0 }
  } else {
    return { x: direction > 0 ? "30%" : "130%", opacity: 0 }
  }
}
