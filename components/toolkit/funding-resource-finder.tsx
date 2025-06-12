"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ExternalLink, BookmarkPlus } from "lucide-react"

interface FundingResource {
  id: string
  name: string
  type: "grant" | "loan" | "equity" | "accelerator"
  description: string
  amount: string
  eligibility: string[]
  deadline: string | null
  url: string
  saved: boolean
}

export default function FundingResourceFinder() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    types: [] as string[],
    eligibility: [] as string[],
  })
  const [resources, setResources] = useState<FundingResource[]>([
    {
      id: "1",
      name: "Fort Worth Small Business Grant",
      type: "grant",
      description: "Grants for small businesses in Fort Worth focusing on innovation and job creation.",
      amount: "$5,000 - $25,000",
      eligibility: ["Fort Worth-based", "Less than 50 employees", "In business for at least 1 year"],
      deadline: "2023-12-31",
      url: "https://example.com/grant1",
      saved: false,
    },
    {
      id: "2",
      name: "Texas Women-Owned Business Loan Program",
      type: "loan",
      description: "Low-interest loans for women-owned businesses in Texas.",
      amount: "Up to $250,000",
      eligibility: ["Women-owned", "Texas-based", "Credit score above 650"],
      deadline: null,
      url: "https://example.com/loan1",
      saved: false,
    },
    {
      id: "3",
      name: "Tech Startup Accelerator Program",
      type: "accelerator",
      description: "A 12-week program providing mentorship, resources, and funding for tech startups.",
      amount: "$50,000 + mentorship",
      eligibility: ["Tech industry", "Early-stage startup", "Scalable business model"],
      deadline: "2023-10-15",
      url: "https://example.com/accelerator1",
      saved: false,
    },
    {
      id: "4",
      name: "Minority Business Investment Fund",
      type: "equity",
      description: "Equity investments in minority-owned businesses with high growth potential.",
      amount: "$100,000 - $1,000,000",
      eligibility: ["Minority-owned", "Revenue over $250,000", "Established business model"],
      deadline: null,
      url: "https://example.com/equity1",
      saved: false,
    },
    {
      id: "5",
      name: "Restaurant Recovery Grant",
      type: "grant",
      description: "Grants for restaurants affected by economic downturns.",
      amount: "Up to $50,000",
      eligibility: ["Restaurant industry", "Demonstrated revenue loss", "In business for at least 2 years"],
      deadline: "2023-11-30",
      url: "https://example.com/grant2",
      saved: false,
    },
  ])

  const toggleSaved = (id: string) => {
    setResources(resources.map((resource) => (resource.id === id ? { ...resource, saved: !resource.saved } : resource)))
  }

  const toggleFilter = (category: "types" | "eligibility", value: string) => {
    setFilters((prev) => {
      const current = [...prev[category]]
      const index = current.indexOf(value)

      if (index === -1) {
        current.push(value)
      } else {
        current.splice(index, 1)
      }

      return {
        ...prev,
        [category]: current,
      }
    })
  }

  const filteredResources = resources.filter((resource) => {
    // Search term filter
    const matchesSearch =
      searchTerm === "" ||
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())

    // Type filter
    const matchesType = filters.types.length === 0 || filters.types.includes(resource.type)

    // Eligibility filter (any match)
    const matchesEligibility =
      filters.eligibility.length === 0 ||
      resource.eligibility.some((e) =>
        filters.eligibility.some((filter) => e.toLowerCase().includes(filter.toLowerCase())),
      )

    return matchesSearch && matchesType && matchesEligibility
  })

  const allEligibilityCriteria = Array.from(
    new Set(resources.flatMap((r) => r.eligibility.map((e) => e.split("-")[0].trim()))),
  )

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Funding Resource Finder</CardTitle>
        <CardDescription>Discover grants, loans, and investment opportunities for your business</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search funding opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
            {(filters.types.length > 0 || filters.eligibility.length > 0) && (
              <Badge variant="secondary" className="ml-2">
                {filters.types.length + filters.eligibility.length}
              </Badge>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-6">
            <div>
              <h3 className="font-medium mb-2">Funding Type</h3>
              <div className="space-y-2">
                {["grant", "loan", "equity", "accelerator"].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`type-${type}`}
                      checked={filters.types.includes(type)}
                      onChange={() => toggleFilter("types", type)}
                      className="rounded mr-2"
                    />
                    <label htmlFor={`type-${type}`} className="capitalize">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Eligibility</h3>
              <div className="space-y-2">
                {allEligibilityCriteria.map((criteria) => (
                  <div key={criteria} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`eligibility-${criteria}`}
                      checked={filters.eligibility.includes(criteria)}
                      onChange={() => toggleFilter("eligibility", criteria)}
                      className="rounded mr-2"
                    />
                    <label htmlFor={`eligibility-${criteria}`}>{criteria}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Deadline</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="deadline-all" name="deadline" defaultChecked className="mr-2" />
                  <label htmlFor="deadline-all">All</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="deadline-upcoming" name="deadline" className="mr-2" />
                  <label htmlFor="deadline-upcoming">Upcoming</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="deadline-rolling" name="deadline" className="mr-2" />
                  <label htmlFor="deadline-rolling">Rolling/No Deadline</label>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All ({filteredResources.length})</TabsTrigger>
                <TabsTrigger value="saved">Saved ({resources.filter((r) => r.saved).length})</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4 mt-4">
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource) => (
                    <Card key={resource.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="flex-1 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{resource.name}</h3>
                              <Badge
                                className={
                                  resource.type === "grant"
                                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                                    : resource.type === "loan"
                                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                      : resource.type === "equity"
                                        ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                        : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                }
                              >
                                {resource.type}
                              </Badge>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleSaved(resource.id)}
                              className={resource.saved ? "text-yellow-500" : ""}
                            >
                              <BookmarkPlus className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
                          <div className="mt-3">
                            <div className="text-sm">
                              <strong>Amount:</strong> {resource.amount}
                            </div>
                            {resource.deadline && (
                              <div className="text-sm">
                                <strong>Deadline:</strong> {new Date(resource.deadline).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                          <div className="mt-3">
                            <strong className="text-sm">Eligibility:</strong>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {resource.eligibility.map((item, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 flex flex-col justify-center items-center md:w-48">
                          <Button asChild className="bg-[#FFBF00] text-black hover:bg-[#E6AC00] w-full">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Details
                            </a>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No funding resources match your criteria.</p>
                    <Button
                      variant="outline"
                      className="mt-2"
                      onClick={() => {
                        setSearchTerm("")
                        setFilters({ types: [], eligibility: [] })
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="saved" className="space-y-4 mt-4">
                {resources.filter((r) => r.saved).length > 0 ? (
                  resources
                    .filter((r) => r.saved)
                    .map((resource) => (
                      <Card key={resource.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="flex-1 p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium text-lg">{resource.name}</h3>
                                <Badge
                                  className={
                                    resource.type === "grant"
                                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                                      : resource.type === "loan"
                                        ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                        : resource.type === "equity"
                                          ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                          : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                  }
                                >
                                  {resource.type}
                                </Badge>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleSaved(resource.id)}
                                className="text-yellow-500"
                              >
                                <BookmarkPlus className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
                            <div className="mt-3">
                              <div className="text-sm">
                                <strong>Amount:</strong> {resource.amount}
                              </div>
                              {resource.deadline && (
                                <div className="text-sm">
                                  <strong>Deadline:</strong> {new Date(resource.deadline).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 flex flex-col justify-center items-center md:w-48">
                            <Button asChild className="bg-[#FFBF00] text-black hover:bg-[#E6AC00] w-full">
                              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Details
                              </a>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">You haven't saved any funding resources yet.</p>
                    <p className="text-sm mt-1">Click the bookmark icon to save resources for later.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
