import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiMapPin } from "react-icons/fi";
import useTypewriter from "../hooks/useTypewriter";
import ParticleField from "../components/ParticleField";
import { profile } from "../data/portfolioData";
import photo from "../assets/images/myimage.png";

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grad-radial-hero pt-28"
    >
      <ParticleField />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-24">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <FiMapPin size={12} /> Available for work · {profile.location}
          </span>

          <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.1] text-mist-100 sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="grad-text">{profile.name}</span>
          </h1>

          <div className="mt-4 h-9 font-mono text-lg text-azure-300 sm:text-xl">
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-azure-300 align-middle" />
          </div>

          <p className="mt-6 max-w-lg text-mist-400 leading-relaxed">
            {profile.experience} experience building scalable web applications with{" "}
            <span className="text-mist-200">PHP, Codeigniter, Laravel, Javascript, Jquery, React.js, Node.js ,Express, </span> and{" "}
            <span className="text-mist-200">MySQL, Postgresql, Github, Gitlab</span>.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={profile.resumeUrl} download className="btn-primary">
              <FiDownload size={16} /> Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me <FiArrowRight size={16} />
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              { label: "Experience", value: profile.experience },
              { label: "Based in", value: profile.location },
              { label: "Focus", value: "Full Stack" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-lg font-semibold text-mist-100">{item.value}</p>
                <p className="font-mono text-xs text-mist-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-grad-primary opacity-20 blur-3xl" />
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] p-2"
          >
            <div className="h-full w-full overflow-hidden rounded-[1.6rem]">
              <img
                src={photo}
                alt="Vinoth - Full Stack Developer"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* <div className="glass absolute -bottom-5 -left-5 rounded-xl px-4 py-3">
              <p className="font-mono text-[10px] text-mist-400">
                Currently Building
              </p>
              <p className="text-sm font-semibold text-mist-100">
                Full Stack Products
              </p>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
