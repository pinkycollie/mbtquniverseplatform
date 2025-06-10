export interface BusinessLifecycleStage {
  id: string
  name: string
  description: string
  duration: string
  keyMilestones: string[]
  commonChallenges: string[]
  successMetrics: string[]
  automationTriggers?: string[]
}

export const BUSINESS_LIFECYCLE: BusinessLifecycleStage[] = [
  // PHASE 1: CONCEPTION & IDEATION
  {
    id: "conception",
    name: "Conception & Ideation",
    description: "Initial business idea development and validation",
    duration: "1-3 months",
    keyMilestones: [
      "Problem identification",
      "Solution conceptualization",
      "Market research initiation",
      "Personal skills assessment",
      "Initial business model brainstorming",
    ],
    commonChallenges: [
      "Idea validation",
      "Market size uncertainty",
      "Personal readiness assessment",
      "Resource availability",
    ],
    successMetrics: [
      "Clear problem statement defined",
      "Target market identified",
      "Initial solution concept validated",
    ],
  },

  // PHASE 2: VALIDATION & PLANNING
  {
    id: "validation",
    name: "Validation & Planning",
    description: "Market validation and comprehensive business planning",
    duration: "2-6 months",
    keyMilestones: [
      "Market research completion",
      "Competitive analysis",
      "Customer interviews/surveys",
      "MVP concept development",
      "Business model validation",
      "Financial projections",
      "Business plan creation",
    ],
    commonChallenges: ["Customer validation", "Market sizing", "Revenue model uncertainty", "Competition analysis"],
    successMetrics: [
      "Validated customer demand",
      "Clear value proposition",
      "Comprehensive business plan",
      "Financial projections completed",
    ],
  },

  // PHASE 3: LEGAL FOUNDATION
  {
    id: "legal-foundation",
    name: "Legal Foundation",
    description: "Establishing legal business structure and compliance",
    duration: "1-2 months",
    keyMilestones: [
      "Business entity selection",
      "Business name registration",
      "Articles of incorporation/organization",
      "EIN acquisition",
      "Operating agreements",
      "Trademark/copyright filings",
      "Business licenses and permits",
      "Insurance setup",
    ],
    commonChallenges: [
      "Entity type selection",
      "Regulatory compliance",
      "Legal documentation",
      "Intellectual property protection",
    ],
    successMetrics: [
      "Legal entity established",
      "All required licenses obtained",
      "IP protection in place",
      "Compliance framework established",
    ],
    automationTriggers: [
      "Northwest Agent API - Business registration",
      "USPTO API - Trademark filing",
      "State licensing APIs",
    ],
  },

  // PHASE 4: FINANCIAL INFRASTRUCTURE
  {
    id: "financial-infrastructure",
    name: "Financial Infrastructure",
    description: "Setting up financial systems and securing initial funding",
    duration: "1-3 months",
    keyMilestones: [
      "Business bank account opening",
      "Business credit establishment",
      "Accounting system setup",
      "Payment processing setup",
      "Initial funding secured",
      "Financial controls implementation",
      "Tax planning and setup",
    ],
    commonChallenges: [
      "Credit establishment",
      "Funding acquisition",
      "Financial system selection",
      "Cash flow planning",
    ],
    successMetrics: [
      "Business banking operational",
      "Credit lines established",
      "Accounting systems functional",
      "Initial funding secured",
    ],
    automationTriggers: [
      "Banking APIs - Account opening",
      "QuickBooks API - Accounting setup",
      "Stripe/Square APIs - Payment processing",
    ],
  },

  // PHASE 5: PRODUCT/SERVICE DEVELOPMENT
  {
    id: "product-development",
    name: "Product/Service Development",
    description: "Building and refining the core offering",
    duration: "3-12 months",
    keyMilestones: [
      "MVP development",
      "Product testing and iteration",
      "Quality assurance processes",
      "Service delivery systems",
      "Pricing strategy finalization",
      "Product documentation",
      "Beta testing program",
    ],
    commonChallenges: [
      "Product-market fit",
      "Development timeline management",
      "Quality control",
      "Resource allocation",
    ],
    successMetrics: [
      "MVP completed and tested",
      "Product-market fit achieved",
      "Quality standards established",
      "Pricing strategy validated",
    ],
  },

  // PHASE 6: MARKET ENTRY & LAUNCH
  {
    id: "market-entry",
    name: "Market Entry & Launch",
    description: "Initial market entry and customer acquisition",
    duration: "3-6 months",
    keyMilestones: [
      "Brand identity development",
      "Website and digital presence",
      "Marketing strategy execution",
      "Sales process establishment",
      "Customer acquisition campaigns",
      "Public launch",
      "Initial customer feedback collection",
    ],
    commonChallenges: ["Brand recognition", "Customer acquisition cost", "Market penetration", "Competition response"],
    successMetrics: [
      "First paying customers acquired",
      "Brand awareness established",
      "Marketing channels validated",
      "Sales process optimized",
    ],
    automationTriggers: [
      "Google Analytics API - Website traffic",
      "CRM APIs - Customer acquisition",
      "Social media APIs - Brand mentions",
    ],
  },

  // PHASE 7: EARLY GROWTH
  {
    id: "early-growth",
    name: "Early Growth",
    description: "Scaling operations and expanding customer base",
    duration: "6-18 months",
    keyMilestones: [
      "Customer base expansion",
      "Revenue growth achievement",
      "Operational efficiency improvements",
      "Team building and hiring",
      "Process standardization",
      "Technology infrastructure scaling",
      "Market share growth",
    ],
    commonChallenges: ["Scaling operations", "Maintaining quality", "Cash flow management", "Team management"],
    successMetrics: [
      "Consistent revenue growth",
      "Customer retention rates",
      "Operational efficiency metrics",
      "Team productivity measures",
    ],
    automationTriggers: [
      "CRM APIs - Customer growth tracking",
      "Financial APIs - Revenue monitoring",
      "HR APIs - Team expansion tracking",
    ],
  },

  // PHASE 8: EXPANSION & SCALING
  {
    id: "expansion",
    name: "Expansion & Scaling",
    description: "Geographic, product, or market expansion",
    duration: "1-3 years",
    keyMilestones: [
      "Market expansion planning",
      "Product line diversification",
      "Geographic expansion",
      "Strategic partnerships",
      "Advanced technology adoption",
      "Organizational restructuring",
      "Advanced funding rounds",
    ],
    commonChallenges: [
      "Market expansion risks",
      "Resource allocation",
      "Organizational complexity",
      "Competition intensification",
    ],
    successMetrics: [
      "Multi-market presence",
      "Diversified revenue streams",
      "Scalable operations",
      "Strong market position",
    ],
  },

  // PHASE 9: MATURITY & OPTIMIZATION
  {
    id: "maturity",
    name: "Maturity & Optimization",
    description: "Optimizing operations and maintaining market position",
    duration: "2-5 years",
    keyMilestones: [
      "Market leadership establishment",
      "Operational excellence achievement",
      "Innovation and R&D investment",
      "Strategic acquisitions",
      "Advanced analytics implementation",
      "Sustainability initiatives",
      "Corporate governance strengthening",
    ],
    commonChallenges: ["Market saturation", "Innovation pressure", "Competitive threats", "Organizational inertia"],
    successMetrics: [
      "Market leadership position",
      "Consistent profitability",
      "Innovation pipeline",
      "Operational excellence",
    ],
  },

  // PHASE 10: TRANSFORMATION OR EXIT
  {
    id: "transformation-exit",
    name: "Transformation or Exit",
    description: "Business transformation, succession, or exit strategy",
    duration: "6 months - 2 years",
    keyMilestones: [
      "Strategic options evaluation",
      "Business valuation",
      "Exit strategy planning",
      "Succession planning",
      "Due diligence preparation",
      "Transaction execution",
      "Legacy planning",
    ],
    commonChallenges: [
      "Valuation optimization",
      "Buyer/successor identification",
      "Transition management",
      "Legacy preservation",
    ],
    successMetrics: ["Successful exit/transition", "Value maximization", "Smooth transition", "Legacy preservation"],
    automationTriggers: [
      "Valuation APIs - Business assessment",
      "M&A platforms - Deal tracking",
      "Legal APIs - Transaction management",
    ],
  },
]

// Cross-cutting lifecycle elements that span multiple phases
export const CROSS_CUTTING_ELEMENTS = {
  compliance: {
    ongoing: [
      "Tax compliance",
      "Regulatory reporting",
      "Employment law compliance",
      "Industry-specific regulations",
      "Data protection compliance",
    ],
  },

  financial_management: {
    ongoing: [
      "Cash flow management",
      "Financial reporting",
      "Budget planning and monitoring",
      "Investment decisions",
      "Risk management",
    ],
  },

  human_resources: {
    ongoing: [
      "Recruitment and hiring",
      "Employee development",
      "Performance management",
      "Compensation and benefits",
      "Culture development",
    ],
  },

  technology: {
    ongoing: [
      "Technology infrastructure",
      "Cybersecurity",
      "Data management",
      "Digital transformation",
      "Innovation adoption",
    ],
  },

  customer_relations: {
    ongoing: [
      "Customer service",
      "Customer feedback management",
      "Customer retention",
      "Customer experience optimization",
      "Community building",
    ],
  },
}
