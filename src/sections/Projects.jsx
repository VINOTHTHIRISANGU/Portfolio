import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { projects } from "../data/portfolioData";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <GlassCard className="group overflow-hidden">
        {/* Screenshot placeholder */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ink-700 to-ink-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs text-mist-400">Screenshot preview</span>
          </div>
          <div className="absolute inset-0 bg-grad-primary opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink-900/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 rounded-full bg-grad-primary px-4 py-2 text-sm font-medium text-white shadow-glow"
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-mist-100"
            >
              <FiGithub size={14} /> GitHub
            </a>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <h3 className="font-display text-lg font-semibold text-mist-100">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mist-400">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-azure-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
            {project.features.map((f) => (
              <span key={f} className="text-xs text-mist-400">
                {f}
                <span className="mx-2 text-white/10 last:hidden">·</span>
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Projects"
          title="Products built end to end"
          description="A selection of enterprise systems I've designed, built, and shipped to production."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
