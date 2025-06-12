"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, Clock, Star } from "lucide-react"

interface Mentor {
  id: string
  name: string
  title: string
  company: string
  bio: string
  expertise: string[]
  industry: string[]
  availability: {
    days: string[]
    times: string[]
  }
  rating: number
  reviews: number
  image: string
}

export default function BusinessMentorMatcher() {
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([])

  const mentors: Mentor[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "Former CEO",
      company: "Tech Innovations Inc.",
      bio: "With over 20 years of experience in the tech industry, Sarah has helped dozens of startups scale from idea to acquisition.",
      expertise: ["Business Strategy", "Fundraising", "Team Building"],
      industry: ["Technology", "SaaS"],
      availability: {
        days: ["Monday", "Wednesday", "Friday"],
        times: ["Morning", "Afternoon"],
      },
      rating: 4.9,
      reviews: 27,
      image: "/confident-professional.png",
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      title: "Finance Director",
      company: "Growth Capital Partners",
      bio: "Michael specializes in helping small businesses optimize their finances and secure funding for growth.",
      expertise: ["Financial Planning", "Fundraising", "Cash Flow Management"],
      industry: ["Finance", "Retail", "Manufacturing"],
      availability: {
        days: ["Tuesday", "Thursday"],
        times: ["Afternoon", "Evening"],
      },
      rating: 4.7,
      reviews: 19,
      image: "/confident-businessman.png",
    },
    {
      id: "3",
      name: "Aisha Williams",
      title: "Marketing Strategist",
      company: "Brand Elevate",
      bio: "Aisha has helped over 100 small businesses develop effective marketing strategies that drive growth.",
      expertise: ["Marketing Strategy", "Social Media", "Brand Development"],
      industry: ["Retail", "Food & Beverage", "E-commerce"],
      availability: {
        days: ["Monday", "Wednesday", "Friday"],
        times: ["Morning", "Evening"],
      },
      rating: 4.8,
      reviews: 32,
      image: "/confident-marketing-leader.png",
    },
    {
      id: "4",
      name: "David Chen",
      title: "Operations Expert",
      company: "Streamline Solutions",
      bio: "David helps businesses optimize their operations, reduce costs, and improve efficiency.",
      expertise: ["Operations", "Process Improvement", "Supply Chain"],
      industry: ["Manufacturing", "Logistics", "Healthcare"],
      availability: {
        days: ["Tuesday", "Thursday", "Saturday"],
        times: ["Morning", "Afternoon"],
      },
      rating: 4.6,
      reviews: 15,
      image: "/confident-asian-businessman.png",
    },
  ]

  const allExpertise = Array.from(new Set(mentors.flatMap((m) => m.expertise)))
  const allIndustries = Array.from(new Set(mentors.flatMap((m) => m.industry)))

  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise) ? prev.filter((e) => e !== expertise) : [...prev, expertise],
    )
  }

  const toggleIndustry = (industry: string) => {
    setSelectedIndustry((prev) => (prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry]))
  }

  const filteredMentors = mentors.filter((mentor) => {
    const matchesExpertise =
      selectedExpertise.length === 0 || selectedExpertise.some((e) => mentor.expertise.includes(e))

    const matchesIndustry = selectedIndustry.length === 0 || selectedIndustry.some((i) => mentor.industry.includes(i))

    return matchesExpertise && matchesIndustry
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Business Mentor Matcher</CardTitle>
        <CardDescription>Connect with experienced mentors who can help guide your business journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-6">
            <div>
              <h3 className="font-medium mb-2">Expertise Needed</h3>
              <div className="space-y-2">
                {allExpertise.map((expertise) => (
                  <div key={expertise} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`expertise-${expertise}`}
                      checked={selectedExpertise.includes(expertise)}
                      onChange={() => toggleExpertise(expertise)}
                      className="rounded mr-2"
                    />
                    <label htmlFor={`expertise-${expertise}`}>{expertise}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Industry</h3>
              <div className="space-y-2">
                {allIndustries.map((industry) => (
                  <div key={industry} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`industry-${industry}`}
                      checked={selectedIndustry.includes(industry)}
                      onChange={() => toggleIndustry(industry)}
                      className="rounded mr-2"
                    />
                    <label htmlFor={`industry-${industry}`}>{industry}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Availability</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="availability-weekdays" className="rounded mr-2" />
                  <label htmlFor="availability-weekdays">Weekdays</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="availability-weekends" className="rounded mr-2" />
                  <label htmlFor="availability-weekends">Weekends</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="availability-evenings" className="rounded mr-2" />
                  <label htmlFor="availability-evenings">Evenings</label>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="space-y-4">
              {filteredMentors.length > 0 ? (
                filteredMentors.map((mentor) => (
                  <Card key={mentor.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-48 p-4 flex justify-center">
                        <img
                          src={mentor.image || "/placeholder.svg"}
                          alt={mentor.name}
                          className="rounded-full w-32 h-32 object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg">{mentor.name}</h3>
                            <p className="text-sm text-gray-600">
                              {mentor.title} at {mentor.company}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="ml-1 font-medium">{mentor.rating}</span>
                            <span className="text-sm text-gray-500 ml-1">({mentor.reviews})</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-2">{mentor.bio}</p>

                        <div className="mt-3">
                          <div className="flex flex-wrap gap-1 mb-2">
                            {mentor.expertise.map((item, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {mentor.industry.map((item, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{mentor.availability.days.join(", ")}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{mentor.availability.times.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 flex flex-col justify-center items-center md:w-48 gap-2">
                        <Button className="bg-[#FFBF00] text-black hover:bg-[#E6AC00] w-full">Schedule Meeting</Button>
                        <Button variant="outline" className="w-full">
                          <Mail className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No mentors match your selected criteria.</p>
                  <Button
                    variant="outline"
                    className="mt-2"
                    onClick={() => {
                      setSelectedExpertise([])
                      setSelectedIndustry([])
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
