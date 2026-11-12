import { motion } from 'framer-motion'
import { useI18n } from './i18n'
import { experience } from './data'

export default function Experience() {
  const { t, lang } = useI18n()
  return (
    <section id="experience" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 md:text-right">
          <h2 className="font-serif text-6xl font-light md:text-8xl">
            {t('exp.title')} <span className="font-script">{t('exp.accent')}</span>
          </h2>
          <div className="mt-4 h-px bg-gradient-to-l from-white/25 via-white/10 to-transparent" />
        </div>

        <ol className="mx-auto max-w-2xl md:ml-[30%]">
          {experience.map((e, i) => (
            <motion.li
              key={e.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pb-16 pl-12 before:absolute before:bottom-0 before:left-[7px] before:top-6 before:w-px before:bg-wine last:pb-0 last:before:hidden"
            >
              <span
                className={`absolute left-0 top-2 size-4 rounded-full border border-wine ${
                  e.status === 'current' ? 'bg-[#8b1a22] shadow-[0_0_20px_6px_rgba(139,26,34,0.55)]' : ''
                }`}
              />
              <span className="inline-block rounded-lg border border-white/25 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                {t(`status.${e.status}`)}
              </span>
              <h3 className="mt-4 text-2xl font-normal tracking-wide">{e.role[lang]}</h3>
              <p className="mt-1 font-serif text-xl italic text-cream/70">{e.org[lang]}</p>
              <p className="mt-3 flex flex-wrap gap-x-6 text-sm text-cream/55">
                <span>{e.place}</span>
                <span>{e.mode[lang]}</span>
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {e.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-white/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-cream/70">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
