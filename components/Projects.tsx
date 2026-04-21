"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "MindEase — AI Task & Wellness Planner",
    description:
      "A chatbot + dashboard app that turns messy natural-language thoughts into a structured daily action plan. Users type freely (e.g. 'finish assignment, email professor, buy groceries') and MindEase extracts tasks, assigns priority labels, breaks big tasks into steps, and updates a live dashboard instantly.",
    tags: ["React", "Node.js", "AI/NLP", "Tailwind CSS", "REST API"],
    highlights: [
      "Natural-language chatbot captures 3+ tasks from one message",
      "Smart priority engine labels tasks high / medium / low",
      "Daily dashboard: today's tasks, urgent items & workload status",
    ],
    icon: "🧠",
    gradient: "from-emerald-500/10 to-teal-500/5",
    github: "https://github.com/Sai-chandra-30/mindease-app",
    live: "https://mindease-app-inky.vercel.app/",
  },
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
    gradient: "from-cyan-500/10 to-blue-500/5",
    github: "",
    live: "",
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
    gradient: "from-violet-500/10 to-purple-500/5",
    github: "",
    live: "",
  },
];

type Project = typeof projects[0];

function TiltCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative bg-surface border border-border rounded-xl p-6 flex flex-col h-full cursor-default"
      >
        {/* Spotlight glow that follows cursor */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(6,182,212,0.08) 0%, transparent 60%)`,
          }}
        />

        {/* Gradient top */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} pointer-events-none`} />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            <motion.span
              className="text-3xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: index * 1.5 }}
            >
              {project.icon}
            </motion.span>
          </div>

          <h3 className="text-gray-50 font-bold text-lg mb-3 group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          <ul className="space-y-1 mb-5">
            {project.highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="text-gray-500 text-xs flex gap-2"
              >
                <span className="text-accent">▹</span>
                {h}
              </motion.li>
            ))}
          </ul>

          {/* Links */}
          {(project.github || project.live) && (
            <div className="flex gap-3 mb-4">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] border border-border px-3 py-1.5 rounded-lg hover:border-accent/50 hover:text-accent transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-xs text-accent border border-accent/30 bg-accent/10 px-3 py-1.5 rounded-lg hover:bg-accent/20 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </motion.a>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(6,182,212,0.2)" }}
                className="text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

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
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-accent rounded"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <TiltCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
