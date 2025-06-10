"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Download, ExternalLink, Play, Users } from "lucide-react"
import type { Checkpoint } from "./CheckpointTracker"
import { CHECKPOINT_CONTENT } from "@/data/checkpoint-content"

interface CheckpointModuleProps {
  checkpoint: Checkpoint
  onComplete: () => void
  onBack: () => void
}

export default function CheckpointModule({ checkpoint, onComplete, onBack }: CheckpointModuleProps) {
  const [activeTab, setActiveTab] = useState("instructions")
  const content = CHECKPOINT_CONTENT[checkpoint.id]

  if (!content) {
    return (
      <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Content Not Available</CardTitle>
          <CardDescription>Content for this checkpoint is being developed.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" onClick={onBack}>
            Back to Checkpoints
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold">{checkpoint.name}</CardTitle>
            <CardDescription className="mt-1">{checkpoint.description}</CardDescription>
            <div className="flex gap-2 mt-2">
              <Badge variant="outline">{content.instructions.difficulty}</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {content.instructions.timeEstimate}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Completion</div>
            <div className="flex items-center gap-2">
              <Progress value={checkpoint.completionPercentage} className="h-2 w-24" />
              <span className="font-medium">{checkpoint.completionPercentage}%</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="ai-support">AI Support</TabsTrigger>
            <TabsTrigger value="completion">Completion</TabsTrigger>
          </TabsList>

          <TabsContent value="instructions" className="space-y-6">
            <div className="prose max-w-none">
              <h3>Overview</h3>
              <p>{content.instructions.overview}</p>

              {content.instructions.prerequisites && (
                <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                  <h4 className="text-yellow-800 font-medium">Prerequisites</h4>
                  <ul className="mt-2 space-y-1">
                    {content.instructions.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-yellow-700 text-sm">
                        • {prereq}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <h4>Step-by-Step Instructions</h4>
              <ol className="space-y-2">
                {content.instructions.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="bg-red-50 p-4 rounded-md border border-red-200 mt-6">
                <h4 className="text-red-800 font-medium">Common Pitfalls to Avoid</h4>
                <ul className="mt-2 space-y-1">
                  {content.commonPitfalls.map((pitfall, index) => (
                    <li key={index} className="text-red-700 text-sm">
                      • {pitfall}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            {/* ASL Videos Section */}
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Play className="h-5 w-5" />
                Video Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.resources.videos.map((video, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                        <Play className="h-8 w-8 text-gray-400" />
                      </div>
                      <h4 className="font-medium">{video.title}</h4>
                      <div className="flex gap-2 mt-2">
                        <Badge variant={video.type === "ASL" ? "default" : "secondary"} className="text-xs">
                          {video.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {video.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{video.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Templates Section */}
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Templates & Documents
              </h3>
              <div className="space-y-3">
                {content.resources.templates.map((template, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div>
                      <h4 className="font-medium">{template.name}</h4>
                      <p className="text-sm text-gray-600">{template.description}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {template.type}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h3 className="font-semibold mb-4">Recommended Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.resources.tools.map((tool, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{tool.name}</h4>
                        <Badge
                          variant={
                            tool.cost === "Free" ? "default" : tool.cost === "Paid" ? "destructive" : "secondary"
                          }
                          className="text-xs"
                        >
                          {tool.cost}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                      <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visit Tool
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Articles Section */}
            <div>
              <h3 className="font-semibold mb-4">Additional Reading</h3>
              <div className="space-y-3">
                {content.resources.articles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div>
                      <h4 className="font-medium">{article.title}</h4>
                      <p className="text-sm text-gray-600">
                        {article.source} • {article.readTime}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai-support" className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-blue-800 font-medium flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M3 5h4" />
                  <path d="M19 17v4" />
                  <path d="M17 19h4" />
                </svg>
                AI Assistant Ready to Help
              </h3>
              <p className="text-blue-700 mb-4">
                Our AI assistant is trained specifically for this checkpoint. Here are some suggested prompts to get you
                started:
              </p>

              <div className="space-y-3">
                {content.aiPrompts.map((prompt, index) => (
                  <div key={index} className="bg-white p-3 rounded-md border border-blue-200">
                    <p className="text-sm">{prompt}</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Ask AI Assistant
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-purple-800 font-medium flex items-center gap-2 mb-4">
                <Users className="h-5 w-5" />
                Mentor Discussion Points
              </h3>
              <p className="text-purple-700 mb-4">
                When you meet with your mentor, consider discussing these key questions:
              </p>

              <div className="space-y-2">
                {content.mentorQuestions.map((question, index) => (
                  <div key={index} className="bg-white p-3 rounded-md border border-purple-200">
                    <p className="text-sm font-medium">{question}</p>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-4">
                Schedule Mentor Session
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="completion" className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-green-800 font-medium flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5" />
                Success Criteria
              </h3>
              <p className="text-green-700 mb-4">
                To mark this checkpoint as complete, you need to fulfill the following requirements:
              </p>
              <ul className="space-y-2">
                {content.successCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-4">Required Deliverables</h3>
              <div className="space-y-3">
                {content.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-md border">
                    <span className="text-sm">{deliverable}</span>
                    <Button variant="ghost" size="sm">
                      Upload
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Submit for Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  When you've completed all the requirements for this checkpoint, click the button below to mark it as
                  complete and move to the next stage.
                </p>
              </CardContent>
              <CardFooter>
                <Button onClick={onComplete} className="w-full">
                  Mark as Complete
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter>
        <Button variant="outline" onClick={onBack}>
          Back to Checkpoints
        </Button>
      </CardFooter>
    </Card>
  )
}
