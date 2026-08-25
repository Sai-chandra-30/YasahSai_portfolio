"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer (Founding Team)",
    company: "TheCollegeTech",
    location: "Hybrid",
    period: "Aug 2025 – Apr 2026",
    current: false,
    bullets: [
      "Co-founded a 4-person engineering team and shipped 3 production modules — Learning, Campus, and Placement Management — covering attendance & gradebook, timetables, applications/shortlisting, and notifications.",
      "Built a reusable React + TypeScript component library of 25+ tables, forms, and modals with shared validation and typed API clients, cutting repeated UI work across all three modules.",
      "Designed 30+ Python REST endpoints over relational SQL models with filtering, pagination, role-based access, parameterized queries, and schema migrations; authored unit/integration tests and reviewed teammates' PRs.",
    ],
    tags: ["React", "TypeScript", "Python", "SQL", "REST", "Git"],
  },
  {
    title: "Cloud & AI Intern",
    company: "Astrani Technology Solutions",
    location: "Ashburn, VA (Hybrid)",
    period: "May 2025 – Jul 2025",
    current: false,
    bullets: [
      "Built AI-driven business insights tools on AWS Bedrock over S3/DynamoDB datasets; fine-tuned and benchmarked OpenAI, DeepSeek, and Mistral for CX analytics, summarization, and recommendations.",
      "Led data engineering migration from on-prem to AWS RDS (PostgreSQL), achieving nearly 70% infrastructure cost savings; designed ETL workflows and parameterized SQL for downstream reporting.",
      "Optimized the company's multi-agent framework by recommending domain-specific small language models (SLMs) over large-scale LLMs, reducing inference cost and power consumption; supported image classification, text processing, and chatbot work with experiment tracking.",
    ],
    tags: ["AWS Bedrock", "S3", "DynamoDB", "PostgreSQL", "Azure", "AI/ML"],
  },
  {
    title: "Software Engineer Intern",
    company: "Rise Consultancy",
    location: "Remote",
    period: "May 2024 – Aug 2024",
    current: false,
    bullets: [
      "Developed and maintained web applications as part of the engineering team, contributing to front-end and back-end features across the product.",
      "Collaborated with the team to build responsive UI components and integrate REST APIs into client-facing applications.",
      "Gained hands-on experience in the full software development lifecycle — from scoping and design to implementation and testing.",
    ],
    tags: ["JavaScript", "HTML/CSS", "REST APIs", "React", "Git", "SQL", "Postman"],
  },
  {
    title: "Undergraduate Teaching Assistant (Python)",
    company: "George Mason University",
    location: "Fairfax, VA",
    period: "Aug 2023 – Present(till I graduate in Dec 2026)",
    current: true,
    bullets: [
      "Provided one-on-one debugging and conceptual support to 150+ students per semester across labs, projects, and coursework, diagnosing root causes of errors and walking students through fixes until they could apply the concept independently.",
      "Served as a recurring point of contact across 6+ semesters for students stuck on Python fundamentals, project logic, and lab assignments, translating instructor material into explanations tailored to each student's specific gap in understanding.",
    ],
    tags: ["Python", "Teaching", "Debugging"],
  },
  {
    title: "Undergraduate Teaching Assistant (Calculus 2)",
    company: "George Mason University",
    location: "Fairfax, VA",
    period: "Aug 2023 – Dec 2024",
    current: false,
    bullets: [
      "Led office hours and review sessions for Calculus 2, helping students work through integration techniques, sequences, series, and convergence tests.",
      "Broke down complex mathematical concepts into approachable explanations, improving student confidence and exam performance.",
    ],
    tags: ["Calculus 2", "Teaching", "Mathematics"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subtitle">Where I&apos;ve worked</p>
          <h2 className="section-title">Experience</h2>
          <div className="w-16 h-1 bg-accent rounded" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-border md:left-8" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Dot */}
                <div className={`absolute left-[-5px] top-2 w-3 h-3 rounded-full border-2 md:left-[27px] ${
                  exp.current ? "bg-accent border-accent" : "bg-background border-accent"
                }`} />

                <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-gray-50 font-bold text-lg">{exp.title}</h3>
                      <p className="text-accent font-medium text-sm">
                        {exp.company} · <span className="text-gray-500">{exp.location}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 bg-background border border-border px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-xs text-accent bg-accent/10 border border-accent/30 px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-accent mt-1 flex-shrink-0">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}