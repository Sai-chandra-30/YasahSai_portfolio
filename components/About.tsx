"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const highlights = [
  { label: "Based in", value: "Fairfax, VA" },
  { label: "Studying at", value: "George Mason University" },
  { label: "Graduating", value: "December 2026" },
  { label: "Open to", value: "Internships & Full-Time" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-accent rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 rotate-6" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-surface to-background border border-border flex flex-col items-center justify-center gap-3">
                {/* Initials */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/40 flex items-center justify-center">
                  <span className="text-3xl font-bold text-accent tracking-tight">YS</span>
                </div>
                <div className="text-center">
                  <p className="text-gray-200 font-semibold text-sm">Yasah Sai Chandra</p>
                  <p className="text-accent text-xs mt-0.5">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m a Computer Science student at George Mason University with a passion for building
              full-stack web applications and AI-powered tools. From designing REST APIs to training
              computer-vision models, I love turning complex problems into clean, working software.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I&apos;ve worked as a Full Stack Developer at TheCollegeTech, interned with AI/Cloud at Astrani
              Technology Solutions, and taught Python to 150+ students as a Teaching Assistant at GMU.
              I thrive at the intersection of product, engineering, and AI.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{h.label}</p>
                  <p className="text-gray-100 font-semibold text-sm">{h.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
