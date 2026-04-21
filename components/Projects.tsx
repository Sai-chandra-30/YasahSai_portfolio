"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "BRIK-E: Smart-Building Hazard Detection",
    description:
      "Trained and deployed custom computer-vision models to detect spills, trash, and lost items on existing CCTV feeds. Added a two-stage verifier (detector → classifier) to reduce false positives, calibrated cameras to floor plans via homography, and published real-world (x, y) targets over MQTT for robot dispatch and live floor-map tracking.",
    tags: ["Python", "PyTorch", "YOLOv8", "SegFormer", "OpenCV", "FastAPI", "MQTT"],
    highlights: [
      "Two-stage verifier reduces false positives",
      "Real-world coordinate mapping via homography",
      "MQTT event streaming for robot dispatch",
    ],
    icon: "🏢",
  },
  {
    name: "Automated Meeting Summarizer",
    description:
      "Live transcription with Whisper and automatic extraction of key points, decisions, and action items from meeting audio. Integrated with Trello/Asana for task creation and Google Calendar for automated reminders and deadlines.",
    tags: ["LangChain", "Whisper", "GPT-4", "LLaMA-2", "Google Calendar API", "Trello API"],
    highlights: [
      "Real-time transcription with Whisper",
      "Automatic action item extraction via LLM",
      "Trello/Asana & Google Calendar integration",
    ],
    icon: "🎙️",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subtitle">What I&apos;ve built</p>
          <h2 className="section-title">Projects</h2>
          <div className="w-16 h-1 bg-accent rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-surface border border-border rounded-xl p-6 flex flex-col hover:border-accent/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{project.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="text-gray-50 font-bold text-lg mb-3 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-gray-500 text-xs flex gap-2">
                    <span className="text-accent">▹</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded"
                  >
                    {tag}
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
