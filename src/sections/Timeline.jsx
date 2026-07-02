import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { timeline } from "../data/portfolioData";

export default function Timeline() {
  return (
    <section id="timeline" className="section-pad bg-ink-800/40">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          tag="Timeline"
          title="The path so far"
          description="Years are the only numbering that matters here — each one marks a real shift in what I was building."
        />

        <div className="relative border-l border-white/10 pl-8 sm:pl-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[42px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-grad-primary shadow-glow ring-4 ring-ink-900 sm:-left-[50px]" />
              <p className="font-mono text-sm text-azure-300">{item.year}</p>
              <h3 className="font-display mt-1 text-lg font-semibold text-mist-100">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
