/**
 * Single source of truth for everything shown on the site.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const profile = {
  name: "Peerawitch Lertsuksombut",
  role: "Software Engineer",
  tagline: "Full-stack engineer turning messy internal workflows into screens people can actually use.",
  location: "Bangkok, Thailand",
  email: "L.peerawitch@hotmail.com",
  phone: "088-111-5949",
  github: "https://github.com/khunbright",
  githubLabel: "github.com/khunbright",
  resumeUrl: "/Peerawitch_Lertsuksombut_CV.pdf",
  // Static so the page stays fully prerenderable (no `new Date()` at render).
  copyrightYear: 2026,
  profileText:
    "Software engineer with 3 years of experience, mostly on back-office and internal systems — inventory, property appraisal, booking approval, and merchant management. I started out as a front-end developer and now work full-stack: Next.js API routes, Prisma and Drizzle, and MySQL alongside the UI. I like turning messy internal workflows into screens people can actually use, and I care about clean, reusable code. I work well with product, design, BA, and QA teams in Agile.",
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "5", label: "Companies & teams" },
    { value: "Full-stack", label: "Next.js · Prisma · MySQL" },
  ],
};

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS", "SQL"] },
  { group: "Frameworks", items: ["React.js", "Next.js (App Router)", "Angular", "Vue.js"] },
  { group: "Styling", items: ["Tailwind CSS", "Bootstrap", "shadcn/ui", "HeroUI"] },
  { group: "Back-end & DB", items: ["Node.js", "Prisma", "Drizzle ORM", "MySQL", "REST API design", "Zod"] },
  { group: "Testing", items: ["Jest", "React Testing Library", "Playwright"] },
  { group: "Tools & DevOps", items: ["Git", "Docker", "Postman", "GitLab CI/CD", "Google Cloud Run", "AWS S3"] },
  {
    group: "Practices",
    items: ["Responsive design", "UI/UX best practices", "Agile", "API integration", "Authentication & RBAC"],
  },
];

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

export type Job = {
  company: string;
  title: string;
  period: string;
  projects: Project[];
  highlights?: string[];
};

export const experience: Job[] = [
  {
    company: "Search Engine Optimization Co., Ltd. (Gother)",
    title: "Software Engineer — Front-End → Full-Stack",
    period: "Jan 2024 – Present",
    projects: [
      {
        name: "Gother CMS",
        summary: "internal back-office platform",
        stack: ["Next.js 14", "TypeScript", "Prisma", "MySQL", "AWS S3"],
        highlights: [
          "Work full-stack on a platform used by merchant partners and internal admin teams, building and debugging API routes alongside the UI.",
          "Work on the merchant e-KYC and e-signature flow, which connects to a third-party identity provider for ID verification, background checks, and signed documents stored on S3.",
          "Found and fixed a data-exposure bug in the eKYC status API, where a missing supplier filter let an admin see another merchant's verification result, and added tests to prevent regression.",
        ],
      },
      {
        name: "Gother.com",
        summary: "hotel booking website (B2C)",
        stack: ["Next.js", "React", "TypeScript"],
        highlights: [
          "Improved hotel search filtering to return faster, more relevant results and reduce friction in the booking flow.",
          "Built a hotel-highlight feature for name searches: the matched hotel appears in a highlighted card next to other hotels in the same area, giving users more options.",
          "Implemented partner-price and auto-coupon display logic across the search, detail, and summary pages, including the rules for when each is shown.",
          "Built a Google Hotel integration that takes inbound traffic from Google Hotel links, decodes the JWT in the URL, and rebuilds the data needed to render a tailored search page.",
          "Maintained the shared Web Core component library used by every product on the platform, so UI changes ship once instead of being duplicated per team.",
          "Built SEO-friendly, responsive pages and added Google Analytics tracking to support marketing campaigns.",
        ],
      },
      {
        name: "B2B Booking App",
        summary: "approval app for executives (iOS & Android)",
        stack: ["React", "TypeScript", "Capacitor"],
        highlights: [
          "Built a cross-platform mobile app shipping both platforms from one codebase.",
          "Built an approval module for hotel, car-rental, and experience bookings created on the B2B website, so approvers can review and act from their phone.",
          "Integrated REST APIs to keep booking and approval data in sync between the web system and the app in real time.",
        ],
      },
    ],
  },
  {
    company: "STPA Enterprise Company Limited",
    title: "Full-Stack Developer (Freelance)",
    period: "Aug 2026 – Present",
    projects: [
      {
        name: "Shop Admin",
        summary: "e-commerce back-office",
        stack: ["Next.js 16", "React 19", "TypeScript", "Drizzle ORM", "MySQL", "NextAuth", "Docker"],
        highlights: [
          "Built the products and categories modules end to end — database queries, server actions, form validation, and UI.",
          "Designed a three-layer permission system that gates the sidebar, each page, and every server action on per-role view/add/edit flags, so a denied action still fails on the server even if the UI is bypassed.",
          "Wrote the Drizzle data-access layer with sortable, paginated queries driven by URL search params, so sorting and paging survive navigation and shared links.",
          "Enforced unique product SKUs in both the form and the database, and handled image uploads with generated filenames to avoid collisions and path traversal.",
        ],
      },
    ],
  },
  {
    company: "Sirisoft Public Company Limited",
    title: "Front-End Developer",
    period: "Jun 2023 – Dec 2023",
    projects: [
      {
        name: "Property Appraisal Back-Office",
        summary: "internal appraisal system for Krungthai Bank",
        stack: ["Angular", "TypeScript", "Tailwind CSS"],
        highlights: [
          "Built the Appraisal Request and Appointment Management modules, covering the flow from a new appraisal request through to scheduling the on-site visit.",
          "Created a reusable, responsive component set that the rest of the team built the remaining screens on.",
          "Worked directly with designers and back-end engineers to settle API contracts before development started.",
          "Tuned performance and fixed cross-browser issues across the application.",
        ],
      },
    ],
  },
  {
    company: "Advanced Wireless Network (AIS)",
    title: "Network Engineer",
    period: "Aug 2020 – Mar 2022",
    projects: [],
    highlights: [
      "Monitored and troubleshot WAN infrastructure for enterprise clients under 24/7 SLA, handling incidents across firewalls, DNS, NAT, and DHCP.",
      "Diagnosed connectivity and hardware faults and coordinated across teams to restore service, then documented each fix so the team could close repeat issues faster.",
    ],
  },
  {
    company: "National Telecom Public Company Limited",
    title: "Web Developer Intern",
    period: "May 2019 – Jul 2019",
    projects: [
      {
        name: "Stock Manager",
        summary: "internal inventory back-office",
        stack: ["Vue.js", "Laravel", "MySQL"],
        highlights: ["Built stock tracking and reporting screens that staff used to monitor inventory levels day to day.", "Designed the MySQL schema and handled data operations through phpMyAdmin.", "Gathered requirements from the IT team and turned them into working features."],
      },
    ],
  },
];

export const education = [
  {
    school: "Silpakorn University, Nakhon Pathom",
    detail: "B.Eng. in Electronics and Computer System Engineering",
    period: "2016 – 2019",
  },
  {
    school: "Taphanhin School, Phichit",
    detail: "Math – Science Program",
    period: "2013 – 2015",
  },
];

export const certificates = ["Microsoft Azure Fundamentals (AZ-900)", "Web Development with React: 15 Projects Workshop — Udemy", "Cisco Certified Network Associate (CCNA), 2022 — Jodoi", "Network & Network Security, 2021 — Jodoi"];

/** Tech keywords that orbit the 3D core in the hero. */
export const orbitTags = ["TypeScript", "Next.js", "React", "Prisma", "Drizzle", "MySQL", "Node.js", "Tailwind", "Docker", "Playwright"];
