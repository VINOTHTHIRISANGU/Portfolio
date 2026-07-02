import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { profile } from "../data/portfolioData";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Config not set up yet — surface a clear message instead of failing silently.
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  const contactLinks = [
    { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: FiLinkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: FiGithub, label: "GitHub", href: profile.github },
  ];

  return (
    <section id="contact" className="section-pad bg-ink-800/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Contact"
          title="Let's build something together"
          description="Have a project in mind or an opening on your team? I'd love to hear about it."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-grad-primary/15 text-azure-300">
                  <c.icon size={17} />
                </span>
                <span className="text-sm text-mist-200">{c.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-7 sm:p-9">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-xs text-mist-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-mist-100 outline-none placeholder:text-mist-400/60 focus:border-azure-400/60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs text-mist-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-mist-100 outline-none placeholder:text-mist-400/60 focus:border-azure-400/60"
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="subject" className="font-mono text-xs text-mist-400">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-mist-100 outline-none placeholder:text-mist-400/60 focus:border-azure-400/60"
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="font-mono text-xs text-mist-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your project..."
                    className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-mist-100 outline-none placeholder:text-mist-400/60 focus:border-azure-400/60"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    <FiSend size={16} />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>

                  {status === "success" && (
                    <p className="mt-3 text-sm text-emerald-400">
                      Message sent — thanks for reaching out! I'll reply soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-3 text-sm text-rose-400">
                      Couldn't send that. Add your EmailJS keys to .env, or email me directly at{" "}
                      {profile.email}.
                    </p>
                  )}
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
