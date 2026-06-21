export const PROFILE = {
  name: 'Hari',
  role: 'Product & Growth Analyst',
  photo: '/professional-portrait-of-a-man-in-a-dark-suit.jpg',
}

export const CALL_PROMISES = ['30-min call', 'No commitment', 'Clarity first']

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'What I Do', href: '/#what-i-do' },
  { label: 'Frameworks', href: '/frameworks' },
  { label: 'Audits', href: '/audits' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Proofs', href: '/proofs' },
  { label: 'About', href: '/about' },
]

/* ----------------------------- PROBLEMS I SOLVE ----------------------------- */
export const PROBLEMS = [
  {
    icon: 'TriangleAlert',
    title: 'Product Friction',
    description: 'I find usability gaps that create drops.',
  },
  {
    icon: 'TrendingUp',
    title: 'Growth Constraints',
    description: 'I uncover what is blocking consistent growth.',
  },
  {
    icon: 'Route',
    title: 'User Journey Gaps',
    description: 'I detect breakdowns in the user experience.',
  },
  {
    icon: 'Filter',
    title: 'Conversion Bottlenecks',
    description: 'I analyze and fix what is costing you conversions.',
  },
  {
    icon: 'EyeOff',
    title: 'Decision Blind Spots',
    description: 'I reveal hidden assumptions and risky gaps.',
  },
  {
    icon: 'Sparkles',
    title: 'Hidden Opportunities',
    description: 'I turn overlooked insights into real advantages.',
  },
]

export const CAPABILITY_BADGES = [
  'Analytical Mindset',
  'Problem Solver',
  'Growth Observer',
  'Outcome Focused',
]

/* ------------------------------- FRAMEWORKS -------------------------------- */
export type Framework = {
  slug: string
  name: string
  trademark: boolean
  icon: string
  description: string
  comingSoon?: boolean
  steps: { label: string; icon: string; description: string }[]
  howToUse: string[]
  exampleUseCase: string[]
  whyItWorks: string[]
  whenToUse: string[]
  quote: string
}

