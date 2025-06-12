"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Download, Share2, Save } from "lucide-react"

interface ChecklistItem {
  id: string
  title: string
  description: string
  completed: boolean
  category: "planning" | "legal" | "financial" | "marketing"
}

export default function BusinessReadinessChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: "1",
      title: "Create a business plan",
      description: "Outline your business goals, target market, and financial projections",
      completed: false,
      category: "planning",
    },
    {
      id: "2",
      title: "Register your business name",
      description: "Check availability and register with appropriate authorities",
      completed: false,
      category: "legal",
    },
    {
      id: "3",
      title: "Obtain necessary licenses and permits",
      description: "Research and apply for required licenses for your industry",
      completed: false,
      category: "legal",
    },
    {
      id: "4",
      title: "Set up business banking",
      description: "Open a business bank account and establish financial tracking",
      completed: false,
      category: "financial",
    },
    {
      id: "5",
      title: "Create a marketing strategy",
      description: "Develop a plan to reach your target customers",
      completed: false,
      category: "marketing",
    },
    {
      id: "6",
      title: "Build a web presence",
      description: "Create a website and social media accounts",
      completed: false,
      category: "marketing",
    },
    {
      id: "7",
      title: "Secure startup funding",
      description: "Explore funding options like loans, grants, or investors",
      completed: false,
      category: "financial",
    },
    {
      id: "8",
      title: "Develop a pricing strategy",
      description: "Research competitors and determine your pricing model",
      completed: false,
      category: "planning",
    },
  ])

  const toggleItem = (id: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const progress = Math.round((items.filter((item) => item.completed).length / items.length) * 100)

  const categories = [
    { id: "planning", name: "Planning", color: "bg-blue-500" },
    { id: "legal", name: "Legal", color: "bg-green-500" },
    { id: "financial", name: "Financial", color: "bg-purple-500" },
    { id: "marketing", name: "Marketing", color: "bg-orange-500" },
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Business Readiness Checklist</span>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save Progress
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </CardTitle>
        <CardDescription>Track your progress toward business launch readiness</CardDescription>
        <div className="mt-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Completion: {progress}%</span>
            <span className="text-sm font-medium">
              {items.filter((item) => item.completed).length}/{items.length} tasks
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${category.color} mr-1`}></div>
              <span className="text-xs">{category.name}</span>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-4 border rounded-lg transition-all ${
                item.completed ? "bg-gray-50 border-gray-200" : "border-gray-200"
              }`}
            >
              <div className="flex items-start">
                <Checkbox
                  id={`item-${item.id}`}
                  checked={item.completed}
                  onCheckedChange={() => toggleItem(item.id)}
                  className="mt-1"
                />
                <div className="ml-3 flex-1">
                  <label
                    htmlFor={`item-${item.id}`}
                    className={`font-medium block ${item.completed ? "line-through text-gray-500" : ""}`}
                  >
                    {item.title}
                  </label>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  <div className="mt-2">
                    <div
                      className={`text-xs px-2 py-1 rounded-full inline-block ${
                        item.category === "planning"
                          ? "bg-blue-100 text-blue-800"
                          : item.category === "legal"
                            ? "bg-green-100 text-green-800"
                            : item.category === "financial"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset Progress</Button>
        <Button className="bg-[#FFBF00] text-black hover:bg-[#E6AC00]">
          {progress === 100 ? "Download Certificate" : "Save Progress"}
        </Button>
      </CardFooter>
    </Card>
  )
}
