import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { skills } from "../data/portfolioData";

const categories = Object.keys(skills);

function SkillBar({ name, level, index }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-mist-200">{name}</span>
        <span className="font-mono text-xs text-mist-400">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: index * 0.06, ease: "easeOut" }}
          className="h-full rounded-full bg-grad-primary"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="section-pad bg-ink-800/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Skills"
          title="Tools I reach for daily"
          description="A blend of frontend, backend, database, and tooling skills refined across production projects."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 font-mono text-sm transition-colors ${
                active === cat
                  ? "border-transparent bg-grad-primary text-white"
                  : "border-white/10 bg-white/[0.02] text-mist-400 hover:text-mist-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <GlassCard className="p-8 sm:p-10">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2"
          >
            {skills[active].map((s, i) => (
              <SkillBar key={s.name} {...s} index={i} />
            ))}
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}
