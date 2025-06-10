"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Circle, HelpCircle, Sparkles } from "lucide-react"

// Simplified types for our checkpoint system
export type CheckpointStatus = "not-started" | "in-progress" | "completed" | "needs-review"

export interface Checkpoint {
  id: string
  name: string
  description: string
  status: CheckpointStatus
  completionPercentage: number
}

export interface CheckpointPhase {
  id: string
  name: string
  checkpoints: Checkpoint[]
  completionPercentage: number
}

export interface CheckpointJourney {
  id: string
  name: string
  description: string
  phases: CheckpointPhase[]
  overallProgress: number
}

interface CheckpointTrackerProps {
  journey: CheckpointJourney
  onCheckpointSelect: (phaseId: string, checkpointId: string) => void
  isBusinessJourney?: boolean
  isJobJourney?: boolean
  isVR4Deaf?: boolean
}

export default function CheckpointTracker({
  journey,
  onCheckpointSelect,
  isBusinessJourney = false,
  isJobJourney = false,
  isVR4Deaf = false,
}: CheckpointTrackerProps) {
  const [activePhase, setActivePhase] = useState<string>(journey.phases[0]?.id || "")

  const getStatusIcon = (status: CheckpointStatus) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Circle className="h-5 w-5 text-blue-500" />
      case "needs-review":
        return <HelpCircle className="h-5 w-5 text-yellow-500" />
      default:
        return <Circle className="h-5 w-5 text-gray-300" />
    }
  }

  const getPlatformColors = () => {
    if (isBusinessJourney) {
      return {
        badge: "bg-purple-600 text-white",
        progress: "text-purple-600",
        tab: "data-[state=active]:bg-purple-600 data-[state=active]:text-white",
        button: "bg-purple-600 hover:bg-purple-700",
        name: "Business Magician",
      }
    } else if (isJobJourney) {
      return {
        badge: "bg-teal-600 text-white",
        progress: "text-teal-600",
        tab: "data-[state=active]:bg-teal-600 data-[state=active]:text-white",
        button: "bg-teal-600 hover:bg-teal-700",
        name: "Job Magician",
      }
    } else if (isVR4Deaf) {
      return {
        badge: "bg-gradient-to-r from-red-600 to-blue-600 text-white",
        progress: "text-red-600",
        tab: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-blue-600 data-[state=active]:text-white",
        button: "bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700",
        name: "VR4Deaf",
      }
    }
    return {
      badge: "bg-gray-600 text-white",
      progress: "text-gray-600",
      tab: "data-[state=active]:bg-gray-600 data-[state=active]:text-white",
      button: "bg-gray-600 hover:bg-gray-700",
      name: "Platform",
    }
  }

  const colors = getPlatformColors()

  return (
    <div className="w-full">
      <CardHeader className="pb-2 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-600" />
              {journey.name}
              <Badge className={`ml-2 ${colors.badge}`}>{colors.name}</Badge>
            </CardTitle>
            <CardDescription className="mt-1 text-gray-600">{journey.description}</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Overall Progress</div>
            <div className={`text-3xl font-bold ${colors.progress}`}>{Math.round(journey.overallProgress)}%</div>
          </div>
        </div>
        <div className="mt-4">
          <Progress value={journey.overallProgress} className="h-3 bg-gray-200" />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <Tabs defaultValue={activePhase} onValueChange={setActivePhase} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-6 bg-gray-100">
            {journey.phases.map((phase) => (
              <TabsTrigger key={phase.id} value={phase.id} className={`relative ${colors.tab}`}>
                {phase.name}
                <span className="absolute -top-2 -right-2">
                  <Badge
                    className={`h-6 w-6 rounded-full flex items-center justify-center p-0 text-xs ${
                      phase.completionPercentage === 100 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {phase.completionPercentage === 100 ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      Math.round(phase.completionPercentage)
                    )}
                  </Badge>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {journey.phases.map((phase) => (
            <TabsContent key={phase.id} value={phase.id} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.checkpoints.map((checkpoint) => (
                  <Card
                    key={checkpoint.id}
                    className={`border-l-4 transition-all hover:shadow-lg ${
                      checkpoint.status === "completed"
                        ? "border-l-green-500 bg-green-50"
                        : checkpoint.status === "in-progress"
                          ? "border-l-blue-500 bg-blue-50"
                          : checkpoint.status === "needs-review"
                            ? "border-l-yellow-500 bg-yellow-50"
                            : "border-l-gray-300 bg-white"
                    }`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {getStatusIcon(checkpoint.status)}
                          {checkpoint.name}
                        </CardTitle>
                        <div className="text-right">
                          <Progress value={checkpoint.completionPercentage} className="h-2 w-16" />
                          <span className="text-xs text-gray-500 mt-1">{checkpoint.completionPercentage}%</span>
                        </div>
                      </div>
                      <CardDescription>{checkpoint.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onCheckpointSelect(phase.id, checkpoint.id)}
                        className={`text-white border-0 ${colors.button}`}
                      >
                        {checkpoint.status === "not-started"
                          ? isVR4Deaf
                            ? "🏢 Start"
                            : isJobJourney
                              ? "🎯 Start"
                              : "✨ Start"
                          : "Continue"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </div>
  )
}
