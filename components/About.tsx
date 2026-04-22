"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const highlights = [
  { label: "Based in", value: "Fairfax, VA" },
  { label: "Studying at", value: "George Mason University" },
  { label: "Graduating", value: "December 2026" },
  { label: "Open to", value: "Internships, Full-Time & Research" },
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
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-accent rounded"
          />
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
            <div className="relative w-72 h-72">
              {/* Spinning decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20"
              />
              {/* Accent glow */}
              <div className="absolute inset-2 rounded-full shadow-[0_0_40px_rgba(6,182,212,0.12)]" />
              {/* Photo */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.03 }}
                className="absolute inset-3 rounded-full overflow-hidden border-2 border-accent/40"
              >
                <Image
                  src="/SC_headshot.png"
                  alt="Yasah Sai Chandra Borusu"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
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
              I&apos;m a Computer Science student at George Mason University who loves building things that
              actually work — from clean REST APIs and full-stack web apps to AI-powered tools, LLM integrations,
              and computer-vision pipelines. I care about the craft: readable code, thoughtful design, and software
              that solves real problems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-2">
              I&apos;ve shipped features as a Full Stack Developer at TheCollegeTech, built internal AI tools
              on AWS Bedrock during my internship at Astrani Technology Solutions, and helped 150+ students
              debug and grow as a Python TA at GMU. I thrive where product thinking meets solid engineering.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I&apos;m always open to internships, full-time roles, research collaborations, or interesting
              side projects — if you&apos;re building something meaningful, let&apos;s talk.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.03, borderColor: "rgba(6,182,212,0.4)" }}
                  className="bg-surface border border-border rounded-lg p-4 cursor-default"
                >
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{h.label}</p>
                  <p className="text-gray-100 font-semibold text-sm">{h.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
