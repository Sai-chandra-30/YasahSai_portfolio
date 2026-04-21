"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C/C++", "SQL"],
  },
  {
    category: "Web & Frameworks",
    icon: "🌐",
    skills: ["React", "Next.js", "Node.js", "REST APIs", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Cloud & Databases",
    icon: "☁️",
    skills: ["AWS Bedrock", "AWS S3", "DynamoDB", "AWS RDS", "PostgreSQL", "MySQL"],
  },
  {
    category: "AI & ML",
    icon: "🤖",
    skills: ["PyTorch", "YOLOv8", "OpenCV", "LangChain", "Whisper", "GPT-4"],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Azure", "FastAPI", "Linux/Unix", "MQTT"],
  },
  {
    category: "Soft Skills",
    icon: "🤝",
    skills: ["Teamwork", "Communication", "Problem Solving", "Time Management", "Project Management", "Proactive Learner"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 18, delay: i * 0.05 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title">Skills</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-accent rounded"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-30px" }}
              custom={i}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: "rgba(6,182,212,0.4)" }}
              className="bg-surface border border-border rounded-xl p-5 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.span
                  className="text-xl"
                  whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  {group.icon}
                </motion.span>
                <h3 className="text-gray-50 font-semibold text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={j}
                    whileHover={{
                      scale: 1.12,
                      color: "#06b6d4",
                      borderColor: "rgba(6,182,212,0.5)",
                      backgroundColor: "rgba(6,182,212,0.08)",
                    }}
                    className="text-xs text-gray-300 bg-background border border-border px-3 py-1 rounded-full cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
