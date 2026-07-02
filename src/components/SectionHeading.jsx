import { motion } from "framer-motion";

/**
 * Section heading using a JSX-tag style eyebrow (e.g. <About />) —
 * the site's signature motif, tying every section back to the
 * developer's own vocabulary instead of generic numbering.
 */
export default function SectionHeading({ tag, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 ${align === "center" ? "text-center mx-auto" : ""} max-w-2xl`}
    >
      <span className="eyebrow">
        {"<"}
        {tag}
        {" />"}
      </span>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl font-semibold text-mist-100">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-mist-400 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
