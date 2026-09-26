export const site = {
  name: "Dheeraj Singh",
  handle: "dheeraj0808",
  npmHandle: "dheeraj08",
  title: "Software Engineer | Node.js · NestJS · TypeScript · React · SQL · AWS",
  company: "Epic Web Service",
  email: "dheerajsingh1939@gmail.com",
  location: "Mohali, Punjab",
  github: "https://github.com/dheeraj0808",
  npm: "https://www.npmjs.com/~dheeraj08",
  hireable: true,
  tagline:
    "Software Engineer who builds and ships production systems end to end in TypeScript — Node.js/NestJS backends, React/Next.js frontends, and AWS (Amazon Web Services) cloud infrastructure.",
  about: [
    "Software Engineer at Epic Web Service (Mohali). I build and ship production systems end to end in TypeScript — Node.js/NestJS backends, Sequelize/MySQL data models, and React/Next.js frontends.",
    "Shipped a 20+ module SaaS platform serving 200+ live studios, a live production spaces marketplace (Wenuru) with 1,000+ users, and 4 open-source npm packages with 1,000+ weekly downloads.",
  ],
  systems: [
    {
      title: "Auth & RBAC",
      body: "4-tier roles, JWT guards, and studio-scoped permissions so every route knows who can act.",
    },
    {
      title: "Payments",
      body: "Razorpay orders with signature-verified webhooks and reconciliation-safe capture flows.",
    },
    {
      title: "Data layer",
      body: "Sequelize associations tuned for high-traffic reads — less N+1, clearer domain boundaries.",
    },
    {
      title: "Cloud & AWS",
      body: "AWS (Amazon Web Services · EC2/Linux), Nginx reverse proxy, PM2 clustering, SSL, and GitHub Actions CI/CD.",
    },
  ],
  skills: {
    "Cloud & AWS": [
      "AWS (Amazon Web Services)",
      "AWS EC2",
      "AWS S3",
      "Linux / Ubuntu",
      "Nginx Reverse Proxy",
      "PM2 Process Manager",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Postman",
    ],
    Backend: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "JWT / OAuth",
      "RBAC",
      "Webhooks",
      "WebSockets",
      "Sequelize ORM",
    ],
    Frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
    Databases: ["MySQL", "MongoDB", "Query optimization"],
    Languages: ["TypeScript", "JavaScript (ES6+)", "SQL", "Java", "C++"],
    OpenSource: ["NPM (dheeraj08)", "MIT packages", "Semantic versioning"],
  },
  experience: [
    {
      company: "Epic Web Service",
      employmentType: "Full-time · On-site",
      location: "Mohali, Punjab",
      period: "Jun 2025 — Present",
      roles: [
        {
          role: "Software Engineer",
          period: "Jun 2025 — Present",
          skills: ["NestJS", "Node.js", "TypeScript", "Sequelize", "MySQL", "AWS"],
          points: [
            "Designed, owned and shipped a full Studio Management Platform end to end — 20+ feature modules serving 200+ live studios — in TypeScript (NestJS backend, Sequelize/MySQL data layer).",
            "Designed and maintained REST APIs, data models and schemas that other modules build on; enforced DTO validation and guard-level checks for correctness and security.",
            "Built a 4-tier role-based, tenant-scoped access control system (Super Admin, Owner, Manager, Crew) with JWT auth and NestJS guards, enforcing row-level permissions on every route.",
            "Optimized SQL queries and ORM associations, cutting response latency on high-traffic endpoints by ~60% under load.",
            "Integrated Razorpay payments with secure webhook handling, signature verification and transaction reconciliation.",
            "Built a cross-platform (iOS/Android) push-notification service with device-token management and last-active targeting.",
            "Deployed services on AWS EC2 (Linux, Nginx, PM2, SSL) and debugged live production issues by tracing logs and reproducing requests to fix root causes.",
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
      grade: "8.10 CGPA",
      location: "Landran (CGC)",
    },
  ],
  /** Production / featured projects shown first (may not be public GitHub repos) */
  featured: [
    {
      name: "Wenuru — Production Space Marketplace",
      description:
        "India's first on-demand marketplace for production spaces across 8+ cities and 20+ space categories. Engineered the production NestJS backend handling 4-tier RBAC, Razorpay webhook reconciliation, conflict-free slot booking, and cross-platform push notifications.",
      url: "https://github.com/dheeraj0808",
      liveUrl: "https://wenuru.com/",
      caseStudyUrl: "/case-study/wenuru",
      language: "TypeScript",
      stars: 0,
      category: "Production",
      highlights: [
        "NestJS",
        "4-Tier RBAC",
        "Razorpay Webhooks",
        "Push Notifications",
        "8+ Cities",
        "20+ Modules",
      ],
      metrics: [
        { label: "Active Cities", value: "8+" },
        { label: "Space Categories", value: "20+" },
        { label: "Hourly Rates Handled", value: "₹399 – ₹30K/hr" },
        { label: "P95 API Latency", value: "<45ms" },
        { label: "Webhook Discrepancy", value: "0%" },
      ],
      architecture: [
        "4-Tier RBAC: Super Admin / Studio Owner / Manager / Crew with scoped guards",
        "Razorpay webhook HMAC signature verification → idempotent capture & reconciliation",
        "Slot concurrency locking to eliminate double-booking race conditions",
        "Sequelize query tuning reducing N+1 overhead by ~65% across search endpoints",
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
  /** GitHub repos to feature after Wenuru — curated for backend signal only */
  showcase: [
    "my_daily_buddy_mobile",
    "Spotify-Backend",
    "Vaidban",
    "Vaani",
  ] as const,
};

export const projectCopy: Record<
  string,
  {
    name?: string;
    blurb: string;
    highlights: string[];
    category: string;
    liveUrl?: string;
    caseStudyUrl?: string;
    url?: string;
  }
> = {
  my_daily_buddy_mobile: {
    name: "My Daily Buddy — Mobile App",
    category: "Mobile",
    blurb:
      "All-in-one routine, habit, health and goal tracking companion for iOS & Android. Built with React Native 0.81, Expo Router, SecureStore OTP auth, 7-day Smart Catch-Up recovery, water/calorie tracking, and Razorpay subscriptions.",
    highlights: [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "Smart Catch-Up",
      "Health & BMI",
      "Razorpay",
    ],
    caseStudyUrl: "/case-study/my-daily-buddy",
    url: "https://github.com/dheeraj0808/my_daily_buddy_mobile",
  },
  "Spotify-Backend": {
    category: "Backend",
    blurb:
      "Production-style music API with JWT/RBAC, cloud MySQL, ImageKit media, and playlist many-to-many relations. Live on Render.",
    highlights: ["RBAC roles", "OTP password reset", "Rate limiting", "Pivot tables"],
  },
  Vaidban: {
    name: "Vaidban – Ayurvedic Appointments",
    category: "Full Stack",
    blurb:
      "Full-stack appointment booking platform for Vaidban Ayurvedic Healthcare (trusted by 5 Lakh+ patients). Features a 4-step wizard for clinic visits and voice consultations, slot scheduling with dynamic wait-time logic, staff admin dashboard, and automated WhatsApp/email notifications.",
    highlights: [
      "Next.js",
      "Node.js",
      "MySQL",
      "WhatsApp API",
      "Admin Panel",
      "Booking Wizard",
    ],
    liveUrl: "https://appointment.vaidban.com/",
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
