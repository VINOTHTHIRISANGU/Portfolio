import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Experience"
          title="Where I've put in the work"
          description="Hands-on experience across the full lifecycle of enterprise web applications."
        />

        {experience.map((exp) => (
          <GlassCard key={exp.role} className="p-8 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-mist-100">{exp.role}</h3>
                <p className="mt-1 font-mono text-sm text-azure-300">{exp.company}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-mist-300">
                {exp.period}
              </span>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {exp.points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-grad-primary/20 text-azure-300">
                    <FiCheck size={12} />
                  </span>
                  <span className="text-sm text-mist-300">{point}</span>
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