export const FRAMEWORKS: Framework[] = [
  {
    slug: 'hari-friction-map',
    name: 'Hari Friction Map',
    trademark: true,
    icon: 'Network',
    description: 'Find where users hesitate, delay, or leave.',
    steps: [
      { label: 'Expect', icon: 'Eye', description: 'Users have an expectation.' },
      { label: 'Experience', icon: 'MousePointer', description: 'They interact with your product.' },
      { label: 'Friction', icon: 'TriangleAlert', description: 'Something creates resistance.' },
      { label: 'Doubt', icon: 'HelpCircle', description: 'Confidence starts to drop.' },
      { label: 'Exit', icon: 'LogOut', description: 'They abandon or delay.' },
    ],
    howToUse: [
      'Map the user journey.',
      'Spot friction at each stage.',
      'Measure the impact.',
      'Prioritize the biggest leaks.',
      'Fix and re-test.',
    ],
    exampleUseCase: [
      'A user signs up for a product but does not complete onboarding.',
      'Friction Found: too many steps.',
      'Impact: 60% drop-off.',
      'Fix: simplified flow.',
      'Result: +32% activation.',
    ],
    whyItWorks: [
      'Users do not leave because of one big problem.',
      'They leave because small frictions create doubt.',
      'Simple to understand.',
      'Easy to apply.',
      'Powerful insights.',
      'Works across industries.',
    ],
    whenToUse: [
      'Low activation rates.',
      'High drop-offs.',
      'Confusing user flows.',
      'Declining engagement.',
    ],
    quote:
      'The goal is not to remove all friction. The goal is to remove the wrong friction.',
  },
  {
    slug: 'trust-velocity',
    name: 'Trust Velocity',
    trademark: true,
    icon: 'CircleDashed',
    description: 'Build trust that converts and retains.',
    steps: [
      { label: 'Signal', icon: 'Eye', description: 'A trust signal is presented.' },
      { label: 'Belief', icon: 'MousePointer', description: 'The user starts to believe.' },
      { label: 'Commit', icon: 'CheckCircle', description: 'They commit to the next step.' },
    ],
    howToUse: [
      'Identify trust drop points.',
      'Measure time-to-trust.',
      'Add the right signals.',
      'Remove credibility leaks.',
    ],
    exampleUseCase: [
      'Users hesitate before paying.',
      'Trust Gap: unclear what data is private.',
      'Fix: visible proof and guarantees.',
      'Result: faster conversion.',
    ],
    whyItWorks: [
      'Trust is built by design, not by accident.',
      'Velocity matters as much as volume.',
    ],
    whenToUse: ['Low conversion', 'High hesitation', 'Pricing friction'],
    quote: 'Trust is not built by design. It is built by reducing risk.',
  },
  {
    slug: 'opportunity-leak',
    name: 'Opportunity Leak',
    trademark: true,
    icon: 'Filter',
    description: 'Find hidden leaks across the growth funnel.',
    steps: [
      { label: 'Funnel', icon: 'Filter', description: 'Map the full funnel.' },
      { label: 'Leak', icon: 'TriangleAlert', description: 'Find the leak points.' },
      { label: 'Recover', icon: 'TrendingUp', description: 'Recover the lost value.' },
    ],
    howToUse: ['Map the funnel.', 'Find leak points.', 'Quantify lost value.', 'Plug the leaks.'],
    exampleUseCase: ['Hidden leaks between activation and retention.', 'Result: recovered revenue.'],
    whyItWorks: ['Most growth is lost in places teams never look.'],
    whenToUse: ['Plateaued growth', 'Leaky funnels', 'Unclear drop-offs'],
    quote: 'You cannot fix the leaks you never measure.',
  },
  {
    slug: 'growth-flywheel',
    name: 'Growth Flywheel',
    trademark: true,
    icon: 'RefreshCw',
    description: 'Build systems that drive compounding growth.',
    steps: [
      { label: 'Attract', icon: 'Eye', description: 'Bring the right users in.' },
      { label: 'Activate', icon: 'MousePointer', description: 'Get them to first value.' },
      { label: 'Compound', icon: 'RefreshCw', description: 'Turn value into momentum.' },
    ],
    howToUse: ['Define the loop.', 'Remove drag.', 'Add momentum.', 'Compound it.'],
    exampleUseCase: ['A referral loop that compounds activation.'],
    whyItWorks: ['Compounding beats linear growth every time.'],
    whenToUse: ['Scaling stage', 'Retention focus', 'Loop building'],
    quote: 'Momentum is a system, not a moment.',
  },
  {
    slug: 'activation-clarity',
    name: 'Activation Clarity',
    trademark: true,
    icon: 'Workflow',
    description: 'Remove confusion and guide users to their first win.',
    steps: [
      { label: 'Enter', icon: 'Eye', description: 'User enters the product.' },
      { label: 'Guide', icon: 'Route', description: 'Guide to one clear action.' },
      { label: 'Win', icon: 'CheckCircle', description: 'They reach first value.' },
    ],
    howToUse: ['Find the core action.', 'Remove choices.', 'Guide to value.'],
    exampleUseCase: ['Reduce onboarding to one core action.', 'Result: +40% activation.'],
    whyItWorks: ['Clarity beats completeness in onboarding.'],
    whenToUse: ['Onboarding issues', 'Low activation', 'Feature overload'],
    quote: 'Show value before asking for commitment.',
  },
]

export const FUTURE_FRAMEWORK = {
  name: 'Future Framework',
  description: 'Coming soon.',
  icon: 'Plus',
}

export const FRAMEWORK_HELP_STEPS = [
  { label: 'Understand', icon: 'Eye', description: 'See the real situation clearly.' },
  { label: 'Analyze', icon: 'Search', description: 'Find problems that matter.' },
  { label: 'Prioritize', icon: 'ListOrdered', description: 'Focus on what creates impact.' },
  { label: 'Solve', icon: 'Wrench', description: 'Design the right solution.' },
  { label: 'Improve', icon: 'TrendingUp', description: 'Drive measurable growth.' },
]

/* --------------------------------- AUDITS ---------------------------------- */
export type Audit = {
  slug: string
  name: string
  company: string
  category: string
  icon: string
  frictionPoints: number
  highlights: string[]
  activationBlockers: number
  trustLeaks: number
  impactScore: string
  intro: string
}

export const AUDIT_CATEGORIES = [
  'All Audits',
  'Productivity',
  'Education',
  'SaaS',
  'Fintech',
  'Marketplaces',
]

