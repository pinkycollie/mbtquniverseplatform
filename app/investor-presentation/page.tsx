"use client"

import SlideDeck from "@/components/presentation/slide-deck"
import TitleSlide from "@/components/presentation/title-slide"
import ContentSlide from "@/components/presentation/content-slide"
import SplitSlide from "@/components/presentation/split-slide"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle } from "lucide-react"

export default function InvestorPresentation() {
  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <SlideDeck>
        {/* Slide 1: Title */}
        <TitleSlide
          title="Interactive Checkpoint System"
          subtitle="Transforming Business & Career Development for the Deaf Community"
          presenter="360 Business Magician & 360 Job Coach"
          date="Q2 2023"
        />

        {/* Slide 2: Vision & Mission */}
        <ContentSlide title="Our Vision & Mission">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-purple-50 border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Vision</h3>
              <p className="text-gray-700">
                To create a world where deaf entrepreneurs and job seekers have equal access to opportunities,
                resources, and support systems that empower them to achieve their full potential.
              </p>
            </Card>
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Mission</h3>
              <p className="text-gray-700">
                To provide accessible, step-by-step guidance through the complex journeys of business development and
                career advancement, breaking down barriers through innovative technology and personalized support.
              </p>
            </Card>
          </div>

          <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-2">Impact Focus</h3>
            <p className="text-gray-700">
              Our platforms specifically address the unique challenges faced by the deaf community, providing ASL video
              support, visual learning tools, and a community of mentors who understand their specific needs.
            </p>
          </div>
        </ContentSlide>

        {/* Slide 3: Market Opportunity */}
        <ContentSlide title="Market Opportunity">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <Card className="p-4">
                <h3 className="text-4xl font-bold text-purple-600">11.5M</h3>
                <p className="mt-2 text-gray-600">Americans with hearing loss</p>
              </Card>
              <Card className="p-4">
                <h3 className="text-4xl font-bold text-purple-600">70%</h3>
                <p className="mt-2 text-gray-600">Unemployment/underemployment rate</p>
              </Card>
              <Card className="p-4">
                <h3 className="text-4xl font-bold text-purple-600">$2.1B</h3>
                <p className="mt-2 text-gray-600">Market size for accessible business services</p>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Key Market Insights:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deaf entrepreneurs face 2.5x more barriers to starting businesses than hearing counterparts</li>
                <li>83% of deaf business owners report lack of accessible resources as their biggest challenge</li>
                <li>Deaf job seekers spend 61% more time searching for employment than hearing peers</li>
                <li>Companies with accessible hiring practices are 89% more likely to retain deaf employees</li>
              </ul>
            </div>
          </div>
        </ContentSlide>

        {/* Slide 4: The Problem */}
        <ContentSlide title="The Problem">
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">Current Challenges</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">For Deaf Entrepreneurs:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Limited access to business education in ASL</li>
                    <li>Communication barriers with potential investors</li>
                    <li>Difficulty navigating complex legal requirements</li>
                    <li>Isolation from entrepreneurial networks</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">For Deaf Job Seekers:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Interview process not designed for deaf candidates</li>
                    <li>Limited career development resources in ASL</li>
                    <li>Employer misconceptions about capabilities</li>
                    <li>Lack of accessible training programs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Current Solutions Fall Short:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 border-red-200">
                  <h4 className="font-medium">Generic Platforms</h4>
                  <p className="text-sm text-gray-600 mt-2">Not designed for deaf users; lack ASL support</p>
                </Card>
                <Card className="p-4 border-red-200">
                  <h4 className="font-medium">Fragmented Resources</h4>
                  <p className="text-sm text-gray-600 mt-2">No comprehensive journey-based approach</p>
                </Card>
                <Card className="p-4 border-red-200">
                  <h4 className="font-medium">Limited Personalization</h4>
                  <p className="text-sm text-gray-600 mt-2">One-size-fits-all approach to diverse needs</p>
                </Card>
              </div>
            </div>
          </div>
        </ContentSlide>

        {/* Slide 5: Our Solution */}
        <ContentSlide title="Our Solution: Interactive Checkpoint System">
          <div className="space-y-6">
            <p className="text-lg">
              A comprehensive, guided journey system that breaks down complex processes into manageable steps, providing
              personalized support at every stage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <Card className="overflow-hidden">
                <div className="bg-purple-600 p-4 text-white">
                  <h3 className="font-bold">360 Business Magician</h3>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3 mt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Idea: Business Vision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Build: Structure & Legal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-5 w-5 text-blue-500" />
                      <span>Build: Financial Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-5 w-5 text-gray-300" />
                      <span>Grow: Market & Ops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-5 w-5 text-gray-300" />
                      <span>Manage: Compliance & Scaling</span>
                    </div>
                  </div>
                  <Progress value={35} className="mt-4 h-2" />
                  <p className="text-right text-sm mt-1">35% Complete</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-blue-600 p-4 text-white">
                  <h3 className="font-bold">360 Job Coach</h3>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3 mt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Assessment: Career Mapping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-5 w-5 text-blue-500" />
                      <span>Skills: Soft + Hard Skills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-5 w-5 text-blue-500" />
                      <span>Training: Enroll + Learn</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-5 w-5 text-gray-300" />
                      <span>Résumé: Résumé + LinkedIn</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-5 w-5 text-gray-300" />
                      <span>Placement: Job App & Followup</span>
                    </div>
                  </div>
                  <Progress value={40} className="mt-4 h-2" />
                  <p className="text-right text-sm mt-1">40% Complete</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </ContentSlide>

        {/* Slide 6: Key Features */}
        <ContentSlide title="Key Features & Differentiators">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-4 border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">ASL-First Design</h3>
              <p className="text-sm">
                Every checkpoint includes ASL video explanations, making complex business and career concepts fully
                accessible to deaf users.
              </p>
            </Card>

            <Card className="p-4 border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">AI-Powered Feedback</h3>
              <p className="text-sm">
                Intelligent review of business documents, résumés, and progress with personalized recommendations
                tailored to deaf entrepreneurs and job seekers.
              </p>
            </Card>

            <Card className="p-4 border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Mentor Connection</h3>
              <p className="text-sm">
                Direct access to deaf business owners and career professionals who provide guidance and feedback at
                critical checkpoints.
              </p>
            </Card>

            <Card className="p-4 border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Visual Progress Tracking</h3>
              <p className="text-sm">
                Clear visualization of journey progress with achievement badges and milestone celebrations to maintain
                motivation.
              </p>
            </Card>

            <Card className="p-4 border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Resource Integration</h3>
              <p className="text-sm">
                Seamless connection to deaf-friendly service providers, funding sources, and employers committed to
                accessibility.
              </p>
            </Card>

            <Card className="p-4 border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Community Support</h3>
              <p className="text-sm">
                Built-in community features allowing users to connect with peers at similar stages in their journey for
                mutual support.
              </p>
            </Card>
          </div>
        </ContentSlide>

        {/* Slide 7: Technical Architecture */}
        <ContentSlide title="Technical Architecture">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="text-sm space-y-1">
                  <li>Next.js React Framework</li>
                  <li>Tailwind CSS for styling</li>
                  <li>Recharts for progress visualization</li>
                  <li>React Flow for journey mapping</li>
                  <li>Shadcn/UI component library</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="text-sm space-y-1">
                  <li>Node.js API with Express</li>
                  <li>MongoDB for user data & progress</li>
                  <li>Redis for caching</li>
                  <li>AWS S3 for file storage</li>
                  <li>JWT authentication</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">AI & Integrations</h3>
                <ul className="text-sm space-y-1">
                  <li>GPT-4 for document review</li>
                  <li>OpenAI Embeddings for recommendations</li>
                  <li>TidyCal for mentor scheduling</li>
                  <li>Northwest Agent API for business filing</li>
                  <li>Stripe for payments</li>
                </ul>
              </Card>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border">
              <h3 className="font-semibold mb-2">Core Modules</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <Badge className="mb-1">CheckpointTracker</Badge>
                  <p className="text-xs">Visual progress indicator</p>
                </div>
                <div>
                  <Badge className="mb-1">CheckpointModule</Badge>
                  <p className="text-xs">Content & activities</p>
                </div>
                <div>
                  <Badge className="mb-1">CheckpointFeedback</Badge>
                  <p className="text-xs">User input collection</p>
                </div>
                <div>
                  <Badge className="mb-1">CheckpointAIReview</Badge>
                  <p className="text-xs">AI-driven validation</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">API Endpoints</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <code className="bg-blue-100 px-2 py-1 rounded text-blue-800">GET /api/checkpoints/:userId</code>
                  <p className="text-xs mt-1">Fetch checkpoint progress</p>
                </div>
                <div>
                  <code className="bg-blue-100 px-2 py-1 rounded text-blue-800">
                    POST /api/checkpoints/complete/:stageId
                  </code>
                  <p className="text-xs mt-1">Mark stage complete</p>
                </div>
                <div>
                  <code className="bg-blue-100 px-2 py-1 rounded text-blue-800">
                    PUT /api/checkpoints/save-progress
                  </code>
                  <p className="text-xs mt-1">Auto-save progress</p>
                </div>
                <div>
                  <code className="bg-blue-100 px-2 py-1 rounded text-blue-800">POST /api/checkpoints/review</code>
                  <p className="text-xs mt-1">Submit for AI/mentor feedback</p>
                </div>
              </div>
            </div>
          </div>
        </ContentSlide>

        {/* Slide 8: User Experience */}
        <SplitSlide
          title="User Experience"
          left={
            <div className="space-y-4">
              <h3 className="font-semibold">Accessibility-First Design</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>ASL video explanations for every checkpoint</li>
                <li>Visual progress indicators with clear status markers</li>
                <li>Color-coded system for quick status recognition</li>
                <li>Simple, distraction-free interface</li>
                <li>Mobile-responsive design for on-the-go access</li>
                <li>Auto-save functionality to prevent data loss</li>
                <li>Integrated video chat with ASL interpreters</li>
              </ul>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-4">
                <h4 className="font-medium text-green-800">User Testing Results</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>92% of deaf users rated the platform as "highly accessible"</li>
                  <li>Average task completion time reduced by 68% compared to standard platforms</li>
                  <li>User confidence scores increased by 47% after completing first checkpoint</li>
                </ul>
              </div>
            </div>
          }
          right={
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-4">
                <span className="text-gray-500">UI Screenshot Placeholder</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Completed checkpoints</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">In-progress checkpoints</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm">Needs review</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                  <span className="text-sm">Not started</span>
                </div>
              </div>
            </div>
          }
        />

        {/* Slide 9: Real-World Example */}
        <ContentSlide title="Real-World Example: Sarah's Journey">
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gray-300 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-purple-800">Sarah, Deaf Single Mom & Entrepreneur</h3>
                  <p className="text-sm mt-1">
                    Sarah recently registered her LLC for a graphic design business specializing in accessible visual
                    communication. She's navigating the early stages of business setup.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Checkpoint Progress</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Idea</span>
                        <span>100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Build</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Grow</span>
                        <span>0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Manage</span>
                        <span>0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">AI Feedback at Build Stage</h3>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200">
                      <p className="text-sm">
                        <span className="font-medium">Financial Setup:</span> Consider adding a business savings account
                        for cash flow smoothing. This will help separate personal and business finances more
                        effectively.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-md border border-red-200">
                      <p className="text-sm">
                        <span className="font-medium">Missing D-U-N-S Number:</span> This is required for business
                        credit building and accessing certain government contracts. We've added a guide to obtaining
                        this to your resources section.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Schedule Mentor Review</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Impact on Sarah's Journey</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Completed business registration 3x faster than average for deaf entrepreneurs</li>
                <li>Avoided common legal pitfalls through AI-guided document review</li>
                <li>Connected with deaf business mentor who provided industry-specific advice</li>
                <li>Gained confidence in financial planning through ASL-accessible tutorials</li>
                <li>On track to secure first major client within 60 days of business launch</li>
              </ul>
            </div>
          </div>
        </ContentSlide>

        {/* Slide 10: Development Roadmap */}
        <ContentSlide title="Development Roadmap">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              <div className="relative pl-12 pb-8">
                <div className="absolute left-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <h3 className="font-semibold">Phase 1: Core System Development (Completed)</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Interactive Checkpoint System architecture</li>
                  <li>User journey mapping for both platforms</li>
                  <li>Basic AI feedback integration</li>
                  <li>ASL video support framework</li>
                </ul>
              </div>

              <div className="relative pl-12 pb-8">
                <div className="absolute left-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <span className="text-xs">2</span>
                </div>
                <h3 className="font-semibold">Phase 2: Enhanced Features (In Progress)</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Advanced AI document review system</li>
                  <li>Mentor matching algorithm</li>
                  <li>Expanded ASL video library</li>
                  <li>Community features and peer support</li>
                </ul>
              </div>

              <div className="relative pl-12 pb-8">
                <div className="absolute left-2 w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white">
                  <span className="text-xs">3</span>
                </div>
                <h3 className="font-semibold">Phase 3: Ecosystem Expansion (Q3 2023)</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Service provider marketplace</li>
                  <li>Funding source integration</li>
                  <li>Employer partnerships for job placement</li>
                  <li>Mobile app development</li>
                </ul>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-2 w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white">
                  <span className="text-xs">4</span>
                </div>
                <h3 className="font-semibold">Phase 4: Scale & Expand (Q1 2024)</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>International expansion</li>
                  <li>Enterprise solutions for corporate partners</li>
                  <li>Advanced analytics and reporting</li>
                  <li>API for third-party integrations</li>
                </ul>
              </div>
            </div>
          </div>
        </ContentSlide>

        {/* Slide 11: Traction & Metrics */}
        <ContentSlide title="Traction & Early Results">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <Card className="p-6">
                <h3 className="text-4xl font-bold text-purple-600">250+</h3>
                <p className="mt-2 text-gray-600">Active users in beta</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-4xl font-bold text-purple-600">87%</h3>
                <p className="mt-2 text-gray-600">User retention rate</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-4xl font-bold text-purple-600">42</h3>
                <p className="mt-2 text-gray-600">Businesses launched</p>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">User Success Metrics</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span>Business registration completion</span>
                      <Badge className="bg-green-100 text-green-800">+175%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Time to secure funding</span>
                      <Badge className="bg-green-100 text-green-800">-43%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Job interview success rate</span>
                      <Badge className="bg-green-100 text-green-800">+68%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Average salary increase</span>
                      <Badge className="bg-green-100 text-green-800">+27%</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Strategic Partnerships</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 border rounded-md flex items-center justify-center h-16">
                      <span className="text-gray-500">Partner Logo</span>
                    </div>
                    <div className="p-3 border rounded-md flex items-center justify-center h-16">
                      <span className="text-gray-500">Partner Logo</span>
                    </div>
                    <div className="p-3 border rounded-md flex items-center justify-center h-16">
                      <span className="text-gray-500">Partner Logo</span>
                    </div>
                    <div className="p-3 border rounded-md flex items-center justify-center h-16">
                      <span className="text-gray-500">Partner Logo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Testimonials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-sm italic">
                    "This platform changed everything for me. As a deaf entrepreneur, I finally found resources that
                    speak my language and understand my challenges."
                  </p>
                  <p className="text-sm font-medium mt-2">- Michael T., Web Development Agency Owner</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-sm italic">
                    "The checkpoint system guided me through every step of my job search. I'm now employed at a company
                    that values my skills and accommodates my needs."
                  </p>
                  <p className="text-sm font-medium mt-2">- Alicia R., UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </ContentSlide>

        {/* Slide 12: Investment Opportunity */}
        <ContentSlide title="Investment Opportunity">
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Funding Round Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-medium">Raising</h4>
                  <p className="text-2xl font-bold text-purple-600 mt-1">$2.5M</p>
                  <p className="text-xs text-gray-500 mt-1">Seed Round</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-medium">Pre-money Valuation</h4>
                  <p className="text-2xl font-bold text-purple-600 mt-1">$10M</p>
                  <p className="text-xs text-gray-500 mt-1">Based on traction & market</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-medium">Use of Funds</h4>
                  <p className="text-md font-medium mt-1">Product Development</p>
                  <p className="text-md font-medium mt-1">Team Expansion</p>
                  <p className="text-md font-medium mt-1">Marketing & Growth</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Growth Projections</h3>
                  <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                    <span className="text-gray-500">Growth Chart Placeholder</span>
                  </div>
                  <ul className="mt-4 space-y-1 text-sm">
                    <li>Year 1: 5,000+ active users</li>
                    <li>Year 2: 25,000+ active users</li>
                    <li>Year 3: 100,000+ active users</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Revenue Model</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span>Subscription Model</span>
                      <Badge>Primary</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Service Provider Marketplace</span>
                      <Badge>Secondary</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Enterprise Partnerships</span>
                      <Badge>Tertiary</Badge>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-medium">Projected Revenue</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>Year 1: $750K</li>
                      <li>Year 2: $3.2M</li>
                      <li>Year 3: $8.5M</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ContentSlide>

        {/* Slide 13: Team */}
        <ContentSlide title="Our Team">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-semibold">Jane Doe</h3>
                <p className="text-sm text-gray-500">CEO & Founder</p>
                <p className="text-xs mt-2">
                  Deaf entrepreneur with 10+ years experience in accessibility technology. Former Product Lead at [Tech
                  Company].
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-sm text-gray-500">CTO</p>
                <p className="text-xs mt-2">
                  15+ years in software development. Led engineering teams at [Major Tech Company]. Expert in accessible
                  design.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">Head of Community</p>
                <p className="text-xs mt-2">
                  Deaf advocate with extensive experience in community building. Former Director at [Deaf Advocacy
                  Organization].
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Advisors</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="font-medium">Dr. Robert Chen</p>
                      <p className="text-xs text-gray-500">Professor of Entrepreneurship, [University]</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="font-medium">Maria Garcia</p>
                      <p className="text-xs text-gray-500">Former CEO, [Successful Startup]</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">We're Hiring!</h3>
                <p className="text-sm">
                  We're building a diverse team passionate about accessibility and empowering the deaf community.
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>Senior Full-Stack Developer</li>
                  <li>AI/ML Engineer</li>
                  <li>ASL Content Creator</li>
                  <li>Community Manager</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </ContentSlide>

        {/* Slide 14: Call to Action */}
        <ContentSlide title="Join Us in Creating Impact">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg">
              We're not just building a platform; we're creating economic opportunities and career advancement for an
              underserved community.
            </p>

            <div className="mt-8 bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Our Vision for Impact</h3>
              <ul className="text-left list-disc pl-6 space-y-2">
                <li>Enable 10,000+ deaf entrepreneurs to launch successful businesses by 2025</li>
                <li>Help 50,000+ deaf job seekers secure meaningful employment</li>
                <li>Reduce unemployment in the deaf community by 15% in our target markets</li>
                <li>Create the largest accessible business and career development ecosystem</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <p className="font-semibold text-lg mb-4">Ready to be part of this journey?</p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-md font-medium">
                  Schedule Follow-up
                </button>
                <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-md font-medium">
                  Request Pitch Deck
                </button>
              </div>
            </div>
          </div>
        </ContentSlide>

        {/* Slide 15: Thank You */}
        <TitleSlide
          title="Thank You"
          subtitle="Questions & Discussion"
          background="bg-gradient-to-br from-purple-600 to-blue-600"
        />
      </SlideDeck>
    </div>
  )
}
