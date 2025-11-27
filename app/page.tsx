import Link from "next/link"
import Image from "next/image"
import { Shield, Eye, Brain, Fingerprint, ChevronRight } from "lucide-react"
import { GlowButton } from "@/components/ui/glow-button"
import { GlassCard } from "@/components/ui/glass-card"
import { DisclaimerBox } from "@/components/disclaimer-box"
import { HeroAnimations } from "@/components/hero-animations"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <HeroAnimations />

        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="absolute top-20 left-10 md:left-20 w-32 h-32 md:w-48 md:h-48 opacity-60 animate-float">
          <Image
            src="/futuristic-ai-brain-hologram-neon-blue.jpg"
            alt="AI Brain"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-2xl"
          />
        </div>
        <div className="absolute top-32 right-10 md:right-20 w-28 h-28 md:w-40 md:h-40 opacity-50 animate-float-delayed">
          <Image
            src="/digital-face-scan-wireframe-neon-purple.jpg"
            alt="Face Scan"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] rounded-2xl"
          />
        </div>
        <div className="absolute bottom-32 left-10 md:left-32 w-24 h-24 md:w-36 md:h-36 opacity-40 animate-float-slow">
          <Image
            src="/neural-network-nodes-connections-glowing-blue.jpg"
            alt="Neural Network"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-2xl"
          />
        </div>
        <div className="absolute bottom-20 right-10 md:right-32 w-28 h-28 md:w-44 md:h-44 opacity-50 animate-float-delayed">
          <Image
            src="/cyber-eye-scanning-detection-neon-cyan.jpg"
            alt="Cyber Eye"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-2xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              AI-Powered Detection System
            </div>
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  UNMASK
                </span>
              </h1>
              {/* Glowing border effect */}
              <div className="absolute -inset-4 rounded-xl border border-primary/20 animate-neon-pulse pointer-events-none" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">Deepfake Detection System</p>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Reveal the truth behind digital illusions.
          </p>

          {/* Disclaimer */}
          <div className="max-w-xl mx-auto">
            <DisclaimerBox />
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link href="/login">
              <GlowButton size="lg" className="group">
                Get Started
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Detection Matters */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Detection <span className="text-primary">Matters</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In an era of synthetic media, verifying authenticity is crucial for trust and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="text-center space-y-4" hover>
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Protect Truth</h3>
              <p className="text-muted-foreground text-sm">Combat misinformation and preserve digital integrity.</p>
            </GlassCard>

            <GlassCard className="text-center space-y-4" hover glowColor="purple">
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/20 flex items-center justify-center">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Verify Identity</h3>
              <p className="text-muted-foreground text-sm">Ensure the authenticity of faces in digital content.</p>
            </GlassCard>

            <GlassCard className="text-center space-y-4" hover>
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/20 flex items-center justify-center">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">AI Analysis</h3>
              <p className="text-muted-foreground text-sm">Advanced neural networks trained to detect manipulation.</p>
            </GlassCard>

            <GlassCard className="text-center space-y-4" hover glowColor="purple">
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/20 flex items-center justify-center">
                <Fingerprint className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Forensic Precision</h3>
              <p className="text-muted-foreground text-sm">Detailed analysis with probability scores and heatmaps.</p>
            </GlassCard>
          </div>

          {/* Note */}
          <div className="text-center">
            <GlassCard className="inline-block" glowColor="none">
              <p className="text-muted-foreground text-sm">
                <span className="text-primary font-medium">Note:</span> Model mainly trained on human faces.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 UNMASK. Experimental deepfake detection prototype.</p>
        </div>
      </footer>
    </main>
  )
}
