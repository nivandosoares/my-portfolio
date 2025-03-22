"use client"

import { useEffect, useRef } from "react"

interface SkillData {
  name: string
  value: number
}

interface TechnicalSkillChartProps {
  data: SkillData[]
}

export default function TechnicalSkillChart({ data }: TechnicalSkillChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height
    const barHeight = 30
    const gap = 15
    const maxValue = Math.max(...data.map((item) => item.value))
    const maxBarWidth = width - 150 // Leave space for labels

    // Draw bars
    data.forEach((item, index) => {
      const y = index * (barHeight + gap) + 20
      const barWidth = (item.value / maxValue) * maxBarWidth

      // Draw label
      ctx.fillStyle = "#64748b" // text-slate-500
      ctx.font = "14px sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(item.name, 100, y + barHeight / 2 + 5)

      // Draw bar
      const gradient = ctx.createLinearGradient(110, 0, 110 + barWidth, 0)
      gradient.addColorStop(0, "#3b82f6") // Blue-500
      gradient.addColorStop(1, "#93c5fd") // Blue-300

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.roundRect(110, y, barWidth, barHeight, 4)
      ctx.fill()

      // Draw value
      ctx.fillStyle = "#64748b" // text-slate-500
      ctx.textAlign = "left"
      ctx.fillText(`${item.value}`, 120 + barWidth, y + barHeight / 2 + 5)
    })
  }, [data])

  return <canvas ref={canvasRef} width={500} height={300} className="w-full h-auto" />
}

