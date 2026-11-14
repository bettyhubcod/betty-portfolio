import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "./i18n";
import { projects } from "./data";
import ProjectDetails from "./ProjectDetails";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJava,
  FaDatabase,
  FaPython,
  FaDocker,
  FaGithub,
  FaCode,
  FaMobileAlt,
  FaFire,
  FaFigma,
} from "react-icons/fa";

const filters = ["all", "completed", "ongoing"];

const badge = {
  completed: "border-emerald-500/50 text-emerald-400",
  ongoing: "border-orange-500/50 text-orange-400",
};

// Keys are tech names in lowercase with everything except letters/digits removed,
// e.g. "Next.js" -> "nextjs", "React (PWA)" -> "reactpwa". Unknown techs show </>.
const techIcons = {
  react: FaReact,
  reactpwa: FaReact,
  reactrouter: FaReact,
  next: FaReact,
  nextjs: FaReact,
  javascript: FaJs,
  typescript: FaJs,
  html: FaHtml5,
  html5: FaHtml5,
  css: FaCss3Alt,
  css3: FaCss3Alt,
  tailwind: FaCss3Alt,
  tailwindcss: FaCss3Alt,
  php: FaPhp,
  laravel: FaPhp,
  java: FaJava,
  springboot: FaJava,
  flutter: FaMobileAlt,
  dart: FaMobileAlt,
  mysql: FaDatabase,
  postgresql: FaDatabase,
  jpahibernate: FaDatabase,
  firebase: FaFire,
  python: FaPython,
  docker: FaDocker,
  github: FaGithub,
  vite: FaCode,
  figma: FaFigma,
};

function Cover({ p }) {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-wine/70 to-ink">
      <span className="px-4 text-center font-serif text-3xl text-cream/80">
        {p.title}
      </span>

      <img
        src={p.image ?? `/projects/${p.id}.jpg`}
        alt=""
        onError={(e) => (e.currentTarget.style.display = "none")}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

function TechIcons({ items, label }) {
  return (
    <div className="border-t border-white/10 pt-8">
      <p className="mb-7 text-center text-[11px] uppercase tracking-[0.3em] text-cream/40">
        {label}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {items.map((tech) => {
          const key = tech.toLowerCase().replace(/[^a-z0-9]/g, "");
          const Icon = techIcons[key] || FaCode;

          return (
            <div
              key={tech}
              title={tech}
              className="flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-[#f4e9dc] transition-transform duration-300 hover:scale-110"
            >
              <Icon size={34} className="text-black" aria-label={tech} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Works() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);

  const list = projects.filter((p) => filter === "all" || p.status === filter);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="works" className="mx-auto max-w-7xl px-6 py-32 md:px-12">
      {/* Section heading */}
      <div className="mb-16">
        <h2 className="font-serif text-6xl font-light md:text-8xl">
          {t("works.title")}{" "}
          <span className="font-script">{t("works.accent")}</span>
        </h2>

        <div className="mt-4 h-px bg-gradient-to-r from-white/25 via-white/10 to-transparent" />
      </div>

      {/* Filters */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-7 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors ${
              filter === f
                ? "border-white/40 bg-white/10 text-cream"
                : "border-white/15 text-cream/60 hover:text-cream"
            }`}
          >
            {t(`filter.${f}`)}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={() => setOpen(p)}
              className="flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition-colors hover:border-wine"
            >
              {/* Cover + text (button = keyboard accessible, click bubbles to the card) */}
              <button type="button" className="flex-1 text-left">
                <Cover p={p} />

                <div className="px-7 pb-2 pt-7">
                  <span
                    className={`inline-block rounded-lg border px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${badge[p.status]}`}
                  >
                    {t(`status.${p.status}`)}
                  </span>

                  <h3 className="mt-4 font-serif text-2xl">{p.title}</h3>

                  <p className="mt-3 line-clamp-4 leading-7 text-cream/75">
                    {p.summary[lang]}
                  </p>
                </div>
              </button>

              {/* View project button: only when the project has a url */}
              {p.url && (
                <div className="px-7 pt-5">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="block rounded-xl bg-gradient-to-r from-[#5e0a15] to-[#c2204f] px-6 py-3 text-center text-xs uppercase tracking-[0.2em] text-cream transition hover:brightness-110"
                  >
                    {t("works.view")}
                  </a>
                </div>
              )}

              {/* Technology icons */}
              <div className="px-7 pb-7 pt-6">
                <TechIcons items={p.tech} label={t("works.tech")} />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-wine bg-ink/95 p-8 md:p-10"
            >
              <button
                onClick={() => setOpen(null)}
                aria-label={t("works.close")}
                className="absolute right-5 top-4 text-3xl leading-none text-cream/80 hover:text-cream"
              >
                ×
              </button>

              <h3 className="pr-8 font-serif text-3xl md:text-4xl">
                {open.title}
              </h3>
              <ProjectDetails project={open} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}