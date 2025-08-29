"use client";
import { motion } from "framer-motion";

export default function ProjectsIntro({
  blurb,
  stats,
}: {
  blurb: string;
  stats: { label: string; value: number }[];
}) {
  return (
    <section className="max-w-4xl mx-auto text-center mb-12">
      <motion.h1
        className="text-4xl font-extrabold tracking-tight mb-4"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Engineering Portfolio
      </motion.h1>

      <p className="text-muted-foreground mb-10">{blurb}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.label} className="rounded-2xl bg-card p-6 border">
            <div className="text-3xl font-bold">{s.value}+</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
