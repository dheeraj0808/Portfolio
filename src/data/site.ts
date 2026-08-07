export const site = {
  name: "Dheeraj Singh",
  handle: "dheeraj0808",
  npmHandle: "dheeraj08",
  title: "Backend-Focused Software Engineer",
  company: "Epic Web Service",
  email: "dheerajsingh1939@gmail.com",
  location: "Zirakpur, Punjab",
  github: "https://github.com/dheeraj0808",
  npm: "https://www.npmjs.com/~dheeraj08",
  hireable: true,
  tagline:
    "I design production NestJS backends, auth/payments systems, and India-focused open-source NPM packages — while exploring mobile and system design.",
  about: [
    "Software Engineer L-1 at Epic Web Service (Zirakpur). I shipped the Wenuru studio management platform backend — NestJS, TypeScript, Sequelize, 4-tier RBAC, Razorpay, and push notifications — serving 10+ studios.",
    "B.Tech (IT) from Chandigarh Engineering College, Landran (CGPA 8.1). I also publish zero-dependency NPM packages for India-specific developer use cases, and explore Expo on the side.",
  ],
  skills: {
    Backend: [
      "NestJS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "RBAC",
      "DTO validation",
    ],
    Data: ["Sequelize", "MySQL / SQL", "MongoDB", "Query optimization"],
    Payments: ["Razorpay", "Webhooks", "Signature verification"],
    Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS"],
    OpenSource: ["NPM (dheeraj08)", "MIT packages", "Semantic versioning"],
    Exploring: ["Expo / React Native", "System design", "DSA"],
  },
  experience: [
    {
      company: "Epic Web Service",
      employmentType: "Full-time · On-site",
      location: "Zirakpur, Punjab",
      period: "Jun 2025 — Present",
      tenure: "1 yr 3 mos",
      roles: [
        {
          role: "Software Engineer L-1",
          period: "Dec 2025 — Present",
          skills: ["NestJS", "Node.js"],
          points: [
            "Designed and shipped Wenuru studio management platform serving 10+ studios with 20+ feature modules on NestJS, TypeScript, and Sequelize (SQL).",
            "Architected 4-tier RBAC (Super Admin, Studio Owner, Manager, Crew) with JWT auth, guards, and studio-scoped permissions.",
            "Integrated Razorpay with secure webhook handling for order capture, signature verification, and transaction reconciliation.",
            "Built cross-platform push notifications with device token management (iOS/Android) and last-active tracking.",
            "Optimized Sequelize associations and high-traffic queries; enforced DTO validation and guard-level checks across routes.",
          ],
        },
        {
          role: "Software Trainee",
          period: "Jun 2025 — Dec 2025",
          skills: ["HTML5", "CSS", "JavaScript"],
          points: [
            "Built foundational web UI skills (HTML5, CSS) while ramping onto the production Node.js / NestJS stack.",
            "Contributed to internal tools and feature work under mentorship before promotion to Software Engineer L-1.",
          ],
        },
      ],
    },
    {
      company: "SkillStone",
      employmentType: "Semester Training · On-site",
      location: "Chandigarh Engineering College, Landran",
      period: "Jan 2025 — May 2025",
      tenure: "5 mos",
      roles: [
        {
          role: "Semester Training",
          period: "Jan 2025 — May 2025",
          skills: ["MERN Stack"],
          points: [
            "Completed semester training focused on the MERN stack (MongoDB, Express, React, Node.js).",
            "Built and practiced full-stack application flows in an on-site college training program.",
          ],
        },
      ],
    },
    {
      company: "Solitaire Infosys Inc",
      employmentType: "Summer Intern · Full-time · On-site",
      location: "Chandigarh Engineering College",
      period: "Jul 2023",
      tenure: "1 mo",
      roles: [
        {
          role: "Summer Intern",
          period: "Jul 2023",
          skills: ["HTML5", "CSS"],
          points: [
            "Summer internship focused on front-end fundamentals with HTML5 and CSS.",
            "Gained early exposure to professional software delivery in an on-site setting.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "Chandigarh Engineering College",
      degree: "Bachelor of Technology — BTech, Information Technology",
      period: "Jun 2021 — Jun 2025",
      grade: "8.1 CGPA",
      location: "Landran (CGC)",
    },
  ],
  /** Production / featured projects shown first (may not be public GitHub repos) */
  featured: [
    {
      name: "Wenuru — Studio Management Platform",
      description:
        "Full-fledged studio management platform for India's creative marketplace: book verified studios, manage listings, and run operations across 10+ studios with 20+ modules. Backend on NestJS + TypeScript + Sequelize with 4-tier RBAC, Razorpay payments, and push notifications.",
      url: "https://github.com/dheeraj0808",
      liveUrl: "https://staging.wenuru.com/",
      language: "TypeScript",
      stars: 0,
      category: "Production",
      highlights: [
        "NestJS",
        "4-tier RBAC",
        "Razorpay webhooks",
        "Push notifications",
        "10+ studios",
      ],
      pushedAt: "",
    },
  ],
  packages: [
    {
      name: "rupee-india",
      description:
        "₹ formatter with Indian comma system and lakh/crore support — zero dependency.",
      npm: "https://www.npmjs.com/package/rupee-india",
      github: "https://github.com/dheeraj0808/rupee-india",
      version: "1.0.4",
    },
    {
      name: "numindia",
      description:
        "Validate and format Indian mobile phone numbers — lightweight Node library.",
      npm: "https://www.npmjs.com/package/numindia",
      github: "https://github.com/dheeraj0808/numindia",
      version: "1.0.0",
    },
    {
      name: "indian-pincode",
      description:
        "PIN code validation and lookup with state / district data for India.",
      npm: "https://www.npmjs.com/package/indian-pincode",
      github: "https://github.com/dheeraj0808/indian-pincode",
      version: "2.0.3",
    },
    {
      name: "gstin-utils",
      description:
        "GSTIN validation, parsing, and masking utilities — TypeScript, zero dependency.",
      npm: "https://www.npmjs.com/package/gstin-utils",
      github: "https://github.com/dheeraj0808/gstin-utils",
      version: "1.0.1",
    },
  ],
  /** GitHub repos to feature after Wenuru */
  showcase: [
    "Spotify-Backend",
    "UserVault",
    "Vaani",
    "Social-platform",
    "Spotify-frontend",
    "my_daily_buddy_mobile",
    "Bank-Transition-Backend",
    "Dev-Tinder",
  ] as const,
};

export const projectCopy: Record<
  string,
  { blurb: string; highlights: string[]; category: string }
> = {
  "Spotify-Backend": {
    category: "Backend",
    blurb:
      "Production-style music API with JWT/RBAC, cloud MySQL, ImageKit media, and playlist many-to-many relations. Live on Render.",
    highlights: ["RBAC roles", "OTP password reset", "Rate limiting", "Pivot tables"],
  },
  UserVault: {
    category: "Full Stack",
    blurb:
      "Complete auth system: register, login, protected dashboard, password change — Node/Express, MySQL/Sequelize, JWT, bcrypt.",
    highlights: ["JWT + bcrypt", "MVC API", "Protected routes"],
  },
  Vaani: {
    category: "Full Stack",
    blurb:
      "Social learning project with auth, posts, and stories on React + Node + MySQL.",
    highlights: ["Auth", "Posts & stories", "API shape"],
  },
  "Social-platform": {
    category: "Full Stack",
    blurb:
      "Full-stack social experiment: React client, Express API, SQL persistence.",
    highlights: ["React + Express", "SQL"],
  },
  "Spotify-frontend": {
    category: "Frontend",
    blurb: "TypeScript Spotify clone UI paired with the Spotify-Backend API.",
    highlights: ["TypeScript", "Clone UI"],
  },
  my_daily_buddy_mobile: {
    category: "Mobile",
    blurb: "Expo / TypeScript mobile app exploration for productivity workflows.",
    highlights: ["Expo", "TypeScript"],
  },
  "Bank-Transition-Backend": {
    category: "Backend",
    blurb:
      "Node.js backend practice focused on server flow, frameworks, and database interactions.",
    highlights: ["Express flow", "DB basics"],
  },
  "Dev-Tinder": {
    category: "Full Stack",
    blurb: "Exploratory developer-matching app for practicing APIs and feature flow.",
    highlights: ["Matching flow", "Practice project"],
  },
  "rupee-india": {
    category: "Open Source",
    blurb: "Indian Rupee formatter with lakh/crore support — published on NPM as dheeraj08.",
    highlights: ["NPM", "Zero dependency"],
  },
  numindia: {
    category: "Open Source",
    blurb: "Indian mobile number validation and formatting.",
    highlights: ["NPM", "Validation"],
  },
  "indian-pincode": {
    category: "Open Source",
    blurb: "PIN code lookup with state and district data.",
    highlights: ["NPM", "India data"],
  },
  "gstin-utils": {
    category: "Open Source",
    blurb: "GSTIN validation, parsing, and masking — TypeScript.",
    highlights: ["NPM", "TypeScript"],
  },
};