export const AUDITS: Audit[] = [
  {
    slug: 'notion-audit',
    name: 'Notion Audit',
    company: 'Notion',
    category: 'Productivity',
    icon: 'FileText',
    frictionPoints: 7,
    activationBlockers: 3,
    trustLeaks: 2,
    impactScore: 'High',
    highlights: ['7 Friction Points Found', '3 Activation Blockers', '2 Trust Leaks'],
    intro: 'In-depth analysis of Notion onboarding, activation flow and core experience.',
  },
  {
    slug: 'duolingo-audit',
    name: 'Duolingo Audit',
    company: 'Duolingo',
    category: 'Education',
    icon: 'GraduationCap',
    frictionPoints: 6,
    activationBlockers: 2,
    trustLeaks: 0,
    impactScore: 'Medium',
    highlights: ['6 Friction Points Found', '2 Retention Issues', '3 Growth Opportunities'],
    intro: 'A look at how Duolingo drives habit, retention and engagement loops.',
  },
  {
    slug: 'loom-audit',
    name: 'Loom Audit',
    company: 'Loom',
    category: 'SaaS',
    icon: 'Video',
    frictionPoints: 5,
    activationBlockers: 2,
    trustLeaks: 1,
    impactScore: 'Medium',
    highlights: ['5 Friction Points Found', '2 Onboarding Issues', '2 Conversion Leaks'],
    intro: 'Reviewing Loom activation and the path from first record to habit.',
  },
  {
    slug: 'linear-audit',
    name: 'Linear Audit',
    company: 'Linear',
    category: 'Productivity',
    icon: 'Activity',
    frictionPoints: 4,
    activationBlockers: 1,
    trustLeaks: 0,
    impactScore: 'Low',
    highlights: ['4 Friction Points Found', '1 Retention Issue', '3 Growth Opportunities'],
    intro: 'How Linear keeps friction low while scaling a focused product.',
  },
  {
    slug: 'dropbox-audit',
    name: 'Dropbox Audit',
    company: 'Dropbox',
    category: 'SaaS',
    icon: 'Cloud',
    frictionPoints: 5,
    activationBlockers: 2,
    trustLeaks: 2,
    impactScore: 'Medium',
    highlights: ['5 Friction Points Found', '2 Activation Blockers', '2 Trust Leaks'],
    intro: 'Examining Dropbox onboarding and the cost of early complexity.',
  },
]

export const AUDIT_FINDINGS = [
  {
    rank: '01',
    title: 'Too Many Choices',
    impact: 'High Impact',
    score: '9 / 10',
    category: 'Activation',
    description: 'New users face too many options on the home screen with no clear guidance.',
  },
  {
    rank: '02',
    title: 'Unclear Starting Point',
    impact: 'High Impact',
    score: '8 / 10',
    category: 'Onboarding',
    description: 'There is no obvious first action, leaving new users uncertain where to begin.',
  },
  {
    rank: '03',
    title: 'Hidden Key Actions',
    impact: 'Medium Impact',
    score: '6 / 10',
    category: 'Navigation',
    description: 'Important actions are buried below the fold and hard to discover.',
  },
]

export const AUDIT_IMPACT_BLOCKS = [
  { icon: 'UserMinus', title: 'Low Activation', description: 'Many users do not complete first win.' },
  { icon: 'Layers', title: 'High Complexity', description: 'Too many choices upfront.' },
  { icon: 'ShieldOff', title: 'Trust Gaps', description: 'Unclear what data is private.' },
  { icon: 'TrendingDown', title: 'Growth Lost', description: 'Users do not reach the "aha" moment.' },
]

/* ------------------------------ CASE STUDIES ------------------------------- */
export type CaseStudy = {
  slug: string
  title: string
  category: string
  tags: string[]
  summary: string
  keyFindings: number
  impact: 'High Impact' | 'Medium Impact' | 'Low Impact'
  problem: string
  impactPoints: string[]
  glance: { label: string; value: string; icon: string }[]
  journey: string[]
  dropOff: string
  recommendations: string[]
}

