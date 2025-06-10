"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface CheckpointFeedbackProps {
  checkpointName: string
  onSubmit: () => void
  onBack: () => void
}

export default function CheckpointFeedback({ checkpointName, onSubmit, onBack }: CheckpointFeedbackProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [confidence, setConfidence] = useState<string>("3")
  const [feedback, setFeedback] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onSubmit()
    } catch (error) {
      console.error("Error submitting feedback:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Checkpoint Feedback</CardTitle>
        <CardDescription>Share your experience completing the "{checkpointName}" checkpoint</CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>How confident do you feel about this checkpoint?</Label>
            <RadioGroup value={confidence} onValueChange={setConfidence} className="flex justify-between">
              <div className="flex flex-col items-center gap-1">
                <RadioGroupItem value="1" id="confidence-1" />
                <Label htmlFor="confidence-1" className="text-xs">
                  Not at all
                </Label>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RadioGroupItem value="2" id="confidence-2" />
                <Label htmlFor="confidence-2" className="text-xs">
                  Slightly
                </Label>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RadioGroupItem value="3" id="confidence-3" />
                <Label htmlFor="confidence-3" className="text-xs">
                  Moderately
                </Label>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RadioGroupItem value="4" id="confidence-4" />
                <Label htmlFor="confidence-4" className="text-xs">
                  Very
                </Label>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RadioGroupItem value="5" id="confidence-5" />
                <Label htmlFor="confidence-5" className="text-xs">
                  Extremely
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="feedback">What did you learn from this checkpoint?</Label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share what you learned or accomplished..."
              rows={4}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
