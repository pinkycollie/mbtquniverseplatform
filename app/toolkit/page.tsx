"use client"

import { useState } from "react"
import ToolkitLayout from "@/components/layout/toolkit-layout"
import BusinessReadinessChecklist from "@/components/toolkit/business-readiness-checklist"
import StartupCostCalculator from "@/components/toolkit/startup-cost-calculator"
import FundingResourceFinder from "@/components/toolkit/funding-resource-finder"
import BusinessMentorMatcher from "@/components/toolkit/business-mentor-matcher"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calculator, Search, Users, ArrowRight } from "lucide-react"

export default function ToolkitPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const toolkitItems = [
    {
      id: "checklist",
      name: "Business Readiness Checklist",
      description: "Track your progress toward launching your business",
      icon: <CheckCircle className="h-6 w-6" />,
      component: <BusinessReadinessChecklist />,
    },
    {
      id: "calculator",
      name: "Startup Cost Calculator",
      description: "Estimate the costs to start and run your business",
      icon: <Calculator className="h-6 w-6" />,
      component: <StartupCostCalculator />,
    },
    {
      id: "funding",
      name: "Funding Resource Finder",
      description: "Discover grants, loans, and investment opportunities",
      icon: <Search className="h-6 w-6" />,
      component: <FundingResourceFinder />,
    },
    {
      id: "mentors",
      name: "Business Mentor Matcher",
      description: "Connect with experienced mentors in your industry",
      icon: <Users className="h-6 w-6" />,
      component: <BusinessMentorMatcher />,
    },
  ]

  return (
    <ToolkitLayout>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="checklist">Checklist</TabsTrigger>
          <TabsTrigger value="calculator">Cost Calculator</TabsTrigger>
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <div className="bg-[#FFBF00]/10 p-6 rounded-lg border border-[#FFBF00]/20">
            <h2 className="text-2xl font-bold mb-2">Welcome to the Business Toolkit</h2>
            <p className="mb-4">
              Our interactive toolkit is designed to help entrepreneurs at every stage of their business journey.
              Explore the tools below to help plan, launch, and grow your business in Fort Worth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toolkitItems.map((item) => (
              <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-full bg-[#FFBF00]/10 text-[#FFBF00]">{item.icon}</div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent onClick={() => setActiveTab(item.id)}>
                  <CardTitle className="text-xl mb-1">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-lg font-medium mb-2">Need personalized assistance?</h3>
            <p className="mb-4">
              Our team at Accelerate Fort Worth is ready to help you navigate your business journey. Schedule a
              consultation with one of our business advisors for personalized guidance.
            </p>
            <button className="bg-[#FFBF00] text-black px-4 py-2 rounded hover:bg-[#E6AC00] transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </TabsContent>

        <TabsContent value="checklist">
          <BusinessReadinessChecklist />
        </TabsContent>

        <TabsContent value="calculator">
          <StartupCostCalculator />
        </TabsContent>

        <TabsContent value="funding">
          <FundingResourceFinder />
        </TabsContent>

        <TabsContent value="mentors">
          <BusinessMentorMatcher />
        </TabsContent>
      </Tabs>
    </ToolkitLayout>
  )
}
