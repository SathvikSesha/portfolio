// ==========================================================
// Central content file — update text, numbers and links here.
// ==========================================================

export const personal = {
  name: "Sesha Sathvik",
  title: "Backend Engineer | Java Developer | Cloud & AI Enthusiast",
  role: "B.Tech Computer Science Engineering Student",
  university: "VIT-AP University",
  location: "Guntur, Andhra Pradesh, India",
  email: "sathvikseshatk@gmail.com",
  phone: "+91 9347635523",
  linkedin: "https://www.linkedin.com/in/seshasathvik/",
  github: "https://github.com/SathvikSesha",
  leetcode: "https://leetcode.com/u/Sathvik_Sesha/",
  resumeUrl: "/resume/sesha_sathvik.pdf",
};

export const heroRoles = [
  "Backend Engineer",
  "Java Developer",
  "Cloud Engineer",
  "System Design Enthusiast",
  "AI Explorer",
];

export const heroIntro =
  "Computer Science student at VIT-AP University passionate about backend engineering, cloud technologies, AI, scalable architectures and building production-ready software.";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const aboutContent = {
  whoIAm:
    "I'm a Computer Science Engineering student who enjoys understanding how software works beneath the surface — from designing scalable architectures to deploying secure backend systems on the cloud.",
  whatIEnjoy:
    "Java has been my primary language throughout my DSA journey, while Spring Boot, Node.js, Docker and AWS have shaped how I think about real production systems.",
  currentFocus:
    "Right now I'm deepening my System Design fundamentals and building AI-assisted applications alongside enterprise-style backend platforms.",
  focusAreas: [
    "Backend Engineering",
    "System Design",
    "Cloud Computing",
    "Artificial Intelligence",
  ],
  stats: [
    { label: "Projects", value: 7, suffix: "+" },
    { label: "DSA", value: 700, suffix: "+" },
    { label: "CGPA", value: 9.49, suffix: "", decimals: 2 },
  ],
};

export type TechItem = { name: string; category: string };