export const CASE_CATEGORIES = [
  'All',
  'Onboarding',
  'Conversion',
  'Pricing',
  'Retention',
  'Strategy',
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'blank-slate-product-problem',
    title: 'The Blank-Slate Product Problem',
    category: 'Onboarding',
    tags: ['High Impact', 'Strategic'],
    summary: 'Why powerful products overwhelm new users.',
    keyFindings: 5,
    impact: 'High Impact',
    problem:
      'New users see too many options, too many paths, and no clear starting point. This creates hesitation and early drop-offs.',
    impactPoints: [
      'High activation friction.',
      'Lower feature adoption.',
      'Users do not reach the "aha" moment.',
      'Higher churn in first 7 days.',
    ],
    glance: [
      { label: 'Users Analyzed', value: '1000+', icon: 'Users' },
      { label: 'Pages Reviewed', value: '25+', icon: 'FileText' },
      { label: 'Time Spent', value: '20+ hrs', icon: 'Clock' },
      { label: 'Industry', value: 'SaaS / B2B', icon: 'Building2' },
    ],
    journey: ['Sign Up', 'Onboarding Confusion', 'Feature Overload', 'Drop-off'],
    dropOff: '68%',
    recommendations: [
      'Simplify onboarding to 1 core action.',
      'Remove non-essential steps.',
      'Show value before asking for commitment.',
    ],
  },
  {
    slug: 'pricing-page-psychology',
    title: 'Pricing Page Psychology',
    category: 'Pricing',
    tags: ['High Impact'],
    summary: 'Why users hesitate before paying.',
    keyFindings: 4,
    impact: 'High Impact',
    problem:
      'Pricing pages overload users with options and unclear value, creating doubt at the moment of decision.',
    impactPoints: ['Lower conversion.', 'Higher hesitation.', 'More support tickets.'],
    glance: [
      { label: 'Pages Reviewed', value: '15+', icon: 'FileText' },
      { label: 'Plans Compared', value: '30+', icon: 'Layers' },
      { label: 'Time Spent', value: '12+ hrs', icon: 'Clock' },
      { label: 'Industry', value: 'SaaS', icon: 'Building2' },
    ],
    journey: ['Visit Pricing', 'Compare Plans', 'Hesitation', 'Exit'],
    dropOff: '54%',
    recommendations: ['Reduce plan options.', 'Anchor the recommended plan.', 'Show proof near price.'],
  },
  {
    slug: 'onboarding-that-actually-works',
    title: 'Onboarding That Actually Works',
    category: 'Onboarding',
    tags: ['High Impact'],
    summary: 'What separates sticky products from others.',
    keyFindings: 6,
    impact: 'High Impact',
    problem: 'Most onboarding teaches features instead of guiding users to a first win.',
    impactPoints: ['Faster time-to-value.', 'Higher activation.', 'Better retention.'],
    glance: [
      { label: 'Products Reviewed', value: '40+', icon: 'FileText' },
      { label: 'Flows Mapped', value: '60+', icon: 'Route' },
      { label: 'Time Spent', value: '30+ hrs', icon: 'Clock' },
      { label: 'Industry', value: 'B2B / B2C', icon: 'Building2' },
    ],
    journey: ['Sign Up', 'Guided Setup', 'First Win', 'Habit'],
    dropOff: '32%',
    recommendations: ['Guide to one clear win.', 'Defer advanced features.', 'Celebrate first value.'],
  },
]

/* --------------------------------- PROOFS ---------------------------------- */
export type Proof = {
  slug: string
  quote: string
  category: string
  whyItsTrue: string[]
  commonPatterns: string[]
  examples: { name: string; note: string; icon: string }[]
  whatToDo: string[]
  potentialImpact: string[]
}

export const PROOF_CATEGORIES = [
  'All',
  'Onboarding',
  'Conversion',
  'Trust',
  'Retention',
  'Product Strategy',
]

