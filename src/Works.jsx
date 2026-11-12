
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from './i18n'
import { projects } from './data'

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
} from 'react-icons/fa'

const filters = ['all', 'completed', 'ongoing']

const badge = {
  completed: 'border-emerald-500/50 text-emerald-400',
  ongoing: 'border-orange-500/50 text-orange-400',
}

const techIcons = {
  react: FaReact,
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
  firebase: FaFire,
  python: FaPython,
  docker: FaDocker,
  github: FaGithub,
  vite: FaCode,
  figma: FaFigma,
}

function Cover({ p }) {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-wine/70 to-ink">
      <span className="px-4 text-center font-serif text-3xl text-cream/80">
        {p.title}
      </span>

      <img
        src={`/projects/${p.id}.jpg`}
        alt=""
        onError={(e) => (e.currentTarget.style.display = 'none')}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}

function Chips({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((x) => (
        <li
          key={x}
          className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs tracking-wider text-cream/75"
        >
          {x}
        </li>
      ))}
    </ul>
  )
}

function TechIcons({ items }) {
  return (
    <div className="mt-7 border-t border-white/10 pt-8">
      <p className="mb-7 text-center text-[11px] uppercase tracking-[0.3em] text-cream/40">
        Technologies used
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {items.map((tech) => {
          const key = tech.toLowerCase().replace(/[\s.-]/g, '')
          const Icon = techIcons[key] || FaCode

          return (
            <div
              key={tech}
              title={tech}
              className="flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-[#f4e9dc] transition-transform duration-300 hover:scale-110"
            >
              <Icon
                size={34}
                className="text-black"
                aria-label={tech}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Works() {
  const { t, lang } = useI18n()
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)

  const list = projects.filter(
    (p) => filter === 'all' || p.status === filter
  )

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(null)

    window.addEventListener('keydown', onKey)

    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section
      id="works"
      className="mx-auto max-w-7xl px-6 py-32 md:px-12"
    >
      {/* Section heading */}
      <div className="mb-16">
        <h2 className="font-serif text-6xl font-light md:text-8xl">
          {t('works.title')}{' '}
          <span className="font-script">
            {t('works.accent')}
          </span>
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
                ? 'border-white/40 bg-white/10 text-cream'
                : 'border-white/15 text-cream/60 hover:text-cream'
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
            <motion.button
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={() => setOpen(p)}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] text-left transition-colors hover:border-wine"
            >
              <Cover p={p} />

              <div className="p-7">
                <span
                  className={`inline-block rounded-lg border px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${badge[p.status]}`}
                >
                  {t(`status.${p.status}`)}
                </span>

                <h3 className="mt-4 font-serif text-2xl">
                  {p.title}
                </h3>

                <p className="mt-3 line-clamp-4 leading-7 text-cream/75">
                  {p.summary[lang]}
                </p>

                {/* Technology icons */}
                <TechIcons items={p.tech} />
              </div>
            </motion.button>
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
                aria-label={t('works.close')}
                className="absolute right-5 top-4 text-3xl leading-none text-cream/80 hover:text-cream"
              >
                ×
              </button>

              <h3 className="pr-8 font-serif text-3xl md:text-4xl">
                {open.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-cream/85">
                {open.summary[lang]}
              </p>

              <div className="mt-8">
                <Chips items={open.tech} />
              </div>

              {open.url && (
                <a
                  href={open.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#6b0f1f] to-[#b8184a] px-7 py-3 font-normal"
                >
                  {t('works.view')}
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
