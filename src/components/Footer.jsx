import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile, socials } from "../data/portfolioData";

const iconMap = { github: FiGithub, linkedin: FiLinkedin, mail: FiMail };

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#home" className="font-display text-lg font-semibold text-mist-100">
          <span className="text-azure-300">{"<"}</span>
          Vinoth<span className="grad-text">.T</span>
          <span className="text-azure-300">{" />"}</span>
        </a>

        <div className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.name}
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-mist-300 transition-colors hover:border-white/25 hover:text-white"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <p className="font-mono text-xs text-mist-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
