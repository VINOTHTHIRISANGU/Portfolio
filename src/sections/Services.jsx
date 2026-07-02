import { motion } from "framer-motion";
import {
  FiLayers,
  FiCode,
  FiDatabase,
  FiCpu,
  FiServer,
  FiBox,
} from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { services } from "../data/portfolioData";

const icons = [FiLayers, FiCode, FiDatabase, FiCpu, FiServer, FiBox];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-ink-800/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Services"
          title="How I can help"
          description="From database design to production-ready interfaces — the full stack, handled."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlassCard className="h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-grad-primary/15 text-azure-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display mt-5 text-base font-semibold text-mist-100">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">{s.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
