"use client"

import { useEffect, useState } from "react"

interface ForensicLoaderProps {
  compact?: boolean
}

export function ForensicLoader({ compact = false }: ForensicLoaderProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    return () => setVisible(false)
  }, [])

  const containerClass = compact
    ? "absolute inset-0 z-40 rounded-xl overflow-hidden"
    : "absolute inset-0 z-40 rounded-xl overflow-hidden"

  return (
    <div
      className={`${containerClass} transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ backgroundColor: "rgba(5, 5, 5, 0.95)" }}
    >
      {/* Blur backdrop */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Glassy neon border - smaller padding for compact mode */}
      <div
        className={`absolute ${compact ? "inset-2" : "inset-4"} rounded-xl forensic-border border border-primary/30 overflow-hidden`}
      >
        {/* Digital grid background */}
        <div className="absolute inset-0 forensic-grid animate-grid-scan opacity-30" />

        {/* Animated scanlines moving downward */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-16 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scanline-move" />
          <div
            className="absolute w-full h-16 bg-gradient-to-b from-transparent via-secondary/20 to-transparent animate-scanline-move"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Radar sweep rotating 360° - smaller for compact */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`relative ${compact ? "w-32 h-32" : "w-48 h-48"}`}>
            <div
              className="absolute inset-0 rounded-full border-2 border-primary/30 animate-radar-rotate"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(59, 130, 246, 0.3) 30deg, transparent 60deg)",
              }}
            />
            <div className="absolute inset-2 rounded-full border border-primary/20" />
            <div className="absolute inset-4 rounded-full border border-secondary/20" />
            <div className="absolute inset-6 rounded-full border border-primary/10" />
          </div>
        </div>

        {/* Pulsing neon ring - smaller for compact */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`${compact ? "w-24 h-24" : "w-40 h-40"} rounded-full border-2 border-primary/50 animate-pulse-ring`}
          />
          <div
            className={`absolute ${compact ? "w-28 h-28" : "w-48 h-48"} rounded-full border border-secondary/30 animate-pulse-ring`}
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Scanning crosshair - smaller for compact */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`relative ${compact ? "w-20 h-20" : "w-32 h-32"} animate-crosshair-pulse`}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-primary to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-t from-primary to-transparent" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-gradient-to-l from-primary to-transparent" />
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary" />
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary" />
          </div>
        </div>

        {/* Floating glitch particles - fewer for compact */}
        {[...Array(compact ? 6 : 12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-glitch-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              backgroundColor: i % 2 === 0 ? "#3b82f6" : "#a855f7",
              animationDelay: `${i * 0.3}s`,
              boxShadow: `0 0 10px ${i % 2 === 0 ? "#3b82f6" : "#a855f7"}`,
            }}
          />
        ))}

        {/* Hologram waveform bars - smaller for compact */}
        <div
          className={`absolute ${compact ? "bottom-10" : "bottom-16"} left-1/2 -translate-x-1/2 flex items-end gap-1`}
        >
          {[...Array(compact ? 10 : 16)].map((_, i) => (
            <div
              key={i}
              className={`${compact ? "w-1" : "w-2"} bg-gradient-to-t from-primary to-secondary rounded-t animate-neon-pulse`}
              style={{
                height: `${compact ? 10 + Math.random() * 20 : 20 + Math.random() * 40}px`,
                animationDelay: `${i * 0.1}s`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Text with neon glow - smaller for compact */}
        <div className={`absolute ${compact ? "bottom-3" : "bottom-8"} left-1/2 -translate-x-1/2 text-center`}>
          <p
            className={`${compact ? "text-xs" : "text-lg"} font-mono font-medium animate-hologram-flicker`}
            style={{
              color: "#3b82f6",
              textShadow: "0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #a855f7",
            }}
          >
            Analyzing...
          </p>
        </div>

        {/* Color shifting overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-color-shift pointer-events-none" />
      </div>
    </div>
  )
}
