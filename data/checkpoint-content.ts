export interface CheckpointContent {
  id: string
  instructions: {
    overview: string
    steps: string[]
    timeEstimate: string
    difficulty: "Beginner" | "Intermediate" | "Advanced"
    prerequisites?: string[]
  }
  resources: {
    videos: Array<{
      title: string
      duration: string
      type: "ASL" | "Captioned" | "Both"
      url?: string
      description: string
    }>
    templates: Array<{
      name: string
      type: string
      description: string
      downloadUrl?: string
    }>
    tools: Array<{
      name: string
      category: string
      description: string
      url?: string
      cost: "Free" | "Paid" | "Freemium"
    }>
    articles: Array<{
      title: string
      source: string
      readTime: string
      url?: string
    }>
  }
  successCriteria: string[]
  commonPitfalls: string[]
  aiPrompts: string[]
  mentorQuestions: string[]
  deliverables: string[]
}

export const CHECKPOINT_CONTENT: Record<string, CheckpointContent> = {
  "problem-identification": {
    id: "problem-identification",
    instructions: {
      overview:
        "Identify a real problem that affects a significant number of people and that you're passionate about solving. This is the foundation of your entire business.",
      steps: [
        "Reflect on your personal experiences and frustrations",
        "Observe problems in your community, especially within the deaf community",
        "Research industry pain points and gaps",
        "Talk to potential customers about their biggest challenges",
        "Validate that the problem is widespread and urgent",
        "Ensure the problem aligns with your skills and interests",
        "Document the problem clearly and specifically",
      ],
      timeEstimate: "2-4 weeks",
      difficulty: "Beginner",
    },
    resources: {
      videos: [
        {
          title: "How to Identify Business Problems in ASL",
          duration: "15 min",
          type: "ASL",
          description:
            "Step-by-step guide to finding real problems worth solving, with examples from successful deaf entrepreneurs",
        },
        {
          title: "Problem Validation Techniques",
          duration: "20 min",
          type: "Both",
          description: "Learn how to validate that your identified problem is real and worth solving",
        },
      ],
      templates: [
        {
          name: "Problem Statement Canvas",
          type: "PDF Worksheet",
          description: "Structured template to clearly define and validate your problem statement",
        },
        {
          name: "Customer Interview Script",
          type: "Word Document",
          description: "Ready-to-use script for conducting problem validation interviews",
        },
      ],
      tools: [
        {
          name: "SurveyMonkey",
          category: "Survey Tool",
          description: "Create surveys to validate problems with potential customers",
          cost: "Freemium",
        },
        {
          name: "Typeform",
          category: "Survey Tool",
          description: "User-friendly survey creation with accessibility features",
          cost: "Freemium",
        },
      ],
      articles: [
        {
          title: "The Mom Test: How to Talk to Customers",
          source: "Rob Fitzpatrick",
          readTime: "30 min",
        },
      ],
    },
    successCriteria: [
      "Clear, specific problem statement written",
      "Evidence that problem affects 100+ potential customers",
      "Personal connection or expertise related to the problem",
      "Problem is urgent and painful for target audience",
    ],
    commonPitfalls: [
      "Choosing a problem you don't personally understand",
      "Assuming a problem exists without validation",
      "Picking a problem that's too broad or vague",
      "Ignoring the deaf community's unique perspectives and needs",
    ],
    aiPrompts: [
      "Help me refine this problem statement to be more specific and actionable",
      "What questions should I ask to validate this problem with potential customers?",
      "How can I research if this problem is widespread in the deaf community?",
    ],
    mentorQuestions: [
      "What personal experience led you to identify this problem?",
      "How does this problem specifically affect the deaf community?",
      "What evidence do you have that people would pay to solve this?",
    ],
    deliverables: [
      "One-page problem statement document",
      "List of 10+ people who confirmed they have this problem",
      "Summary of research findings",
    ],
  },

  "business-registration": {
    id: "business-registration",
    instructions: {
      overview:
        "Officially register your business entity and obtain your Employer Identification Number (EIN). This establishes your business as a legal entity separate from your personal finances.",
      steps: [
        "Choose your business name and check availability",
        "Select your business structure (LLC, Corporation, etc.)",
        "Register with your state's Secretary of State office",
        "Obtain your Articles of Incorporation/Organization",
        "Apply for your EIN with the IRS",
        "Register for state and local taxes",
        "Open your business bank account",
        "Set up business credit monitoring",
      ],
      timeEstimate: "2-3 weeks",
      difficulty: "Intermediate",
      prerequisites: ["Business structure decision completed"],
    },
    resources: {
      videos: [
        {
          title: "Business Registration Process in ASL",
          duration: "25 min",
          type: "ASL",
          description: "Complete walkthrough of business registration process with deaf entrepreneur examples",
        },
        {
          title: "EIN Application Step-by-Step",
          duration: "12 min",
          type: "Both",
          description: "Screen recording showing exactly how to apply for your EIN online",
        },
        {
          title: "Choosing Business Bank Accounts",
          duration: "18 min",
          type: "Both",
          description: "How to select the right business banking partner and account types",
        },
      ],
      templates: [
        {
          name: "Business Registration Checklist",
          type: "PDF Checklist",
          description: "Step-by-step checklist to ensure you complete all registration requirements",
        },
        {
          name: "EIN Application Form SS-4",
          type: "PDF Form",
          description: "Pre-filled template for EIN application with guidance notes",
        },
        {
          name: "Business Bank Account Comparison Sheet",
          type: "Excel Spreadsheet",
          description: "Compare features and fees of different business banking options",
        },
      ],
      tools: [
        {
          name: "Northwest Registered Agent",
          category: "Business Formation",
          description: "Professional business registration service with deaf-friendly support",
          cost: "Paid",
        },
        {
          name: "IRS EIN Online Application",
          category: "Government Service",
          description: "Official IRS website for EIN applications",
          cost: "Free",
        },
        {
          name: "LegalZoom",
          category: "Legal Services",
          description: "Business formation services with customer support",
          cost: "Paid",
        },
      ],
      articles: [
        {
          title: "LLC vs Corporation: Which is Right for You?",
          source: "SBA.gov",
          readTime: "15 min",
        },
        {
          title: "State-by-State Business Registration Guide",
          source: "Nolo.com",
          readTime: "20 min",
        },
      ],
    },
    successCriteria: [
      "Business entity officially registered with state",
      "EIN obtained from IRS",
      "Articles of Incorporation/Organization received",
      "Business bank account opened",
      "State tax registration completed",
    ],
    commonPitfalls: [
      "Choosing wrong business structure for your situation",
      "Not checking business name availability thoroughly",
      "Mixing personal and business finances before registration",
      "Forgetting to register for state and local taxes",
    ],
    aiPrompts: [
      "Review my business registration documents for completeness",
      "What business structure is best for my type of business?",
      "Help me understand the tax implications of my chosen business structure",
    ],
    mentorQuestions: [
      "Why did you choose this particular business structure?",
      "How will you maintain separation between personal and business finances?",
      "What's your plan for building business credit?",
    ],
    deliverables: [
      "Certificate of Formation/Articles of Incorporation",
      "EIN Confirmation Letter",
      "Business bank account statements",
      "State tax registration confirmation",
    ],
  },

  "mvp-development": {
    id: "mvp-development",
    instructions: {
      overview:
        "Build the simplest version of your product that solves the core problem for your customers. Focus on essential features only and get it to market quickly for feedback.",
      steps: [
        "Define the core problem your MVP will solve",
        "List all possible features and prioritize ruthlessly",
        "Choose your development approach (no-code, low-code, or custom)",
        "Create wireframes or mockups of your solution",
        "Build the minimum feature set required",
        "Test internally with your team",
        "Conduct user testing with 5-10 potential customers",
        "Iterate based on feedback before broader launch",
      ],
      timeEstimate: "6-12 weeks",
      difficulty: "Advanced",
      prerequisites: ["Problem validation completed", "Business registration completed"],
    },
    resources: {
      videos: [
        {
          title: "MVP Development for Deaf Entrepreneurs",
          duration: "35 min",
          type: "ASL",
          description:
            "How to build your first product with limited resources, featuring successful deaf business owners",
        },
        {
          title: "No-Code MVP Development",
          duration: "28 min",
          type: "Both",
          description: "Build your MVP without coding using tools like Bubble, Webflow, and Airtable",
        },
        {
          title: "User Testing Your MVP",
          duration: "22 min",
          type: "Both",
          description: "How to conduct effective user testing sessions and gather actionable feedback",
        },
      ],
      templates: [
        {
          name: "MVP Feature Prioritization Matrix",
          type: "Excel Spreadsheet",
          description: "Framework to prioritize features based on impact and effort",
        },
        {
          name: "User Testing Script Template",
          type: "Word Document",
          description: "Ready-to-use script for conducting MVP user testing sessions",
        },
        {
          name: "MVP Development Timeline",
          type: "Project Plan",
          description: "Gantt chart template for planning your MVP development",
        },
      ],
      tools: [
        {
          name: "Figma",
          category: "Design Tool",
          description: "Create wireframes and prototypes for your MVP",
          cost: "Freemium",
        },
        {
          name: "Bubble",
          category: "No-Code Platform",
          description: "Build web applications without coding",
          cost: "Freemium",
        },
        {
          name: "Airtable",
          category: "Database Tool",
          description: "Create databases and workflows for your MVP",
          cost: "Freemium",
        },
        {
          name: "Calendly",
          category: "Scheduling Tool",
          description: "Schedule user testing sessions easily",
          cost: "Freemium",
        },
      ],
      articles: [
        {
          title: "The Lean Startup Methodology",
          source: "Eric Ries",
          readTime: "45 min",
        },
        {
          title: "How to Build an MVP in 30 Days",
          source: "First Round Review",
          readTime: "25 min",
        },
      ],
    },
    successCriteria: [
      "Working MVP that solves the core problem",
      "Positive feedback from at least 5 user testing sessions",
      "Clear metrics showing user engagement",
      "Documented learnings and iteration plan",
    ],
    commonPitfalls: [
      "Building too many features in the first version",
      "Perfectionism preventing launch",
      "Not testing with real users early enough",
      "Ignoring accessibility requirements for deaf users",
    ],
    aiPrompts: [
      "Help me prioritize these features for my MVP",
      "Review my user testing feedback and suggest improvements",
      "What accessibility features should I include for deaf users?",
    ],
    mentorQuestions: [
      "What's the one core problem your MVP solves?",
      "How will you measure if your MVP is successful?",
      "What did you learn from your user testing sessions?",
    ],
    deliverables: [
      "Working MVP (web app, mobile app, or service)",
      "User testing report with feedback summary",
      "Feature roadmap for next iterations",
      "MVP performance metrics dashboard",
    ],
  },

  "first-customers": {
    id: "first-customers",
    instructions: {
      overview:
        "Acquire your first paying customers to validate your business model and generate initial revenue. Focus on providing exceptional service to build testimonials and referrals.",
      steps: [
        "Identify your ideal first customers",
        "Create a compelling value proposition",
        "Develop your sales process and materials",
        "Reach out to your network and warm contacts",
        "Offer special launch pricing or incentives",
        "Provide white-glove service to early customers",
        "Collect detailed feedback and testimonials",
        "Ask for referrals and case studies",
      ],
      timeEstimate: "4-8 weeks",
      difficulty: "Intermediate",
      prerequisites: ["MVP completed", "Pricing strategy defined"],
    },
    resources: {
      videos: [
        {
          title: "Sales for Deaf Entrepreneurs",
          duration: "30 min",
          type: "ASL",
          description:
            "How to sell effectively as a deaf entrepreneur, including communication strategies and building trust",
        },
        {
          title: "Creating Your Sales Pitch",
          duration: "18 min",
          type: "Both",
          description: "Craft a compelling sales presentation that resonates with your target customers",
        },
        {
          title: "Customer Success Best Practices",
          duration: "25 min",
          type: "Both",
          description: "How to provide exceptional service to your first customers",
        },
      ],
      templates: [
        {
          name: "Customer Outreach Email Templates",
          type: "Word Document",
          description: "Proven email templates for reaching out to potential first customers",
        },
        {
          name: "Sales Pitch Deck Template",
          type: "PowerPoint",
          description: "Professional presentation template for customer meetings",
        },
        {
          name: "Customer Feedback Survey",
          type: "Google Form",
          description: "Structured survey to collect feedback from early customers",
        },
        {
          name: "Testimonial Request Template",
          type: "Email Template",
          description: "Professional template for requesting customer testimonials",
        },
      ],
      tools: [
        {
          name: "HubSpot CRM",
          category: "Customer Management",
          description: "Free CRM to track your sales pipeline and customer interactions",
          cost: "Freemium",
        },
        {
          name: "Calendly",
          category: "Scheduling",
          description: "Easy scheduling for customer meetings and demos",
          cost: "Freemium",
        },
        {
          name: "Loom",
          category: "Video Communication",
          description: "Create personalized video messages for prospects",
          cost: "Freemium",
        },
        {
          name: "Stripe",
          category: "Payment Processing",
          description: "Accept payments from your first customers",
          cost: "Paid",
        },
      ],
      articles: [
        {
          title: "How to Get Your First 10 Customers",
          source: "Y Combinator",
          readTime: "20 min",
        },
        {
          title: "The Art of the Cold Email",
          source: "First Round Review",
          readTime: "15 min",
        },
      ],
    },
    successCriteria: [
      "At least 3 paying customers acquired",
      "Positive customer testimonials collected",
      "Clear understanding of customer acquisition cost",
      "Documented sales process that can be repeated",
    ],
    commonPitfalls: [
      "Underpricing to get first customers",
      "Not following up consistently with prospects",
      "Overpromising and underdelivering to early customers",
      "Not collecting feedback and testimonials",
    ],
    aiPrompts: [
      "Help me craft a compelling outreach message for potential customers",
      "Review my sales pitch and suggest improvements",
      "What questions should I ask my first customers for feedback?",
    ],
    mentorQuestions: [
      "Who are your ideal first customers and why?",
      "What's your strategy for providing exceptional service?",
      "How will you use early customer feedback to improve?",
    ],
    deliverables: [
      "List of first paying customers with contact information",
      "Customer testimonials and case studies",
      "Sales process documentation",
      "Customer feedback analysis report",
    ],
  },

  "team-building": {
    id: "team-building",
    instructions: {
      overview:
        "Build a strong team to support your business growth. Focus on hiring people who complement your skills and share your vision, with special attention to creating an inclusive environment.",
      steps: [
        "Assess your current skills and identify gaps",
        "Define roles and responsibilities needed",
        "Create job descriptions and compensation plans",
        "Develop your hiring process and interview questions",
        "Post jobs on relevant platforms and networks",
        "Screen candidates and conduct interviews",
        "Check references and make offers",
        "Onboard new team members effectively",
      ],
      timeEstimate: "6-12 weeks per hire",
      difficulty: "Advanced",
      prerequisites: ["Revenue generation", "Legal foundation completed"],
    },
    resources: {
      videos: [
        {
          title: "Building Inclusive Teams in ASL",
          duration: "40 min",
          type: "ASL",
          description: "How to build diverse, inclusive teams that support deaf employees and customers",
        },
        {
          title: "Hiring Your First Employee",
          duration: "32 min",
          type: "Both",
          description: "Complete guide to hiring, from job posting to onboarding",
        },
        {
          title: "Remote Team Management",
          duration: "28 min",
          type: "Both",
          description: "Best practices for managing remote and distributed teams",
        },
      ],
      templates: [
        {
          name: "Job Description Templates",
          type: "Word Document",
          description: "Professional job description templates for common startup roles",
        },
        {
          name: "Interview Question Bank",
          type: "Excel Spreadsheet",
          description: "Comprehensive list of interview questions by role and skill level",
        },
        {
          name: "Employee Handbook Template",
          type: "PDF Document",
          description: "Complete employee handbook template including accessibility policies",
        },
        {
          name: "Onboarding Checklist",
          type: "PDF Checklist",
          description: "30-60-90 day onboarding plan for new hires",
        },
      ],
      tools: [
        {
          name: "Indeed",
          category: "Job Board",
          description: "Post jobs and find qualified candidates",
          cost: "Paid",
        },
        {
          name: "LinkedIn Recruiter",
          category: "Recruiting Platform",
          description: "Find and reach out to potential candidates",
          cost: "Paid",
        },
        {
          name: "BambooHR",
          category: "HR Management",
          description: "Manage employee records and HR processes",
          cost: "Paid",
        },
        {
          name: "Slack",
          category: "Team Communication",
          description: "Team communication with accessibility features",
          cost: "Freemium",
        },
      ],
      articles: [
        {
          title: "The Complete Guide to Hiring",
          source: "Harvard Business Review",
          readTime: "35 min",
        },
        {
          title: "Building Inclusive Workplaces",
          source: "Deloitte Insights",
          readTime: "25 min",
        },
      ],
    },
    successCriteria: [
      "Key roles filled with qualified candidates",
      "Clear job descriptions and compensation structure",
      "Effective onboarding process implemented",
      "Team communication and collaboration systems in place",
    ],
    commonPitfalls: [
      "Hiring too quickly without proper vetting",
      "Not defining roles and expectations clearly",
      "Ignoring cultural fit and team dynamics",
      "Failing to create accessible work environment",
    ],
    aiPrompts: [
      "Help me write a job description for this role",
      "What interview questions should I ask for this position?",
      "How can I make my workplace more accessible for deaf employees?",
    ],
    mentorQuestions: [
      "What skills are most critical for your next hire?",
      "How will you ensure your team is inclusive and accessible?",
      "What's your plan for retaining top talent?",
    ],
    deliverables: [
      "Organizational chart with defined roles",
      "Completed job descriptions for all positions",
      "Employee handbook with accessibility policies",
      "Team communication and collaboration guidelines",
    ],
  },
}
