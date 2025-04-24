"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars = []

    for (let i = 0; i < 100; i++) {
      const radius = Math.random() * 1.5 + 0.5
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        alpha: Math.random(),
        decreasing: true,
        dRatio: Math.random() * 0.01 + 0.001,
      })
    }

    // Create gradient background
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#000000")
      gradient.addColorStop(0.5, "#0a0118")
      gradient.addColorStop(1, "#000000")
      return gradient
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = createGradient()
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()

        // Update star alpha for twinkling effect
        if (star.decreasing) {
          star.alpha -= star.dRatio
          if (star.alpha <= 0.1) {
            star.decreasing = false
          }
        } else {
          star.alpha += star.dRatio
          if (star.alpha >= 0.9) {
            star.decreasing = true
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 h-full w-full" style={{ zIndex: 0 }} />
}
