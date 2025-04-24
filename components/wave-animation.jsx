"use client"

import { useEffect, useRef } from "react"

export function WaveAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 200
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Wave properties
    const waves = [
      { color: "rgba(147, 51, 234, 0.3)", amplitude: 50, frequency: 0.005, speed: 0.05, phase: 0 },
      { color: "rgba(99, 102, 241, 0.2)", amplitude: 30, frequency: 0.01, speed: 0.03, phase: 0 },
      { color: "rgba(126, 34, 206, 0.15)", amplitude: 20, frequency: 0.02, speed: 0.07, phase: 0 },
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      waves.forEach((wave) => {
        wave.phase += wave.speed

        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)

        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin(x * wave.frequency + wave.phase) * wave.amplitude + canvas.height / 2
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fillStyle = wave.color
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-[200px]" />
}
