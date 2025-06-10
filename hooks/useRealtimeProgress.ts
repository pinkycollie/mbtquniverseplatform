"use client"

import { useEffect, useState } from "react"
import type { CheckpointJourney } from "@/components/Checkpoints/CheckpointTracker"

export function useRealtimeProgress(userId: string, initialJourney: CheckpointJourney) {
  const [journey, setJourney] = useState<CheckpointJourney>(initialJourney)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (!userId) return

    // Connect to Server-Sent Events for real-time updates
    const eventSource = new EventSource(`/api/progress/realtime?userId=${userId}`)

    eventSource.onopen = () => {
      setIsConnected(true)
      console.log("Connected to real-time progress updates")
    }

    eventSource.onmessage = (event) => {
      const update = JSON.parse(event.data)

      switch (update.type) {
        case "checkpoint_updated":
          updateCheckpointInJourney(update.checkpointId, update.data)
          break

        case "phase_updated":
          updatePhaseInJourney(update.phaseId, update.data)
          break

        case "journey_completed":
          // Show celebration animation
          showCompletionCelebration()
          break
      }
    }

    eventSource.onerror = () => {
      setIsConnected(false)
      console.error("Real-time connection lost")
    }

    return () => {
      eventSource.close()
      setIsConnected(false)
    }
  }, [userId])

  const updateCheckpointInJourney = (checkpointId: string, updateData: any) => {
    setJourney((prevJourney) => ({
      ...prevJourney,
      phases: prevJourney.phases.map((phase) => ({
        ...phase,
        checkpoints: phase.checkpoints.map((checkpoint) =>
          checkpoint.id === checkpointId ? { ...checkpoint, ...updateData } : checkpoint,
        ),
      })),
    }))
  }

  const updatePhaseInJourney = (phaseId: string, updateData: any) => {
    setJourney((prevJourney) => ({
      ...prevJourney,
      phases: prevJourney.phases.map((phase) => (phase.id === phaseId ? { ...phase, ...updateData } : phase)),
    }))
  }

  const showCompletionCelebration = () => {
    // Trigger confetti or celebration animation
    console.log("🎉 Journey completed! Show celebration!")
  }

  return { journey, isConnected }
}
