"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer",
    company: "TheCollegeTech",
    location: "Remote",
    period: "Aug 2025 – Present",
    current: true,
    bullets: [
      "Co-building an EdTech platform with a small team — shipping features across Learning Management, Campus Management, and Placement Management systems (attendance & gradebook, timetables, placement applications, notifications).",
      "Architected a reusable React + TypeScript component library (tables/forms/modals) with form validation and API clients; improved state management using idiomatic hooks and patterns.",
      "Designed and maintained Python REST endpoints with SQL data models; added filtering, pagination, and role-based access control with parameterized queries and migrations.",
      "Established QA practices — unit/integration tests, regression checklists, and PR reviews — to keep releases stable as the product grows.",
    ],
    tags: ["React", "TypeScript", "Python", "SQL", "REST", "Git"],
  },
  {
    title: "Cloud & AI Intern",
    company: "Astrani Technology Solutions",
    location: "Hybrid/Remote",
    period: "May 2025 – Jul 2025",
    current: false,
    bullets: [
      "Built internal AI tools on AWS Bedrock using company datasets in S3/DynamoDB; evaluated OpenAI, DeepSeek, and Mistral for CX insights, summarization, and recommendations.",
      "Recommended a domain-based small-language-model (SLM) strategy to reduce inference cost vs. large LLMs; led on-prem → AWS RDS (PostgreSQL) migration achieving ~70% infra savings.",
      "Supported image classification, text processing, and chatbot enhancements with experiment tracking; completed Microsoft Azure Fundamentals and Analytics Vidhya AI/ML bootcamps.",
    ],
    tags: ["AWS Bedrock", "S3", "DynamoDB", "PostgreSQL", "Azure", "AI/ML"],
  },
  {
    title: "Undergraduate Teaching Assistant (Python)",
    company: "George Mason University",
    location: "Fairfax, VA",
    period: "Aug 2023 – Dec 2024",
    current: false,
    bullets: [
      "Guided 150+ students during labs and office hours as the main contact for Python fundamentals, debugging, and project best practices.",
      "Delivered explanations and resources that improved comprehension and helped students apply course concepts to projects.",
    ],
    tags: ["Python", "Teaching", "Debugging"],
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
