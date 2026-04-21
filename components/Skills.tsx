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
          <div className="w-16 h-1 bg-accent rounded" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-surface border border-border rounded-xl p-5 hover:border-accent/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{group.icon}</span>
                <h3 className="text-gray-50 font-semibold text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-gray-300 bg-background border border-border px-3 py-1 rounded-full hover:border-accent/50 hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
