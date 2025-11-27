"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Scan, RotateCcw } from "lucide-react"
import { GlowButton } from "@/components/ui/glow-button"
import { GlassCard } from "@/components/ui/glass-card"
import { UploadZone } from "@/components/upload-zone"
import { ForensicLoader } from "@/components/forensic-loader"
import { ResultPanel } from "@/components/result-panel"
import { DisclaimerBox } from "@/components/disclaimer-box"

export default function VideoDetectionPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<{ real: number; fake: number; ai: number } | null>(null)

  const handleFileSelect = (selectedFile: File | null) => {
    if (selectedFile) {
      setFile(selectedFile)
      const url = URL.createObjectURL(selectedFile)
      setPreview(url)
      setResults(null)
    } else {
      setFile(null)
      setPreview(null)
      setResults(null)
    }
  }

  const handleAnalyze = async () => {
    if (!file) return

    setIsAnalyzing(true)

    // Simulate analysis delay (longer for video)
    await new Promise((resolve) => setTimeout(resolve, 5000))

    // Mock results
    const mockResults = {
      real: Math.floor(Math.random() * 40) + 10,
      fake: Math.floor(Math.random() * 40) + 10,
      ai: Math.floor(Math.random() * 40) + 10,
    }
    const total = mockResults.real + mockResults.fake + mockResults.ai
    mockResults.real = Math.round((mockResults.real / total) * 100)
    mockResults.fake = Math.round((mockResults.fake / total) * 100)
    mockResults.ai = 100 - mockResults.real - mockResults.fake

    setResults(mockResults)
    setIsAnalyzing(false)
  }

  const handleReset = () => {
    setFile(null)
    setPreview(null)
    setResults(null)
    setIsAnalyzing(false)
  }

  return (
    <main className="min-h-screen bg-transparent px-4 py-8 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/detect"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-xl font-bold">
            Video <span className="text-accent">Detection</span>
          </h1>
          <div className="w-20" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Panel - Upload */}
          <GlassCard className="relative" glowColor="purple">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Upload Video</h2>

              <div className="relative">
                <UploadZone type="video" onFileSelect={handleFileSelect} file={file} preview={preview} />
                {isAnalyzing && <ForensicLoader compact />}
              </div>

              <div className="flex gap-3">
                <GlowButton
                  onClick={handleAnalyze}
                  disabled={!file || isAnalyzing}
                  className="flex-1"
                  glowColor="purple"
                  variant="secondary"
                >
                  <Scan className="w-4 h-4 mr-2" />
                  Analyze Video
                </GlowButton>
                <GlowButton variant="outline" onClick={handleReset} disabled={isAnalyzing}>
                  <RotateCcw className="w-4 h-4" />
                </GlowButton>
              </div>
            </div>
          </GlassCard>

          {/* Right Panel - Results */}
          <GlassCard>
            <h2 className="text-lg font-semibold mb-6">Analysis Results</h2>
            <ResultPanel type="video" results={results} />
          </GlassCard>
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <DisclaimerBox variant="compact" />
        </div>
      </div>
    </main>
  )
}