export const techStack: TechItem[] = [
  { name: "Java", category: "language" },
  { name: "Spring Boot", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "MongoDB", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Docker", category: "devops" },
  { name: "AWS", category: "cloud" },
  { name: "Git", category: "devops" },
  { name: "GitHub", category: "devops" },
  { name: "Linux", category: "devops" },
  { name: "Python", category: "language" },
  { name: "TensorFlow", category: "ai" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "OAuth", category: "security" },
  { name: "JWT", category: "security" },
  { name: "REST API", category: "backend" },
  { name: "Razorpay", category: "backend" },
  { name: "NGINX", category: "devops" },
];

export const skillCategories = [
  {
    category: "Programming",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Node.js / Express", "REST API Design"],
  },
  {
    category: "Frontend",
    skills: ["React / Next.js", "Tailwind CSS"],
  },
  {
    category: "Cloud",
    skills: ["AWS", "Docker", "Deployment & Scaling"],
  },
  {
    category: "AI",
    skills: ["Machine Learning", "TensorFlow"],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB", "Redis"],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  banner: string;
  stack: string[];
  architecture: string;
  features: string[];
  challenges: string;
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "lost-and-found",
    title: "Lost & Found Management System",
    summary:
      "Secure full-stack application for managing lost and found items with role-based authentication and a responsive UI.",
    banner: "/projects/lost-and-found.svg",
    stack: ["React", "Spring Boot", "MySQL"],
    architecture:
      "A React SPA talks to a Spring Boot REST API backed by MySQL, with role-based access control separating admin and reporter workflows.",
    features: [
      "Role-based authentication for admins and reporters",
      "Searchable, filterable item listings",
      "Status tracking from reported to resolved",
      "Responsive UI across devices",
    ],
    challenges:
      "Designing a permission model that stayed simple for users while giving admins full moderation control.",
    github: "https://github.com/SathvikSesha",
    demo: "",
    featured: true,
  },
  {
    slug: "merger-acquisition-platform",
    title: "Merger & Acquisition Platform",
    summary:
      "Enterprise-style platform for managing mergers and acquisitions with scalable backend architecture and secure role-based access.",
    banner: "/projects/merger-acquisition.svg",
    stack: ["Node.js", "React", "MongoDB", "JWT", "AWS"],
    architecture:
      "Layered Node.js services expose REST endpoints consumed by a React dashboard, with JWT securing every workflow transition.",
    features: [
      "Workflow management across deal stages",
      "Secure, role-based document access",
      "Audit-friendly activity history",
      "Scalable service-oriented backend structure",
    ],
    challenges:
      "Modeling multi-stage approval workflows so state transitions stayed consistent and auditable.",
    github: "https://github.com/SathvikSesha",
    demo: "",
    featured: true,
  },
  {
    slug: "spendwise",
    title: "SpendWise",
    summary:
      "Personal finance management application for tracking expenses and improving financial planning.",
    banner: "/projects/spendwise.svg",
    stack: ["React", "Node.js", "MongoDB"],
    architecture:
      "A Node.js/Express API persists transactions to MongoDB, with aggregation pipelines powering spend summaries shown in the React frontend.",
    features: [
      "Expense categorization and monthly summaries",
      "Visual spending breakdowns",
      "Budget goal tracking",
    ],
    challenges:
      "Keeping aggregation queries fast as transaction history grew.",
    github: "https://github.com/SathvikSesha",
    demo: "",
    featured: true,
  },
  {
    slug: "cloud-native-task-platform",
    title: "Cloud Native Task Platform",
    summary:
      "Task management platform built around Docker, AWS deployment, Redis caching, API Gateway, OAuth and secure, cloud-native backend architecture.",
    banner: "/projects/cloud-native-task.svg",
    stack: ["Spring Boot", "Docker", "AWS", "Redis", "OAuth"],
    architecture:
      "Containerized Spring Boot services sit behind an API Gateway, with Redis caching hot task queries and OAuth securing external access. Deployed on AWS with Razorpay handling billing.",
    features: [
      "Docker-based service containerization",
      "Redis caching layer for read-heavy endpoints",
      "OAuth-secured API access",
      "Razorpay payment integration",
      "Cloud deployment on AWS",
    ],
    challenges:
      "Balancing cache freshness with performance, and structuring the API Gateway so services could scale independently.",
    github: "https://github.com/SathvikSesha",
    demo: "",
    featured: true,
  },
  {
    slug: "snapclass",
    title: "SnapClass",
    summary:
      "AI-powered educational platform focused on enhancing classroom learning through intelligent features.",
    banner: "/projects/snapclass.svg",
    stack: ["React", "Node.js", "Python", "AI/ML"],
    architecture:
      "A Node.js API orchestrates requests between the React frontend and a Python-based AI service handling intelligent classroom features.",
    features: [
      "AI-assisted classroom tooling",
      "Real-time content processing",
      "Teacher and student focused views",
    ],
    challenges:
      "Integrating an AI inference service cleanly with the core application without blocking the user experience.",
    github: "https://github.com/SathvikSesha",
    demo: "",
    featured: true,
  },
  {
    slug: "creditwise-loan-system",
    title: "CreditWise Loan System",
    summary:
      "Machine Learning application for predicting loan eligibility and generating credit-related insights.",
    banner: "/projects/creditwise.svg",
    stack: ["Python", "TensorFlow", "Spring Boot", "MySQL"],
    architecture:
      "A trained ML model served through a Python inference layer feeds predictions into a Spring Boot backend, which stores applicant history in MySQL.",
    features: [
      "Loan eligibility prediction model",
      "Credit insight generation",
      "Applicant history tracking",
    ],
    challenges:
      "Translating model outputs into clear, explainable insights for end users.",
    github: "https://github.com/SathvikSesha",
    demo: "",
    featured: true,
  },
  {
    slug: "gmail-analyzer",
    title: "Gmail Analyzer",
    summary:
      "Application that securely integrates with Gmail using OAuth and analyzes emails through meaningful visualizations.",
    banner: "/projects/gmail-analyzer.svg",
    stack: ["Node.js", "OAuth", "React", "Data Visualization"],
    architecture:
      "OAuth-based Gmail API integration streams email metadata into a Node.js backend, which aggregates and serves data to a React visualization dashboard.",
    features: [
      "Secure OAuth-based Gmail integration",
      "Email pattern and volume analysis",
      "Interactive visual dashboards",
    ],
    challenges:
      "Respecting user privacy and API rate limits while still producing meaningful, real-time analytics.",
    github: "https://github.com/SathvikSesha",
    demo: "",
    featured: true,
  },
];

export const codingProfiles = [
  {
    name: "GitHub",
    handle: "SathvikSesha",
    url: personal.github,
    stat: { label: "Open Source Projects", value: 15 },
  },
  {
    name: "LeetCode",
    handle: "Sathvik_Sesha",
    url: personal.leetcode,
    stat: { label: "Problems Solved", value: 700 },
  },
  {
    name: "LinkedIn",
    handle: "seshasathvik",
    url: personal.linkedin,
    stat: { label: "Professional Network", value: 500 },
  },
];

export const journey = [
  {
    year: "2023",
    title: "Programming Foundations",
    points: [
      "Java and Python",
      "Frontend basics",
      "Small projects",
    ],
  },
  {
    year: "2024",
    title: "Data Structures & Full Stack",
    points: [
      "Data Structures & Algorithms",
      "SQL and MERN stack",
      "First full-stack applications",
    ],
  },
  {
    year: "2025",
    title: "Backend Architecture",
    points: [
      "Authentication and JWT",
      "REST API architecture",
      "Spring Boot",
    ],
  },
  {
    year: "2026",
    title: "Cloud & AI",
    points: [
      "Infosys Springboard internship",
      "Docker, AWS, OAuth and Redis",
      "AI applications and System Design",
    ],
  },
];

export const experience = [
  {
    company: "Infosys Springboard",
    role: "Java Full Stack Engineering Intern",
    period: "2025 — 2026",
    achievements: [
      "Built enterprise-style full-stack applications with Java",
      "Worked in structured, industry-style delivery workflows",
      "Used Docker, AWS, Redis, OAuth and API Gateway",
      "Applied secure coding and scalable deployment practices",
    ],
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
    credentialUrl: "/certifications/aws-cloud-practitioner.pdf",
    logo: "AWS",
  },
  {
    title: "Java Full Stack Developer",
    issuer: "Infosys Springboard",
    date: "2025",
    credentialUrl: "/certifications/infosys-java-fse.pdf",
    logo: "Infosys",
  },
  {
    title: "AI Foundation Associate",
    issuer: "Oracle",
    date: "2025",
    credentialUrl: "/certifications/Oracle-1.pdf",
    logo: "Oracle",
  },
];

export const achievements = [
  "Solved 683+ Data Structures and Algorithms problems",
  "Java Full Stack Engineering Intern at Infosys Springboard",
  "Web Development Team Member at Google Developer Groups (GDG), VIT-AP University",
  "AWS Certified Cloud Practitioner",
  "Built multiple full-stack applications using Spring Boot, Node.js and React",
  "Participated in hackathons, technical workshops and collaborative engineering activities",
];

export const leadership = {
  organization: "Google Developer Groups (GDG) — VIT-AP University",
  role: "Web Development Team Member",
  description:
    "Worked with the web development team to contribute to technical initiatives, collaborative web projects and community-driven events while gaining experience in team-based software development.",
};

export const loaderMessages = [
  "Initializing Portfolio...",
  "Loading Components...",
  "Building Interface...",
  "Deploying Experience...",
  "Ready",
];
