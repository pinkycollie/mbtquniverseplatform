"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CheckpointTracker, { type CheckpointJourney } from "@/components/Checkpoints/CheckpointTracker"
import CheckpointModule from "@/components/Checkpoints/CheckpointModule"
import CheckpointFeedback from "@/components/Checkpoints/CheckpointFeedback"

// Sample data for Business Magician journey
const businessJourney: CheckpointJourney = {
  id: "business-magician",
  name: "Business Magician Journey",
  description: "Transform your business idea into reality with our guided checkpoints",
  overallProgress: 35,
  phases: [
    {
      id: "idea",
      name: "Idea",
      completionPercentage: 100,
      checkpoints: [
        {
          id: "business-vision",
          name: "Business Vision",
          description: "Define your mission, niche, and goals",
          status: "completed",
          completionPercentage: 100,
        },
      ],
    },
    {
      id: "build",
      name: "Build",
      completionPercentage: 50,
      checkpoints: [
        {
          id: "structure-legal",
          name: "Structure & Legal",
          description: "File documents, register business, EIN",
          status: "completed",
          completionPercentage: 100,
        },
        {
          id: "financial-setup",
          name: "Financial Setup",
          description: "Open bank account, credit building",
          status: "in-progress",
          completionPercentage: 60,
        },
      ],
    },
    {
      id: "grow",
      name: "Grow",
      completionPercentage: 0,
      checkpoints: [
        {
          id: "market-ops",
          name: "Market & Ops",
          description: "Marketing plan, automation setup",
          status: "not-started",
          completionPercentage: 0,
        },
        {
          id: "funding-strategy",
          name: "Funding Strategy",
          description: "Capital sources, revenue streams",
          status: "not-started",
          completionPercentage: 0,
        },
      ],
    },
    {
      id: "manage",
      name: "Manage",
      completionPercentage: 0,
      checkpoints: [
        {
          id: "compliance-scaling",
          name: "Compliance & Scaling",
          description: "SOPs, tax filing, HR, etc.",
          status: "not-started",
          completionPercentage: 0,
        },
      ],
    },
  ],
}

// Sample data for Job Magician journey
const jobJourney: CheckpointJourney = {
  id: "job-magician",
  name: "Job Magician Journey",
  description: "Navigate your career path with our guided checkpoints",
  overallProgress: 40,
  phases: [
    {
      id: "assessment",
      name: "Assessment",
      completionPercentage: 100,
      checkpoints: [
        {
          id: "career-mapping",
          name: "Career Mapping",
          description: "Explore paths based on personality + goals",
          status: "completed",
          completionPercentage: 100,
        },
      ],
    },
    {
      id: "skills",
      name: "Skills",
      completionPercentage: 75,
      checkpoints: [
        {
          id: "soft-hard-skills",
          name: "Soft + Hard Skills",
          description: "Rate & train on job-essential skills",
          status: "in-progress",
          completionPercentage: 75,
        },
      ],
    },
    {
      id: "training",
      name: "Training",
      completionPercentage: 25,
      checkpoints: [
        {
          id: "enroll-learn",
          name: "Enroll + Learn",
          description: "Assign training courses, track progress",
          status: "in-progress",
          completionPercentage: 25,
        },
      ],
    },
    {
      id: "resume",
      name: "Résumé",
      completionPercentage: 0,
      checkpoints: [
        {
          id: "resume-linkedin",
          name: "Résumé + LinkedIn",
          description: "Build assets, review with AI + mentor",
          status: "not-started",
          completionPercentage: 0,
        },
      ],
    },
    {
      id: "placement",
      name: "Placement",
      completionPercentage: 0,
      checkpoints: [
        {
          id: "job-app-followup",
          name: "Job App & Followup",
          description: "Apply, track apps, interview prep",
          status: "not-started",
          completionPercentage: 0,
        },
      ],
    },
  ],
}

// Sample data for VR4Deaf (Vocational Rehabilitation for Deaf) journey
const vr4deafJourney: CheckpointJourney = {
  id: "vr4deaf",
  name: "VR4Deaf Workforce Journey",
  description: "Comprehensive vocational rehabilitation and workforce solutions for deaf individuals",
  overallProgress: 30,
  phases: [
    {
      id: "intake-assessment",
      name: "Intake & Assessment",
      completionPercentage: 90,
      checkpoints: [
        {
          id: "eligibility-determination",
          name: "Eligibility Determination",
          description: "Determine VR services eligibility and benefits",
          status: "completed",
          completionPercentage: 100,
        },
        {
          id: "comprehensive-assessment",
          name: "Comprehensive Assessment",
          description: "Evaluate skills, interests, and accommodation needs",
          status: "in-progress",
          completionPercentage: 80,
        },
      ],
    },
    {
      id: "planning-goals",
      name: "Planning & Goals",
      completionPercentage: 60,
      checkpoints: [
        {
          id: "ipr-development",
          name: "IPR Development",
          description: "Create Individualized Plan for Rehabilitation",
          status: "in-progress",
          completionPercentage: 60,
        },
        {
          id: "career-exploration",
          name: "Career Exploration",
          description: "Explore career options and labor market trends",
          status: "not-started",
          completionPercentage: 0,
        },
      ],
    },
    {
      id: "skills-training",
      name: "Skills & Training",
      completionPercentage: 25,
      checkpoints: [
        {
          id: "vocational-training",
          name: "Vocational Training",
          description: "Complete job-specific skills training programs",
          status: "in-progress",
          completionPercentage: 25,
        },
        {
          id: "workplace-readiness",
          name: "Workplace Readiness",
          description: "Develop soft skills and workplace communication",
          status: "not-started",
          completionPercentage: 0,
        },
        {
          id: "assistive-technology",
          name: "Assistive Technology",
          description: "Learn workplace assistive technology and tools",
          status: "not-started",
          completionPercentage: 0,
        },
      ],
    },
    {
      id: "job-placement",
      name: "Job Placement",
      completionPercentage: 0,
      checkpoints: [
        {
          id: "job-development",
          name: "Job Development",
          description: "Work with employers to develop job opportunities",
          status: "not-started",
          completionPercentage: 0,
        },
        {
          id: "job-matching",
          name: "Job Matching",
          description: "Match skills and interests with available positions",
          status: "not-started",
          completionPercentage: 0,
        },
        {
          id: "workplace-accommodations",
          name: "Workplace Accommodations",
          description: "Coordinate reasonable accommodations with employers",
          status: "not-started",
          completionPercentage: 0,
        },
      ],
    },
    {
      id: "retention-advancement",
      name: "Retention & Advancement",
      completionPercentage: 0,
      checkpoints: [
        {
          id: "job-coaching",
          name: "Job Coaching",
          description: "Receive on-the-job support and coaching",
          status: "not-started",
          completionPercentage: 0,
        },
        {
          id: "career-advancement",
          name: "Career Advancement",
          description: "Plan for promotions and career growth",
          status: "not-started",
          completionPercentage: 0,
        },
        {
          id: "case-closure",
          name: "Successful Case Closure",
          description: "Achieve stable employment and close VR case",
          status: "not-started",
          completionPercentage: 0,
        },
      ],
    },
  ],
}

