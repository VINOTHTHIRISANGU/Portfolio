import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { testimonials } from "../data/portfolioData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Testimonials"
          title="What people say"
          description="Feedback from the people I've worked closely with."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="h-full p-7">
                <FiMessageSquare className="text-violet-400" size={20} />
                <p className="mt-4 text-sm leading-relaxed text-mist-300">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-grad-primary text-sm font-semibold text-white">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-mist-100">{t.name}</p>
                    <p className="font-mono text-xs text-mist-400">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