export const PROOFS: Proof[] = [
  {
    slug: 'onboarding-trust-problems',
    quote: 'Most onboarding problems are trust problems in disguise.',
    category: 'Onboarding',
    whyItsTrue: [
      'New users do not know if they are in the right place.',
      'They do not trust the product yet.',
      'So they hesitate.',
    ],
    commonPatterns: [
      'Too many steps before value.',
      'Unclear next action.',
      'No quick win.',
      'Asking for commitment too early.',
    ],
    examples: [
      { name: 'Notion', note: 'Too many options before first win.', icon: 'FileText' },
      { name: 'Duolingo', note: 'Too many paths at the start.', icon: 'GraduationCap' },
      { name: 'Loom', note: 'Unclear purpose upfront.', icon: 'Video' },
    ],
    whatToDo: [
      'Build a 1-step entry.',
      'Show immediate value.',
      'Ask for commitment later.',
      'Remove unnecessary choices.',
    ],
    potentialImpact: ['+40% Activation Rate', '+25% 7-day Retention', 'Lower Early Churn'],
  },
  {
    slug: 'users-leave-from-accumulation',
    quote:
      'Users do not leave because of one problem. They leave because uncertainty accumulates.',
    category: 'Retention',
    whyItsTrue: [
      'Small frictions add up.',
      'Each one chips away at confidence.',
      'Eventually doubt wins.',
    ],
    commonPatterns: ['Repeated small frictions.', 'Slow load points.', 'Confusing copy.'],
    examples: [{ name: 'Linear', note: 'Keeps friction low to retain.', icon: 'Activity' }],
    whatToDo: ['Reduce small frictions.', 'Smooth the journey.', 'Measure cumulative drop-off.'],
    potentialImpact: ['Higher retention', 'Lower churn'],
  },
  {
    slug: 'people-buy-progress',
    quote: 'People buy progress, not features. Show the win early.',
    category: 'Conversion',
    whyItsTrue: ['Users care about outcomes.', 'Features are a means, not the goal.'],
    commonPatterns: ['Feature-led messaging.', 'Hidden value.', 'Delayed payoff.'],
    examples: [{ name: 'Loom', note: 'Shows the win fast.', icon: 'Video' }],
    whatToDo: ['Lead with the outcome.', 'Show the win early.', 'Make progress visible.'],
    potentialImpact: ['Higher conversion', 'Faster decisions'],
  },
  {
    slug: 'complexity-is-the-enemy',
    quote: 'Complexity is the enemy of activation and retention.',
    category: 'Product Strategy',
    whyItsTrue: ['Every choice adds load.', 'Load creates hesitation.'],
    commonPatterns: ['Too many features upfront.', 'Dense interfaces.'],
    examples: [{ name: 'Notion', note: 'Powerful but complex for new users.', icon: 'FileText' }],
    whatToDo: ['Reduce upfront complexity.', 'Reveal depth over time.'],
    potentialImpact: ['Higher activation', 'Better retention'],
  },
  {
    slug: 'good-products-solve-problems',
    quote: 'Good products solve problems. Great products remove friction.',
    category: 'Product Strategy',
    whyItsTrue: ['Solving the problem is table stakes.', 'Friction decides who stays.'],
    commonPatterns: ['Functional but clunky flows.'],
    examples: [{ name: 'Linear', note: 'Removes friction by design.', icon: 'Activity' }],
    whatToDo: ['Map friction.', 'Remove the wrong friction.'],
    potentialImpact: ['Higher satisfaction', 'Stronger retention'],
  },
  {
    slug: 'ten-second-rule',
    quote:
      'If users do not understand the value in 10 seconds, they will not invest 10 minutes.',
    category: 'Conversion',
    whyItsTrue: ['Attention is scarce.', 'First impressions decide.'],
    commonPatterns: ['Slow value reveal.', 'Vague headlines.'],
    examples: [{ name: 'Loom', note: 'Clear value in seconds.', icon: 'Video' }],
    whatToDo: ['Clarify the value fast.', 'Lead with the outcome.'],
    potentialImpact: ['Higher engagement', 'Lower bounce'],
  },
]

/* --------------------------------- ABOUT ----------------------------------- */
export const APPROACH = [
  { icon: 'Eye', title: 'Observe', description: 'I look beyond the surface.' },
  { icon: 'Search', title: 'Analyze', description: 'I find the real patterns.' },
  { icon: 'Stethoscope', title: 'Diagnose', description: 'I identify the root friction.' },
  { icon: 'Lightbulb', title: 'Recommend', description: 'I suggest what actually works.' },
  { icon: 'Target', title: 'Measure', description: 'I focus on outcomes, not activity.' },
]

export const ABOUT_BADGES = [
  'Analytical Mindset',
  'Problem Solver',
  'Growth Observer',
  'Outcome Focused',
]

export const NUMBERS = [
  { value: '100+', label: 'Products Analyzed' },
  { value: '50+', label: 'Audits Completed' },
  { value: '20+', label: 'Frameworks Built' },
  { value: '4+', label: 'Years Learning' },
]

export const WHO_I_WORK_WITH = [
  'Founders',
  'Product Teams',
  'Growth Teams',
  'Startups',
  'SaaS Companies',
  'Digital Products',
]

/* -------------------------------- CONTACT ---------------------------------- */
export const CALL_BENEFITS = [
  { icon: 'Search', title: 'Deep Product Audit' },
  { icon: 'TrendingUp', title: 'Growth Opportunities' },
  { icon: 'Map', title: 'Actionable Roadmap' },
  { icon: 'Lightbulb', title: 'Expert Insights' },
]

export const TIME_SLOTS = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']