export default function Home() {
  const [activeView, setActiveView] = useState<"tracker" | "module" | "feedback">("tracker")
  const [activeJourney, setActiveJourney] = useState<"business" | "job" | "vr4deaf">("business")
  const [selectedCheckpoint, setSelectedCheckpoint] = useState<{
    phaseId: string
    checkpointId: string
  } | null>(null)

  const handleCheckpointSelect = (phaseId: string, checkpointId: string) => {
    setSelectedCheckpoint({ phaseId, checkpointId })
    setActiveView("module")
  }

  const handleBackToTracker = () => {
    setActiveView("tracker")
  }

  const handleCompleteCheckpoint = () => {
    setActiveView("feedback")
  }

  const handleSubmitFeedback = () => {
    // In a real app, this would save the feedback to the database
    setActiveView("tracker")
  }

  const getCurrentCheckpoint = () => {
    if (!selectedCheckpoint) return null

    const journey =
      activeJourney === "business" ? businessJourney : activeJourney === "job" ? jobJourney : vr4deafJourney
    const phase = journey.phases.find((p) => p.id === selectedCheckpoint.phaseId)
    if (!phase) return null

    return phase.checkpoints.find((c) => c.id === selectedCheckpoint.checkpointId) || null
  }

  const currentCheckpoint = getCurrentCheckpoint()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-purple-800">
      {/* Header matching 360 Magicians design */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✨</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">360 Magicians</h1>
                <p className="text-sm text-gray-600">Interactive Checkpoint System</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-600">
                🤟 ASL Support
              </Button>
              <Button variant="outline" size="sm">
                Log in
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                ✨ Sign up
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Track Your Journey
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              with a Touch of Magic
            </span>
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Follow your personalized roadmap with guided checkpoints designed for deaf entrepreneurs, job seekers, and
            vocational rehabilitation clients. All support available in ASL with video chat and multi-language sign
            translation.
          </p>
        </div>

        {/* Platform Toggle */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg bg-white/10 backdrop-blur-sm p-1" role="group">
            <button
              type="button"
              className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                activeJourney === "business" ? "bg-white text-purple-800 shadow-lg" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveJourney("business")}
            >
              ✨ Business Magician
            </button>
            <button
              type="button"
              className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                activeJourney === "job" ? "bg-white text-teal-800 shadow-lg" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveJourney("job")}
            >
              🎯 Job Magician
            </button>
            <button
              type="button"
              className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                activeJourney === "vr4deaf" ? "bg-white text-red-800 shadow-lg" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveJourney("vr4deaf")}
            >
              🏢 VR4Deaf
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {activeView === "tracker" && (
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
              <CheckpointTracker
                journey={
                  activeJourney === "business" ? businessJourney : activeJourney === "job" ? jobJourney : vr4deafJourney
                }
                onCheckpointSelect={handleCheckpointSelect}
                isBusinessJourney={activeJourney === "business"}
                isJobJourney={activeJourney === "job"}
                isVR4Deaf={activeJourney === "vr4deaf"}
              />
            </div>
          )}

          {activeView === "module" && currentCheckpoint && (
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
              <CheckpointModule
                checkpoint={currentCheckpoint}
                onComplete={handleCompleteCheckpoint}
                onBack={handleBackToTracker}
              />
            </div>
          )}

          {activeView === "feedback" && currentCheckpoint && (
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden p-8">
              <CheckpointFeedback
                checkpointName={currentCheckpoint.name}
                onSubmit={handleSubmitFeedback}
                onBack={() => setActiveView("module")}
              />
            </div>
          )}

          {!currentCheckpoint && activeView !== "tracker" && (
            <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">No checkpoint selected</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button onClick={handleBackToTracker} className="bg-purple-600 hover:bg-purple-700">
                  Back to Checkpoints
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* ASL Video Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎥</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">ASL Introduction</h3>
            <p className="text-purple-100 mb-4">Learn about the Interactive Checkpoint System in ASL</p>
            <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              ▶ Watch Video
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-purple-200">
            <p>&copy; 2024 360 Magicians. Empowering deaf entrepreneurs with magical business solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
