"use client";

import { motion } from "framer-motion";

const coursework = [
  "Data Structures & Algorithms",
  "Database Systems",
  "Operating Systems",
  "Machine Learning",
  "Computer Networks",
  "Software Engineering",
  "Web Development",
  "Probability & Statistics",
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-surface/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subtitle">Academic background</p>
          <h2 className="section-title">Education</h2>
          <div className="w-16 h-1 bg-accent rounded" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface border border-border rounded-xl p-8 hover:border-accent/40 transition-colors duration-300"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              {/* GMU logo placeholder */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-surface border border-border flex items-center justify-center text-2xl flex-shrink-0">
                🎓
              </div>
              <div>
                <h3 className="text-gray-50 font-bold text-xl">George Mason University</h3>
                <p className="text-accent font-medium">College of Engineering &amp; Computing</p>
                <p className="text-gray-400 text-sm mt-1">
                  Bachelor of Science in Computer &amp; Information Sciences
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 bg-background border border-border px-3 py-1 rounded-full">
                Aug 2022 – Dec 2026
              </span>
              <p className="text-gray-500 text-xs mt-2">Fairfax, VA</p>
            </div>
          </div>

          <div>
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="text-sm text-gray-300 bg-background border border-border px-3 py-1.5 rounded-lg hover:border-accent/40 hover:text-accent transition-colors duration-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
