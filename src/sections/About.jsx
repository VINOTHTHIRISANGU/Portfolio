import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import useCountUp from "../hooks/useCountUp";
import { profile, stats } from "../data/portfolioData";

function Stat({ value, suffix, label }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-semibold text-mist-100 sm:text-4xl">
        {count}
        <span className="grad-text">{suffix}</span>
      </p>
      <p className="mt-1 font-mono text-xs text-mist-400">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="About"
          title="A developer who ships, not just codes"
          description="A quick look at who I am and what I bring to a team."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-mist-300">{profile.about}</p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>
          </motion.div>

          <GlassCard className="p-8">
            <p className="eyebrow">Quick facts</p>
            <ul className="mt-4 space-y-4">
              {[
                ["Role", profile.title],
                ["Experience", profile.experience],
                ["Location", profile.location],
                ["Focus", "PHP · Laravel · React.js"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0">
                  <span className="font-mono text-sm text-mist-400">{k}</span>
                  <span className="text-sm text-mist-100">{v}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
